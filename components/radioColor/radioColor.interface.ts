export interface RadioColorProps {
  title: string;
  colors: RaidoColor[];
  clickColorHandler: (clicked: string) => void;
}

export interface RaidoColor {
  color: string;
  bgColor: string;
  ringColor: string;
}
