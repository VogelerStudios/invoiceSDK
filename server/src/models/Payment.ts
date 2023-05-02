import mongoose, { Document, Schema } from "mongoose";

export interface IPayment extends Document {
  invoiceId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  date: Date;
  amount: number;
  method: string;
  status: string;
}

const PaymentSchema: Schema = new Schema({
  invoiceId: { type: Schema.Types.ObjectId, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  method: { type: String, required: true },
  status: { type: String, required: true },
});

export default mongoose.model<IPayment>("Payment", PaymentSchema);
