"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimateOnScroll from "./animations/animate-on-scroll";
import Button from "./primitives/button";
import { Section, Container, Input, Select, Textarea } from "./primitives";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, X, CheckCircle, Loader2 } from "lucide-react";

export interface ContactFormProps {
  className?: string;
}

interface FormData {
  fullName: string;
  workEmail: string;
  iAmA: string;
  companyName: string;
  role: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  iAmA?: string;
  companyName?: string;
  role?: string;
  message?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    workEmail: "",
    iAmA: "",
    companyName: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [charCount, setCharCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const maxChars = 250;

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!validateEmail(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.iAmA) {
      newErrors.iAmA = "Please select an option";
    }

    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      // Reset form
      setFormData({
        fullName: "",
        workEmail: "",
        iAmA: "",
        companyName: "",
        role: "",
        message: "",
      });
      setCharCount(0);
      setErrors({});
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setFormData({ ...formData, message: value });
      setCharCount(value.length);
    }
  };

  return (
    <Section variant="white" spacing="sm" className={className}>
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Form Section */}
          <AnimateOnScroll animation="fade-up">
            <div className="rounded-xl bg-white">
              <h2 className="text-navy mb-6 text-2xl font-bold md:text-[28px]">
                Book a discovery call
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="text-navy mb-2 block text-sm font-medium">
                    Full name <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleFieldChange("fullName", e.target.value)}
                    placeholder="John Smith"
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="workEmail" className="text-navy mb-2 block text-sm font-medium">
                    Work email <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="email"
                    id="workEmail"
                    value={formData.workEmail}
                    onChange={(e) => handleFieldChange("workEmail", e.target.value)}
                    placeholder="john@company.com"
                    error={!!errors.workEmail}
                    helperText={errors.workEmail}
                  />
                </div>

                {/* Company Name and Role */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="text-navy mb-2 block text-sm font-medium"
                    >
                      Company name <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="text"
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleFieldChange("companyName", e.target.value)}
                      placeholder="Your Company Ltd"
                      error={!!errors.companyName}
                      helperText={errors.companyName}
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="text-navy mb-2 block text-sm font-medium">
                      Role <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="text"
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleFieldChange("role", e.target.value)}
                      placeholder="Travel Manager, CEO, etc."
                      error={!!errors.role}
                      helperText={errors.role}
                    />
                  </div>
                </div>

                {/* I am a */}
                <div>
                  <label htmlFor="iAmA" className="text-navy mb-2 block text-sm font-medium">
                    I am a <span className="text-primary">*</span>
                  </label>
                  <Select
                    id="iAmA"
                    value={formData.iAmA}
                    onChange={(e) => handleFieldChange("iAmA", e.target.value)}
                    error={!!errors.iAmA}
                    helperText={errors.iAmA}
                    className={cn(!formData.iAmA && "text-gray-400")}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="tmc" className="text-navy">
                      TMC
                    </option>
                    <option value="corporate" className="text-navy">
                      Corporate
                    </option>
                    <option value="investor" className="text-navy">
                      Investor
                    </option>
                    <option value="other" className="text-navy">
                      Other
                    </option>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-navy mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleMessageChange}
                    placeholder="Tell us a bit about your needs..."
                    rows={4}
                  />
                  <div className="mt-1 text-right text-sm text-gray-500">
                    {charCount}/{maxChars}
                  </div>
                </div>

                {/* Success Alert */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                        <div className="flex-1">
                          <p className="font-semibold text-green-800">
                            Request submitted successfully!
                          </p>
                          <p className="text-sm text-green-700">
                            We&apos;ll be in touch within 24 hours to schedule your discovery call.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="shrink-0 text-green-600 hover:text-green-800"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Book discovery call"
                  )}
                </Button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Info Section */}
          <AnimateOnScroll animation="fade-up" delay={0.2}>
            <div className="bg-light rounded-xl p-6 md:p-8">
              <h3 className="text-navy mb-6 text-xl font-bold md:text-2xl">
                What happens on the call?
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-navy mb-1 font-semibold">Learn about your programme:</p>
                    <p className="text-body text-sm">
                      We&apos;ll understand your current travel setup and specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Check className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-navy mb-1 font-semibold">
                      Discuss challenges & opportunities
                    </p>
                    <p className="text-body text-sm">
                      Identify the key pain points and areas where Grapevine could help.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Check className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-navy mb-1 font-semibold">Outline how Grapevine could help</p>
                    <p className="text-body text-sm">
                      Share relevant use cases and potential solutions tailored to your needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Check className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-navy mb-1 font-semibold">Schedule a tailored demo</p>
                    <p className="text-body text-sm">
                      If it makes sense, we&apos;ll arrange a detailed demo with all the right
                      stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="border-t border-gray-300 pt-6">
                <p className="text-navy mb-3 text-sm font-semibold">
                  Want to make the most of our conversation?
                </p>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="text-primary flex items-center gap-2 text-sm hover:underline"
                  >
                    <span>TMC Discovery Questionnaire</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-primary flex items-center gap-2 text-sm hover:underline"
                  >
                    <span>Corporate Needs Survey</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-primary flex items-center gap-2 text-sm hover:underline"
                  >
                    <span>Investor Overview</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
                <p className="text-body mt-3 text-xs">
                  <strong>Optional prep:</strong> The questionnaires above are optional but help us
                  tailor our discussion. If you&apos;d rather just talk it through live, that works
                  too.
                </p>
              </div> */}
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
