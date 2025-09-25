import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import quoteRouter from "./routes/quotes.routes.js";
dotenv.config();

const app = express();
const originPort = process.env.CLIENT_PORT;
const originServerPort = process.env.SERVER_PORT;
const originLocal = `http://localhost:${originPort || 5173}`;

app.use(
  cors({
    origin: originLocal,
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/", quoteRouter);

app.listen(originServerPort, () => {
  console.log(`Server is running on PORT ${originServerPort}`);
});
