import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SearchIcons from "@/components/SearchIcons";
import AppContextProvider from "@/components/AppProvider";
import IconDisplay from "@/components/IconDisplay";
import IconModal from "@/components/IconModal";
import "@/index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AppContextProvider>
        <main className="py-12 px-4">
          <div className="sticky top-0 pt-12 bg-background mb-4">
            <SearchIcons />
          </div>

          <IconDisplay />

          <IconModal />
        </main>
      </AppContextProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
