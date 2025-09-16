import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Eye, Clock, ArrowRight, BookOpen, MapPin, Star, DollarSign, GraduationCap, Building, Users, CheckCircle } from "lucide-react";

interface UniversityModalProps {
  triggerText: string;
  universityName: string;
  location: string;
  ranking: string;
  students: string;
  tuitionFee: string;
  programs: string;
  logo: string;
}

const UniversityModal = ({ 
  triggerText, 
  universityName, 
  location, 
  ranking, 
  students, 
  tuitionFee, 
  programs, 
  logo 
}: UniversityModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getUniversityDetails = (name: string) => {
    const details: Record<string, any> = {
      "INTI International University": {
        overview: "INTI International University is a leading private university in Malaysia, renowned for its strong industry partnerships and innovative curriculum. Established in 1986, INTI has built a reputation for producing graduates who are highly sought after by employers.",
        highlights: [
          "Strong industry partnerships with multinational companies",
          "Modern campus facilities with state-of-the-art laboratories",
          "International curriculum aligned with global standards",
          "Excellent job placement rates (95%+ within 6 months)",
          "Dual degree programs with international universities"
        ],
        topPrograms: [
          { name: "Engineering", description: "Mechanical, Electrical, Civil, and Software Engineering programs" },
          { name: "Business", description: "MBA, Marketing, Finance, and International Business" },
          { name: "Information Technology", description: "Computer Science, Software Engineering, Cybersecurity" },
          { name: "Mass Communication", description: "Journalism, Public Relations, Digital Media" }
        ],
        facilities: [
          "Advanced engineering laboratories",
          "Business simulation centers",
          "Modern library with digital resources",
          "Student accommodation on campus",
          "Sports and recreation facilities"
        ],
        scholarships: [
          "Merit-based scholarships up to 100% tuition coverage",
          "Sports excellence scholarships",
          "International student bursaries",
          "Industry-sponsored scholarships"
        ]
      },
      "UCSI University": {
        overview: "UCSI University is a top-tier private university known for its excellence in music, performing arts, and research programs. With a diverse student community from over 110 countries, UCSI provides a truly international learning environment.",
        highlights: [
          "World-renowned music and performing arts programs",
          "Research-focused curriculum with strong publication record",
          "Diverse international student community (110+ countries)",
          "Industry partnerships with leading organizations",
          "Modern campus facilities and technology"
        ],
        topPrograms: [
          { name: "Music", description: "Classical, Contemporary, and Music Technology programs" },
          { name: "Medicine", description: "MBBS program with clinical training" },
          { name: "Engineering", description: "Chemical, Mechanical, and Electrical Engineering" },
          { name: "Hospitality Management", description: "International hospitality and tourism programs" }
        ],
        facilities: [
          "Professional recording studios",
          "Concert halls and performance venues",
          "Medical simulation laboratories",
          "Research centers and libraries",
          "International student support services"
        ],
        scholarships: [
          "Academic excellence scholarships",
          "Music and arts talent scholarships",
          "International student grants",
          "Research assistantship programs"
        ]
      },
      "Taylor's University": {
        overview: "Taylor's University is a premier private university specializing in hospitality, business, and design. Known for its state-of-the-art facilities and industry-relevant curriculum, Taylor's prepares students for successful careers in their chosen fields.",
        highlights: [
          "Leader in hospitality management education in Asia",
          "State-of-the-art facilities including award-winning campus",
          "Industry-relevant curriculum designed with employer input",
          "Strong alumni network in hospitality and business sectors",
          "International partnerships and exchange programs"
        ],
        topPrograms: [
          { name: "Hospitality Management", description: "International hospitality and culinary arts programs" },
          { name: "Business", description: "MBA, Finance, Marketing, and Entrepreneurship" },
          { name: "Design", description: "Interior Design, Architecture, and Creative Arts" },
          { name: "Communication", description: "Mass Communication and Digital Media" }
        ],
        facilities: [
          "Award-winning lakeside campus",
          "Professional kitchens and restaurants",
          "Design studios and workshops",
          "Business simulation centers",
          "Student life and recreation facilities"
        ],
        scholarships: [
          "Taylor's Excellence Scholarships",
          "Hospitality industry scholarships",
          "Creative arts scholarships",
          "International student support funds"
        ]
      },
      "MAHSA University": {
        overview: "MAHSA University is a leading institution in medical and health sciences education. With modern medical facilities and comprehensive healthcare programs, MAHSA has established itself as a premier destination for aspiring healthcare professionals.",
        highlights: [
          "Specialized focus on medical and health sciences",
          "Modern medical facilities and simulation laboratories",
          "Clinical training excellence with hospital partnerships",
          "Experienced faculty with medical expertise",
          "Research opportunities in healthcare fields"
        ],
        topPrograms: [
          { name: "Medicine", description: "MBBS program with comprehensive clinical training" },
          { name: "Dentistry", description: "Bachelor of Dental Surgery (BDS) program" },
          { name: "Pharmacy", description: "Bachelor of Pharmacy with research focus" },
          { name: "Nursing", description: "Bachelor of Nursing Science program" }
        ],
        facilities: [
          "Medical simulation laboratories",
          "Dental clinics and training facilities",
          "Pharmacy laboratories",
          "Hospital partnerships for clinical training",
          "Research centers in medical sciences"
        ],
        scholarships: [
          "Medical excellence scholarships",
          "Healthcare professional development grants",
          "International student bursaries",
          "Research scholarship programs"
        ]
      },
      "SEGI University": {
        overview: "SEGI University offers quality education at affordable costs with flexible learning options. Known for its career-focused programs and strong industry connections, SEGI provides excellent value for money in higher education.",
        highlights: [
          "Affordable quality education with flexible payment plans",
          "Flexible learning options including part-time programs",
          "Career-focused curriculum with practical training",
          "Strong industry connections and job placement support",
          "Modern facilities and technology integration"
        ],
        topPrograms: [
          { name: "Business", description: "Business Administration, Accounting, and Finance" },
          { name: "Information Technology", description: "Computer Science and Software Engineering" },
          { name: "Allied Health", description: "Physiotherapy, Occupational Therapy, and Optometry" },
          { name: "Early Childhood Education", description: "Education and child development programs" }
        ],
        facilities: [
          "Modern computer laboratories",
          "Business training centers",
          "Allied health clinics",
          "Education practicum centers",
          "Student support services"
        ],
        scholarships: [
          "Academic merit scholarships",
          "Financial need-based assistance",
          "Industry-sponsored programs",
          "Alumni support funds"
        ]
      },
      "City University Malaysia": {
        overview: "City University Malaysia is an emerging institution with a focus on innovation in technology and business education. With small class sizes and personalized attention, City University provides a supportive learning environment for students.",
        highlights: [
          "Innovation in technology and digital education",
          "Small class sizes ensuring personalized attention",
          "Modern facilities with latest technology",
          "Growing reputation in business and technology fields",
          "Strong industry partnerships and internship programs"
        ],
        topPrograms: [
          { name: "Information Technology", description: "Software Engineering, Data Science, and Cybersecurity" },
          { name: "Business", description: "Business Administration and Digital Marketing" },
          { name: "Architecture", description: "Architecture and Built Environment programs" },
          { name: "Psychology", description: "Applied Psychology and Counseling" }
        ],
        facilities: [
          "Modern technology laboratories",
          "Innovation and entrepreneurship centers",
          "Architecture design studios",
          "Psychology counseling centers",
          "Student collaboration spaces"
        ],
        scholarships: [
          "Technology innovation scholarships",
          "Entrepreneurship grants",
          "Academic performance awards",
          "Industry partnership scholarships"
        ]
      }
    };

    return details[name] || details["INTI International University"];
  };

  const universityData = getUniversityDetails(universityName);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200">
          {triggerText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-4xl">{logo}</span>
              <div>
                <DialogTitle className="text-2xl font-bold">{universityName}</DialogTitle>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <MapPin className="mr-1 h-3 w-3" />
                  {location}
                </p>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground">{ranking}</Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center p-3 bg-muted rounded-lg">
              <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="text-sm font-medium">{students}</p>
              <p className="text-xs text-muted-foreground">Students</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <DollarSign className="h-5 w-5 mx-auto mb-1 text-green-600" />
              <p className="text-sm font-medium">{tuitionFee}</p>
              <p className="text-xs text-muted-foreground">Tuition Fee</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <GraduationCap className="h-5 w-5 mx-auto mb-1 text-purple-600" />
              <p className="text-sm font-medium">{programs}</p>
              <p className="text-xs text-muted-foreground">Programs</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <Building className="h-5 w-5 mx-auto mb-1 text-blue-600" />
              <p className="text-sm font-medium">Private</p>
              <p className="text-xs text-muted-foreground">University Type</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-primary" />
              University Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {universityData.overview}
            </p>
          </section>

          {/* Key Highlights */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {universityData.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Top Programs */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Top Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {universityData.topPrograms.map((program: any, index: number) => (
                <div key={index} className="border rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold text-primary">{program.name}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Facilities */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Campus Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {universityData.facilities.map((facility: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Scholarships */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Scholarships & Financial Aid</h2>
            <div className="space-y-3">
              {universityData.scholarships.map((scholarship: string, index: number) => (
                <div key={index} className="flex items-start space-x-3 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">{scholarship}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-gradient-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Ready to Apply?</h2>
            <p className="text-muted-foreground mb-4">
              Get personalized guidance for your application to {universityName}. Our education consultants will help you with admission requirements, application process, and scholarship opportunities.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const whatsappMessage = `Hello! I'm interested in applying to ${universityName} and would like to know more about:

🎓 Admission requirements and process
📚 Available programs and specializations  
💰 Tuition fees and scholarship opportunities
📋 Application deadlines and documentation
🏠 Accommodation and campus facilities

Please provide me with detailed information and guidance for ${universityName}.`;

                const whatsappNumber = "601114371926";
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappUrl, '_blank');
                setIsOpen(false);
              }}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UniversityModal;