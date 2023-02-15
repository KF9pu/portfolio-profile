import { cls } from "@libs/common";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className={cls("fixed flex justify-center", "h-screen w-[40px]", "transition-all", "bg-slate-100", "hover:w-[200px]")}>
      <Navigation />
    </header>
  );
};

export default Header;
