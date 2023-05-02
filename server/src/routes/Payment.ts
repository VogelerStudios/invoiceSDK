import express from "express";
import * as PaymentController from "../controllers/Payment";

const router = express.Router();

router.post("/", PaymentController.createPayment);
router.get("/:id", PaymentController.getPayment);
router.put("/:id", PaymentController.updatePayment);
router.delete("/:id", PaymentController.deletePayment);

export default router;
