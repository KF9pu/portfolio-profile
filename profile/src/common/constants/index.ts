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
    dec: string;
  };
}
type ISpotInfos = ISpotInfo[];

export const SpotInfos: ISpotInfos = [
  {
    spot: {
      name: "introSpot",
      position: { x: introSpotPosition.x, z: introSpotPosition.z },
    },
    text: {
      name: "introText",
      text: "Intro !",
      position: { x: introSpotPosition.x, z: introSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "Intro",
      modelSrc: "/models/house.glb",
      position: { x: introSpotPosition.x, y: -1.3, z: introSpotPosition.z - 2 },
      dec: "프로젝트 소개",
    },
  },
  {
    spot: {
      name: "meSpot",
      position: { x: meSpotPosition.x, z: meSpotPosition.z },
    },
    text: {
      name: "meText",
      text: "Me !",
      position: { x: meSpotPosition.x, z: meSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "Me",
      modelSrc: "/models/ReadyPlayerMeGlb.glb",
      position: { x: meSpotPosition.x, y: -4, z: meSpotPosition.z - 2 },
      dec: "자기 소개 & 경력사항",
    },
  },
  {
    spot: {
      name: "boardSpot",
      position: { x: boardSpotPosition.x, z: boardSpotPosition.z },
    },
    text: {
      name: "boardText",
      text: "Board !",
      position: { x: boardSpotPosition.x, z: boardSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "Board",
      modelSrc: "/models/bulletin_board.glb",
      position: { x: boardSpotPosition.x, y: -4, z: boardSpotPosition.z - 2 },
      dec: "게시판 (준비중)",
    },
  },
  {
    spot: {
      name: "skillSpot",
      position: { x: skillSpotPosition.x, z: skillSpotPosition.z },
    },
    text: {
      name: "skillText",
      text: "Skill !",
      position: { x: skillSpotPosition.x, z: skillSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "Skill",
      modelSrc: "/models/ruler_pencil.glb",
      position: { x: skillSpotPosition.x, y: -4, z: skillSpotPosition.z - 2 },
      dec: "기술 스텍",
    },
  },
  {
    spot: {
      name: "adminSpot",
      position: { x: adminSpotPosition.x, z: adminSpotPosition.z },
    },
    text: {
      name: "adminText",
      text: "Admin !",
      position: { x: adminSpotPosition.x, z: adminSpotPosition.z },
      size: 1,
    },
    stand: {
      name: "Admin",
      modelSrc: "/models/gears.glb",
      position: {
        x: adminSpotPosition.x,
        y: -4,
        z: adminSpotPosition.z - 2,
      },
      dec: "관리자 (준비중)",
    },
  },
];
