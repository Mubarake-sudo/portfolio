// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import type { Line2 } from 'three-stdlib';
import useTheme from '@/hooks/useTheme';

/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-empty-object-type */
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      mesh: ThreeElements['mesh'];
      sphereGeometry: ThreeElements['sphereGeometry'];
      meshBasicMaterial: ThreeElements['meshBasicMaterial'];
      pointLight: ThreeElements['pointLight'];
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace, @typescript-eslint/no-empty-object-type */

const DARK_CABLE_COLORS = ['#4EA6FF', '#00F7FF', '#FF6AC3', '#FF9A3D', '#FFF36B'];
const LIGHT_CABLE_COLORS = ['#8AAEFF', '#7CE3E9', '#FFB3DB', '#FFCAA0', '#FFF3A8'];

interface AnimatedCableProps {
  side: 'left' | 'right';
  color: string;
  index: number;
}

function AnimatedCable({ side, color, index }: AnimatedCableProps) {
  const lineRef = useRef<Line2>(null);
  // Augmentation du nombre de points pour des courbes plus lisses
  const points = useMemo(
    () => new Array(80).fill(null).map(() => new THREE.Vector3()),
    []
  );

  useFrame(({ clock }) => {
    // Vitesse ralentie pour un effet plus "premium" et zen
    const elapsed = clock.getElapsedTime() * 0.35; 
    const direction = side === 'left' ? -1 : 1;

    for (let i = 0; i < points.length; i += 1) {
      const t = i / (points.length - 1);
      
      // X va des bords (±7) vers le centre (0)
      const x = THREE.MathUtils.lerp(direction * 7, 0, t);
      
      // La magie est ici : 'taper' fait en sorte que l'amplitude 
      // diminue à mesure qu'on approche du centre (t = 1)
      const taper = Math.pow(1 - t, 1.5); 
      
      // Courbes amples et fluides au lieu de zigzags serrés
      const waveY = Math.sin(t * Math.PI * 2.5 + elapsed + index * 0.8);
      const waveZ = Math.cos(t * Math.PI * 2.5 + elapsed + index * 0.8);

      const y = waveY * 2.5 * taper;
      const z = waveZ * 2.5 * taper;
      
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
      // Les lignes varient légèrement en épaisseur
      lineWidth={index % 2 === 0 ? 2.5 : 1.5} 
      transparent
      opacity={0.65} // Plus subtil
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  );
}

function CenterPulse() {
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    // Pulsation plus douce
    const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
    if (pulseRef.current) {
      pulseRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={pulseRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.06, 32, 32]} />
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
      <pointLight color="#00F7FF" intensity={4} distance={3} decay={2} />
    </mesh>
  );
}

export default function TwistedCableScene() {
  const { isDark } = useTheme();
  const cableColors = isDark ? DARK_CABLE_COLORS : LIGHT_CABLE_COLORS;
  
  // Suppression du fond plein pour qu'il s'intègre parfaitement à votre site
  const backgroundClass = isDark ? 'bg-transparent' : 'bg-transparent'; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className={`relative w-full h-[400px] rounded-3xl overflow-hidden ${backgroundClass}`}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.8} />
        
        <group>
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
              index={index + 0.5}
            />
          ))}
          <CenterPulse />
        </group>

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </motion.div>
  );
}