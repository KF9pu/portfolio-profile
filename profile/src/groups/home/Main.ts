import { ThemeCodeType } from "../theme/Interfaces";

interface MainProps {
  canvas: HTMLCanvasElement | null;
  ThemeCode: ThemeCodeType;
}

class Main {
  constructor({ ThemeCode, canvas }: MainProps) {}
}

export default Main;
