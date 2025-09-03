import axios from "axios";

const url = "https://ticket.jatimdevday.id/payment";

type PaymentBody = {
  product: string;
  qty: string;
  price: string;
  amount: string;
  referenceId: string;
  buyerName: string;
  buyerEmail: string;
};

export async function createPayment(body: PaymentBody) {
  const response = await axios.post(url, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data.data as { Url: string; SessionID: string };
}
