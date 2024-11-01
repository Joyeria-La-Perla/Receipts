export interface PaymentReceiptData {
  name: string;
  address: string;
  city: string;
  phone: string;
  dateReceived: string;
  datePromised: string;
  remarks: string;
  cash: boolean;
  card: boolean;
  weekly: boolean;
  monthly: boolean;
  willCall: boolean;
  mail: boolean;
  cashPrice: number;
  cardPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  willCallPrice: number;
  mailPrice: number;
  totalPrice: number;
  total: number;
  purchaseDates: string[];
}
