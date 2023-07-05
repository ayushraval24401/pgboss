import express from "express";
import userController from "../controllers/userController"; 
const router = express.Router();

router.post("/", userController.createUser);
router.post("/customers", userController.createCustomer);
router.post("/send-email", userController.sendEmail);

export default router;
