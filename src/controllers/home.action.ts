import { asyncHandler } from "@/lib/utils/asyncHandler";

export const getRouteList = asyncHandler(async (req, res) => {
  res.json({
    message: "Welcome to the slice & dice Api",
    routes: {
      "Home Route": "/",
      "Authentication Route ( '/auth' )": {
        "Register or Signup": {
          POST: "/auth/register or /auth/signup",
          body: {
            name: "string",
            email: "string",
            password: "string",
          },
        },
        "login or signin": {
          POST: "/auth/login or /auth/signin",
          body: {
            email: "string",
            password: "string",
          },
        },
      },
      "Employee Route ( '/employee' )": {
        "Upload Data": {
          GET: "/employee/upload",
        },
        "Add Employee": {
          POST: "/employee/add",
          body: {
            currency: "string",
            department: "string",
            name: "string",
            "on_contract(optional)": "boolean",
            salary: "number",
            sub_department: "string",
          },
        },
        "Get All Employees": {
          GET: "/employee",
        },
        "Delete Employee by Id": {
          DELETE: "/employee/delete/:id",
        },
      },
      "Summary-Statisitcs Route ( '/stats' )": {
        "Get Stats for all": {
          GET: "/stats/all",
        },
        "Get Stats on_contract": {
          GET: "/stats/on_contract",
        },
        "Get Stats by departments": {
          GET: "/stats/department",
        },
        "Get Stats by department & sub_departments combinations": {
          GET: "/stats/sub_department",
        },
      },
    },
  });
});
