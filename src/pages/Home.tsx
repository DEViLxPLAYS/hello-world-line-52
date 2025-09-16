import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe, Users, Award, BookOpen, MapPin, Star, ArrowRight, Calendar, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import malaysiaSyudyGuide from "@/assets/malaysia-study-guide.png";
import malaysiaGuidePreview from "@/assets/malaysia-guide-preview.png";
import BookConsultationForm from "@/components/BookConsultationForm";

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Expert Guidance",
      description: "Professional counselors with years of experience in international education."
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Global Universities",
      description: "Access to 500+ universities across 20+ countries worldwide."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Personalized Support",
      description: "One-on-one consultation tailored to your academic goals and budget."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Scholarship Assistance",
      description: "Help you find and apply for scholarships to reduce study costs."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      university: "Oxford University",
      text: "EduConsult made my dream of studying at Oxford a reality. Their guidance was invaluable throughout the entire process.",
      rating: 5
    },
    {
      name: "Raj Patel",
      country: "India",
      university: "University of Toronto",
      text: "The team helped me secure a scholarship and guided me through the visa process. Highly recommended!",
      rating: 5
    },
    {
      name: "Maria Santos",
      country: "Brazil",
      university: "University of Melbourne",
      text: "Professional service and excellent support. They were with me every step of the way.",
      rating: 5
    }
  ];

  const popularDestinations = [
    { country: "Malaysia", universities: 6, flag: "🇲🇾", programs: "All Programs" },
    { country: "Russia", universities: "Coming Soon", flag: "🇷🇺", programs: "MBBS Only" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Gateway to
            <span className="text-accent"> Global Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert guidance for studying abroad. We help students achieve their dreams with personalized consultation and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-lg border-2 border-blue-600" asChild>
              <Link to="/universities">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Universities
              </Link>
            </Button>
            <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 font-semibold border-2 border-blue-500" asChild>
              <Link to="/consultation">
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FutureAceConsultancy?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support to make your study abroad journey smooth and successful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations Guide */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Study Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete Guide to Studying in Malaysia 2025/26
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-16">
            <img 
              src={malaysiaSyudyGuide} 
              alt="Complete Guide to Studying in Malaysia 2025/26" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Study Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover world-class universities in top study destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => (
              <Link key={index} to={destination.country === "Malaysia" ? "/universities" : "/universities"}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{destination.flag}</span>
                        <h3 className="text-lg font-semibold">{destination.country}</h3>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{destination.universities} Universities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{destination.programs}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from students who achieved their dreams with our guidance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Badge variant="secondary" className="mt-2">{testimonial.country}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start Your Journey Section */}
      <section className="py-16 lg:py-24 bg-blue-500 text-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join thousands of students who have achieved their academic dreams with our expert guidance.
            </p>
            <div className="max-w-4xl mx-auto mb-8">
              <img 
                src={malaysiaGuidePreview} 
                alt="Complete Guide to Studying in Malaysia 2025/26" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 font-semibold shadow-lg border-2 border-white" asChild>
                <Link to="/consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-500 font-semibold" asChild>
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Consultation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your study abroad journey? Schedule a personalized consultation with our experts.
            </p>
          </div>
          <BookConsultationForm />
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Details</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for immediate assistance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <span className="text-4xl">📞</span>
                </div>
                <CardTitle className="text-lg">Phone Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">+60 11-1437 1926</p>
                  <p className="font-semibold">+60 18-284 8310</p>
                  <p className="text-sm text-muted-foreground">(We reply within 24 hours)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <span className="text-4xl">📧</span>
                </div>
                <CardTitle className="text-lg">Emails</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">fa.consultancy2020@gmail.com</p>
                  <p className="text-sm">asadkhanbaloch111@gmail.com</p>
                  <p className="text-sm text-muted-foreground">(We reply within 24 hours)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <span className="text-4xl">🏢</span>
                </div>
                <CardTitle className="text-lg">Office Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Petaling Jaya, Cova Villa</p>
                  <p className="text-sm text-muted-foreground">Visit us for in-person consultation</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <span className="text-4xl">🕒</span>
                </div>
                <CardTitle className="text-lg">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">Monday – Friday: 9 AM – 6 PM</p>
                  <p className="text-sm">Saturday: 10 AM – 4 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;