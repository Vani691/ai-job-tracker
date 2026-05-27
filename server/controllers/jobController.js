import Job from "../models/jobModel.js";


// CREATE JOB
export const createJob = async (req, res) => {

  try {

    const {
      company,
      role,
      status,
      location,
      salary,
      notes,
    } = req.body;

    const job = await Job.create({

      user: req.user._id,

      company,
      role,
      status,
      location,
      salary,
      notes,

    });

    res.status(201).json(job);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET ALL JOBS
export const getJobs = async (req, res) => {

  try {

    const jobs = await Job.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};