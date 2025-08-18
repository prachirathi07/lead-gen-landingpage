import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const audienceItems = [
    "Freelancers", "Business Owners", "Solo-preneurs", 
    "Founders", "Agencies", "Consultants"
  ];

  const benefitChips = [
    "No retainers", "No long contracts", "You own the data"
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-geometric font-black text-foreground tracking-tight">
                ₹1 = 1 Lead.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-humanist max-w-lg">
                Turn ₹1 into real revenue. Predictable lead generation for every business type.
              </p>
            </div>

            {/* Benefit Chips */}
            <div className="flex flex-wrap gap-3">
              {benefitChips.map((benefit, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl font-medium text-sm border border-indigo-100"
                >
                  {benefit}
                </div>
              ))}
            </div>

            {/* Audience Chips */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Perfect for:</p>
              <div className="flex flex-wrap gap-2">
                {audienceItems.map((audience, index) => (
                  <div 
                    key={index}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                  >
                    {audience}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToWaitlist}
                className="font-semibold"
              >
                Get Early Access
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AI Neno LeadGen Platform" 
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-hero rounded-2xl opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;