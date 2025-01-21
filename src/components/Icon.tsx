import React from "react";

import { icons } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { IconName } from "@/lib/types";

const EmptyIcon: React.ElementType = () => null;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

const Icon = ({
  name,
  className,
  size = 20,
  ...rest
}: IconProps): JSX.Element => {
  const IconComponent = icons[name] || EmptyIcon;

  return (
    <IconComponent
      {...rest}
      className={cn("text-inherit", className)}
      height={size}
      width={size}
    />
  );
};

export default Icon;
