import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import NotFound from "./pages/not-found/NotFound";
import Details from "./pages/details/Details";
import ContextProvider from "./context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: "/:showId",
    element: <Details />,
    errorElement: <NotFound />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
