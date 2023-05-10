import type { FC } from "react";
import OtherPageLink from "./OtherPageLink";
import { cls } from "@/libs/common";

interface OtherPageListProps {}

const OtherPageList: FC<OtherPageListProps> = ({}) => {
  return (
    <div className={cls("flex flex-col items-center", "w-full")}>
      <OtherPageLink url="/">소개</OtherPageLink>
      <OtherPageLink url="/3D">3D Home</OtherPageLink>
      <OtherPageLink url="/3">방명록</OtherPageLink>
      <OtherPageLink url="/3">3</OtherPageLink>
    </div>
  );
};
export default OtherPageList;
