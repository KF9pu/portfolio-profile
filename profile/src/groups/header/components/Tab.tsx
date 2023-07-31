import { cls } from "@/libs/common";
import { _sidevarTabStatus } from "@/store/default";
import useTheme from "@/groups/theme/useTheme";
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";

interface TabProps {
  children: React.ReactNode;
  propsTabStatus: number;
}

const Tab: FC<TabProps> = ({ children, propsTabStatus }) => {
  const [tabStatus, setTabStatus] = useRecoilState(_sidevarTabStatus);

  return (
    <div
      className={cls(
        "w-[50%]",
        "text-center",
        "py-[8px]",
        "cursor-pointer",
        "z-[5]",
        tabStatus === propsTabStatus ? cls("text-quinary") : cls("text-quinary", "hover:text-primary")
      )}
      onClick={() => setTabStatus(propsTabStatus)}
    >
      <p className={cls("relative", "transition-all ")}>{children}</p>
    </div>
  );
};
export default Tab;
