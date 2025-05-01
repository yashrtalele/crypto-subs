import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import type { Express } from "express";

dotenv.config();
const app: Express = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/echo", (_req, res) => {
  res.send("Web3 Backend with NodeJs + Express + Hardhat!");
});

app.listen(PORT, () => {
  console.log(`🚀Server Listening on port ${PORT}`);
});
