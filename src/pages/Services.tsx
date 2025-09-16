import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  FileText, 
  Shield, 
  BriefcaseIcon, 
  Users, 
  CreditCard, 
  CheckCircle, 
  Clock,
  Star,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "University Selection",
      description: "Expert guidance to find the perfect university and program matching your academic goals, budget, and career aspirations.",
      features: [
        "Personalized university recommendations",
        "Program comparison and analysis",
        "Career outcome insights",
        "Ranking and accreditation guidance"
      ],
      duration: "2-3 weeks",
      price: "Free consultation"
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Application Assistance",
      description: "Complete support for university applications, from document preparation to submission and follow-up.",
      features: [
        "Application form completion",
        "Document preparation and review",
        "Personal statement writing support",
        "Portfolio development guidance"
      ],
      duration: "4-6 weeks",
      price: "Starting from $299"
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Visa Guidance",
      description: "Comprehensive visa application support to ensure smooth approval process for your study destination.",
      features: [
        "Visa requirement analysis",
        "Document checklist and preparation",
        "Interview preparation",
        "Application tracking and updates"
      ],
      duration: "3-4 weeks",
      price: "Starting from $199"
    },
    {
      icon: <BriefcaseIcon className="h-12 w-12 text-primary" />,
      title: "Career Counseling",
      description: "Professional career guidance to align your studies with future career opportunities and market demands.",
      features: [
        "Career assessment and planning",
        "Industry insights and trends",
        "Resume and LinkedIn optimization",
        "Interview skills development"
      ],
      duration: "Ongoing support",
      price: "Starting from $149"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      title: "Scholarship Assistance",
      description: "Help you discover and apply for scholarships, grants, and financial aid opportunities.",
      features: [
        "Scholarship search and matching",
        "Application strategy development",
        "Essay and proposal writing",
        "Interview preparation"
      ],
      duration: "2-8 weeks",
      price: "Success-based pricing"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Pre-Departure Support",
      description: "Complete preparation for your journey abroad, from accommodation to cultural orientation.",
      features: [
        "Accommodation assistance",
        "Travel arrangements guidance",
        "Cultural orientation sessions",
        "Airport pickup coordination"
      ],
      duration: "2-3 weeks",
      price: "Starting from $99"
    }
  ];

  const successStats = [
    { number: "2,500+", label: "Students Placed" },
    { number: "150+", label: "Partner Universities" },
    { number: "95%", label: "Visa Success Rate" },
    { number: "₹50Cr+", label: "Scholarships Secured" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "University of Toronto",
      service: "Complete Package",
      rating: 5,
      text: "EduConsult made my dream of studying in Canada come true. From university selection to visa approval, they handled everything professionally."
    },
    {
      name: "Arjun Patel", 
      university: "Oxford University",
      service: "Visa Guidance",
      rating: 5,
      text: "Their visa guidance was exceptional. I was nervous about the process, but they made it smooth and stress-free."
    },
    {
      name: "Sneha Reddy",
      university: "University of Melbourne", 
      service: "Scholarship Assistance",
      rating: 5,
      text: "Thanks to their scholarship assistance, I secured a 70% scholarship. Couldn't have done it without their expertise."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive study abroad services to make your international education journey smooth and successful.
          </p>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-gradient-card">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Study Abroad Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From university selection to post-arrival support, we provide end-to-end assistance for your study abroad journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>

                  <Button className="w-full" asChild>
                    <Link to="/consultation">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and student-focused approach to study abroad success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "Understand your goals and preferences" },
              { step: "02", title: "Custom Plan", desc: "Tailored roadmap for your success" },
              { step: "03", title: "Application Support", desc: "End-to-end application assistance" },
              { step: "04", title: "Success & Support", desc: "Ongoing support until departure" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from students who achieved their study abroad dreams with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                    <Badge variant="secondary" className="mt-2">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a free consultation with our experts and take the first step towards your international education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-white" asChild>
              <Link to="/consultation">
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-4 w-4" />
              Call Now: +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;