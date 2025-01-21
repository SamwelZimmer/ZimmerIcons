"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { IconName, IconVariant, IconColor } from "@/lib/types";
import {
  ALL_ICONS,
  DEFAULT_ICON_COLOR,
  ICON_COLORS,
  ICON_VARIANTS,
} from "@/lib/constants";
import { useMounted } from "@/hooks/use-mounted";
import ServerLoadingPage from "@/components/ServerLoadingPage";
import { getIconsByVariant } from "@/lib/utils";

interface AppContextProviderProps {
  children: ReactNode;
}

export interface AppContextType {
  searchQuery: string;
  setSearchQuery: (_searchQuery: string) => void;
  filteredIcons: IconName[];
  activeIcon: IconName | null;
  setActiveIcon: (_activeIcon: IconName | null) => void;
  activeVariant: IconVariant | null;
  setActiveVariant: (_activeVariant: IconVariant | null) => void;
  activeColor: IconColor | null;
  setActiveColor: (_activeColor: IconColor | null) => void;
}

const defaultContextValue: AppContextType = {
  searchQuery: "",
  setSearchQuery: () => {},
  filteredIcons: ALL_ICONS,
  activeIcon: null,
  setActiveIcon: () => {},
  activeVariant: null,
  setActiveVariant: () => {},
  activeColor: null,
  setActiveColor: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("search") || "";
  });
  const [activeVariant, setActiveVariant] = useState<IconVariant | null>(() => {
    const params = new URLSearchParams(window.location.search);
    const variantValue = params.get("variant");
    return ICON_VARIANTS.find((v) => v.value === variantValue) || null;
  });
  const [activeColor, setActiveColor] = useState<IconColor | null>(() => {
    const params = new URLSearchParams(window.location.search);
    const colorValue = params.get("color");
    return ICON_COLORS.find((c) => c.value === colorValue) || null;
  });
  const [filteredIcons, setFilteredIcons] = useState<IconName[]>(ALL_ICONS);
  const [activeIcon, setActiveIcon] = useState<IconName | null>(null);

  const isMounted = useMounted();

  useEffect(() => {
    // 1. update URL query params based on state
    const params = new URLSearchParams(window.location.search);

    // handle search query
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }

    // handle icon variants
    if (activeVariant) {
      params.set("variant", activeVariant.value);
    } else {
      params.delete("variant");
    }

    // handle colour
    if (activeColor) {
      params.set("color", activeColor.value);
    } else {
      params.delete("color");
    }

    // construct the new URL (with or without the `search` param)
    const newQueryString = params.toString();
    const newUrl = newQueryString
      ? `?${newQueryString}`
      : window.location.pathname;

    // replace the current history state so we don't create extra back/forward entries
    window.history.replaceState({}, "", newUrl);

    // 2. filter the icons
    let iconsToShow: IconName[] = ALL_ICONS;

    // filter by search query
    if (searchQuery) {
      iconsToShow = iconsToShow.filter((icon) =>
        icon
          .toString()
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      );
    }

    // filter by icon variant
    iconsToShow = getIconsByVariant(iconsToShow, activeVariant);

    setFilteredIcons(iconsToShow);

    // 3. text colour stuff
    document.documentElement.style.setProperty(
      "--icon",
      activeColor?.hsl ?? DEFAULT_ICON_COLOR
    );
  }, [searchQuery, activeVariant, activeColor]);

  const valueObj: AppContextType = {
    searchQuery,
    setSearchQuery,
    filteredIcons,
    activeIcon,
    setActiveIcon,
    activeVariant,
    setActiveVariant,
    activeColor,
    setActiveColor,
  };

  if (isMounted) {
    return (
      <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>
    );
  }

  return <ServerLoadingPage />;
};

export default AppContextProvider;
