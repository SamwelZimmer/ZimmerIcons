import React, { useRef, useState } from "react";

import { useAppContext } from "@/components/AppProvider";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { IconVariant } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ICON_VARIANTS } from "@/lib/constants";

export default function VariantFilter() {
  const { activeVariant, setActiveVariant } = useAppContext();

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, () => setIsOpen(false));

  const toggleVariant = (value: IconVariant | null) => {
    setActiveVariant(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-7 w-max border px-4 rounded-2xl flex items-center text-sm hover:bg-muted shadow text-muted-foreground",
          activeVariant && "border-primary text-primary",
          isOpen && "outline outline-2 outline-primary"
        )}
      >
        {activeVariant ? activeVariant.text : "All"}
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 bg-background border rounded-2xl p-1 flex flex-col z-10 shadow-lg">
          <VariantButton
            text="All"
            onClick={() => toggleVariant(null)}
            isActive={activeVariant === null}
          />
          {ICON_VARIANTS.map((variant) => (
            <VariantButton
              key={variant.value}
              text={variant.text}
              onClick={() => toggleVariant(variant)}
              isActive={activeVariant === variant}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const VariantButton = ({
  text,
  onClick,
  isActive,
}: {
  text: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "min-w-max text-left px-3 hover:bg-muted rounded-xl text-sm h-6",
        isActive && "bg-muted text-muted-foreground hover:text-primary"
      )}
    >
      {text}
    </button>
  );
};
