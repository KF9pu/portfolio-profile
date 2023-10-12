import { NoneProps } from "@/common/interface";
import { cls } from "@/common/libs";
import type { FC } from "react";

interface HtmlCardProps {
  idx: number;
}

const HtmlCard: FC<HtmlCardProps> = ({ idx }) => {
  return (
    <div
      className={cls(
        "w-[400px] md:w-[60vw]",
        "h-[600px] md:h-[80vh]",
        "rounded-3xl",
        "bg-primary",
        "text-primary",
        "select-none",
        "p-[20px]",
        "border border-quaternary"
      )}
    >
      {idx === 0 ? <FirstCard /> : null}
      {idx === 1 ? <SecondCard /> : null}
      {idx === 2 ? <ThirdCard /> : null}
      {idx === 3 ? <FourthCard /> : null}
      {idx === 4 ? <FifthCard /> : null}
    </div>
  );
};
export default HtmlCard;

// TODO: 각 카드에 넣을 내용 생각...
const FirstCard: FC<NoneProps> = () => {
  return <p className={cls("text-quaternary text-[32px] font-DNFBladeBold")}>FirstCard</p>;
};
const SecondCard: FC<NoneProps> = () => {
  return <p className={cls("text-quaternary text-[32px] font-DNFBladeBold")}>SecondCard</p>;
};
const ThirdCard: FC<NoneProps> = () => {
  return <p className={cls("text-quaternary text-[32px] font-DNFBladeBold")}>ThirdCard</p>;
};
const FourthCard: FC<NoneProps> = () => {
  return <p className={cls("text-quaternary text-[32px] font-DNFBladeBold")}>FourthCard</p>;
};
const FifthCard: FC<NoneProps> = () => {
  return <p className={cls("text-quaternary text-[32px] font-DNFBladeBold")}>FifthCard</p>;
};
