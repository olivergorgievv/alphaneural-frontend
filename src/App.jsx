import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./website/pages/RootPage";
import Home from "./website/pages/Home";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      // {
      //   path: "products",
      //   element: <ProductsPage />,
      //   children: [{ path: ":id", element: <SingleProducts /> }],
      // },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
