import express from "express";
export const home = express.Router();
import { getRouteList } from "@/controllers/home.action";

home.route("/").get(getRouteList);
