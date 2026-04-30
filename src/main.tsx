import { createRoot } from "react-dom/client";
import "@/index.css";
import "./features/translations/i18n";
import { RouterProvider } from "react-router";
import { router } from "@/app/router";
import AppProviders from "@/app/providers/provider";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/500-italic.css";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>,
);
