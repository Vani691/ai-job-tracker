import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createJob,
  getJobs,
} from "../controllers/jobController.js";

const router = express.Router();

router.route("/")
  .post(protect, createJob)
  .get(protect, getJobs);

export default router;