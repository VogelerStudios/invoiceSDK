import { Request, Response } from "express";
import Payment from "../models/Payment";
import Invoice from "../models/Invoice";
import { ObjectId } from "mongodb";

// Create a new payment
export const createPayment = async (req: Request, res: Response) => {
  const payment = new Payment({
    invoiceId: new ObjectId(req.body.invoiceId),
    userId: new ObjectId(req.body.userId),
    date: req.body.date || Date.now(),
    amount: req.body.amount,
    method: req.body.method,
    status: req.body.status,
  });
  try {
    const savedPayment = await payment.save();
    const updatedInvoice = await Invoice.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: "PAID",
        },
      }
    );

    res.status(201).json([savedPayment, updatedInvoice]);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Get a single payment by id
export const getPayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findById(new ObjectId(req.params.id));
    if (payment == null) {
      return res.status(404).json({ message: "Cannot find payment" });
    }
    res.json(payment);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// Update a payment by id
export const updatePayment = async (req: Request, res: Response) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPayment);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// Delete a payment by id
export const deletePayment = async (req: Request, res: Response) => {
  try {
    const removedPayment = await Payment.deleteOne({
      invoiceId: req.params.id,
    });
    res.status(200).json(removedPayment);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
