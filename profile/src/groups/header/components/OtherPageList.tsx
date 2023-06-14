import type { FC } from "react";
import OtherPageLink from "./OtherPageLink";
import { cls } from "@/libs/common";

interface OtherPageListProps {}

const OtherPageList: FC<OtherPageListProps> = ({}) => {
  return (
    <div className={cls("flex flex-col items-center", "w-full")}>
      <OtherPageLink url="/">소개</OtherPageLink>
      <OtherPageLink url="/three">3D Home</OtherPageLink>
      <OtherPageLink url="/three/domino">3D Domino</OtherPageLink>
      <OtherPageLink url="/three/scroll">3D Scroll</OtherPageLink>
    </div>
  );
};
export default OtherPageList;
