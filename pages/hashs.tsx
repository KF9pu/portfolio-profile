import { _hashmapTest } from "@libs/recoil/Atoms";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const Hashs: NextPage = () => {
  const [hashmapTest, setHashmapTest] = useRecoilState(_hashmapTest);
  useEffect(() => {
    console.log("hashmapTest1 : ", hashmapTest);
  }, [hashmapTest]);
  return (
    <div
      className="text-black"
      onClick={() => {
        console.log("hashmapTest2 : ", hashmapTest);
        setHashmapTest(prev => {
          const result = prev;
          result.set("asdasd", [1, 2]);
          return result;
        });
      }}
    >
      aaaaaaaaaaaaaaaaaa
    </div>
  );
};

export default Hashs;
