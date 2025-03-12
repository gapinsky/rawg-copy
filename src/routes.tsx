import { createBrowserRouter } from "react-router-dom";
import HomepageLayout from "./HomepageLayout";
import Games from "./my-components/games/Games";
import GamesByGenre from "./my-components/games/GamesByGenre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageLayout />,
    children: [
      {
        path: "",
        element: <Games />,
      },
      {
        path: "/:genre",
        element: <GamesByGenre />,
      },
    ],
  },
]);

export default router;
