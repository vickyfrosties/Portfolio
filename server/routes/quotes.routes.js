import express from "express";
import { getQuote } from "../controllers/quotes.controller.js";

const quoteRouter = express.Router();

// TODO: set route to match contact page
quoteRouter.route("/").get(getQuote);

export default quoteRouter;
