import { FaBriefcase, FaChartBar, FaUser } from "react-icons/fa";

const DashboardLayout = ({ children }) => {

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 hidden md:flex flex-col justify-between">

        <div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10">
            JobTracker
          </h1>

          <nav className="space-y-4">

            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">

              <FaChartBar />

              Dashboard

            </button>

            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-slate-800 transition">

              <FaBriefcase />

              Applications

            </button>

            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-slate-800 transition">

              <FaUser />

              Profile

            </button>

          </nav>

        </div>

        <button
          className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 transition"
        >
          Logout
        </button>

      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-y-auto">

        {children}

      </main>

    </div>
  );
};

export default DashboardLayout;