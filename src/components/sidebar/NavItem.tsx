import { CSSProperties, Component } from "react";
import { NavLink } from "react-router-dom";

class NavItem extends Component<{
  to: string;
  icon: React.ReactNode;
  label: string;
  data_tip?: string;
  data_for?: string;
  data_event?: string;
  style?: CSSProperties;
}> {
  render() {
    return (
      <li
        className="NavItem"
        data-tip={this.props.data_tip}
        data-for={this.props.data_for}
        data-event={this.props.data_event}
      >
        <NavLink
          to={this.props.to}
          className={({ isActive }) =>
            isActive ? "nav-link activeMainNav" : "nav-link"
          }
          style={this.props.style}
        >
          <div className="nav-icon">{this.props.icon}</div>
          <span>{this.props.label}</span>
        </NavLink>
      </li>
    );
  }
}

export default NavItem;
