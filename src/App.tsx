import "./App.css";
import { FaPlus, FaCheckCircle, FaClock, FaSearch } from "react-icons/fa"; // Added some nice dashboard icons
import Card from "./components/card";

function App() {
  return (
    <div className="flex flex-col py-10 px-20 gap-10 min-h-screen text-text-primary">
      {/* Top Header Section */}
      <div className="flex flex-row justify-between items-end w-full">
        {/* Metric Cards */}
        <div className="flex flex-row gap-6">
          {/* Completed Card */}
          <div className="w-55 h-30 border border-success/30 rounded-2xl flex flex-col justify-between p-5 bg-success/5 hover:bg-success/10 transition-colors">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-semibold tracking-wide text-success uppercase">Completed</span>
              <FaCheckCircle className="text-success/70 text-lg" />
            </div>
            <p className="text-4xl font-bold tracking-tight">10</p>
          </div>

          {/* Pending Card */}
          <div className="w-55 h-30 border border-warning/30 rounded-2xl flex flex-col justify-between p-5 bg-warning/5 hover:bg-warning/10 transition-colors">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-semibold tracking-wide text-warning uppercase">Pending</span>
              <FaClock className="text-warning/70 text-lg" />
            </div>
            <p className="text-4xl font-bold tracking-tight">10</p>
          </div>
        </div>

        {/* Filter & Search Controls (Pinned Right and Aligned to Bottom) */}
        <div className="flex flex-row gap-3 items-center">
          {/* Search Input Wrapper with Icon */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-text-primary/40 text-sm" />
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-transparent border border-text-primary/20 hover:border-text-primary/40 focus:border-primary/60 rounded-xl pl-9 pr-4 py-2 text-sm outline-none transition-colors w-[240px]"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            name="sort"
            id="dropdown"
            className="bg-transparent border border-text-primary/20 hover:border-text-primary/40 focus:border-primary/60 px-3 py-2 rounded-xl text-sm outline-none transition-colors cursor-pointer"
          >
            <option value="ascending" className="bg-slate-900 text-white">
              Sort A-Z
            </option>
            <option value="descending" className="bg-slate-900 text-white">
              Sort Z-A
            </option>
          </select>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-mono font-bold tracking-tight">Projects</h1>
          <button className="flex flex-row gap-2 items-center text-sm font-medium py-2 px-4 border border-primary/20 rounded-xl bg-secondary/80 hover:bg-secondary transition-all cursor-pointer shadow-sm">
            Create <FaPlus className="text-xs" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
