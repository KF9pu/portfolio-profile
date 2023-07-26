export class NoneCanvasErr extends Error {
  constructor() {
    super("NoneCanvasErr message");
    this.name = "NoneCanvasError";
  }
}
