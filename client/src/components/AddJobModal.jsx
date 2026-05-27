import { useState } from "react";

import { createJob } from "../services/jobService";

const AddJobModal = ({ closeModal, refreshJobs }) => {

  const [formData, setFormData] = useState({

    company: "",
    role: "",
    status: "Applied",
    location: "",
    salary: "",
    notes: "",

  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createJob(formData);

      refreshJobs();

      closeModal();

    } catch (error) {

      console.log(error);

      alert("Failed to create job");

    }

  };

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">
            Add New Application
          </h2>

          <button
            onClick={closeModal}
            className="text-slate-400 hover:text-white text-2xl"
          >
            ✕
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            >

              <option>Applied</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>

            </select>

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />

          </div>

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
          />

          <textarea
            name="notes"
            placeholder="Notes..."
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition font-semibold text-lg"
          >
            Save Application
          </button>

        </form>

      </div>

    </div>

  );
};

export default AddJobModal;