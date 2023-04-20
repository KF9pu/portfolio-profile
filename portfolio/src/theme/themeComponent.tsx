import type { FC } from "react";
import React from "react";
import useTheme from "./useTheme";
import { ThemeCodeType } from "./interfaces";

interface ThemeComponentProps {
  children: React.ReactNode;
}

const ThemeComponent: FC<ThemeComponentProps> = ({ children }) => {
  useTheme();
  return <>{children}</>;
};
export default ThemeComponent;
