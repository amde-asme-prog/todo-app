import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faTasks,
  faClipboardList,
  faListAlt,
  faCog,
  faLifeRing,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faTachometerAlt} />
          <p>Dashboard</p>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faTasks} />
          <p>Vital Tasks</p>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faClipboardList} />
          <p>My Task</p>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faListAlt} />
          <p>Task Categories</p>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faCog} />
          <p>Settings</p>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faLifeRing} />
          <p>Help</p>
        </li>
      </ul>
      <button className="flex items-center gap-4 mt-4 text-red-600">
        <FontAwesomeIcon icon={faSignOutAlt} />
        <p>Logout</p>
      </button>
    </aside>
  );
};

export default Sidebar;
