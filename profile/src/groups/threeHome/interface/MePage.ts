export interface SectionProps {
  tab?: true;
  children: React.ReactNode;
}

export interface PresonalInfoProps {
  title: string;
  data: string | string[];
  small?: true;
  smallData?: true;
}