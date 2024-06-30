import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/react.svg";
import { useCheckMobileScreen } from "../utils/isMobile";

export default function NavBar() {
  const location = useLocation();

  const isMobile = useCheckMobileScreen();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#080214]/50 backdrop-blur-lg">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <NavLink to={"/"}>
              <img src={logo} className="h-12" alt="AlphaNeural AI Logo" />
            </NavLink>
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none nav:hidden"
            aria-controls="navbar-dropdown"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div
            className={`w-full nav:block nav:w-auto ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-primary/30 p-4 font-medium nav:mt-0 nav:flex-row nav:space-x-8 nav:border-0 nav:p-0 rtl:space-x-reverse">
              <li>
                <Dropdown
                  className="bg-[#0C041B] text-white border-[#241B3C] rounded-lg "
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <button className=" hover:bg-accent-dark flex w-full items-center justify-between rounded px-3 py-2 text-white active:text-primary nav:w-auto nav:border-0 nav:p-0 nav:hover:bg-transparent nav:hover:text-primary">
                      AlphaNeural Hub
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path stroke="currentColor" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                  )}
                >
                  <Link to={"hub-decentralized"}>
                    <Dropdown.Item className="hover:bg-[#181229]">
                      Decentralized AI Marketplace
                    </Dropdown.Item>
                  </Link>
                  <Link to={"hub-crowdsourced"}>
                    <Dropdown.Item className="hover:bg-[#181229]">
                      Crowdsourced AI Training
                    </Dropdown.Item>
                  </Link>
                  <Dropdown
                    label="Dropdown right"
                    placement={`${isMobile ? "down" : "right"}`}
                    className={`bg-[#0C041B] text-white border-[#241B3C] ${
                      isMobile ? "mt-12" : ""
                    }`}
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <button
                        className="flex items-center gap-[90px] justify-between 
                         text-white active:text-primary nav:border-0 nav:hover:text-primary hover:bg-[#181229]"
                      >
                        <span className="px-4 py-2 text-sm ">Case studies</span>
                        <svg
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25 3.36438L9.33333 7.44771L5.25 11.531"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  >
                    <Link to={"studies-financial"}>
                      <Dropdown.Item className="hover:bg-[#181229] text-xs">
                        Decentralized AI Marketplaces
                      </Dropdown.Item>
                    </Link>
                    <Link to={"studies-healthcare"}>
                      <Dropdown.Item className=" hover:bg-[#181229] text-xs">
                        Crowdsourced AI Training
                      </Dropdown.Item>
                    </Link>
                  </Dropdown>
                </Dropdown>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `block rounded px-3 py-2 hover:bg-accent-dark nav:border-0 nav:p-0 nav:hover:bg-transparent nav:hover:text-primary ${
                      isActive ? "text-primary" : "text-white"
                    }`
                  }
                  to="roadmap"
                >
                  Roadmap
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `block rounded px-3 py-2 hover:bg-accent-dark nav:border-0 nav:p-0 nav:hover:bg-transparent nav:hover:text-primary ${
                      isActive ? "text-primary" : "text-white"
                    }`
                  }
                  to="tokenomics"
                >
                  Tokenomics
                </NavLink>
              </li>
              <li>
                <a
                  href="https://whitepaper.alphaneural.io/"
                  className="block rounded px-3 py-2 text-white hover:bg-accent-dark nav:border-0 nav:p-0 nav:hover:bg-transparent nav:hover:text-primary"
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <button className="hidden items-center justify-center gap-4 rounded-full border-2 border-primary/50 px-10 py-2 text-description-gray nav:flex">
            Launch App
          </button>
        </div>
      </nav>
    </>
  );
}
