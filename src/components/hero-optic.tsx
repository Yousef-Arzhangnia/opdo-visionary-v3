import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import heroWaves from "@/assets/hero-waves.jpg";

function FreeformOptic() {
  const meshRef = useRef<THREE.Mesh>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const matRef = useRef<any>(null!);
  const bgTexture = useLoader(THREE.TextureLoader, heroWaves);

  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.35, 256, 256);
    const pos = geo.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      const squash = 0.42;
      const nz = z * squash;

      const f =
        0.08 * Math.sin(x * 2.4 + y * 1.7) +
        0.05 * Math.cos(y * 3.1 - x * 1.2) +
        0.03 * Math.sin((x + y) * 4.0);

      pos.setXYZ(i, x + f * 0.15, y + f * 0.15, nz + f);
    }

    pos.needsUpdate = true;
    geo.computeVertexNormals();
    geo.computeBoundingSphere();

    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18;
      meshRef.current.rotation.x = Math.sin(t * 0.12) * 0.18;
      meshRef.current.rotation.z = Math.sin(t * 0.09) * 0.08;
    }

    const m = matRef.current;
    if (m) {
      if ("thickness" in m) m.thickness = 1.1 + Math.sin(t * 0.35) * 0.2;
      if ("distortion" in m) m.distortion = 0.14 + Math.cos(t * 0.25) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={0.45} position={[1.3, 0, 0]}>
      <MeshTransmissionMaterial
        ref={matRef}
        background={bgTexture}
        transmission={1}
        thickness={0.35}
        roughness={0.0}
        ior={1.45}
        chromaticAberration={0.04}
        anisotropy={0.02}
        distortion={0.08}
        distortionScale={0.15}
        temporalDistortion={0.01}
        clearcoat={0.0}
        clearcoatRoughness={0}
        attenuationDistance={5}
        attenuationColor="#ffffff"
        color="#ffffff"
        backside
        samples={12}
        resolution={1024}
      />
    </mesh>
  );
}

export function HeroOptic() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4.5, 3.2, 4]} intensity={1.4} color="#ffffff" />
          <directionalLight position={[-3, -2, 2]} intensity={0.5} color="#ffffff" />
          <FreeformOptic />
        </Suspense>
      </Canvas>
    </div>
  );
}
