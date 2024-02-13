import {
  allStats,
  statsByContract,
  statsByDepartment,
  statsBySubDepartment,
} from "@/controllers/stats.action";
import { isAuthenticated } from "@/lib/middleware";
import express from "express";
export const stats = express.Router();

stats.route("/all").get(isAuthenticated, allStats);
stats.route("/department").get(isAuthenticated, statsByDepartment);
stats.route("/contract").get(isAuthenticated, statsByContract);
stats.route("/sub").get(isAuthenticated, statsBySubDepartment);
