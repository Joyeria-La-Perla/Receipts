import React from "react";
import { PaymentReceiptData } from "@/types/paymentReceipt";
import PaymentReceiptForm from "@/components/PaymentReceiptForm";
import { getReceiptNumber } from "@/prisma/receipt/receiptQueries";

export interface FormData extends PaymentReceiptData {
  [key: string]: string | number | boolean | string[];
}

const Page = async () => {
  const receiptId = await getReceiptNumber();

  return <PaymentReceiptForm receiptId={receiptId} />;
};

export default Page;
