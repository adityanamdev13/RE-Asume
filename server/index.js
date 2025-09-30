import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import userRoute from "./routes/user.routes.js";
import resumeRoute from "./routes/resume.routes.js"


dotenv.config();

const app = express();
const Port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  cors({
    origin:"*",
    credentials: true,
  })
);

app.use(express.json());

connectDB();

//routes
app.get("/",(req,res)=>res.send("hello"));
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/resume", resumeRoute);

app.listen(Port, () => {
  console.log(`Your app is listen on port:${Port}`);
});




