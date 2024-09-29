import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(request: Request) {
  const { planId } = await request.json();

  // Lógica para determinar o preço com base no planId
  let priceId = "";
  switch (planId) {
    case "free":
      return NextResponse.json({ url: "https://example.com/free-plan" }); // Aqui você pode redirecionar para um link específico se necessário
    case "pro-monthly":
      priceId = process.env.STRIPE_MONTHLY_PLAN_ID!;
      break;
    case "pro-yearly":
      priceId = process.env.STRIPE_YEARLY_PLAN_ID!;
      break;
    default:
      return NextResponse.json({ error: "Invalid plan ID" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${request.headers.get(
      "origin"
    )}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${request.headers.get("origin")}/cancel`,
  });

  return NextResponse.json({ url: session.url, id: session.id });
}
