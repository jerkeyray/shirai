import { signOut, auth } from "@/auth";
import { Button } from "./ui/Button";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Shirai</h1>
          </div>

          <div className="flex items-center space-x-4">
            {session?.user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">
                  {session.user.name}
                </span>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button variant="outline" size="sm" type="submit">
                    Sign out
                  </Button>
                </form>
              </div>
            ) : (
              <Link href="/signin">
                <Button variant="primary" size="sm">
                  Sign in
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
