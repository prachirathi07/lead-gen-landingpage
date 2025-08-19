import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  contact: string;
  position: string;
  businessName: string;
  website: string;
  employeeSize: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  contact?: string;
  position?: string;
  businessName?: string;
  website?: string;
  employeeSize?: string;
  consent?: string;
}

const WaitlistForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    position: "",
    businessName: "",
    website: "",
    employeeSize: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (formData.contact.length < 7) {
      newErrors.contact = "Contact number must be at least 7 digits";
    }
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.consent) newErrors.consent = "You must agree to the terms";

    // Optional website validation
    if (formData.website && !/^https?:\/\/.+\..+/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (include http:// or https://)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Submit to n8n webhook for Google Sheets
    try {
      const response = await fetch("https://n8n.srv963601.hstgr.cloud/webhook/2bf88ca5-ec30-4676-8fbb-29c7e2f5daf2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          position: formData.position,
          businessName: formData.businessName,
          website: formData.website,
          employeeSize: formData.employeeSize,
          consent: formData.consent,
          timestamp: new Date().toISOString(),
        }),
      });

      // Using no-cors: we cannot inspect the response; treat as sent
      setIsSubmitted(true);
      toast({
        title: "Success! 🎉",
        description: "You're on the list! We'll reach out with your cohort slot and next steps.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSelectChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🎉</span>
        </div>
        <h3 className="text-2xl font-geometric font-bold text-background mb-2">
          You're on the list!
        </h3>
        <p className="text-slate-300 font-humanist">
          We'll reach out with your cohort slot and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-background font-medium">
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`bg-background/10 border-background/20 text-background placeholder:text-background/60 ${
              errors.name ? "border-red-400" : ""
            }`}
          />
          {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-background font-medium">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`bg-background/10 border-background/20 text-background placeholder:text-background/60 ${
              errors.email ? "border-red-400" : ""
            }`}
          />
          {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Contact */}
        <div className="space-y-2">
          <Label htmlFor="contact" className="text-background font-medium">
            Contact *
          </Label>
          <Input
            id="contact"
            type="tel"
            placeholder="+91 9876543210"
            value={formData.contact}
            onChange={(e) => handleInputChange("contact", e.target.value)}
            className={`bg-background/10 border-background/20 text-background placeholder:text-background/60 ${
              errors.contact ? "border-red-400" : ""
            }`}
          />
          {errors.contact && <p className="text-red-300 text-sm">{errors.contact}</p>}
        </div>

        {/* Position */}
        <div className="space-y-2">
          <Label htmlFor="position" className="text-background font-medium">
            Your Position *
          </Label>
          <Input
            id="position"
            type="text"
            placeholder="Founder, Freelancer, Sales Lead"
            value={formData.position}
            onChange={(e) => handleInputChange("position", e.target.value)}
            className={`bg-background/10 border-background/20 text-background placeholder:text-background/60 ${
              errors.position ? "border-red-400" : ""
            }`}
          />
          {errors.position && <p className="text-red-300 text-sm">{errors.position}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Business Name */}
        <div className="space-y-2">
          <Label htmlFor="business-name" className="text-background font-medium">
            Business name
          </Label>
          <Input
            id="business-name"
            type="text"
            placeholder="Your company name"
            value={formData.businessName}
            onChange={(e) => handleInputChange("businessName", e.target.value)}
            className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
          />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <Label htmlFor="website" className="text-background font-medium">
            Business website
          </Label>
          <Input
            id="website"
            type="url"
            placeholder="https://yourwebsite.com"
            value={formData.website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            className={`bg-background/10 border-background/20 text-background placeholder:text-background/60 ${
              errors.website ? "border-red-400" : ""
            }`}
          />
          {errors.website && <p className="text-red-300 text-sm">{errors.website}</p>}
        </div>
      </div>

      {/* Employee Size */}
      <div className="space-y-2">
        <Label className="text-background font-medium">Employee size</Label>
        <Select value={formData.employeeSize} onValueChange={(value) => handleSelectChange("employeeSize", value)}>
          <SelectTrigger className="bg-background/10 border-background/20 text-background">
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="just-me">Just me</SelectItem>
            <SelectItem value="2-10">2–10</SelectItem>
            <SelectItem value="11-50">11–50</SelectItem>
            <SelectItem value="51-200">51–200</SelectItem>
            <SelectItem value="200+">200+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Consent */}
      <div className="flex items-start space-x-3">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
          className="mt-1 border-background/40 data-[state=checked]:bg-background data-[state=checked]:text-foreground"
        />
        <div className="space-y-1">
          <Label htmlFor="consent" className="text-background font-medium cursor-pointer">
            I agree to receive early-access updates and accept the terms. *
          </Label>
          {errors.consent && <p className="text-red-300 text-sm">{errors.consent}</p>}
        </div>
      </div>

      <Button
        type="submit"
        variant="waitlist"
        size="xl"
        disabled={isSubmitting}
        className="w-full font-semibold"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;