import React from "react";

import { useAppContext } from "@/components/AppProvider";
import Icon from "@/components/Icon";
import { IconName } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export default function IconDisplay() {
  const { filteredIcons } = useAppContext();

  return (
    <div
      className="w-full max-w-2xl mx-auto grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
      }}
    >
      {filteredIcons.map((icon) => (
        <IconItem key={icon} name={icon as IconName} />
      ))}
    </div>
  );
}

const IconItem = ({ name }: { name: IconName }) => {
  const { activeIcon, setActiveIcon } = useAppContext();

  const isActive = activeIcon === name;

  return (
    <button
      onClick={() => setActiveIcon(isActive ? null : name)}
      className={cn(
        "border aspect-square flex items-center justify-center rounded-2xl hover:bg-muted",
        isActive && "outline outline-2 outline-primary"
      )}
    >
      <Icon name={name} className="w-8 h-8 text-icon" />
    </button>
  );
};
