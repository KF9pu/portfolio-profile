// 클릭과, 드래그 이벤트 감지
export class PreventDragClick {
  mouseMoved: boolean = true;
  constructor(elem: Element) {
    let clickStartX: any;
    let clickStartY: any;
    let clickStartTime: any;
    elem.addEventListener("mousedown", (e: any) => {
      clickStartX = e.clientX;
      clickStartY = e.clientY;
      clickStartTime = Date.now();
    });
    elem.addEventListener("mouseup", (e: any) => {
      const xGap = Math.abs(e.clientX - clickStartX);
      const yGap = Math.abs(e.clientY - clickStartY);
      const timeGap = Date.now() - clickStartTime;

      if (xGap > 5 || yGap > 5 || timeGap > 500) {
        this.mouseMoved = true;
      } else {
        this.mouseMoved = false;
      }
    });
  }
}
