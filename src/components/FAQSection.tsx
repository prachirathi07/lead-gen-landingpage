import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the ₹1 = 1 lead pricing model work?",
      answer: "You pay ₹1 for each qualified lead we generate for your business. No monthly retainers, no setup fees, no long-term contracts. You only pay when we deliver actual leads that match your criteria."
    },
    {
      question: "How do you qualify leads before sending them to me?",
      answer: "Our AI system pre-qualifies leads based on your specific criteria including budget, timeline, company size, and decision-making authority. Each lead goes through multiple validation steps before reaching your inbox."
    },
    {
      question: "Is my data safe and how do you protect it?",
      answer: "Yes, your data is completely secure. We use enterprise-grade security with RBAC (Role-Based Access Control), comprehensive audit logs, and strict export controls. You own your data and can export or delete it anytime."
    },
    {
      question: "What's the onboarding process like?",
      answer: "Waitlist members get priority onboarding with dedicated support. We'll set up your lead criteria, integrate your preferred channels (WhatsApp, forms, etc.), and train the AI on your specific requirements. Most setups complete within 48 hours."
    },
    {
      question: "Can I integrate this with my existing tools?",
      answer: "Absolutely. AI Neno integrates with WhatsApp, custom forms, landing pages, and most CRM systems. Our omni-channel approach ensures all leads flow into one unified inbox that connects with your existing workflow."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-geometric font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground font-humanist">
              Everything you need to know about AI Neno
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 hover:shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-geometric font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-humanist pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;