import { Link } from "react-router-dom";
import {
  MdAccountBox,
  MdDashboard,
  MdDownload,
  MdLogout,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import * as path from "../../assets/data/path";
import { Active } from "../../assets/data/Active";

const Navlinks = ({ from = "medScreen" }) => {
  const List = [
    {
      icon: <MdDashboard />,
      name: "Dashboard",
      path: path.DashboardPath,
      gap: true,
    },
    {
      icon: <MdAccountBox />,
      name: "Accordians",
      path: path.AccordiansPath,
      gap: false,
    },
    {
      icon: <MdDownload />,
      name: "Download",
      path: "/download",
      gap: false,
    },
    {
      icon: <MdPerson />,
      name: "Profile",
      path: "/profile",
      gap: true,
    },
    {
      icon: <MdSettings />,
      name: "Settings",
      path: "/settings",
      gap: false,
    },
    {
      icon: <MdLogout />,
      name: "Logout",
      path: "/",
      gap: false,
    },
  ];
  return (
    <>
      {from}
      {List.map((x, index) => (
        <div
          key={index}
          role="button"
          className={` ${Active(x.path)? "border-end" : ""} border-dark d-flex justify-content-start align-items-center gap-2 mt-4 ${
            x.gap ? "mt-5" : "mt-3"
          }`}
        >
          {x.icon}
          <Link className="_Link" to={x.path}>
            {x.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
