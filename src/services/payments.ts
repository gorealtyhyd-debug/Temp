import "server-only";
import crypto from "crypto";

export type CreatePaymentOrderInput = {
  amountPaise: number;
  currency?: string;
  receipt: string;
  notes?: Record<string, string>;
};

export type CreatePaymentOrderResult = {
  orderId: string;
  amountPaise: number;
  currency: string;
  keyId: string;
  mode: "live" | "demo";
};

/**
 * Payment architecture notes:
 * - Merchant settlement (including UPI pavanchinna53@okicici) must be configured
 *   in the payment gateway dashboard — never trusted from the browser.
 * - Frontend must never mark payment as SUCCESS on its own.
 * - Webhook signature verification is mandatory before confirming registration.
 */
export async function createPaymentOrder(
  input: CreatePaymentOrderInput,
): Promise<CreatePaymentOrderResult> {
  const keyId = process.env.PAYMENT_GATEWAY_KEY_ID;
  const keySecret = process.env.PAYMENT_GATEWAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return {
      orderId: `order_demo_${crypto.randomBytes(8).toString("hex")}`,
      amountPaise: input.amountPaise,
      currency: input.currency ?? "INR",
      keyId: "demo_key",
      mode: "demo",
    };
  }

  // Production: call Razorpay Orders API (or equivalent) with server credentials.
  // Keep secrets server-side only.
  throw new Error(
    "Payment gateway credentials detected but live gateway adapter is not configured in this environment. Configure Razorpay Orders API integration before go-live.",
  );
}

export function verifyPaymentWebhookSignature(rawBody: string, signature: string) {
  const secret = process.env.PAYMENT_GATEWAY_WEBHOOK_SECRET;
  if (!secret) return false;
  const digest = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
  } catch {
    return false;
  }
}

export function generateRegistrationNumber(sequence: number, year = 26) {
  return `SRF${year}-${String(sequence).padStart(6, "0")}`;
}
