import { Metadata } from "next";
import Link from "next/link";
import { signIn } from "@/auth";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = { title: "Sign In | luminaa2" };

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-3xl font-bold mb-8">Sign In to luminaa2</h1>
        <form action={async () => { "use server"; await signIn("google", { redirectTo: "/browse" }); }}>
          <button type="submit" className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors">Sign in with Google</button>
        </form>
      </main>
    </div>
  );
}
