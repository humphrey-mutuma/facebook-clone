import { Avatar } from "@material-ui/core";
import "./SidebarComponent.css";

const SidebarComponent = ({ Icon, src, title }) => {
  return (
    <div className="sidebarComponent">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarComponent;
