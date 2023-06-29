import express from "express";
import orderController from "../controllers/orderController";
const router = express.Router();

router.post("/send-mail", orderController.sendEmail);
router.post("/", orderController.createOrder);

export default router;
