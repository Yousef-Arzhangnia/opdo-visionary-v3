import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import heroWaves from "@/assets/hero-waves.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

function FreeformOptic({
  isMobile,
  scrollRef,
}: {
  isMobile: boolean;
  scrollRef: { current: number };
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const matRef = useRef<any>(null!);
  const bgTexture = useLoader(THREE.TextureLoader, heroWaves);
  const { camera, gl } = useThree();

  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const dragRotation = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => {
    const segments = isMobile ? 48 : 64;
    const geo = new THREE.SphereGeometry(1.35, segments, segments);
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
  }, [isMobile]);

  useEffect(() => {
    const raycaster = new THREE.Raycaster();
    const canvas = gl.domElement;

    const toNDC = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return new THREE.Vector2(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1,
      );
    };

    const isOverMesh = (clientX: number, clientY: number) => {
      if (!meshRef.current) return false;
      raycaster.setFromCamera(toNDC(clientX, clientY), camera);
      return raycaster.intersectObject(meshRef.current).length > 0;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!isOverMesh(e.clientX, e.clientY)) return;
      isDragging.current = true;
      lastPointer.current = { x: e.clientX, y: e.clientY };
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) {
        document.body.style.cursor = isOverMesh(e.clientX, e.clientY) ? "grab" : "";
        return;
      }
      const dx = e.clientX - lastPointer.current.x;
      const dy = e.clientY - lastPointer.current.y;
      dragRotation.current.y += dx * 0.01;
      dragRotation.current.x += dy * 0.005;
      lastPointer.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [camera, gl]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const scroll = scrollRef.current;

    if (meshRef.current) {
      meshRef.current.rotation.y = scroll * 0.009 + dragRotation.current.y;
      meshRef.current.rotation.x = Math.sin(scroll * 0.006) * 0.18 + dragRotation.current.x;
      meshRef.current.rotation.z = Math.sin(scroll * 0.0045) * 0.08;
    }

    const m = matRef.current;
    if (m) {
      if ("thickness" in m) m.thickness = 1.1 + Math.sin(t * 0.35) * 0.2;
      if ("distortion" in m) m.distortion = 0.14 + Math.cos(t * 0.25) * 0.05;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      scale={isMobile ? 0.7 : 0.45}
      position={isMobile ? [0, -1.1, 0] : [1.3, 0, 0]}
    >
      <MeshTransmissionMaterial
        ref={matRef}
        background={bgTexture}
        transmission={1}
        thickness={0.1}
        roughness={0.0}
        ior={1.3}
        reflectivity={0.6}
        chromaticAberration={isMobile ? 0.02 : 0.04}
        anisotropy={0.1}
        distortion={0.08}
        distortionScale={0.15}
        temporalDistortion={0.1}
        clearcoat={0}
        clearcoatRoughness={0}
        attenuationDistance={5}
        attenuationColor="#ffffff"
        color="#ffffff"
        samples={1}
        resolution={isMobile ? 128 : 128}
      />
    </mesh>
  );
}

export function HeroOptic() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const scrollRef = useRef(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 4], fov: isMobile ? 50 : 38 }}
        dpr={[1, 1]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4.5, 3.2, 4]} intensity={2.2} color="#ffffff" />
          <directionalLight position={[-3, -2, 2]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[0, 4, -2]} intensity={1.5} color="#bcd4ff" />
          <Environment preset="studio" environmentIntensity={1.2} />
          <FreeformOptic isMobile={isMobile} scrollRef={scrollRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
