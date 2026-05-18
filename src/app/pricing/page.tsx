import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = { title: "Pricing | luminaa2" };

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[{ name: "Free", price: "$0", features: ["SD Quality", "1 Device", "Ads"] }, { name: "Pro", price: "$9.99", features: ["4K HDR", "3 Devices", "No Ads", "Offline"], premium: true }].map((plan) => (
            <div key={plan.name} className={`p-8 rounded-lg border ${plan.premium ? "border-rose-500 bg-zinc-900" : "border-zinc-800"}`}>
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold text-rose-500 mb-6">{plan.price}<span className="text-lg text-zinc-400">/mo</span></p>
              <ul className="space-y-2 mb-8">{plan.features.map((f) => <li key={f} className="text-zinc-300">✓ {f}</li>)}</ul>
              <button className={`w-full py-3 rounded-lg font-semibold ${plan.premium ? "bg-rose-600 hover:bg-rose-700" : "bg-zinc-800 hover:bg-zinc-700"} transition-colors`}>Get Started</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
