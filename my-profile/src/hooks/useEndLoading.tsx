import { _isLoading } from "@/app/recoilContextProvider";
import { useSetRecoilState } from "recoil";
import { useLayoutEffect } from "react";

const useEndLoading = () => {
  const endLoading = useSetRecoilState(_isLoading);

  useLayoutEffect(() => {
    setTimeout(() => {
      endLoading(false);
    }, 1000);
  }, []);
};
export default useEndLoading;
