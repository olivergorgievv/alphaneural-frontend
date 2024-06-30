import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./website/pages/Home";
import Roadmap from "./website/pages/Roadmap";
import RootPage from "./website/pages/RootPage";
import Tokenomics from "./website/pages/Tokenomics";
import BlogSection from "./website/components/Articles";
import HubDecentralized from "./website/pages/TextRichPages/HubDecentralized";
import HubCrowdsourced from "./website/pages/TextRichPages/HubCrowdsourced";
import StudiesFinancial from "./website/pages/TextRichPages/StudiesFinancial";
import StudiesHealthcare from "./website/pages/TextRichPages/StudiesHealthcare";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "roadmap", element: <Roadmap /> },
      { path: "tokenomics", element: <Tokenomics /> },
      { path: "blog", element: <BlogSection /> },
      { path: "hub-decentralized", element: <HubDecentralized /> },
      { path: "hub-crowdsourced", element: <HubCrowdsourced /> },
      { path: "studies-financial", element: <StudiesFinancial /> },
      { path: "studies-healthcare", element: <StudiesHealthcare /> },
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
