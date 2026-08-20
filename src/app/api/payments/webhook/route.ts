import { NextResponse } from "next/server";
import { verifyPaymentWebhookSignature } from "@/services/payments";

/**
 * Payment gateway webhook.
 * - Verify signature before trusting status
 * - Never confirm registration from browser callbacks alone
 */
export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature =
    request.headers.get("x-razorpay-signature") ||
    request.headers.get("x-webhook-signature") ||
    "";

  const valid = verifyPaymentWebhookSignature(rawBody, signature);
  if (!valid) {
    return NextResponse.json({ ok: false, error: "Invalid signature" }, { status: 401 });
  }

  // Persist PaymentTransaction, update Payment status, confirm Registration,
  // generate registration number, enqueue notifications — when DATABASE_URL is live.
  return NextResponse.json({ ok: true, received: true });
}
