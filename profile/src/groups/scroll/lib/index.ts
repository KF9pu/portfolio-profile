import { StaticCanvas } from "@/libs/StaticCanvas";

/**
 * 0. 캔버스 지정
 * 1. Renderer set
 * 2. Scene set
 * 3. Camera set
 * 4. Light set
 * 5. Controls set
 * 6. Loader set
 * 7. Cannon(물리 엔진) set
 * 8. draw 캔버스에 그리기
 */

const ThreeScrollMain = () => {
  if (!StaticCanvas) return;
  // 0. 캔버스 지정
  const canvas = StaticCanvas;
  console.log("*** ThreeScroll 시작 ");
};
export default ThreeScrollMain;
