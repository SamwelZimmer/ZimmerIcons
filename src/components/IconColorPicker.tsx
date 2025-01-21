import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { DEFAULT_ICON_COLOR, ICON_COLORS } from "@/lib/constants";
import { useAppContext } from "@/components/AppProvider";
import { IconColor } from "@/lib/types";

export default function IconColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeColor, setActiveColor } = useAppContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, () => setIsOpen(false));

  const toggleVariant = (value: IconColor | null) => {
    setActiveColor(value);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "border rounded-2xl size-12 min-w-12 flex items-center justify-center hover:bg-muted shadow",
          isOpen && "outline outline-2 outline-primary"
        )}
      >
        <div className="size-4 bg-icon rounded-full shadow-inner" />
      </button>

      {isOpen && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "auto", // Set width to auto to fit the content
            height: "auto",
          }}
          className="absolute top-[calc(100%+4px)] right-0 bg-background border rounded-2xl p-1 z-10 shadow-lg"
        >
          <ColorButton
            text="Default"
            hsl={DEFAULT_ICON_COLOR}
            onClick={() => toggleVariant(null)}
            isActive={activeColor === null}
          />
          {ICON_COLORS.map((color) => (
            <ColorButton
              key={color.hsl}
              text={color.text}
              hsl={color.hsl}
              onClick={() => toggleVariant(color)}
              isActive={activeColor === color}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const ColorButton = ({
  text,
  hsl,
  onClick,
  isActive,
}: {
  text: string;
  hsl: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-3 hover:bg-muted rounded-xl text-sm h-6 flex items-center gap-1.5",
        isActive && "bg-muted text-muted-foreground hover:text-primary"
      )}
    >
      <div
        className="w-2 h-2 rounded-full shadow-inner"
        style={{ backgroundColor: `hsl(${hsl})` }}
      />
      <span className="leading-0">{text}</span>
    </button>
  );
};
