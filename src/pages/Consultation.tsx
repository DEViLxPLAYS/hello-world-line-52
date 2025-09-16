import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    education: "",
    fieldOfStudy: "",
    budgetRange: "",
    preferredCountries: [],
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Collect form data
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    const firstName = data.get('firstName') as string;
    const lastName = data.get('lastName') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const country = data.get('country') as string;
    const education = data.get('education') as string;
    const fieldOfStudy = data.get('fieldOfStudy') as string;
    const budgetRange = data.get('budgetRange') as string;
    const consultationType = data.get('consultationType') as string;
    const message = data.get('message') as string;
    
    // Create WhatsApp message
    const whatsappMessage = `
🎓 *New Consultation Request*

👤 *Personal Information:*
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Country: ${country}

📚 *Academic Background:*
Education Level: ${education}
Field of Study: ${fieldOfStudy}

💰 *Study Preferences:*
Budget Range: ${budgetRange}

🗣️ *Consultation Type:*
${consultationType}

💭 *Additional Information:*
${message || 'No additional information provided'}

---
Please confirm the consultation appointment. Thank you!
    `.trim();
    
    // WhatsApp phone number (using the first provided number)
    const whatsappNumber = "601114371926"; // +60 11-1437 1926
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Consultation Request Sent!",
      description: "Your consultation details have been sent via WhatsApp. We'll contact you within 24 hours.",
    });
  };

  const consultationTypes = [
    { value: "general", label: "General Consultation", duration: "30 mins", description: "Overview of study abroad options" },
    { value: "university", label: "University Selection", duration: "45 mins", description: "Detailed university recommendations" },
    { value: "application", label: "Application Assistance", duration: "60 mins", description: "Help with application process" },
    { value: "visa", label: "Visa Guidance", duration: "45 mins", description: "Visa requirements and process" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book Your Free Consultation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized guidance from our education experts. We'll help you find the perfect university and program for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Details</CardTitle>
                <CardDescription>
                  Please fill out this form so we can better assist you during your consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Current Country of Residence *</Label>
                      <Select name="country" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="pakistan">Pakistan</SelectItem>
                          <SelectItem value="bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="nepal">Nepal</SelectItem>
                          <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Academic Background */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Academic Background</h3>
                    <div className="space-y-2">
                      <Label htmlFor="education">Highest Education Level *</Label>
                      <Select name="education" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School (12th Grade)</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                      <Select name="fieldOfStudy" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select field of study" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="business">Business & Management</SelectItem>
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="medicine">Medicine & Health Sciences</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                          <SelectItem value="sciences">Natural Sciences</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Study Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Study Preferences</h3>
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range (USD) *</Label>
                      <Select name="budgetRange" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-20k">Under $20,000</SelectItem>
                          <SelectItem value="20k-40k">$20,000 - $40,000</SelectItem>
                          <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
                          <SelectItem value="60k-80k">$60,000 - $80,000</SelectItem>
                          <SelectItem value="over-80k">Over $80,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Consultation Type *</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {consultationTypes.map((type) => (
                        <Card key={type.value} className="cursor-pointer hover:border-primary">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Checkbox id={type.value} name="consultationType" value={type.value} />
                              <Label htmlFor={type.value} className="font-medium">
                                {type.label}
                              </Label>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{type.description}</p>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{type.duration}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="message">Any specific questions or requirements?</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell us about your goals, concerns, or any specific questions you have..."
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Book Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>What to Expect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Personalized university recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Application strategy discussion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Scholarship opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Visa guidance overview</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Timeline and next steps</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Have questions about the consultation? Contact us directly.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">📞 +60 11-1437 1926</p>
                  <p className="text-sm font-medium">📞 +60 182848310</p>
                  <p className="text-sm font-medium">✉️ fa.consultancy2020@gmail.com</p>
                  <p className="text-sm font-medium">✉️ asadkhanbaloch111@gmail.com</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  (We reply within 24 hours)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;