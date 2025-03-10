import { createBrowserRouter } from "react-router-dom";
import HomepageLayout from "./HomepageLayout";
import Games from "./my-components/games/Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageLayout />,
    children: [
      {
        path: "",
        element: <Games />,
      },
    ],
  },
]);

export default router;
