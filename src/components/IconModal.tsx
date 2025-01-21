import React from "react";

import { useAppContext } from "@/components/AppProvider";
import Icon from "@/components/Icon";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { IconName } from "@/lib/types";
import { getSimilarIcons } from "@/lib/utils";
import HorizontalScrollWrapper from "./HorizontalScrollWrapper";

export default function IconModal() {
  const { activeIcon, setActiveIcon } = useAppContext();

  const { isCopied, copyToClipboard } = useCopyToClipboard();

  if (!activeIcon) return;

  const similarIcons = getSimilarIcons(activeIcon);

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 max-w-2xl w-full px-4 sm:px-0">
      <div className="flex gap-4 p-4 rounded-2xl border bg-background shadow">
        <div className="aspect-square size-32 rounded-md bg-muted shadow-inner flex items-center justify-center">
          <Icon name={activeIcon} className="w-12 h-12 text-icon" />
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center -mt-0.5">
              <span className="text-lg font-mono">{activeIcon}</span>
              <button
                onClick={() => copyToClipboard(activeIcon.toString())}
                className="hover:bg-muted size-6 rounded-md flex items-center justify-center text-muted-foreground"
              >
                <Icon name={isCopied ? "copy-bulk" : "copy"} />
              </button>
            </div>

            <button
              onClick={() => setActiveIcon(null)}
              className="hover:bg-muted size-6 rounded-md -mt-1 -mr-1 flex items-center justify-center text-muted-foreground"
            >
              <Icon name="x" />
            </button>
          </div>

          <hr className="mt-2 mb-4" />

          <div className="flex flex-col h-full gap-1">
            <span className="text-xs text-muted-foreground">SIMILAR</span>

            <div className="flex gap-2 h-full -mb-1 max-w-[calc(672px-128px-48px)]">
              {similarIcons.length > 0 ? (
                <HorizontalScrollWrapper>
                  {similarIcons.map((icon) => (
                    <SimilarIconItem key={icon} icon={icon} />
                  ))}
                </HorizontalScrollWrapper>
              ) : (
                <div className="h-full flex items-center px-4 border border-dashed rounded-md bg-info-bg border-info-border text-info-text">
                  <span>No similar icons found</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SimilarIconItem = ({ icon }: { icon: IconName }) => {
  const { setActiveIcon } = useAppContext();

  return (
    <button
      onClick={() => setActiveIcon(icon)}
      className="flex items-center justify-center hover:bg-muted border rounded-md aspect-square size-14"
    >
      <Icon name={icon} className="size-8 text-icon" />
    </button>
  );
};
