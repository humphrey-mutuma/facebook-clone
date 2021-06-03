import React from 'react'
import "./Sidebar.css";
import SidebarComponent from './SidebarComponent/SidebarComponent';
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EventIcon from "@material-ui/icons/Event";
import RestoreIcon from "@material-ui/icons/Restore";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarComponent
        src="https://cdn.pixabay.com/photo/2015/03/26/09/40/suit-690048_960_720.jpg"
        title="Humphrey Mutuma"
      />
      <SidebarComponent
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarComponent Icon={PeopleIcon} title="Friends" />
      <SidebarComponent Icon={GroupAddIcon} title="Groups" />
      <SidebarComponent Icon={StorefrontIcon} title="Marketplace" />
      <SidebarComponent Icon={VideoLibraryIcon} title="Videos" />
      <SidebarComponent Icon={EventIcon} title="Events" />
      <SidebarComponent Icon={RestoreIcon} title="Memories" />
      <SidebarComponent Icon={BookmarkIcon} title="Saved" />
      <SidebarComponent Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarComponent Icon={ExpandMoreOutlined} title="More" />
      <hr />
      <footer>
        <h4>Your shortcuts</h4>
        <div>
          <SidebarComponent Icon={ExpandMoreOutlined} title="More" />
          <SidebarComponent Icon={ExpandMoreOutlined} title="More" />
          <SidebarComponent Icon={ExpandMoreOutlined} title="More" />
          <SidebarComponent Icon={ExpandMoreOutlined} title="More" />
        </div>
        <p>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Advertising</span>
          <span>Ad choices</span>
          <span>Cookies</span>
          <span>Cookies</span>
          <span>More</span>
          <span>Facebook &Copy; 2021 </span>
        </p>
      </footer>
    </div>
  );
}

export default Sidebar
