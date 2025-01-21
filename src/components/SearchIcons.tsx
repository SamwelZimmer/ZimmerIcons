import React from "react";

import TextInput from "@/components/Inputs";
import { useAppContext } from "@/components/AppProvider";
import IconColorPicker from "./IconColorPicker";
import { ALL_ICONS } from "@/lib/constants";
import VariantFilter from "@/components/VariantFilter";

export default function SearchIcons() {
  const { filteredIcons, searchQuery, setSearchQuery } = useAppContext();

  return (
    <div className="max-w-2xl mx-auto relative flex flex-col pb-1">
      <div className="flex gap-4">
        <TextInput
          value={searchQuery}
          setValue={setSearchQuery}
          icon="magnifying-glass"
          showClearButton
          placeholder="Search icons..."
        />
        <IconColorPicker />
      </div>

      <div className="mt-2 flex items-center gap-6 px-5">
        <div className="flex items-baseline h-7 mt-px">
          <span className="text-xs text-muted-foreground pr-2">
            {"Showing:"}
          </span>
          <div className="relative font-mono">
            <span className="absolute right-0">{filteredIcons.length}</span>
            <span className="invisible">{ALL_ICONS.length}</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            {"/"}
            {ALL_ICONS.length}
          </span>
        </div>

        <div className="flex items-center">
          <span className="text-xs text-muted-foreground pr-2">
            {"Filter:"}
          </span>
          <VariantFilter />
        </div>
      </div>

      <div className="absolute -bottom-4 left-0 w-full h-4 bg-gradient-to-b from-background via-background via-[20%] to-transparent" />
    </div>
  );
}
