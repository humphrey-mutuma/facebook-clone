import "./Header.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import GroupIcon from "@material-ui/icons/Group";
import { Avatar, IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import { useStateValue } from "../../StateProvider";
import SimplePopover from "./SimplePopover";
import DehazeRoundedIcon from "@material-ui/icons/DehazeRounded";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__Left">
        <FacebookIcon className="fbIcon" fontSize="large" />
        <span className="header__left--search">
          <SearchIcon />
          <input
            className="header__left--input"
            type="text"
            placeholder="Search Facebook"
          />
        </span>
        <span className="header__left--expand">
          <IconButton className="header__rightIcons">
            <DehazeRoundedIcon size="large" />
          </IconButton>
        </span>
      </div>

      <div className="header__middle">
        <div className="header__middle--active">
          <HomeIcon />
        </div>
        <div>
          <VideoLibraryIcon />
        </div>
        <div>
          <StorefrontIcon />
        </div>
        <div>
          <GroupIcon />
        </div>
        <div>
          <AccountBalanceWalletOutlinedIcon />
        </div>
      </div>

      <div className="header__right">
        <span>
          <Avatar src={user.photoURL} className="header__rightAvatar" />
          {user.displayName}
        </span>
        <IconButton className="header__rightIcons">
          <AppsIcon />
        </IconButton>
        <IconButton className="header__rightIcons">
          <ChatIcon />
        </IconButton>
        <IconButton className="header__rightIcons">
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton className="header__rightIcons">
          <SimplePopover />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
