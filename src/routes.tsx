import { createBrowserRouter } from "react-router-dom";
import HomepageLayout from "./HomepageLayout";
import Games from "./my-components/games/Games";
import GamesByGenre from "./my-components/games/GamesByGenre";
import GamePage from "./my-components/games/GamePage";

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
        path: "genre/:genre",
        element: <GamesByGenre />,
      },
      { path: "game/:game", element: <GamePage /> },
    ],
  },
]);

export default router;
