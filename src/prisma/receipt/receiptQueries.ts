import db from "../client";
import { PaymentReceiptData } from "@/types/paymentReceipt";

export async function createPaymentReceipt(receipt: PaymentReceiptData) {
  await db.paymentReceipt.create({
    data: {
      name: receipt.name,
      address: receipt.address,
      city: receipt.city,
      phone: receipt.phone,
      dateReceived: receipt.dateReceived,
      datePromised: receipt.datePromised,
      remarks: receipt.remarks,
      cash: receipt.cash,
      card: receipt.card,
      weekly: receipt.weekly,
      monthly: receipt.monthly,
      willCall: receipt.willCall,
      mail: receipt.mail,
      cashPrice: receipt.cashPrice,
      cardPrice: receipt.cardPrice,
      weeklyPrice: receipt.weeklyPrice,
      monthlyPrice: receipt.monthlyPrice,
      willCallPrice: receipt.willCallPrice,
      mailPrice: receipt.mailPrice,
      totalPrice: receipt.totalPrice,
      total: receipt.total,
      purchaseDates: receipt.purchaseDates,
    },
  });
}
