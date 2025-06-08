import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ChatInterface } from "@/components/Chat/ChatInterface";

export default async function ChatPage() {
  const session = await auth();

  // Redirect to sign-in if not authenticated
  if (!session?.user) {
    redirect("/signin");
  }

  return <ChatInterface />;
}
