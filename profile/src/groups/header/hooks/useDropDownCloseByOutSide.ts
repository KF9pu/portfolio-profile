import { _isDropDown } from "@/store/default";
import { FC, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

const useDropDownvar = () => {
  const setIsDropDown = useSetRecoilState(_isDropDown);
  const outside = useRef<any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (outside.current && !outside.current.contains(event.target)) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { outside };
};
export default useDropDownvar;
