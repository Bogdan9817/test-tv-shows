import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import NotFound from "./pages/not-found/NotFound";
import DetailedPage from "./pages/details/DetailedPage";
import ContextProvider from "./context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/:name",
    element: <DetailedPage />,
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
