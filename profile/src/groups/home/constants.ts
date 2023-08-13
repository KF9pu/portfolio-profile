export enum colorEnum {
  "default",
  "light-red",
  "light-blue",
  "light-green",
  "light-pink",
  "light-pupple",
  "light-gold",
  "dark-pink",
  "dark-red",
  "dark-green",
  "dark-blue",
  "dark-pupple",
  "dark-gold",
}

const ColorKeys = ["primary", "secondary", "tertiary", "quaternary", "quinary"] as const;
export type IColor = {
  [key in (typeof ColorKeys)[number]]: `#${string}`;
};

export const Colors: IColor[] = [
  {
    primary: "#212529",
    secondary: "#495057",
    tertiary: "#adb5bd",
    quaternary: "#dee2e6",
    quinary: "#f8f9fa",
  },
  {
    primary: "#d58181",
    secondary: "#cc6666",
    tertiary: "#bf4440",
    quaternary: "#a13636",
    quinary: "#7a2929",
  },
  {
    primary: "#85d1d6",
    secondary: "#6eb0cf",
    tertiary: "#4b85c3",
    quaternary: "#3b71b0",
    quinary: "#3758a4",
  },
  {
    primary: "#7ec95e",
    secondary: "#4cc144",
    tertiary: "#66a136",
    quaternary: "#3a6b24",
    quinary: "#1f4517",
  },
  {
    primary: "#ecc6cd",
    secondary: "#e0a3b3",
    tertiary: "#d7889e",
    quaternary: "#cb6285",
    quinary: "#c34b75",
  },
  {
    primary: "#e9bed9",
    secondary: "#e0a3db",
    tertiary: "#cf90da",
    quaternary: "#b079d2",
    quinary: "#9f62cb",
  },
  {
    primary: "#dec99c",
    secondary: "#d4b17d",
    tertiary: "#cda76a",
    quaternary: "#b88d3d",
    quinary: "#957432",
  },
  {
    primary: "#cc6674",
    secondary: "#b04a5c",
    tertiary: "#722134",
    quaternary: "#b03b4e",
    quinary: "#913047",
  },
  {
    primary: "#a8281f",
    secondary: "#9b271c",
    tertiary: "#862219",
    quaternary: "#6c1414",
    quinary: "#450e0d",
  },
  {
    primary: "#cfe1b9",
    secondary: "#b5c99a",
    tertiary: "#97a97c",
    quaternary: "#87986a",
    quinary: "#718355",
  },
  {
    primary: "#2c7cd8",
    secondary: "#264bcf",
    tertiary: "#213fb5",
    quaternary: "#261fa8",
    quinary: "#161e79",
  },
  {
    primary: "#bda0ee",
    secondary: "#ab82e8",
    tertiary: "#8241dc",
    quaternary: "#7324c2",
    quinary: "#4c198a",
  },
  {
    primary: "#e2c347",
    secondary: "#d6b534",
    tertiary: "#7d6a01",
    quaternary: "#967a1e",
    quinary: "#6b5824",
  },
];
