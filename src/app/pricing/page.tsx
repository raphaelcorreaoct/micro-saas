// src/app/pricing/page.tsx

'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import stripePromise from '@/services/stripe';
//import { useRouter } from 'next/router';

const plans = [
  {
    id: "free",
    title: "Plano Free",
    price: "Gratuito",
    features: [
      "Até 3 produtos cadastrados",
      "Suporte básico",
      "Acesso a relatórios limitados",
    ],
  },
  {
    id: "pro-monthly",
    title: "Plano Pro (Mensal)",
    price: "R$ 29,90/mês",
    features: [
      "Produtos ilimitados",
      "Suporte prioritário",
      "Relatórios completos",
      "Integração com API",
    ],
  },
  {
    id: "pro-yearly",
    title: "Plano Pro (Anual)",
    price: "R$ 299,90/ano",
    features: [
      "Produtos ilimitados",
      "Suporte prioritário",
      "Relatórios completos",
      "Integração com API",
      "1 mês grátis",
    ],
  },
];

const PricingPage = () => {
  //const router = useRouter();

  const handleSubscribe = async (planId: string) => {
    // Lógica para iniciar o processo de assinatura com Stripe
    // Aqui você pode chamar sua API que lida com a criação de sessões de checkout do Stripe
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ planId }),
    });

    const session = await response.json();
    const stripe = await stripePromise;

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    })
    if(result?.error) {
      console.error(result.error.message)
    }
    if (session.url) {
      window.location.href = session.url; // Redireciona para a página de checkout do Stripe
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-8">Planos e Preços</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <Card key={plan.id} className="border border-gray-300 rounded-lg shadow-lg p-5">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
              <p className="text-lg font-semibold">{plan.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {plan.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSubscribe(plan.id)}>Assinar Agora</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
