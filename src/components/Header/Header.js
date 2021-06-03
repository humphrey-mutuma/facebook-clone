import React from "react";
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
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";

const Header = () => {
  return (
    <div className="header">
      <div className="header__Left">
        <FacebookIcon className="fbIcon" fontSize="large" />
        <span className="header__left--search">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
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
          <Avatar className="header__rightAvatar" /> Humphrey
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
          <ArrowDropDownRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;