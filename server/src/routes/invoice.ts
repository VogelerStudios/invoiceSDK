import express from "express";
import * as invoiceController from "../controllers/Invoice";

const router = express.Router();

// Invoice routes
router.get("/email/:email", invoiceController.getAllInvoicesByEmail);
router.get("/:id", invoiceController.getInvoiceById);
router.post("/", invoiceController.createInvoice);
router.put("/:id", invoiceController.updateInvoice);
router.delete("/:id", invoiceController.deleteInvoice);

export default router;
