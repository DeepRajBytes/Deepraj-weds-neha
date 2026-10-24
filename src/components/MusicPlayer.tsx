import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynthesizer';
import { weddingData } from '../data/wedding';

interface MusicPlayerProps {
  autoStartRequested?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStartRequested = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioSource, setAudioSource] = useState<'file' | 'synth'>('synth');
  const [hasFileAudio, setHasFileAudio] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Check if custom audio file exists
  useEffect(() => {
    try {
      if (typeof window === 'undefined' || typeof Audio === 'undefined') return;

      const audio = new Audio();
      audio.src = weddingData.audioPath;
      audio.preload = 'metadata';

      const handleCanPlay = () => {
        setHasFileAudio(true);
        setAudioSource('file');
      };

      const handleError = () => {
        // Custom MP3 not present; smoothly fallback to procedural Indian classical synthesizer
        setHasFileAudio(false);
        setAudioSource('synth');
      };

      audio.addEventListener('canplaythrough', handleCanPlay);
      audio.addEventListener('error', handleError);

      audioRef.current = audio;

      return () => {
        try {
          audio.removeEventListener('canplaythrough', handleCanPlay);
          audio.removeEventListener('error', handleError);
          audio.pause();
        } catch {
          // ignore
        }
      };
    } catch {
      // Audio element not permitted in environment
      setHasFileAudio(false);
      setAudioSource('synth');
    }
  }, []);

  // When parent indicates user has accepted invitation, trigger playback
  useEffect(() => {
    if (autoStartRequested && !isPlaying) {
      startPlayback();
    }
  }, [autoStartRequested]);

  const startPlayback = () => {
    if (hasFileAudio && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If file playback blocked, fallback to Web Audio
          weddingAudio.start();
          setIsPlaying(true);
          setAudioSource('synth');
        });
    } else {
      weddingAudio.start();
      setIsPlaying(true);
    }
  };

  const stopPlayback = () => {
    if (hasFileAudio && audioRef.current) {
      audioRef.current.pause();
    }
    weddingAudio.stop();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const toggleMute = () => {
    if (hasFileAudio && audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    } else {
      const muted = weddingAudio.toggleMute();
      setIsMuted(muted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* Expanded controls popup on hover/click */}
      {showControls && (
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#200308]/90 border border-amber-500/40 backdrop-blur-md shadow-xl text-xs text-amber-200 font-hindi animate-in fade-in">
          <span>{audioSource === 'file' ? 'विवाह धुन' : 'शहनाई / तानपुरा'}</span>
          <button
            onClick={toggleMute}
            className="p-1 hover:text-amber-100 text-amber-300 transition-colors"
            title={isMuted ? 'अनम्यूट करें' : 'म्यूट करें'}
            aria-label={isMuted ? 'अनम्यूट करें' : 'म्यूट करें'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}

      {/* Main Music Floating Trigger Button */}
      <button
        onClick={togglePlay}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        className="relative group p-2.5 sm:p-3 rounded-full bg-gradient-to-tr from-[#3D0610] to-[#1E0207] border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.35)] text-amber-300 hover:text-amber-100 hover:border-amber-300 cursor-pointer transition-all duration-300 flex items-center justify-center"
        title={isPlaying ? 'संगीत रोकें' : 'विवाह संगीत सुनें'}
        aria-label={isPlaying ? 'संगीत रोकें' : 'विवाह संगीत सुनें'}
      >
        {isPlaying && !isMuted && (
          <div className="absolute -inset-1 rounded-full border border-amber-400/40 animate-ping opacity-75" />
        )}

        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-center gap-0.5 h-4 w-4 justify-center">
              <span className="w-1 bg-amber-300 h-full animate-pulse" />
              <span className="w-1 bg-amber-400 h-2/3 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span className="w-1 bg-amber-200 h-3/4 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          ) : (
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 group-hover:scale-110 transition-transform" />
          )}
        </div>
      </button>
    </div>
  );
};
