import mongoose, { Document, Schema } from "mongoose";

export interface IInvoice extends Document {
  invoiceId: string;
  userId: Schema.Types.ObjectId;
  creationDate: Date;
  dueDate: Date;
  status: string;
  total: number;
  description: string;
  customerEmail: string;
}

const InvoiceSchema: Schema = new Schema({
  invoiceId: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  creationDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  status: { type: String, required: true },
  total: { type: Number, required: true },
  description: { type: String },
  customerEmail: { type: String, required: true },
});

export default mongoose.model<IInvoice>("Invoice", InvoiceSchema);
