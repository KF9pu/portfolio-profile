import { cls } from "@/common/libs";
import type { FC } from "react";

interface PreparationPageProps {}

const PreparationPage: FC<PreparationPageProps> = ({}) => {
  return <div className={cls("flex justify-center items-center", "w-full h-full")}>아직 준비중이에요!</div>;
};
export default PreparationPage;
