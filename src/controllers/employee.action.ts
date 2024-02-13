import { connectToDatabase } from "@/lib/database";
import { Employee } from "@/lib/database/models/employee.model";
import { AppError } from "@/lib/utils/appError";
import { asyncHandler } from "@/lib/utils/asyncHandler";
import type { Request, Response } from "express";
import { data } from "../../data";

export const uploadData = asyncHandler(async (req, res, next) => {
  await connectToDatabase();
  await Employee.deleteMany({});
  const result = await Employee.insertMany(data);
  if (!result) {
    throw new AppError("Data upload failed", 500);
  }
  res.status(201).json({ message: "Data uploaded successfully", data: result });
});

export const getEmployees = asyncHandler(async (req, res) => {
  await connectToDatabase();
  const result = await Employee.find();
  if (!result) {
    throw new AppError("No employee found", 404);
  }
  res.status(200).json({ data: result });
});

export const addEmployee = asyncHandler(async (req, res) => {
  const data = req.body;
  await connectToDatabase();
  const result = await Employee.create(data);
  res
    .status(201)
    .json({ message: "Employee added successfully", data: result });
});

export const deleteEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await connectToDatabase();
  const result = await Employee.findByIdAndDelete(id);
  if (!result) {
    throw new AppError("Employee not found", 404);
  }
  res
    .status(200)
    .json({ message: "Employee deleted successfully", data: result });
});
