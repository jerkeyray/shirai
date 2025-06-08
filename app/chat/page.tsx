import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

export default async function ChatPage() {
  const session = await auth();

  // Redirect to sign-in if not authenticated
  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="pt-16 max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to Shirai, {session.user.name}!
          </h1>
          <p className="text-gray-300">
            Your AI chat assistant is ready. Start a conversation below.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="text-center text-gray-400">
            <p className="mb-4">Chat interface coming soon...</p>
            <p className="text-sm">
              This is where the actual chat functionality will be implemented.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
