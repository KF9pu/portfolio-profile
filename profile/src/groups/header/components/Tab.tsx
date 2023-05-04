import { cls } from "@/libs/common";
import { _sidevarTabStatus } from "@/store/default";
import useTheme from "@/theme/hooks/useTheme";
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";

interface TabProps {
  children: React.ReactNode;
  propsTabStatus: number;
}

const Tab: FC<TabProps> = ({ children, propsTabStatus }) => {
  const { bg, text, border } = useTheme();
  const [tabStatus, setTabStatus] = useRecoilState(_sidevarTabStatus);

  useEffect(() => {
    console.log("dksldklsdklskdlsk : ", text.primary);
  }, []);
  return (
    <div
      className={cls(
        "w-[50%]",
        "text-center",
        "py-[8px]",
        "cursor-pointer",
        "border-t",
        "z-[5]",
        propsTabStatus === 0 ? "border-l rounded-tl-md" : "border-r rounded-tr-md",
        tabStatus === propsTabStatus ? cls(text.quinary) : cls(text.quinary, text.hover.primary),
        border.quinary
      )}
      onClick={() => setTabStatus(propsTabStatus)}
    >
      <p className={cls("relative", "transition-all ")}>{children}</p>
    </div>
  );
};
export default Tab;
