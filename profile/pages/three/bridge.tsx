import MainCanvas from "@/components/three/MainCanvas";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Bridge: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const cm1 = {
    canvas: canvasRef.current,
    scene: new THREE.Scene(),
  };

  const cm2 = {
    backgroundColor: "#e1322",
    lightColor: "#ffe9ac",
  };

  useEffect(() => {
    if (!cm1.canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas: cm1.canvas, antialias: true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(devicePixelRatio > 1 ? 2 : 1);

    cm1.scene.background = new THREE.Color(cm2.backgroundColor);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const camera2 = camera.clone();

    camera.position.x = -4;
    camera.position.y = 19;
    camera.position.z = 14;

    camera2.position.y = 0;
    camera2.lookAt(0, 1, 0);

    cm1.scene.add(camera, camera2);

    return () => {
      // Clean up the Three.js scene and renderer if necessary
    };
  }, []);
  return <MainCanvas canvasRef={canvasRef} />;
};

export default Bridge;
