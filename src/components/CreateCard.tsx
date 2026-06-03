import { FaXmark } from "react-icons/fa6";

export default function CreateCard({ onClose }: { onClose: () => void }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="w-xl bg-bg border border-text-primary/20 bg-background rounded-2xl shadow-2xl p-6 flex flex-col">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-bold">Create New Project</h2>
          <FaXmark className="text-3xl hover:text-text-primary/60 cursor-pointer" onClick={onClose} />
        </div>
        <form action="" className="flex flex-col pt-6 gap-4">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="name" className="text-md">
                Project Name
              </label>
              <input type="text" id="name" className="border border-white/20 hover:border-text-primary/40 focus:border-primary/60 px-3 py-1.5 outline-0 rounded-lg text-md" required />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="name" className="text-md">
                Project Status
              </label>
              <select
                name="sort"
                id="dropdown"
                className="bg-transparent border border-white/20 hover:border-text-primary/40 focus:border-primary/60 px-3 py-2 rounded-lg text-sm outline-none transition-colors cursor-pointer"
              >
                <option value="Completed" className="bg-slate-900 text-white">
                  Completed
                </option>
                <option value="In Progress" className="bg-slate-900 text-white">
                  In Progress
                </option>
                <option value="Backlog" className="bg-slate-900 text-white">
                  Backlog
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="description" className="text-md">
              Project Description
            </label>
            <textarea id="description" className="border h-30 border-white/20 hover:border-text-primary/40 focus:border-primary/60 px-3 py-2 outline-0 rounded-lg" required />
          </div>
          <button className="bg-primary/80 py-2 px-4 rounded-lg hover:bg-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
