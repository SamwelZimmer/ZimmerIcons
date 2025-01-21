import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { icons } from "@/lib/icon-map";
import { IconName, IconVariant } from "@/lib/types";
import { ALL_ICONS, VARIANT_FILTERS } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isValidIconName = (iconName: string): boolean => {
  return iconName in icons;
};

/**
 * Scores how well `iconTokens` match `queryTokens` by:
 * - Giving more points for exact position matches
 * - Giving fewer points if the token is found elsewhere
 * - Weighting earlier tokens in the query more heavily
 */
function computeScore(queryTokens: string[], iconTokens: string[]): number {
  let totalScore = 0;
  const n = queryTokens.length;

  for (let i = 0; i < n; i++) {
    const token = queryTokens[i];
    // weight is higher for earlier tokens in the query so matching token[0] is more valuable than token[1].
    const weight = n - i;

    // check if this query token appears anywhere in the icon
    const hasMatch = iconTokens.includes(token);

    // check if there's a direct position match
    const isPositionMatch = i < iconTokens.length && iconTokens[i] === token;

    if (isPositionMatch) {
      // extra points for same-index match e.g. first token matching first token is more valuable
      totalScore += 2 * weight;
    } else if (hasMatch) {
      // if it's in the icon, but at a different position
      totalScore += 1 * weight;
    }
  }

  return totalScore;
}

/**
 * getSimilarIcons:
 * - Splits query and icon names by "-"
 * - Scores them using `computeScore`
 * - Excludes the queried icon itself
 * - Excludes icons with score 0 (no overlap)
 * - Sorts by descending score, then alphabetically
 * - Optionally returns only `limit` results
 */
export function getSimilarIcons(query: IconName, limit?: number): IconName[] {
  // 1. split and normalise the query into tokens
  const queryTokens = query
    .toString()
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((t) => t.toLowerCase());

  // 2. score each icon by how well it matches
  const scoredIcons = ALL_ICONS.map((iconName) => {
    const iconTokens = iconName
      .toString()
      .split("-")
      .map((t) => t.toLowerCase());
    const score = computeScore(queryTokens, iconTokens);

    return { iconName, score };
  });

  // 3. sort by descending score, then alphabetically
  scoredIcons.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score; // higher score first
    }
    return a.iconName.toString().localeCompare(b.iconName.toString());
  });

  // 4. filter out the exact queried icon and icons with no overlap
  let filtered = scoredIcons.filter(
    (item) => item.iconName !== query && item.score > 0
  );

  // 5. if a limit is provided, slice the array
  if (limit && limit > 0) {
    filtered = filtered.slice(0, limit);
  }

  return filtered.map((item) => item.iconName);
}

/**
 * getIconsByVariant:
 * Filters the list of icons based on the provided variant.
 * - If variant is null/undefined => return ALL.
 * - Otherwise, use our variant->filter mapping.
 * - If we can't find a matching filter => return ALL.
 */
export function getIconsByVariant(
  icons: IconName[],
  variant?: IconVariant | null
): IconName[] {
  // If no variant is given, return everything
  if (!variant) return icons;

  // Try to find a filter function by `variant.value`
  const filterFn = VARIANT_FILTERS[variant.value];

  // If no filter exists (unrecognized variant), return all icons by default
  if (!filterFn) return icons;

  // Filter icons according to the matched function
  return icons.filter(filterFn);
}
