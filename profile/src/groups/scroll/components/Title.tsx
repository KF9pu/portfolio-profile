import { cls } from "@/libs/common";
import type { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <section className={cls("h-screen", "p-[5rem]", "odd:text-right")}>
      <h2 className="text-[10vmin]">{children}</h2>
    </section>
  );
};
export default Title;
