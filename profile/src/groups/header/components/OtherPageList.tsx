import type { FC } from "react";
import OtherPageLink from "./OtherPageLink";

interface OtherPageListProps {}

const OtherPageList: FC<OtherPageListProps> = ({}) => {
  return (
    <>
      <OtherPageLink url="/">Intro</OtherPageLink>
      <OtherPageLink url="/1">1</OtherPageLink>
      <OtherPageLink url="/2">2</OtherPageLink>
      <OtherPageLink url="/3">3</OtherPageLink>
    </>
  );
};
export default OtherPageList;
