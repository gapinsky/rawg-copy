import { createBrowserRouter } from "react-router-dom";
import HomepageLayout from "./HomepageLayout";
import GamesGrid from "./GamesGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageLayout />,
    children: [
      {
        path: "",
        element: <GamesGrid />,
      },
    ],
  },
]);

export default router;
