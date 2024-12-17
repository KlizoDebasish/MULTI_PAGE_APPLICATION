import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-gray-400 to-orange-200 sticky top-0 z-10">
        {/* for small screen */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/new-vehicles" className="font-semibold bg-gradient-to-r from-black to-orange-600 bg-clip-text text-transparent">
                  New Vehicles
                </Link>
              </li>

              <li>
                {/* submenu for two wheels */}
                <details>
                  <summary className="font-semibold text-black">
                    Vehicles
                  </summary>
                  <ul className="p-2">
                    <details className="p-2">
                      <summary className=" cursor-pointer">
                        Two Wheelers
                      </summary>
                      <ul className="p-2">
                        <li>
                          <Link to="/two-wheelers/cycle">Cycle</Link>
                        </li>
                        <li>
                          <Link to="/two-wheelers/bike">Bike</Link>
                        </li>
                        <li>
                          <Link to="/two-wheelers/scooty">Scooty</Link>
                        </li>
                      </ul>
                    </details>

                    {/* submenu for three wheels */}
                    <details className="p-2">
                      <summary className=" cursor-pointer">
                        Three Wheelers
                      </summary>
                      <ul className="p-2">
                        <li>
                          <Link to="/three-wheelers/auto">Auto</Link>
                        </li>
                        <li>
                          <Link to="/three-wheelers/toto">Toto</Link>
                        </li>
                        <li>
                          <Link to="/three-wheelers/rickshaw">Rickshaw</Link>
                        </li>
                      </ul>
                    </details>

                    {/* submenu for four wheels */}
                    <details className="p-2">
                      <summary className=" cursor-pointer">
                        Four Wheelers
                      </summary>
                      <ul className="p-2">
                        <li>
                          <Link to="/four-wheelers/suv">SUV</Link>
                        </li>
                        <li>
                          <Link to="/four-wheelers/muv">MUV</Link>
                        </li>
                        <li>
                          <Link to="/four-wheelers/Sedan">Sedana</Link>
                        </li>
                      </ul>
                    </details>
                  </ul>
                </details>
              </li>

              <li>
                <Link to="/upcoming-vehicles">Upcoming Vehicles</Link>
              </li>
            </ul>
          </div>
          <div>
            <a className="text-xl font-bold m-0 p-0 sm:text-2xl bg-gradient-to-r from-orange-600 to-black bg-clip-text text-transparent">
              NVS
            </a>
            <p className="text-xs font-mono m-0 p-0 bg-gradient-to-r from-black to-orange-600 bg-clip-text text-transparent">
              new vehicles store
            </p>
          </div>
        </div>
        {/* for larger screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/new-vehicles" className="font-semibold bg-gradient-to-r from-black to-orange-600 bg-clip-text text-transparent">
                New Vehicles
              </Link>
            </li>
            <li>
              {/* submenu for two wheels */}
              <details>
                <summary className="font-semibold text-black">Vehicles</summary>
                <ul className="p-2">
                  <details className="p-2">
                    <summary className=" cursor-pointer">Two Wheelers</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/two-wheelers/cycle">Cycle</Link>
                      </li>
                      <li>
                        <Link to="/two-wheelers/bike">Bike</Link>
                      </li>
                      <li>
                        <Link to="/two-wheelers/scooty">Scooty</Link>
                      </li>
                    </ul>
                  </details>

                  {/* submenu for three wheels */}
                  <details className="p-2">
                    <summary className=" cursor-pointer">
                      Three Wheelers
                    </summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/three-wheelers/auto">Auto</Link>
                      </li>
                      <li>
                        <Link to="/three-wheelers/toto">Toto</Link>
                      </li>
                      <li>
                        <Link to="/three-wheelers/rickshaw">Rickshaw</Link>
                      </li>
                    </ul>
                  </details>

                  {/* submenu for four wheels */}
                  <details className="p-2">
                    <summary className=" cursor-pointer">Four Wheelers</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/four-wheelers/suv">SUV</Link>
                      </li>
                      <li>
                        <Link to="/four-wheelers/muv">MUV</Link>
                      </li>
                      <li>
                        <Link to="/four-wheelers/Sedan">Sedana</Link>
                      </li>
                    </ul>
                  </details>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/upcoming-vehicles" className=" font-semibold bg-gradient-to-r from-black to-orange-600 bg-clip-text text-transparent">
                Upcoming Vehicles
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end sm:pr-2">
          <Link
            to="/"
            className="text-xl font-bold m-0 p-0 sm:text-2xl bg-gradient-to-r from-orange-600 to-black bg-clip-text text-transparent cursor-pointer"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
