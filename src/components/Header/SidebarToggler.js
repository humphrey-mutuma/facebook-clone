import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import DehazeRoundedIcon from "@material-ui/icons/DehazeRounded";
import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(0),
  },
}));

export default function SidebarToggler() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // logout the user
  return (
    <div>
      <DehazeRoundedIcon aria-describedby={id} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography className={classes.typography}>
          <div className="sidebarToggler">
            <Sidebar />
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
