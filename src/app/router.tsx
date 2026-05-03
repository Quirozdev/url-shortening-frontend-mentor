import { createBrowserRouter } from "react-router";
import AppLayout from "@/app/layouts/AppLayout";
import { landingRoutes } from "@/features/landing/routes";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: landingRoutes,
    },
  ],
  {
    basename: "/url-shortening-frontend-mentor",
  },
);
