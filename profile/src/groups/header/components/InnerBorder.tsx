import { cls } from "@/libs/common";
import useTheme from "@/theme/hooks/useTheme";
import type { FC } from "react";

interface InnerBorderProps {
  children: React.ReactNode;
}

const InnerBorder: FC<InnerBorderProps> = ({ children }) => {
  return <div className={cls("h-full", "flex flex-col", "border rounded-md", "border-quinary")}>{children}</div>;
};
export default InnerBorder;
