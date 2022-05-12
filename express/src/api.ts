import express from "express";
import highlightsRoute from "./routes/highlights.routes";

const app = express();

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/highlights", highlightsRoute);

app.listen(1337, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${1337}`);
});
