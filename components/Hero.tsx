import { Button } from "./ui/Button";
import { MessageSquare, Sparkles, Zap } from "lucide-react";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Hero() {
  const session = await auth();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Generation AI Chat
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Meet{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shirai
            </span>
            <br />
            Your AI Assistant
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed">
            Experience the future of conversational AI. Shirai combines
            cutting-edge technology with intuitive design to deliver
            intelligent, context-aware responses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            {session?.user ? (
              <Link href="/chat">
                <Button size="lg" className="text-lg px-8 py-4">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Chatting
                </Button>
              </Link>
            ) : (
              <Link href="/signin">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
            )}
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">
                10M+
              </div>
              <div className="text-gray-400 mt-1">Messages Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">
                99.9%
              </div>
              <div className="text-gray-400 mt-1">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">
                50K+
              </div>
              <div className="text-gray-400 mt-1">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
