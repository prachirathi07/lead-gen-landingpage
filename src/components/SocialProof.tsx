import { Calendar, TrendingUp, Shield } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      icon: Calendar,
      metric: "27 meetings",
      timeframe: "in 14 days",
      description: "Booked qualified meetings with enterprise prospects",
      company: "SaaS Startup"
    },
    {
      icon: TrendingUp,
      metric: "3x conversions",
      timeframe: "demo rate",
      description: "Increased demo-to-customer conversion significantly",
      company: "B2B Agency"
    },
    {
      icon: Shield,
      metric: "Zero leakage",
      timeframe: "lead protection",
      description: "Lead leakage dropped to zero with secure ops",
      company: "Consulting Firm"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-geometric font-bold text-foreground mb-4">
            Real results from real businesses
          </h2>
          <p className="text-xl text-muted-foreground font-humanist">
            Join businesses already growing with AI Neno
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-geometric font-bold text-foreground">
                      {testimonial.metric}
                    </div>
                    <div className="text-lg text-muted-foreground font-medium">
                      {testimonial.timeframe}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground font-humanist mb-4 leading-relaxed">
                  {testimonial.description}
                </p>
                <div className="text-sm font-medium text-indigo-600">
                  {testimonial.company}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;