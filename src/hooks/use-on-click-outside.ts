import * as React from "react";

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      // if the click is not inside the ref's element, invoke the handler
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, handler]);
}
