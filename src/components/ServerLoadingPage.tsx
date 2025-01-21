import React from "react";

import Icon from "@/components/Icon";

export default function ServerLoadingPage() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-background">
      <span className="font-black text-5xl animate-custom text-muted-foreground">
        <Icon name="spinner" className="h-24 w-24 animate-spin" />
      </span>
    </div>
  );
}
