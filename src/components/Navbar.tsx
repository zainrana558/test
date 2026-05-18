import Link from "next/link";
import { auth } from "@/auth";
import { signOut } from "@/auth";

export async function Navbar() {
  const session = await auth();
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">luminaa<span className="text-rose-500">2</span></Link>
        <div className="flex items-center gap-6">
          <Link href="/browse" className="text-zinc-300 hover:text-white transition-colors">Browse</Link>
          <Link href="/pricing" className="text-zinc-300 hover:text-white transition-colors">Pricing</Link>
          {session ? (
            <form action={async () => { "use server"; await signOut({ redirect: true }); }}>
              <button className="text-zinc-300 hover:text-white">Sign Out</button>
            </form>
          ) : (
            <Link href="/login" className="px-4 py-2 bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
