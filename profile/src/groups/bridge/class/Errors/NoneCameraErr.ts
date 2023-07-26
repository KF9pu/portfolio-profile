export class NoneCameraErr extends Error {
  constructor() {
    super("NoneCameraErr message");
    this.name = "CustomError";
  }
}
