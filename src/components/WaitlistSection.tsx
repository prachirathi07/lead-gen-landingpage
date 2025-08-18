import WaitlistForm from "./WaitlistForm";
import { Users, Zap, Crown } from "lucide-react";

const WaitlistSection = () => {
  const benefits = [
    {
      icon: Crown,
      title: "Priority onboarding",
      description: "Get first access to the platform with dedicated setup support"
    },
    {
      icon: Users,
      title: "Founders' community",
      description: "Join an exclusive community of early adopters and founders"
    },
    {
      icon: Zap,
      title: "Early pricing for life",
      description: "Lock in special pricing that's available only to early users"
    }
  ];

  return (
    <section id="waitlist" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-geometric font-bold text-background">
                Join the waitlist
              </h2>
              <p className="text-xl text-slate-300 font-humanist">
                Be among the first to transform your lead generation with AI Neno
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-geometric font-semibold text-background">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-300 font-humanist">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div id="who-its-for" className="pt-8">
              <h3 className="text-2xl font-geometric font-bold text-background mb-4">
                Perfect for
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Freelancers", "Business Owners", "Solo-preneurs", "Founders", "Agencies", "Consultants"].map((audience, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-300 font-humanist">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;