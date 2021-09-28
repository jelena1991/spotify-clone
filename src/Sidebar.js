import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/HomeSharp";
import SearchIcon from "@mui/icons-material/SearchSharp";
import LibraryIcon from "@mui/icons-material/LibraryMusicSharp";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryIcon} title="Your library" />
      <br />
      <strong className="sidebar__title"> PLAYLISTS </strong>
      <hr />
    </div>
  );
}

export default Sidebar;
