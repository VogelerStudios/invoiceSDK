import { Request, Response } from "express";
import Invoice from "../models/Invoice";
import { ObjectId } from "mongodb";

// Get all invoices
export const getAllInvoicesByEmail = async (req: Request, res: Response) => {
  try {
    const invoices = await Invoice.find({
      customerEmail: req.params.email,
    });
    res.status(200).json(invoices);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get invoice by id
export const getInvoiceById = async (req: Request, res: Response) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    res.status(200).json(invoice);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new invoice
export const createInvoice = async (req: Request, res: Response) => {
  const invoice = new Invoice({
    invoiceId: req.body.invoiceId,
    userId: new ObjectId(req.body.userId),
    creationDate: req.body.creationDate,
    dueDate: req.body.dueDate,
    status: req.body.status,
    total: req.body.total,
    description: req.body.description,
    customerEmail: req.body.customerEmail,
  });
  try {
    const savedInvoice = await invoice.save();
    res.status(201).json(savedInvoice);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Update invoice
export const updateInvoice = async (req: Request, res: Response) => {
  try {
    const updatedInvoice = await Invoice.updateOne(
      { _id: req.params.id },
      {
        $set: {
          invoiceId: req.body.invoiceId,
          userId: new ObjectId(req.body.userId),
          creationDate: req.body.creationDate,
          dueDate: req.body.dueDate,
          status: req.body.status,
          total: req.body.total,
          description: req.body.description,
          customerEmail: req.body.customerEmail,
        },
      }
    );
    res.status(200).json(updatedInvoice);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Delete invoice
export const deleteInvoice = async (req: Request, res: Response) => {
  try {
    const removedInvoice = await Invoice.deleteOne({ _id: req.params.id });
    res.status(200).json(removedInvoice);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
