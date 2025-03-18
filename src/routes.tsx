import { createBrowserRouter } from "react-router-dom";
import HomepageLayout from "./HomepageLayout";
import Games from "./my-components/games/Games";
import GamesByGenre from "./my-components/games/GamesByGenre";
import GamePage from "./my-components/games/gamePage/GamePage";
import ErrorPage from "./my-components/general/ErrorPage";
import ProfilePage from "./my-components/profile/ProfilePage";
import LibraryPage from "./my-components/mylibrary/LibraryPage";
import WishlistPage from "./my-components/wishlist/WishlistPage";

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
        path: "profile/:nickname",
        element: <ProfilePage />,
      },
      {
        path: "library/:nickname",
        element: <LibraryPage />,
      },
      {
        path: "wishlist/:nickname",
        element: <WishlistPage />,
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
