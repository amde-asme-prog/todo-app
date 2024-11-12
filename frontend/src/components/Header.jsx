import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="p-8 flex justify-between items-center bg-gray-100 gap-x-4 shadow-sm">
      <h1 className="text-4xl font-bold text-center">Todo App</h1>

      {/* Search Input Section */}
      <div className="relative flex items-center shadow-sm">
        <input
          type="text"
          placeholder="Search your tasks here..."
          className="w-[40rem] bg-white rounded-full px-5 py-2 outline-none"
        />
        <button className="absolute -right-2 bg-gray-200 rounded-full p-1 content-center">
          <FontAwesomeIcon icon={faSearch} className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Right Section with Notifications and Calendar */}
      <ul className="flex self-end justify-around items-center gap-4">
        <li>
          <button className="bg-gray-200 rounded-full p-2">
            <FontAwesomeIcon icon={faBell} className="h-6 w-6 text-gray-600" />
          </button>
        </li>
        <li>
          <button className="bg-gray-200 rounded-full p-2">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="h-6 w-6 text-gray-600"
            />
          </button>
        </li>
        <li>
          <p className="text-sm">Tuesday</p>
          <p className="text-xs text-gray-500">2023-05-01</p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
