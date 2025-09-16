import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star, Users, DollarSign, Calendar, GraduationCap, Award, Clock, BookOpen, ArrowLeft } from "lucide-react";

// Import university logos
import taylorsLogo from "@/assets/taylors-logo.jpg";
import mahsaLogo from "@/assets/mahsa-logo.jpg";
import segiLogo from "@/assets/segi-logo.jpg";
import cityLogo from "@/assets/city-logo.jpg";
import ucsiLogo from "@/assets/ucsi-logo.jpg";
import intiLogo from "@/assets/inti-logo.jpg";

const UniversityDetail = () => {
  const { id } = useParams();
  
  const universities = [
    {
      id: 1,
      name: "Taylor's University",
      location: "Subang Jaya, Selangor, Malaysia",
      country: "Malaysia",
      type: "Private",
      ranking: 1,
      students: "20,000+",
      tuition: "RM 45,000/year (avg)",
      image: taylorsLogo,
      description: "Taylor's University is Malaysia's leading private university, renowned for its excellence in Hospitality, Tourism, Business, and Design. Established in 1969, Taylor's has built a strong reputation for providing world-class education with industry-relevant programs.",
      accreditation: "Malaysian Qualifications Agency (MQA)",
      establishedYear: 1969,
      campusSize: "22 acres",
      acceptanceRate: "Top private university in Malaysia – QS",
      programs: [
        {
          id: 1,
          name: "Bachelor of Culinary Arts Management",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 48,000/year",
          intakeMonths: ["March", "August"],
          requirements: "SPM: 5 credits, IELTS: 6.0+"
        },
        {
          id: 2,
          name: "Bachelor of International Hospitality Management",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 45,000/year",
          intakeMonths: ["March", "August"],
          requirements: "SPM: 5 credits, IELTS: 6.0+"
        },
        {
          id: 3,
          name: "Bachelor of Business (Marketing)",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 42,000/year",
          intakeMonths: ["March", "August"],
          requirements: "SPM: 5 credits, IELTS: 6.0+"
        },
        {
          id: 4,
          name: "Bachelor of Design (Interior)",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 46,000/year",
          intakeMonths: ["March", "August"],
          requirements: "SPM: 5 credits, Portfolio, IELTS: 6.0+"
        }
      ],
      feeStructure: {
        tuition: "RM 45,000",
        accommodation: "RM 12,000",
        meals: "RM 6,000",
        books: "RM 2,000",
        personal: "RM 3,000",
        total: "RM 68,000"
      }
    },
    {
      id: 2,
      name: "MAHSA University",
      location: "Bandar Saujana Putra, Selangor, Malaysia",
      country: "Malaysia",
      type: "Private",
      ranking: 2,
      students: "15,000+",
      tuition: "RM 23,000/year (avg)",
      image: mahsaLogo,
      description: "MAHSA University is a leading private university specializing in Medicine, Dentistry, Pharmacy, Nursing & Allied Health. With modern facilities and experienced faculty, MAHSA provides world-class healthcare education.",
      accreditation: "Malaysian Qualifications Agency (MQA)",
      establishedYear: 2005,
      campusSize: "42 acres",
      acceptanceRate: "Leading in health sciences",
      programs: [
        {
          id: 1,
          name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
          level: "Bachelor",
          duration: "5 years",
          tuition: "RM 55,000/year",
          intakeMonths: ["September"],
          requirements: "A-Level: AAB in Sciences, IELTS: 7.0+"
        },
        {
          id: 2,
          name: "Bachelor of Dental Surgery",
          level: "Bachelor",
          duration: "5 years",
          tuition: "RM 50,000/year",
          intakeMonths: ["September"],
          requirements: "A-Level: AAB in Sciences, IELTS: 7.0+"
        },
        {
          id: 3,
          name: "Bachelor of Pharmacy",
          level: "Bachelor",
          duration: "4 years",
          tuition: "RM 35,000/year",
          intakeMonths: ["January", "September"],
          requirements: "A-Level: ABB in Sciences, IELTS: 6.5+"
        },
        {
          id: 4,
          name: "Bachelor of Nursing",
          level: "Bachelor",
          duration: "4 years",
          tuition: "RM 25,000/year",
          intakeMonths: ["January", "September"],
          requirements: "A-Level: BBC in Sciences, IELTS: 6.5+"
        }
      ],
      feeStructure: {
        tuition: "RM 45,000",
        accommodation: "RM 8,000",
        meals: "RM 5,000",
        books: "RM 2,500",
        personal: "RM 2,500",
        total: "RM 63,000"
      }
    },
    {
      id: 3,
      name: "SEGi University & Colleges",
      location: "Kota Damansara, Selangor, Malaysia",
      country: "Malaysia",
      type: "Private",
      ranking: 3,
      students: "25,000+",
      tuition: "RM 30,000/year (avg)",
      image: segiLogo,
      description: "SEGi University is a large multi-campus private university offering diverse programs in Business, IT, Engineering & Health. With QS 5 Stars Plus rating, SEGi provides quality education across multiple disciplines.",
      accreditation: "Malaysian Qualifications Agency (MQA)",
      establishedYear: 1977,
      campusSize: "30 acres",
      acceptanceRate: "QS 5 Stars Plus rated",
      programs: [
        {
          id: 1,
          name: "Bachelor of Information Technology",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 32,000/year",
          intakeMonths: ["January", "May", "September"],
          requirements: "SPM: 5 credits including Mathematics, IELTS: 6.0+"
        },
        {
          id: 2,
          name: "Bachelor of Business Administration",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 30,000/year",
          intakeMonths: ["January", "May", "September"],
          requirements: "SPM: 5 credits, IELTS: 6.0+"
        },
        {
          id: 3,
          name: "Bachelor of Engineering (Civil)",
          level: "Bachelor",
          duration: "4 years",
          tuition: "RM 35,000/year",
          intakeMonths: ["January", "September"],
          requirements: "A-Level: BBB in Mathematics & Sciences, IELTS: 6.0+"
        },
        {
          id: 4,
          name: "Bachelor of Physiotherapy",
          level: "Bachelor",
          duration: "4 years",
          tuition: "RM 38,000/year",
          intakeMonths: ["January", "September"],
          requirements: "A-Level: BBC in Sciences, IELTS: 6.5+"
        }
      ],
      feeStructure: {
        tuition: "RM 32,000",
        accommodation: "RM 9,000",
        meals: "RM 5,500",
        books: "RM 2,000",
        personal: "RM 2,500",
        total: "RM 51,000"
      }
    },
    {
      id: 4,
      name: "City University Malaysia",
      location: "Petaling Jaya, Selangor, Malaysia",
      country: "Malaysia",
      type: "Private",
      ranking: 4,
      students: "10,000+",
      tuition: "RM 28,000/year (avg)",
      image: cityLogo,
      description: "City University Malaysia is an established private university with strong programs in Business, IT, Education & Design. With QS 5 Stars rating, City University provides quality education with industry focus.",
      accreditation: "Malaysian Qualifications Agency (MQA)",
      establishedYear: 1984,
      campusSize: "15 acres",
      acceptanceRate: "QS 5 Stars, SETARA \"Competitive\"",
      programs: [
        {
          id: 1,
          name: "Bachelor of Computer Science",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 28,000/year",
          intakeMonths: ["February", "June", "October"],
          requirements: "SPM: 5 credits including Mathematics, IELTS: 6.0+"
        },
        {
          id: 2,
          name: "Bachelor of Business Management",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 26,000/year",
          intakeMonths: ["February", "June", "October"],
          requirements: "SPM: 5 credits, IELTS: 6.0+"
        },
        {
          id: 3,
          name: "Bachelor of Education (TESL)",
          level: "Bachelor",
          duration: "4 years",
          tuition: "RM 25,000/year",
          intakeMonths: ["February", "June"],
          requirements: "SPM: 5 credits including English, IELTS: 7.0+"
        },
        {
          id: 4,
          name: "Bachelor of Graphic Design",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 29,000/year",
          intakeMonths: ["February", "June", "October"],
          requirements: "SPM: 5 credits, Portfolio, IELTS: 6.0+"
        }
      ],
      feeStructure: {
        tuition: "RM 27,000",
        accommodation: "RM 8,500",
        meals: "RM 5,000",
        books: "RM 1,800",
        personal: "RM 2,200",
        total: "RM 44,500"
      }
    },
    {
      id: 5,
      name: "UCSI University",
      location: "Kuala Lumpur, Malaysia",
      country: "Malaysia",
      type: "Private",
      ranking: 5,
      students: "12,000+",
      tuition: "RM 40,000/year (avg)",
      image: ucsiLogo,
      description: "UCSI University is highly ranked for Medicine, Pharmacy, Music & Hospitality with global recognition. With Top 300 QS World Ranking, UCSI provides world-class education across various disciplines.",
      accreditation: "Malaysian Qualifications Agency (MQA)",
      establishedYear: 1986,
      campusSize: "19 acres",
      acceptanceRate: "Top 300 QS World Ranking",
      programs: [
        {
          id: 1,
          name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
          level: "Bachelor",
          duration: "5 years",
          tuition: "RM 60,000/year",
          intakeMonths: ["September"],
          requirements: "A-Level: AAA in Sciences, IELTS: 7.0+"
        },
        {
          id: 2,
          name: "Bachelor of Pharmacy",
          level: "Bachelor",
          duration: "4 years",
          tuition: "RM 40,000/year",
          intakeMonths: ["January", "September"],
          requirements: "A-Level: ABB in Sciences, IELTS: 6.5+"
        },
        {
          id: 3,
          name: "Bachelor of Music Performance",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 45,000/year",
          intakeMonths: ["February", "September"],
          requirements: "Music Audition, SPM: 5 credits, IELTS: 6.0+"
        },
        {
          id: 4,
          name: "Bachelor of Hospitality Management",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 38,000/year",
          intakeMonths: ["January", "May", "September"],
          requirements: "SPM: 5 credits, IELTS: 6.0+"
        }
      ],
      feeStructure: {
        tuition: "RM 45,000",
        accommodation: "RM 10,000",
        meals: "RM 6,000",
        books: "RM 2,500",
        personal: "RM 3,000",
        total: "RM 66,500"
      }
    },
    {
      id: 6,
      name: "INTI International University",
      location: "Nilai, Negeri Sembilan, Malaysia",
      country: "Malaysia",
      type: "Private",
      ranking: 6,
      students: "16,000+",
      tuition: "RM 32,000/year (avg)",
      image: intiLogo,
      description: "INTI International University is strong in Business, Engineering & IT, known for industry collaborations & international exposure. With QS ranking and global partnerships, INTI provides internationally recognized education.",
      accreditation: "Malaysian Qualifications Agency (MQA)",
      establishedYear: 1986,
      campusSize: "82 acres",
      acceptanceRate: "QS ranked, globally partnered",
      programs: [
        {
          id: 1,
          name: "Bachelor of Engineering (Electrical & Electronic)",
          level: "Bachelor",
          duration: "4 years",
          tuition: "RM 34,000/year",
          intakeMonths: ["January", "May", "August"],
          requirements: "A-Level: BBB in Mathematics & Physics, IELTS: 6.0+"
        },
        {
          id: 2,
          name: "Bachelor of Business (International Business)",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 30,000/year",
          intakeMonths: ["January", "May", "August"],
          requirements: "SPM: 5 credits, IELTS: 6.0+"
        },
        {
          id: 3,
          name: "Bachelor of Information Technology",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 32,000/year",
          intakeMonths: ["January", "May", "August"],
          requirements: "SPM: 5 credits including Mathematics, IELTS: 6.0+"
        },
        {
          id: 4,
          name: "Bachelor of Mass Communication",
          level: "Bachelor",
          duration: "3 years",
          tuition: "RM 31,000/year",
          intakeMonths: ["January", "May", "August"],
          requirements: "SPM: 5 credits including English, IELTS: 6.5+"
        }
      ],
      feeStructure: {
        tuition: "RM 32,000",
        accommodation: "RM 7,500",
        meals: "RM 4,500",
        books: "RM 2,000",
        personal: "RM 2,500",
        total: "RM 48,500"
      }
    }
  ];

  const university = universities.find(uni => uni.id === parseInt(id || "1")) || universities[0];

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/universities">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Universities
          </Link>
        </Button>

        {/* University Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <img 
                    src={university.image} 
                    alt={`${university.name} logo`}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">{university.name}</CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                          <MapPin className="h-5 w-5" />
                          <span>{university.location}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        #{university.ranking}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{university.students}</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{university.establishedYear}</div>
                        <div className="text-sm text-muted-foreground">Established</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{university.campusSize}</div>
                        <div className="text-sm text-muted-foreground">Campus</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{university.acceptanceRate}</div>
                        <div className="text-sm text-muted-foreground">Acceptance</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Badge variant={university.type === "Private" ? "default" : "secondary"}>
                        {university.type}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{university.accreditation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {university.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Take Action</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <Link to="/consultation">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Apply Now
                </Button>
                <Button variant="ghost" className="w-full">
                  Download Brochure
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tuition Fee</span>
                  <span className="font-semibold">{university.tuition}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Programs</span>
                  <span className="font-semibold">{university.programs.length}+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-semibold">{university.type}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs Section */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span>Available Programs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {university.programs.map((program) => (
                <Card key={program.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{program.name}</CardTitle>
                    <Badge variant="outline">{program.level}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{program.tuition}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{program.intakeMonths.join(", ")}</span>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                      <p className="text-xs text-muted-foreground">{program.requirements}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fee Structure */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <span>Annual Fee Structure</span>
            </CardTitle>
            <CardDescription>
              Estimated costs for one academic year (subject to change)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Tuition Fee</span>
                  <span className="font-semibold">{university.feeStructure.tuition}</span>
                </div>
                <div className="flex justify-between">
                  <span>Accommodation</span>
                  <span className="font-semibold">{university.feeStructure.accommodation}</span>
                </div>
                <div className="flex justify-between">
                  <span>Meals</span>
                  <span className="font-semibold">{university.feeStructure.meals}</span>
                </div>
                <div className="flex justify-between">
                  <span>Books & Supplies</span>
                  <span className="font-semibold">{university.feeStructure.books}</span>
                </div>
                <div className="flex justify-between">
                  <span>Personal Expenses</span>
                  <span className="font-semibold">{university.feeStructure.personal}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Annual Cost</span>
                  <span className="text-primary">{university.feeStructure.total}</span>
                </div>
              </div>
              
              <div className="bg-accent/5 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Financial Aid Available</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Merit-based scholarships</li>
                  <li>• Need-based financial aid</li>
                  <li>• Work-study programs</li>
                  <li>• External scholarships</li>
                  <li>• Payment plans available</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn About Financial Aid
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UniversityDetail;