import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar.tsx";
import routes from "./lib/routes.ts";
import Home from "./views/Home.tsx";
import LikedImages from "./views/LikedImages.tsx";
import UserDetails from "./views/UserDetails.tsx";
import Users from "./views/Users.tsx";

const router = createBrowserRouter([
  {
    // this should be layout not navbar but i dont care to create a footer anyways so w/e
    path: routes.home,
    Component: Navbar,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: routes.liked,
        Component: LikedImages,
      },
      {
        path: routes.users,

        children: [
          {
            index: true,
            Component: Users,
          },
          { path: ":id", Component: UserDetails },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
