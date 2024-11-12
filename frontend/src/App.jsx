import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";
export default function App() {
  return (
    <div>
      <Header />
      <main className="p-8 flex justify-center items-center">
        <Sidebar />

        <section className="w-full max-w-4xl ml-8">
          {/* Main section for displaying todo lists */}
          <h2 className="text-2xl font-bold mb-4">My Todo Lists</h2>

          {/* Todo list status */}
          <div className="mb-4 flex gap-8">
            <div className="bg-gray-100 p-4 rounded shadow-md w-1/4 text-center">
              <h3 className="text-lg font-semibold">All Todos</h3>
              <p className="text-xl">8</p>
            </div>
            <div className="bg-green-100 p-4 rounded shadow-md w-1/4 text-center">
              <h3 className="text-lg font-semibold">Completed</h3>
              <p className="text-xl">5</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded shadow-md w-1/4 text-center">
              <h3 className="text-lg font-semibold">In Progress</h3>
              <p className="text-xl">3</p>
            </div>
          </div>

          {/* Add Todo */}
          <div className="bg-white p-4 rounded shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Add New Todo</h3>
            <input
              type="text"
              placeholder="Enter new task"
              className="border p-2 w-full mb-4 rounded"
            />
            <button className="bg-blue-500 text-white p-2 rounded">
              Add Todo
            </button>
          </div>

          {/* Todo List */}
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Todo List</h3>
            <ul className="list-none">
              {/* Sample todos */}
              <li className="flex items-center justify-between mb-4">
                <input type="checkbox" className="mr-4" />
                <span>Finish documentation</span>
                <button className="text-red-500">Delete</button>
              </li>
              <li className="flex items-center justify-between mb-4">
                <input type="checkbox" className="mr-4" />
                <span>Complete report</span>
                <button className="text-red-500">Delete</button>
              </li>
              <li className="flex items-center justify-between mb-4">
                <input type="checkbox" className="mr-4" />
                <span>Prepare for presentation</span>
                <button className="text-red-500">Delete</button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
