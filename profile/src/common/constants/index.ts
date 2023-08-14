export const DevStartdate = "2020-10-16";

export const introSpotPosition = { x: -3, z: -3 };
export const meSpotPosition = { x: -3, z: 3 };
export const boardSpotPosition = { x: 3, z: -3 };
export const skillSpotPosition = { x: 3, z: 3 };
export const adminSpotPosition = { x: 0, z: -12 };

export interface IPosition {
  x: number;
  y?: number;
  z: number;
}
interface ISpotInfo {
  spot: {
    name: string;
    position: IPosition;
  };
  text: {
    name: string;
    text: string;
    position: IPosition;
    size: number;
  };
  stand: {
    name: string;
    modelSrc: string;
    position: IPosition;
  };
}
type ISpotInfos = ISpotInfo[];

export const SpotInfos: ISpotInfos = [
  {
    spot: {
      name: "introSpotMesh",
      position: { x: introSpotPosition.x, z: introSpotPosition.z },
    },
    text: {
      name: "introTextMesh",
      text: "Intro !",
      position: { x: introSpotPosition.x, z: introSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "house",
      modelSrc: "/models/house.glb",
      position: { x: introSpotPosition.x, y: -1.3, z: introSpotPosition.z - 2 },
    },
  },
  {
    spot: {
      name: "MeSpotMesh",
      position: { x: meSpotPosition.x, z: meSpotPosition.z },
    },
    text: {
      name: "meTextMesh",
      text: "It's Me !",
      position: { x: meSpotPosition.x, z: meSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "me",
      modelSrc: "/models/ReadyPlayerMeGlb.glb",
      position: { x: meSpotPosition.x, y: -4, z: meSpotPosition.z - 2 },
    },
  },
  {
    spot: {
      name: "boardSpotMesh",
      position: { x: boardSpotPosition.x, z: boardSpotPosition.z },
    },
    text: {
      name: "boardTextMesh",
      text: "Board !",
      position: { x: boardSpotPosition.x, z: boardSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "board",
      modelSrc: "/models/bulletin_board.glb",
      position: { x: boardSpotPosition.x, y: -4, z: boardSpotPosition.z - 2 },
    },
  },
  {
    spot: {
      name: "skillSpotMesh",
      position: { x: skillSpotPosition.x, z: skillSpotPosition.z },
    },
    text: {
      name: "skillTextMesh",
      text: "Skill !",
      position: { x: skillSpotPosition.x, z: skillSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "skill",
      modelSrc: "/models/ruler_pencil.glb",
      position: { x: skillSpotPosition.x, y: -4, z: skillSpotPosition.z - 2 },
    },
  },
  {
    spot: {
      name: "adminSpotMesh",
      position: { x: adminSpotPosition.x, z: adminSpotPosition.z },
    },
    text: {
      name: "adminTextMesh",
      text: "Admin !",
      position: { x: adminSpotPosition.x, z: adminSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "admin",
      modelSrc: "/models/gears.glb",
      position: { x: adminSpotPosition.x, y: -4, z: adminSpotPosition.z - 2 },
    },
  },
];
