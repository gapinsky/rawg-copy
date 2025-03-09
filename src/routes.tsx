import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import HomepageLayout from "./HomepageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "",
        element: <HomepageLayout />,
      },
    ],
  },
]);

export default router;
