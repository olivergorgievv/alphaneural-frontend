import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function RootPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]); // Scroll to top when pathname changes

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootPage;
