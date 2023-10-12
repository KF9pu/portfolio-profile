import { cls } from "@/common/libs";
import type { FC } from "react";

interface ScrollPointerProps {}

const ScrollPointer: FC<ScrollPointerProps> = ({}) => {
  return (
    <nav className={cls("fixed right-[8px] md:right-[20px] top-[50vh]", "")}>
      <Line direction={1} big />
      <Line direction={1} middle />
      <Line direction={1} small />
      <Line direction={0} small />
      <Line direction={0} middle />
      <Line direction={0} big />
    </nav>
  );
};
export default ScrollPointer;

enum UpDown {
  UP,
  DOWN,
}
interface LineProps {
  direction: UpDown;
  small?: true;
  middle?: true;
  big?: true;
}
const Line: FC<LineProps> = ({ big, middle, small, direction }) => {
  if (big || middle || small)
    return (
      <label className={cls("flex justify-center", "h-[12px]", "")}>
        <span
          className={cls(
            "relative",
            big ? "w-[32px] h-[32px]" : "",
            middle ? "w-[26px] h-[26px]" : "",
            small ? "w-[16px] h-[16px]" : "",
            "after:content-[''] after:absolute",
            "after:w-full after:h-full",
            "after:border-t after:border-r after:border-primary",
            direction === UpDown.UP ? "after:rotate-[135deg]" : "after:rotate-[315deg]"
          )}
        />
      </label>
    );
  else return <label>-</label>;
};
