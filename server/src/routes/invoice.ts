import express from "express";
import * as invoiceRoutes from "../controllers/Invoice";

const router = express.Router();

// Invoice routes
router.get("/email/:email", invoiceRoutes.getAllInvoicesByEmail);
router.get("/:id", invoiceRoutes.getInvoiceById);
router.post("/", invoiceRoutes.createInvoice);
router.put("/:id", invoiceRoutes.updateInvoice);
router.delete("/:id", invoiceRoutes.deleteInvoice);

export default router;
