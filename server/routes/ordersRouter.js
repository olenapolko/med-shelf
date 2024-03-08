import express from "express";
import {
  createOrder,
  getOrdersByEmail,
} from "../controllers/index.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrdersByEmail);

export default router;
