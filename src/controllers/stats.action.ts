import { Employee } from "@/lib/database/models/employee.model";
import { asyncHandler } from "@/lib/utils/asyncHandler";

export const allStats = asyncHandler(async (req, res) => {
  const summaryStatistics = await Employee.aggregate(
    [
      {
        $group: {
          _id: null,
          mean: { $avg: "$salary" },
          min: { $min: "$salary" },
          max: { $max: "$salary" },
        },
      },
    ],
    {
      maxTimeMS: 60000,
    },
  );
  if (summaryStatistics.length === 0) {
    res.status(404).json({ message: "No employees found" });
    return;
  }
  res.status(200).json(summaryStatistics[0]);
});

export const statsByDepartment = asyncHandler(async (req, res) => {
  const summaryStatistics = await Employee.aggregate([
    {
      $group: {
        _id: "$department",
        mean: { $avg: "$salary" },
        min: { $min: "$salary" },
        max: { $max: "$salary" },
      },
    },
  ]);
  if (summaryStatistics.length === 0) {
    res.status(404).json({ message: "No employees found" });
    return;
  }
  res.status(200).json(summaryStatistics);
});

export const statsByContract = asyncHandler(async (req, res) => {
  const summaryStatistics = await Employee.aggregate([
    { $match: { on_contract: true } },
    {
      $group: {
        _id: null,
        mean: { $avg: "$salary" },
        min: { $min: "$salary" },
        max: { $max: "$salary" },
      },
    },
  ]);
  if (summaryStatistics.length === 0) {
    res.status(404).json({ message: "No employees found" });
    return;
  }
  res.status(200).json(summaryStatistics[0]);
});

export const statsBySubDepartment = asyncHandler(async (req, res) => {
  const summaryStatistics = await Employee.aggregate([
    {
      $group: {
        _id: { department: "$department", sub_department: "$sub_department" },
        mean: { $avg: "$salary" },
        min: { $min: "$salary" },
        max: { $max: "$salary" },
      },
    },
  ]);
  res.json(summaryStatistics);
});
