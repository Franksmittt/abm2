// src/components/content/ContactForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Send, AlertTriangle, CheckCircle } from "lucide-react"; // --- NEW: Added CheckCircle
import { pushDataLayerEvent } from "@/lib/analytics";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // --- NEW: Success state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    pushDataLayerEvent("contact_form_view");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    // Placeholder: Simulate API submission delay
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      
      pushDataLayerEvent("generate_lead", {
        value: "contact_form_submission",
        subject: formData.subject,
      });

      setIsSubmitting(false);
      setIsSuccess(true); // --- NEW: Set success
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --- NEW: Show success message if form was sent ---
  if (isSuccess) {
    return (
      <div className="p-8 bg-card border border-green-500 text-green-300 rounded-lg flex flex-col items-center space-y-4 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
        <p className="text-lg text-muted-foreground">
          Your message has been sent successfully. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* --- DEMO MODE WARNING --- */}
      <div className="p-4 bg-yellow-900/20 border border-yellow-700 text-yellow-300 rounded-lg flex items-center space-x-3">
        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm font-medium">
          <strong>Demo Mode:</strong> This form is not active. Submissions will only be logged to the console and fire a test conversion event.
        </p>
      </div>
      {/* --- END WARNING --- */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="bg-background border-border text-foreground" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
           <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background border-border text-foreground" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} required className="bg-background border-border text-foreground" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="bg-background border-border text-foreground" />
      </div>

      <Button type="submit" variant="battery" className="w-full h-12 text-lg" disabled={isSubmitting}>
        <Send className="h-5 w-5 mr-2" />
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  );
};

export default ContactForm;