import type { FC } from "react";

interface MePageProps {}

const MePage: FC<MePageProps> = ({}) => {
  return (
    <div>
      <Section>1</Section>
      <Section>2</Section>
      <Section>3</Section>
      <Section>4</Section>
    </div>
  );
};
export default MePage;

interface SectionProps {}
const Section: FC<SectionProps> = ({}) => {
  return <section></section>;
};
