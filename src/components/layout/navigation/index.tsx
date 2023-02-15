import { cls } from "@libs/common";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className={cls("")}>
      <div className={cls("h-[40px] w-[80%]")}>a</div>
      <div className={cls("h-[40px] w-[80%]")}>b</div>
      <div className={cls("h-[40px] w-[80%]")}>c</div>
      <div className={cls("h-[40px] w-[80%]")}>d</div>
      <div className={cls("h-[40px] w-[80%]")}>e</div>
    </nav>
  );
};

export default Navigation;
