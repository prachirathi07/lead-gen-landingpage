import { DollarSign, MessageSquare, Shield, Bot } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Pay-per-lead",
      description: "₹1 = 1 qualified lead. Transparent, usage-based pricing with no hidden fees.",
      highlight: "Transparent pricing"
    },
    {
      icon: MessageSquare,
      title: "Omni-channel capture",
      description: "WhatsApp, forms, landing pages, call agents → one unified inbox for all leads.",
      highlight: "One inbox"
    },
    {
      icon: Shield,
      title: "Lead-safe ops",
      description: "RBAC, audit logs, export controls. Your data stays secure and compliant.",
      highlight: "Enterprise security"
    },
    {
      icon: Bot,
      title: "Agentic follow-ups",
      description: "AI books meetings automatically; hands off to humans when expertise is needed.",
      highlight: "Smart automation"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-geometric font-bold text-foreground mb-4">
            Why ClientFactory works
          </h2>
          <p className="text-xl text-muted-foreground font-humanist max-w-2xl mx-auto">
            Built for businesses that need predictable, cost-effective lead generation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-medium mb-3">
                    {feature.highlight}
                  </div>
                </div>
                <h3 className="text-lg font-geometric font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-humanist text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;