import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import NotFound from "./pages/not-found/NotFound";
import DetailedPage from "./pages/details/DetailedPage";
import ContextProvider from "./context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseNamePlug />,
    errorElement: <NotFound />,
  },
  {
    path: "/test-tv-shows",
    element: <MainPage />,
  },
  {
    path: "/test-tv-shows/:name",
    element: <DetailedPage />,
    errorElement: <NotFound />,
  },
]);

function BaseNamePlug() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/test-tv-shows");
  }, []);
  return <></>;
}

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
