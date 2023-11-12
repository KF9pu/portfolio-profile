import {
  _scrollSectionNum,
  _sectionIsOpen,
  _sectionNum,
} from "@/store/default";
import Layout from "@/groups/layout";
import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Html } from "@react-three/drei";
import gsap from "gsap";
import { meshpositions } from "@/groups/home/constants";
import useDisplay from "@/common/hooks/useDisplay";
import { Floor } from "@/groups/home/components/Floor";
import TitleSection from "@/groups/home/components/TitleSection";
import HtmlCard from "@/groups/home/components/HtmlCard";
import ScrollPointer from "@/groups/home/components/ScrollPointer";

export default function Home() {
  const cameraRef = useRef<any>(null);
  const setPageNum = useSetRecoilState(_sectionNum);
  const SetIsOpen = useSetRecoilState(_sectionIsOpen);
  const { isMobile } = useDisplay();
  const [scrollSectionNum, setScrollSectionNum] =
    useRecoilState(_scrollSectionNum);

  let currentSection = 0;

  useEffect(() => {
    setPageNum(0);
    SetIsOpen(false);
  }, []);

  const handleScroll = () => {
    const newSection = Math.round(window.scrollY / window.innerHeight);

    if (currentSection !== newSection) {
      setScrollSectionNum(newSection);
      gsap.to(cameraRef.current.position, {
        duration: 1,
        x: meshpositions[newSection].position.x,
        z: meshpositions[newSection].position.z + 6,
      });
      currentSection = newSection;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout title="Home" hasHeader>
      <Canvas
        shadows
        style={{ width: "100vw", height: "100vh", position: "fixed" }}
      >
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[-5, 2, 26]}
          rotation={[-0.05, 0, 0]}
        />
        <ambientLight intensity={0.5} color="white" />
        <spotLight
          position={[0, 200, 150]}
          angle={0.3}
          penumbra={1}
          intensity={0.7}
          castShadow
          color={"white"}
        />
        {/* <OrbitControls /> */}
        <Floor />
        {meshpositions.map(({ position }, idx) => {
          return (
            <mesh
              position={position}
              castShadow
              key={`meshpositions_mesh_${idx}`}
            >
              <boxGeometry
                attach="geometry"
                args={isMobile ? [1.2, 2.5, 0.02] : [3.13, 3.85, 0.02]}
              />
              <meshStandardMaterial attach="material" transparent opacity={0} />
              <Html
                occlude
                distanceFactor={1.5}
                position={[0, 0, 0.011]}
                transform
              >
                <HtmlCard idx={idx} />
              </Html>
            </mesh>
          );
        })}
      </Canvas>
      <TitleSection />
      <ScrollPointer />
    </Layout>
  );
}
