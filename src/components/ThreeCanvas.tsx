import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  interactive?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number | null = null;
    let goldMaterial: THREE.MeshStandardMaterial | null = null;
    let goldWireMaterial: THREE.MeshStandardMaterial | null = null;
    let diyaBrassMat: THREE.MeshStandardMaterial | null = null;
    let oilMat: THREE.MeshStandardMaterial | null = null;
    let flameMat: THREE.MeshBasicMaterial | null = null;
    let flameCoreMat: THREE.MeshBasicMaterial | null = null;
    let petalMat: THREE.MeshStandardMaterial | null = null;
    let dustMat: THREE.PointsMaterial | null = null;
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;
    let handleResize: (() => void) | null = null;
    let handleContextLost: ((e: Event) => void) | null = null;
    let handleContextRestored: (() => void) | null = null;
    let canvas: HTMLCanvasElement | null = null;

    try {
      // Check WebGL availability
      canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }

      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const clientW = mount.clientWidth || window.innerWidth || 800;
      const clientH = mount.clientHeight || window.innerHeight || 600;

      // Three.js Scene Setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x120306, isMobile ? 0.04 : 0.025);

      const camera = new THREE.PerspectiveCamera(50, clientW / clientH, 0.1, 100);
      camera.position.set(0, 0, 10);

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !isMobile,
        powerPreference: 'high-performance',
      });
      renderer.setSize(clientW, clientH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      mount.appendChild(renderer.domElement);

    // Warm Ambient and Point Lighting for Divine Indian Temple Glow
    const ambientLight = new THREE.AmbientLight(0xFFDCA8, 0.9);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xF59E0B, 2.8, 25);
    goldPointLight.position.set(0, 1, 4);
    scene.add(goldPointLight);

    const redRimLight = new THREE.PointLight(0xDC2626, 1.4, 20);
    redRimLight.position.set(-5, -3, 3);
    scene.add(redRimLight);

    const warmFillLight = new THREE.PointLight(0xFDE68A, 1.2, 18);
    warmFillLight.position.set(5, 3, 2);
    scene.add(warmFillLight);

    // 1. Procedural 3D Golden Sacred Mandala Geometry
    const mandalaGroup = new THREE.Group();
    mandalaGroup.position.set(0, 0.5, -2);
    scene.add(mandalaGroup);

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xE5C158,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });

    const goldWireMaterial = new THREE.MeshStandardMaterial({
      color: 0xFDE68A,
      metalness: 0.95,
      roughness: 0.15,
      wireframe: true,
    });

    // Concentric intricate rings
    const ringRadii = [2.2, 3.4, 4.6];
    ringRadii.forEach((radius, rIdx) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.035, 12, isMobile ? 48 : 80);
      const ringMesh = new THREE.Mesh(ringGeo, goldMaterial);
      mandalaGroup.add(ringMesh);

      // Star-points / Lotus petals around ring
      const petalCount = rIdx === 0 ? 8 : rIdx === 1 ? 12 : 16;
      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        const petalGeo = new THREE.ConeGeometry(0.18, 0.65, 5);
        const petalMesh = new THREE.Mesh(petalGeo, rIdx % 2 === 0 ? goldMaterial : goldWireMaterial);
        petalMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        petalMesh.rotation.z = angle - Math.PI / 2;
        petalMesh.rotation.x = Math.PI / 2;
        mandalaGroup.add(petalMesh);
      }
    });

    // 2. Floating 3D Golden Diya (Clay / Brass Lamp)
    const diyaGroup = new THREE.Group();
    diyaGroup.position.set(0, -3.2, 1.5);
    scene.add(diyaGroup);

    // Diya base (lathed curve)
    const diyaBaseGeo = new THREE.CylinderGeometry(0.7, 0.35, 0.35, 24);
    const diyaBrassMat = new THREE.MeshStandardMaterial({
      color: 0xC59B27,
      metalness: 0.9,
      roughness: 0.3,
    });
    const diyaBase = new THREE.Mesh(diyaBaseGeo, diyaBrassMat);
    diyaGroup.add(diyaBase);

    // Diya oil reservoir
    const oilGeo = new THREE.CylinderGeometry(0.6, 0.5, 0.08, 24);
    const oilMat = new THREE.MeshStandardMaterial({
      color: 0x92400E,
      roughness: 0.1,
    });
    const oilMesh = new THREE.Mesh(oilGeo, oilMat);
    oilMesh.position.y = 0.15;
    diyaGroup.add(oilMesh);

    // Diya Flame with flickering teardrop shape
    const flameGeo = new THREE.ConeGeometry(0.14, 0.45, 16);
    flameGeo.translate(0, 0.22, 0);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xFBBF24,
      transparent: true,
      opacity: 0.95,
    });
    const flameMesh = new THREE.Mesh(flameGeo, flameMat);
    flameMesh.position.set(0, 0.22, 0.1);
    diyaGroup.add(flameMesh);

    // Inner bright core
    const flameCoreGeo = new THREE.ConeGeometry(0.07, 0.28, 12);
    flameCoreGeo.translate(0, 0.14, 0);
    const flameCoreMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const flameCore = new THREE.Mesh(flameCoreGeo, flameCoreMat);
    flameCore.position.set(0, 0.22, 0.1);
    diyaGroup.add(flameCore);

    // 3. Falling and Floating Marigold / Rose Petals (3D Instanced Mesh)
    const petalCount = isMobile ? 35 : 75;
    const petalCurve = new THREE.Shape();
    petalCurve.moveTo(0, 0);
    petalCurve.quadraticCurveTo(0.2, 0.3, 0.15, 0.6);
    petalCurve.quadraticCurveTo(0, 0.75, -0.15, 0.6);
    petalCurve.quadraticCurveTo(-0.2, 0.3, 0, 0);

    const petalGeo = new THREE.ShapeGeometry(petalCurve);
    petalGeo.scale(0.35, 0.35, 0.35);

    const marigoldColor = new THREE.Color(0xF59E0B);
    const saffronColor = new THREE.Color(0xEA580C);
    const roseColor = new THREE.Color(0xE11D48);
    const lotusColor = new THREE.Color(0xEC4899);
    const yellowColor = new THREE.Color(0xFDE047);
    const jasmineColor = new THREE.Color(0xFFFBEB);

    const petalMat = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      roughness: 0.5,
      metalness: 0.1,
    });

    const instancedPetals = new THREE.InstancedMesh(petalGeo, petalMat, petalCount);
    const dummy = new THREE.Object3D();

    const petalData: Array<{
      pos: THREE.Vector3;
      rot: THREE.Vector3;
      speedY: number;
      rotSpeed: THREE.Vector3;
      color: THREE.Color;
    }> = [];

    const availableColors = [marigoldColor, saffronColor, roseColor, lotusColor, yellowColor, jasmineColor];

    for (let i = 0; i < petalCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        Math.random() * 14 - 6,
        (Math.random() - 0.5) * 8 + 1
      );
      const rot = new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      const speedY = 0.008 + Math.random() * 0.014;
      const rotSpeed = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );

      const chosenColor = availableColors[Math.floor(Math.random() * availableColors.length)];

      instancedPetals.setColorAt(i, chosenColor);
      petalData.push({ pos, rot, speedY, rotSpeed, color: chosenColor });
    }
    if (instancedPetals.instanceColor) instancedPetals.instanceColor.needsUpdate = true;
    scene.add(instancedPetals);

    // 4. Subtle Golden Stardust / Embers Particles
    const dustCount = isMobile ? 60 : 150;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 18;
      dustPositions[i + 1] = (Math.random() - 0.5) * 14;
      dustPositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));

    const dustMat = new THREE.PointsMaterial({
      color: 0xFDE68A,
      size: isMobile ? 0.08 : 0.12,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Smooth camera parallax
      if (!prefersReducedMotion) {
        targetCameraX += (mouseX * 0.8 - targetCameraX) * 0.05;
        targetCameraY += (-mouseY * 0.6 - targetCameraY) * 0.05;
        camera.position.x = targetCameraX;
        camera.position.y = targetCameraY;
        camera.lookAt(0, 0, 0);

        // Rotate sacred mandala
        mandalaGroup.rotation.z += 0.0025;
        mandalaGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.08;

        // Flicker diya flame & light
        const flicker = Math.sin(elapsedTime * 14) * 0.06 + Math.cos(elapsedTime * 22) * 0.04;
        flameMesh.scale.set(1 + flicker * 0.5, 1 + flicker * 1.2, 1 + flicker * 0.5);
        flameMesh.rotation.z = Math.sin(elapsedTime * 8) * 0.08;
        goldPointLight.intensity = 2.6 + flicker * 0.8;

        // Animate falling petals
        for (let i = 0; i < petalCount; i++) {
          const item = petalData[i];
          item.pos.y -= item.speedY;
          item.pos.x += Math.sin(elapsedTime + i) * 0.004;
          item.rot.x += item.rotSpeed.x;
          item.rot.y += item.rotSpeed.y;
          item.rot.z += item.rotSpeed.z;

          // Wrap around top if falls below view
          if (item.pos.y < -7) {
            item.pos.y = 7;
            item.pos.x = (Math.random() - 0.5) * 14;
          }

          dummy.position.copy(item.pos);
          dummy.rotation.set(item.rot.x, item.rot.y, item.rot.z);
          dummy.updateMatrix();
          instancedPetals.setMatrixAt(i, dummy.matrix);
        }
        instancedPetals.instanceMatrix.needsUpdate = true;

        // Slowly swirl dust
        dustPoints.rotation.y = elapsedTime * 0.015;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Resize Handler
    handleResize = () => {
      if (!mount) return;
      const width = mount.clientWidth || window.innerWidth || 800;
      const height = mount.clientHeight || window.innerHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (renderer) {
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // WebGL context restoration safety
    handleContextLost = (e: Event) => {
      e.preventDefault();
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };

    handleContextRestored = () => {
      animate();
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    } catch {
      setHasWebGL(false);
      return;
    }

    return () => {
      if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
      if (handleResize) window.removeEventListener('resize', handleResize);
      if (canvas && handleContextLost) canvas.removeEventListener('webglcontextlost', handleContextLost);
      if (canvas && handleContextRestored) canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      if (mount && renderer && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      if (renderer) renderer.dispose();
      if (goldMaterial) goldMaterial.dispose();
      if (goldWireMaterial) goldWireMaterial.dispose();
      if (diyaBrassMat) diyaBrassMat.dispose();
      if (oilMat) oilMat.dispose();
      if (flameMat) flameMat.dispose();
      if (flameCoreMat) flameCoreMat.dispose();
      if (petalMat) petalMat.dispose();
      if (dustMat) dustMat.dispose();
    };
  }, [interactive]);

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-radial from-[#380812] to-[#120306]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-amber-500/20 animate-spin" style={{ animationDuration: '45s' }} />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
};
