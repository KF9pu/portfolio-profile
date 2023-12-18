import type { FC } from "react";
import TestEndModal from "./TestEndModal";
import TestEndButton from "./TestEndButton";

interface TestEndBoxProps {}

const TestEndBox: FC<TestEndBoxProps> = ({}) => {
  return (
    <>
      <TestEndModal />
      <TestEndButton />
    </>
  );
};
export default TestEndBox;
