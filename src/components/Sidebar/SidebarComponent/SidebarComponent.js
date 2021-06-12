import { Avatar } from "@material-ui/core";
import "./SidebarComponent.css";

const SidebarComponent = ({ Icon, style, src, title }) => {
  return (
    <div className="sidebarComponent">
      {src && (
        <Avatar className="sidebarComponent__Avatar iconCenter" src={src} />
      )}
      {Icon && <Icon className="iconCenter" style={style} />}
      <h4 className="sidebarComponent__title">{title}</h4>
    </div>
  );
};

export default SidebarComponent;
