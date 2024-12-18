import { NoneProps } from "@/common/interface";
import { cls } from "@/common/libs";
import type { FC } from "react";

const TitleSection: FC<NoneProps> = ({}) => {
  const Titles = ["01", "02", "03", "04", "05"];
  return (
    <div className={cls("")}>
      {Titles.map((title, idx) => {
        return (
          <section className="h-screen" key={`TitleSection_title_${idx}`}>
            <h2 className={cls("pl-[12px] pt-[12px]")}>{title}</h2>
          </section>
        );
      })}
    </div>
  );
};
export default TitleSection;
