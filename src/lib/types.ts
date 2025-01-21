import { icons } from "@/lib/icon-map";

export type IconMap = { [key: string]: React.ComponentType };

export type IconName = keyof typeof icons;

export type IconVariant = {
  value: string;
  text: string;
};

export type IconColor = {
  hsl: string;
  text: string;
  value: string;
};
