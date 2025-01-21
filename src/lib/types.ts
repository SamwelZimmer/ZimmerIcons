export type IconMap = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type IconVariant = {
  value: string;
  text: string;
};

export type IconColor = {
  hsl: string;
  text: string;
  value: string;
};
