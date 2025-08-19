const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo + Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-cta rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">C</span>
              </div>
              <span className="font-geometric font-bold text-xl">ClientFactory</span>
            </div>
            <p className="text-slate-300 font-humanist text-sm leading-relaxed">
              Predictable lead generation for every business type.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-4">
            <h3 className="font-geometric font-semibold text-background">Product</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-slate-300 hover:text-background transition-colors font-humanist text-sm"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('waitlist')}
                className="block text-slate-300 hover:text-background transition-colors font-humanist text-sm"
              >
                Join Waitlist
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-slate-300 hover:text-background transition-colors font-humanist text-sm"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="font-geometric font-semibold text-background">Company</h3>
            <div className="space-y-2">
              <a 
                href="https://nenotechnology.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-slate-300 hover:text-background transition-colors font-humanist text-sm"
              >
                Website
              </a>
              <a 
                href="#" 
                className="block text-slate-300 hover:text-background transition-colors font-humanist text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-slate-300 hover:text-background transition-colors font-humanist text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="font-geometric font-semibold text-background">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:clientfactoryy@gmail.com"
                className="block text-slate-300 hover:text-background transition-colors font-humanist text-sm"
              >
                clientfactoryy@gmail.com
              </a>
              <p className="text-slate-300 font-humanist text-sm">
                Gujarat, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col space-y-4">
            <p className="text-slate-400 font-humanist text-sm text-center">
              © {currentYear} ClientFactory Innovation Private Limited. All rights reserved.
            </p>
            
            {/* Disclaimer */}
            <p className="text-slate-500 font-humanist text-xs text-center max-w-2xl mx-auto leading-relaxed">
              We cannot guarantee that every lead generated will convert into revenue. Business results may vary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;