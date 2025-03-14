import { createBrowserRouter } from "react-router-dom";
import HomepageLayout from "./HomepageLayout";
import Games from "./my-components/games/Games";
import GamesByGenre from "./my-components/games/GamesByGenre";
import GamePage from "./my-components/games/gamePage/GamePage";
import ErrorPage from "./my-components/general/ErrorPage";

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
      { path: "genre/:genre/game/:game", element: <GamePage /> },
      { path: "game/:game", element: <GamePage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
