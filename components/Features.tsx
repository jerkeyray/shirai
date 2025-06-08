import { Brain, Shield, Zap, MessageCircle, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Intelligence",
    description:
      "Powered by state-of-the-art language models for natural, intelligent conversations.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get instant responses with our optimized infrastructure and caching systems.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your conversations are encrypted and never stored longer than necessary.",
  },
  {
    icon: MessageCircle,
    title: "Context Aware",
    description:
      "Maintains conversation context for more meaningful and relevant interactions.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description:
      "Communicate in over 100 languages with native-level understanding.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your AI assistant anytime, anywhere, on any device.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes Shirai the most advanced AI chat assistant
            available today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:bg-black/70"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
