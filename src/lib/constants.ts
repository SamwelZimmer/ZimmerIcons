import { icons } from "@/lib/icon-map";
import { IconName, IconVariant, IconColor } from "@/lib/types";

export const ALL_ICONS: IconName[] = Object.keys(icons);

export const ICON_VARIANTS: IconVariant[] = [
  { value: "plain", text: "Plain" },
  { value: "bulk", text: "Bulk" },
  { value: "two", text: "Two-Toned" },
];

/**
 * A lookup of variant.value -> filter function.
 * - `bulk`: matches icons ending in "-bulk"
 * - `two`:  matches icons ending in "-two"
 * - `` (empty string): matches icons that DO NOT end with other known suffixes
 *   (i.e., "plain" icons).

 */
export const VARIANT_FILTERS: Record<string, (icon: IconName) => boolean> = {
  bulk: (icon) => icon.toString().endsWith("-bulk"),
  two: (icon) => icon.toString().endsWith("-two"),
  plain: (icon) =>
    !icon.toString().endsWith("-bulk") && !icon.toString().endsWith("-two"),
};

export const DEFAULT_ICON_COLOR = "224 71.4% 4.1%";

export const ICON_COLORS: IconColor[] = [
  { hsl: "0 72% 51%", text: "Red", value: "red" },
  { hsl: "25 95% 53%", text: "Orange", value: "orange" },
  { hsl: "45 93% 47%", text: "Yellow", value: "yellow" },
  { hsl: "142 76% 36%", text: "Green", value: "green" },
  { hsl: "186 100% 42%", text: "Cyan", value: "cyan" },
  { hsl: "217 91% 60%", text: "Blue", value: "blue" },
  { hsl: "271 76% 53%", text: "Purple", value: "purple" },
  { hsl: "322 81% 43%", text: "Pink", value: "pink" },
];
