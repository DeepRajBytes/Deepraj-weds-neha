/**
 * Procedural Indian Classical Ambient Synthesizer
 * Generates meditative Tanpura drone (Sa-Pa-Sa) and gentle Shehnai/Bansuri notes in Raga Yaman / Bilawal
 * Works on any browser without requiring external audio files, with graceful volume control.
 */

class WeddingAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private isMuted = false;
  private currentVolume = 0.45;
  private stepInterval: number | null = null;

  private init() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch {
      // AudioContext not allowed in iframe environment
      this.ctx = null;
      this.masterGain = null;
    }
  }

  public start() {
    if (this.isPlaying) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    this.isPlaying = true;

    // 1. Tanpura Drone Fundamentals (C# / D = ~146.8 Hz, Pa = ~220 Hz, Sa high = ~293.6 Hz)
    const baseFreq = 146.83; // D3
    const droneFreqs = [baseFreq, baseFreq * 1.5, baseFreq * 2]; // Sa, Pa, high Sa

    droneFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx === 1 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.8, this.ctx.currentTime);

      // Subtle LFO for natural tanpura shimmer
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.18 + idx * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.2, this.ctx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      gain.gain.setValueAtTime(0.06 / (idx + 1), this.ctx.currentTime);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
    });

    // 2. Gentle Shehnai / Santoor melodic arpeggios in Raga Yaman (Sa, Re, Ga, Ma-tivra, Pa, Dha, Ni, Sa)
    // Scale ratios from base D4 (293.66 Hz):
    const root = 293.66;
    const ragaNotes = [
      root,             // Sa
      root * (9 / 8),   // Re (330.3 Hz)
      root * (5 / 4),   // Ga (367 Hz)
      root * (45 / 32), // Ma tivra (412.9 Hz)
      root * (3 / 2),   // Pa (440.5 Hz)
      root * (5 / 3),   // Dha (489.4 Hz)
      root * (15 / 8),  // Ni (550.6 Hz)
      root * 2          // high Sa (587.3 Hz)
    ];

    let noteIdx = 0;
    const playNextMelodyNote = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Shehnai resonance filter
      filter.type = 'bandpass';
      filter.Q.setValueAtTime(4.5, this.ctx.currentTime);

      const targetFreq = ragaNotes[noteIdx % ragaNotes.length];
      filter.frequency.setValueAtTime(targetFreq * 2, this.ctx.currentTime);

      osc.type = 'sawtooth';
      // Portamento (meend) typical in Indian classical
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(targetFreq * 0.98, now);
      osc.frequency.exponentialRampToValueAtTime(targetFreq, now + 0.35);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.9);

      // Next melodic note choice (gentle step or glide)
      const stepChoices = [1, 2, -1, 1, 3, -2];
      const step = stepChoices[Math.floor(Math.random() * stepChoices.length)];
      noteIdx = Math.max(0, Math.min(ragaNotes.length - 1, noteIdx + step));
    };

    // Schedule gentle melodic notes every ~1.8 to 3.2 seconds
    this.stepInterval = window.setInterval(playNextMelodyNote, 2400);
  }

  public stop() {
    this.isPlaying = false;
    if (this.stepInterval) {
      clearInterval(this.stepInterval);
      this.stepInterval = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.4);
      setTimeout(() => {
        if (this.ctx && this.ctx.state !== 'closed') {
          this.ctx.suspend();
        }
      }, 500);
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      const target = this.isMuted ? 0 : this.currentVolume;
      this.masterGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.1);
    }
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (!this.isMuted && this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.currentVolume, this.ctx.currentTime, 0.1);
    }
  }

  public getPlayingState() {
    return this.isPlaying && !this.isMuted;
  }
}

export const weddingAudio = new WeddingAudioEngine();
