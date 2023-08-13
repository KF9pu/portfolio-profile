import type { FC } from "react";
import OtherPageLink from "./OtherPageLink";
import { cls } from "@/common/libs";

interface OtherPageListProps {}

const OtherPageList: FC<OtherPageListProps> = ({}) => {
  return (
    <div className={cls("flex flex-col items-center", "w-full")}>
      <OtherPageLink url="/">Home</OtherPageLink>
      <OtherPageLink url="/three">3D Home</OtherPageLink>
    </div>
  );
};
export default OtherPageList;
