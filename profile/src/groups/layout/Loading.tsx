import { useDefaultLoading } from "hsh-design-system";
import { cls } from "hsh-utils-string";
import { useEffect, useState, type FC } from "react";
import FadeBubble from "./FadeBubble";

const Loading: FC<unknown> = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 첫 번째 0.5초 딜레이

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      <main
        className={cls(
          "flex justify-center items-center",
          "fixed z-[100]",
          "w-screen h-screen",
          "border",
          "bg-common-100 bg-white",
          "transition-all duration-500",
          isLoading ? "" : "-translate-y-[100vh] opacity-0"
        )}
      >
        {/* <FadeBubble
          className={cls("animate-clipShrink1", "bg-primary-normal")}
        />
        <FadeBubble
          className={cls("animate-clipShrink2", "bg-lime-300 bg-opacity-10")}
        />
        <FadeBubble
          className={cls("animate-clipShrink3", "bg-blue-300 bg-opacity-5")}
        />
        <FadeBubble
          className={cls("animate-clipShrink4", "bg-sky-500 bg-opacity-30")}
        /> */}
        <div>Loading ... </div>
      </main>
    </>
  );
};
export default Loading;
