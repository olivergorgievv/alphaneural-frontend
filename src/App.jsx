import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./website/pages/Home";
import Roadmap from "./website/pages/Roadmap";
import RootPage from "./website/pages/RootPage";
import Tokenomics from "./website/pages/Tokenomics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "roadmap", element: <Roadmap /> },
      { path: "tokenomics", element: <Tokenomics /> },
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
