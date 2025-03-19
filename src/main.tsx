import { StrictMode, useReducer } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import reducerContext from "./context/LibraryWishlistContext.ts";
import { initialState, reducer } from "./reducer/reducer.ts";

const queryClient = new QueryClient();

const [state, dispatch] = useReducer(reducer, initialState);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <reducerContext.Provider value={{ state, dispatch }}>
          <RouterProvider router={router} />
        </reducerContext.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
