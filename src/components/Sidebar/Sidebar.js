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
import LayersClearIcon from "@material-ui/icons/LayersClear";
import { useStateValue } from '../../StateProvider';

const Sidebar = () => {
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="sidebar">
      <SidebarComponent src={user.photoURL} title={user.displayName} />
      <SidebarComponent
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
        style={{ fill: "pink" }}
      />
      <SidebarComponent
        Icon={PeopleIcon}
        style={{ fill: "blue" }}
        title="Friends"
      />
      <SidebarComponent
        Icon={GroupAddIcon}
        title="Groups"
        style={{ fill: "blue" }}
      />
      <SidebarComponent
        Icon={StorefrontIcon}
        title="Marketplace"
        style={{ fill: "skyBlue" }}
      />
      <SidebarComponent
        Icon={VideoLibraryIcon}
        title="Videos"
        style={{ fill: "skyBlue" }}
      />
      <SidebarComponent
        Icon={EventIcon}
        title="Events"
        style={{ fill: "rgba(255, 0, 0, 0.473)" }}
      />
      <SidebarComponent
        Icon={RestoreIcon}
        title="Memories"
        style={{ fill: "blue" }}
      />
      <SidebarComponent
        Icon={BookmarkIcon}
        title="Saved"
        style={{ fill: "pink" }}
      />
      <SidebarComponent
        Icon={EmojiFlagsIcon}
        title="Pages"
        style={{ fill: "orange" }}
      />
      <SidebarComponent
        Icon={ExpandMoreOutlined}
        title="More"
        style={{ fill: "black" }}
      />
      <SidebarComponent
        Icon={ExpandMoreOutlined}
        title="More"
        style={{ fill: "black" }}
      />

      <footer className="sidebar__footer">
        <h4>Your shortcuts</h4>
        <div>
          <SidebarComponent
            Icon={LayersClearIcon}
            title="AI - Machine Learning | Deep Learning"
            style={{ fill: "blue" }}
          />
        </div>
        <br />

        <p>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Advertising</span>
          <span>Ad choices</span>
          <span>Cookies</span>
          <span>Cookies</span>
          <span>More</span>
          <span>Facebook &copy; 2021 </span>
        </p>
      </footer>
    </div>
  );
}

export default Sidebar
