import express from "express";
import { home } from "./routes/home.route";
import { auth } from "./routes/auth.route";
import { employee } from "./routes/employee.route";
import env from "dotenv";
import cookieParser from "cookie-parser";
import { stats } from "./routes/stats.route";
env.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("", home);
app.use("/auth", auth);
app.use("/employee", employee);
app.use("/stats", stats);

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
