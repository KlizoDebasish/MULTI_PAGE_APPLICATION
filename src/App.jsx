import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import NewVehicles from "./components/vehicles/NewVehicles";
import UpcomingVehicles from "./components/vehicles/UpcomingVehicles";
import Bike from "./components/vehicles/allvehicles/twowheelers/Bike";
import Scooty from "./components/vehicles/allvehicles/twowheelers/Scooty";
import Cycle from "./components/vehicles/allvehicles/twowheelers/Cycle";
import Auto from "./components/vehicles/allvehicles/threewheelers/Auto";
import Toto from "./components/vehicles/allvehicles/threewheelers/Toto";
import Rickshaw from "./components/vehicles/allvehicles/threewheelers/Rickshaw";
import Suv from "./components/vehicles/allvehicles/fourwheelers/Suv";
import Muv from "./components/vehicles/allvehicles/fourwheelers/Muv";
import Sedan from "./components/vehicles/allvehicles/fourwheelers/Sedan";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new-vehicles",
    element: <NewVehicles />,
  },
  {
    path: "/upcoming-vehicles",
    element: <UpcomingVehicles />,
  },

  // two-wheelers
  {
    path: "/two-wheelers/bike",
    element: <Bike />,
  },
  {
    path: "/two-wheelers/scooty",
    element: <Scooty />,
  },
  {
    path: "/two-wheelers/cycle",
    element: <Cycle />,
  },

  // three-wheelers
  {
    path: "/three-wheelers/auto",
    element: <Auto />,
  },
  {
    path: "/three-wheelers/toto",
    element: <Toto />,
  },
  {
    path: "/three-wheelers/rickshaw",
    element: <Rickshaw />,
  },

  // four-wheelers
  {
    path: "/four-wheelers/suv",
    element: <Suv />,
  },
  {
    path: "/four-wheelers/muv",
    element: <Muv />,
  },
  {
    path: "/four-wheelers/sedan",
    element: <Sedan />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
