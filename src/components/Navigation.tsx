import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cta rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-geometric font-bold text-xl text-foreground">ClientFactory</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors font-humanist"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('who-its-for')}
              className="text-muted-foreground hover:text-foreground transition-colors font-humanist"
            >
              Who it's for
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-foreground transition-colors font-humanist"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('waitlist')}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;