import { cls } from "hsh-utils-string";
import type { FC, HtmlHTMLAttributes } from "react";

const FadeBubble: FC<HtmlHTMLAttributes<HTMLParagraphElement>> = ({
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={cls(
        "flex justify-center items-center",
        "absolute top-0 ",
        "w-screen h-screen",
        "text-[48px]",
        rest.className ?? ""
      )}
    />
  );
};
export default FadeBubble;
