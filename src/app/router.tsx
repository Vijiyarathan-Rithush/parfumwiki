import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { HomePage } from "../pages/HomePage";
import { PerfumeListPage } from "../pages/PerfumeListPage";
import { PerfumeDetailPage } from "../pages/PerfumeDetailPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "perfumes", element: <PerfumeListPage /> },
      { path: "perfumes/:slug", element: <PerfumeDetailPage/>},
    ],
  },
]);
