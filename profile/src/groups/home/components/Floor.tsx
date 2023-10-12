import { NoneProps } from "@/common/interface";
import { useTexture } from "@react-three/drei";
import { FC } from "react";
import { RepeatWrapping } from "three";

export const Floor: FC<NoneProps> = () => {
  const grassMap = useTexture("images/grass.jpg");
  grassMap.wrapS = RepeatWrapping;
  grassMap.wrapT = RepeatWrapping;
  grassMap.repeat.x = 40;
  grassMap.repeat.y = 40;
  grassMap.anisotropy = 40;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[100, 100]} />
      {/* <meshStandardMaterial attach="material" map={grassMap} /> */}
      <meshStandardMaterial attach="material" />
    </mesh>
  );
};
