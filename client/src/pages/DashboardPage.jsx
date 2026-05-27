import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";

import StatsCard from "../components/StatsCard";

import AddJobModal from "../components/AddJobModal";

import { getJobs } from "../services/jobService";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const DashboardPage = () => {

  const [showModal, setShowModal] = useState(false);

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {

    try {

      const data = await getJobs();

      setJobs(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchJobs();

  }, []);

  const chartData = [
    { month: "Jan", applications: 4 },
    { month: "Feb", applications: 7 },
    { month: "Mar", applications: 10 },
    { month: "Apr", applications: 6 },
    { month: "May", applications: 12 },
  ];

  return (

    <DashboardLayout>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-3">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 text-lg">
            Track your applications smarter and faster.
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-6 md:mt-0 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition font-semibold"
        >
          + Add Job
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <StatsCard
          title="Total Applications"
          value={jobs.length}
          color="text-cyan-400"
        />

        <StatsCard
          title="Interviews"
          value={
            jobs.filter(job => job.status === "Interview").length
          }
          color="text-purple-400"
        />

        <StatsCard
          title="Offers"
          value={
            jobs.filter(job => job.status === "Offer").length
          }
          color="text-green-400"
        />

      </div>

      {/* Analytics */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-10">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Application Analytics
          </h2>

        </div>

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={chartData}>

              <XAxis dataKey="month" stroke="#94a3b8" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="applications"
                stroke="#06b6d4"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Recent Applications */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Applications
        </h2>

        <div className="space-y-4">

          {jobs.map((job) => (

            <div
              key={job._id}
              className="flex items-center justify-between p-5 bg-slate-800 rounded-2xl"
            >

              <div>

                <h3 className="text-lg font-semibold">
                  {job.role}
                </h3>

                <p className="text-slate-400">
                  {job.company}
                </p>

              </div>

              <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">

                {job.status}

              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Modal */}
      {showModal && (

        <AddJobModal
          closeModal={() => setShowModal(false)}
          refreshJobs={fetchJobs}
        />

      )}

    </DashboardLayout>

  );
};

export default DashboardPage;