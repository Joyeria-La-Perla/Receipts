"use server";

import { createPaymentReceipt } from "@/prisma/receipt/receiptQueries";
import { FormData } from "@/app/receipt/payment/page";

export async function createPaymentAction(formData: FormData) {
  await createPaymentReceipt(formData);
}
