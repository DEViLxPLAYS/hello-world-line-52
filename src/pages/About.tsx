import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Heart, BookOpen, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Student-Centric",
      description: "We put students first, ensuring personalized guidance tailored to individual goals and dreams."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "Honest, transparent advice with no hidden agendas. We provide genuine recommendations for your success."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Leveraging technology and modern approaches to make study abroad accessible and efficient."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Perspective",
      description: "Understanding diverse cultures and education systems to provide comprehensive international guidance."
    }
  ];

  const team = [
    {
      name: "Taibul Islam Faisal",
      role: "Founder & CEO",
      image: "👨‍💼",
      description: "Pioneer in Malaysian education consultancy with extensive experience in international student services.",
      specialization: "Malaysian & Russian Universities"
    },
    {
      name: "Fatima Rahman",
      role: "Senior Education Consultant",
      image: "👩‍🎓",
      description: "Masters in International Education with 8+ years of experience in student guidance.",
      specialization: "Academic Program Selection"
    },
    {
      name: "Ahmad Rahman",
      role: "Admissions Specialist",
      image: "👨‍💻",
      description: "Former university admissions officer with deep knowledge of Malaysian education system.",
      specialization: "Malaysian Universities"
    },
    {
      name: "Elena Petrova",
      role: "MBBS Specialist",
      image: "👩‍⚕️",
      description: "Medical education consultant specializing in Russian medical universities.",
      specialization: "Russian Medical Programs"
    }
  ];

  const achievements = [
    { number: "5000+", label: "Students Helped" },
    { number: "500+", label: "Partner Universities" },
    { number: "20+", label: "Countries" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Future Ace Consultancy</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering students to achieve their global education dreams through expert guidance, 
            personalized support, and comprehensive services.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To democratize global education by providing accessible, expert guidance that helps students 
                  navigate the complex world of international universities. We believe every student deserves 
                  the opportunity to pursue their academic dreams, regardless of their background or circumstances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To be the world's most trusted study abroad consultancy, known for transforming lives through 
                  education. We envision a future where geographical boundaries don't limit educational opportunities, 
                  and where every student can access world-class education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2020 by Taibul Islam Faisal, Future Ace Consultancy began as a small initiative to help 
                local students access international education opportunities. Having experienced the challenges 
                of studying abroad firsthand during his own academic journey, Taibul recognized the need for 
                professional, personalized guidance in navigating the complex application processes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as helping a few students from her community has now grown into a comprehensive 
                consultancy that has assisted over 5,000 students in achieving their academic dreams across 
                Malaysia and Russia. Our success is measured not just in numbers, but in the lives we've transformed 
                and the dreams we've helped realize.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Future Ace Consultancy stands as a bridge between ambitious students and world-class universities, 
                continuing our mission to make global education accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to student success
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-gradient-card">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardHeader>
                  <div className="text-5xl mb-4">{member.image}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-3">
                    {member.description}
                  </CardDescription>
                  <Badge variant="outline" className="text-xs">
                    {member.specialization}
                  </Badge>
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
            Join thousands of students who have achieved their academic dreams with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-white" asChild>
              <Link to="/consultation">
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/universities">
                Explore Universities
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;