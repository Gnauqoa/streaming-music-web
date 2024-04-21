import { NavLink } from "react-router-dom";

//Linked list items
function ListItem({ name, id }: { name: string; id: string }) {
  return (
    <li className="side-list">
      <NavLink
        to={`/playlist/${id}`}
        className="list-link"
        style={({ isActive }) => (isActive ? { color: "#fff" } : {})}
      >
        <div className="list-wrapper">{name}</div>
      </NavLink>
    </li>
  );
}

export default ListItem;
