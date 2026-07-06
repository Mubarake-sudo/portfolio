'use client';

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import useTheme from '@/hooks/useTheme';

const DARK_CABLE_COLORS = ['#4EA6FF', '#00F7FF', '#FF6AC3', '#FF9A3D', '#FFF36B'];
const LIGHT_CABLE_COLORS = ['#8AAEFF', '#7CE3E9', '#FFB3DB', '#FFCAA0', '#FFF3A8'];

interface AnimatedCableProps {
  side: 'left' | 'right';
  color: string;
  index: number;
}

function AnimatedCable({ side, color, index }: AnimatedCableProps) {
  const lineRef = useRef<THREE.Line>(null);
  const points = useMemo(
    () => new Array(48).fill(null).map(() => new THREE.Vector3()),
    []
  );

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() * 1.1;
    const direction = side === 'left' ? -1 : 1;

    for (let i = 0; i < points.length; i += 1) {
      const t = i / (points.length - 1);
      const xBase = THREE.MathUtils.lerp(direction * 5.2, direction * 0.4, t);
      const yBase = THREE.MathUtils.lerp(-1.8, 1.8, t);
      const wave = Math.sin(t * Math.PI * 4 + elapsed * 1.2 + index) * 0.45;
      const pulse = Math.sin(t * 2 + elapsed * 1.6 + index * 0.6) * 0.18;
      const twist = Math.sin(elapsed * 1.3 + t * Math.PI * 2 + index * 0.8) * 0.08;
      const z = Math.cos(t * Math.PI * 3.2 + elapsed * 1.5 + index * 0.5) * 0.16;
      const x = xBase + wave * 0.3 * direction + twist * direction;
      const y = yBase + pulse;
      points[i].set(x, y, z);
    }

    if (lineRef.current) {
      lineRef.current.geometry.setFromPoints(points);
    }
  });

  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      lineWidth={3}
      transparent
      opacity={0.95}
      dashed={false}
      vertexColors={false}
      material={{
        toneMapped: false,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending,
      }}
    />
  );
}

function CenterPulse() {
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const scale = 1 + Math.sin(clock.getElapsedTime() * 3.4) * 0.16;
    if (pulseRef.current) {
      pulseRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={pulseRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.08, 32, 32]} />
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
      <pointLight color="#ffffff" intensity={3.4} distance={2.2} decay={1.5} />
    </mesh>
  );
}

export default function TwistedCableScene() {
  const { isDark } = useTheme();
  const cableColors = isDark ? DARK_CABLE_COLORS : LIGHT_CABLE_COLORS;
  const backgroundClass = isDark ? 'bg-[#050816]' : 'bg-[#f8fafc]';
  const shadowStyle = isDark
    ? 'shadow-[0_0_120px_rgba(0,0,0,0.35)]'
    : 'shadow-[0_0_120px_rgba(17,24,39,0.1)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className={`relative w-full h-[560px] rounded-3xl overflow-hidden ${backgroundClass} ${shadowStyle}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)] pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
        <ambientLight intensity={0.8} />
        <directionalLight color="#5be0ff" intensity={0.6} position={[5, 5, 8]} />

        <group rotation={[0.03, 0.12, 0]}>
          {cableColors.map((color, index) => (
            <AnimatedCable
              key={`left-cable-${color}-${index}`}
              side="left"
              color={color}
              index={index}
            />
          ))}
          {cableColors.map((color, index) => (
            <AnimatedCable
              key={`right-cable-${color}-${index}`}
              side="right"
              color={color}
              index={index + 0.7}
            />
          ))}
          <CenterPulse />
        </group>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </motion.div>
  );
}
