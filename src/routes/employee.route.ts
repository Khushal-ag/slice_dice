import {
  addEmployee,
  deleteEmployee,
  getEmployees,
  uploadData,
} from "@/controllers/employee.action";
import { isAuthenticated } from "@/lib/middleware";
import express from "express";
export const employee = express.Router();

employee.route("/").get(isAuthenticated, getEmployees);
employee.route("/upload").get(isAuthenticated, uploadData);
employee.route("/add").post(isAuthenticated, addEmployee);
employee.route("/delete/:id").delete(isAuthenticated, deleteEmployee);
