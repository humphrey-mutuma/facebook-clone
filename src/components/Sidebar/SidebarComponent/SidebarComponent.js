import { Avatar } from "@material-ui/core";
import "./SidebarComponent.css";

const SidebarComponent = ({ Icon, style, src, title }) => {
  return (
    <div className="sidebarComponent">
      {src && <Avatar className="sidebarComponent__Avatar" src={src} />}
      {Icon && <Icon style={style} />}
      <h4 className="sidebarComponent__title">{title}</h4>
    </div>
  );
};

export default SidebarComponent;
