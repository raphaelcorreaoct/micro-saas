import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#support">
            Support
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Our Micro-SaaS
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Streamline your workflow, boost productivity, and achieve more with our powerful tools.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Sign Up Now</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container m-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <CloudIcon className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Cloud-Based</h3>
                <p className="text-gray-600">Access your work from anywhere, anytime. Our cloud solution ensures your data is always available and secure.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LightningBoltIcon className="h-12 w-12 mb-4 text-yellow-500" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Experience blazing fast performance. Our optimized algorithms ensure quick load times and smooth operations.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheckIcon className="h-12 w-12 mb-4 text-green-500" />
                <h3 className="text-xl font-bold mb-2">Secure</h3>
                <p className="text-gray-600">Your data's safety is our top priority. Benefit from enterprise-grade security measures and encryption.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-gray-600">Create your account in just a few clicks. No credit card required for trial.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Configure</h3>
                <p className="text-gray-600">Set up your preferences and integrate with your existing tools.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Enjoy</h3>
                <p className="text-gray-600">Start using our powerful features and watch your productivity soar.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container m-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a micro-SaaS?</AccordionTrigger>
                <AccordionContent>
                  A micro-SaaS is a small, niche-focused software as a service product that solves a specific problem for a targeted audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How much does it cost?</AccordionTrigger>
                <AccordionContent>
                  We offer flexible pricing plans starting from $9.99/month. Check our pricing page for more details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 14-day free trial with full access to all features. No credit card required.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section id="support" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Support & Contact</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="text-gray-600 md:text-xl">
                Need help or have questions? Our support team is here for you.
              </p>
              <Button>Contact Support</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function CloudIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function LightningBoltIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 3v7h6l-8 11v-7H5l8-11z" />
    </svg>
  )
}

function ShieldCheckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}