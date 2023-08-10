import { React } from "react";
// import { useNavigate } from "react-router-dom";
import {
  Instagram,
  IconHome,
  IconNotification,
  IconSearch,
  IconAdd,
  IconNavigation,
  IconReels,
  IconMesengger,
} from "../../asset/png";

export default function SidebarNav() {
  // const navigate = useNavigate();

  // function toHome() {
  //   navigate("/");
  // }
  // function toInboxPage() {
  //   navigate("/Inbox");
  // }
  // function toProfilePage() {
  //   navigate("/Profile");
  // }

  const sidemenu = [
    {
      id: 1,
      name: "Beranda",
      icon: IconHome,
      page: "/",
    },
    {
      id: 2,
      name: "Cari",
      icon: IconSearch,
      page: "/Search",
    },
    {
      id: 3,
      name: "Jelajahi",
      icon: IconNavigation,
      page: "/Explore",
    },
    {
      id: 4,
      name: "Reels",
      icon: IconReels,
      page: "/Reels",
    },
    {
      id: 5,
      name: "Pesan",
      icon: IconMesengger,
      page: "/Inbox",
    },
    {
      id: 6,
      name: "Notifikasi",
      icon: IconNotification,
      page: "/Notification",
    },
    {
      id: 7,
      name: "Buat",
      icon: IconAdd,
      page: "/Create",
    },
    {
      id: 8,
      name: "Profile",
      icon: "",
      page: "/Profile",
    },
    {
      id: 9,
      name: "Lainya",
      icon: "",
      page: "/Any",
    },
  ];

  return (
    <div className="wrapper">
      <div
        style={{
          // backgroundColor: "blue",
          height: "70px",
          width: "270px",
        }}
      >
        <div
          style={
            {
              // height: "100px",
              // width: "300px",
              // border: "solid",
              // borderColor: "red",
            }
          }
        >
          <img
            src={Instagram}
            alt={"logo"}
            // className="object-cover h-5 w-10"
            style={{ alignItems: "center", height: "70px" }}
          />
        </div>
      </div>
      <nav className="wrapperIcon">
        {sidemenu.map((item, index) => (
          <ul className="space-y-2 mt-3 ">
            <li key={index} className="">
              <a href={item.page} className="text-red hover:bg-gray-200 flex">
                <div
                  style={{ height: "60px", width: "100px" }}
                  className="hover:scale-125 transition duration-500 cursor-pointer "
                >
                  <img
                    src={item.icon}
                    className="object-cover h-6 w-6 mt-3 ml-4 "
                    alt=""
                  />
                </div>
                <div
                  style={{
                    // color: "red",
                    // border: "solid",
                    height: "60px",
                    width: "100%",
                    // backgroundColor: "black",
                  }}
                >
                  <div className=" items-center">{item.name}</div>
                </div>
              </a>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
}
