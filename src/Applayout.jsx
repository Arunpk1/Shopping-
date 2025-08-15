import { Outlet } from "react-router";
import Header from "./Header.jsx";
import useonlinestatus from "./useonlinestatus.jsx";
import { useEffect } from "react";

function Applayout() {
  const status = useonlinestatus();

  useEffect(() => {
    if (!status) {
      alert("You are offline. Reconnect to continue.");
    } else {
      console.log("online");
    }
  }, [status]); 

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Applayout;
