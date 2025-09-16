import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Eye, Clock, ArrowRight, BookOpen, MapPin, Star, DollarSign, GraduationCap, Trophy, Target, CheckCircle } from "lucide-react";

interface ScholarshipModalProps {
  triggerText: string;
  buttonClassName?: string;
}

const ScholarshipModal = ({ triggerText, buttonClassName }: ScholarshipModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scholarships = [
    {
      name: "Chevening Scholarships (UK)",
      amount: "Full tuition + living expenses",
      deadline: "November 2024",
      eligibility: "Outstanding academic record, leadership potential, work experience",
      coverage: ["Full tuition fees", "Monthly living allowance", "Return airfare", "Visa application costs"],
      countries: ["United Kingdom"],
      level: "Master's",
      competitiveness: "Very High",
      description: "The UK government's global scholarship programme, funded by the Foreign and Commonwealth Office and partner organisations."
    },
    {
      name: "Fulbright Foreign Student Program (USA)",
      amount: "$25,000 - $45,000 per year",
      deadline: "October 2024",
      eligibility: "Academic excellence, leadership experience, strong English proficiency",
      coverage: ["Tuition fees", "Living stipend", "Health insurance", "Round-trip travel"],
      countries: ["United States"],
      level: "Master's & PhD",
      competitiveness: "Very High",
      description: "Flagship international exchange program providing opportunities for students to undertake graduate study and research in the US."
    },
    {
      name: "Australia Awards Scholarships",
      amount: "Full tuition + AUD $3,000/month",
      deadline: "April 2024",
      eligibility: "From eligible developing countries, strong academic record, work experience",
      coverage: ["Full tuition fees", "Return air travel", "Establishment allowance", "Monthly contribution to living expenses"],
      countries: ["Australia"],
      level: "Bachelor's, Master's & PhD",
      competitiveness: "High",
      description: "Long-term development scholarships offered by the Australian Government to students from developing countries."
    },
    {
      name: "DAAD Scholarships (Germany)",
      amount: "€850 - €1,200 per month",
      deadline: "Various throughout the year",
      eligibility: "Academic excellence, relevant work experience, German language skills (for some programs)",
      coverage: ["Monthly stipend", "Health insurance", "Travel allowance", "Study and research allowance"],
      countries: ["Germany"],
      level: "Master's & PhD",
      competitiveness: "High",
      description: "German Academic Exchange Service offering scholarships for international students in various fields."
    },
    {
      name: "Erasmus Mundus Joint Master Degrees",
      amount: "€1,400 per month + tuition",
      deadline: "December 2023 - March 2024",
      eligibility: "Bachelor's degree, English proficiency, specific program requirements",
      coverage: ["Monthly living allowance", "Tuition fees", "Travel costs", "Insurance coverage"],
      countries: ["Multiple EU countries"],
      level: "Master's",
      competitiveness: "High",
      description: "Prestigious, integrated, international study programmes jointly delivered by consortia of higher education institutions."
    },
    {
      name: "Swiss Excellence Scholarships",
      amount: "CHF 1,920 per month + tuition",
      deadline: "December 2023",
      eligibility: "Outstanding academic record, research potential, under 35 years old",
      coverage: ["Monthly stipend", "Tuition fee waiver", "Health insurance", "Housing allowance"],
      countries: ["Switzerland"],
      level: "Master's & PhD",
      competitiveness: "Very High",
      description: "Research scholarships for foreign scholars who wish to pursue doctoral or post-doctoral research in Switzerland."
    },
    {
      name: "Canadian Government Scholarships",
      amount: "CAD $25,000 - $35,000",
      deadline: "February 2024",
      eligibility: "Academic excellence, research potential, language proficiency",
      coverage: ["Tuition fees", "Health insurance", "Monthly living allowance", "Research allowance"],
      countries: ["Canada"],
      level: "Master's & PhD",
      competitiveness: "High",
      description: "Various scholarship programs offered by the Canadian government to attract international students."
    },
    {
      name: "Japanese Government (MEXT) Scholarships",
      amount: "¥143,000 - ¥145,000 per month",
      deadline: "May - June 2024",
      eligibility: "Academic excellence, Japanese language proficiency (for some programs), under specific age limits",
      coverage: ["Monthly stipend", "Tuition fee exemption", "Round-trip airfare", "No tuition fees"],
      countries: ["Japan"],
      level: "Bachelor's, Master's & PhD",
      competitiveness: "High",
      description: "Scholarships offered by the Japanese Ministry of Education, Culture, Sports, Science and Technology."
    },
    {
      name: "New Zealand Development Scholarships",
      amount: "Full tuition + NZD $1,000/month",
      deadline: "March 2024",
      eligibility: "From eligible developing countries, development-related study goals, work experience",
      coverage: ["Full tuition fees", "Living allowance", "Return travel", "Health insurance"],
      countries: ["New Zealand"],
      level: "Bachelor's & Master's",
      competitiveness: "Medium-High",
      description: "Scholarships for students from developing countries to study in priority subject areas that support development outcomes."
    },
    {
      name: "Korean Government Scholarship Program (KGSP)",
      amount: "KRW 900,000 per month + tuition",
      deadline: "March 2024",
      eligibility: "Academic excellence, under 25 (undergraduate) or 40 (graduate), good health",
      coverage: ["Tuition fees", "Monthly living allowance", "Round-trip airfare", "Korean language course"],
      countries: ["South Korea"],
      level: "Bachelor's, Master's & PhD",
      competitiveness: "Medium-High",
      description: "Scholarships offered by the Korean government to promote international education exchange and mutual friendship."
    }
  ];

  const applicationTips = [
    "Start your application process at least 12-18 months in advance",
    "Research thoroughly and apply to multiple scholarships to increase your chances",
    "Ensure your academic transcripts are translated and certified if required",
    "Write a compelling personal statement that aligns with the scholarship's objectives",
    "Obtain strong letters of recommendation from academic or professional references",
    "Prepare for potential interviews and language proficiency tests",
    "Keep track of all deadlines and requirements for each scholarship",
    "Consider working with education consultants for personalized guidance"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className={buttonClassName || "text-blue-600 hover:text-blue-700 hover:bg-blue-50"}>
          {triggerText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Top 10 Scholarships for International Students 2024</DialogTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>Future Ace Consultancy</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>January 10, 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>2100 views</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>10 min read</span>
            </div>
          </div>
          <Badge className="w-fit bg-purple-100 text-purple-700">Scholarships</Badge>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-yellow-600" />
              Why Apply for International Scholarships?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              International scholarships can significantly reduce the financial burden of studying abroad while opening doors to world-class education and global career opportunities. These prestigious awards not only cover tuition fees but often include living expenses, travel costs, and valuable networking opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-semibold text-green-800">Financial Support</h3>
                <p className="text-sm text-green-700">Cover tuition, living expenses, and travel costs</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <GraduationCap className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-blue-800">Academic Excellence</h3>
                <p className="text-sm text-blue-700">Access to top universities and research opportunities</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <Target className="h-6 w-6 text-purple-600 mb-2" />
                <h3 className="font-semibold text-purple-800">Career Advancement</h3>
                <p className="text-sm text-purple-700">Network with global leaders and enhance career prospects</p>
              </div>
            </div>
          </section>

          {/* Scholarships List */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Top 10 International Scholarships</h2>
            <div className="space-y-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="border rounded-lg p-6 space-y-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-primary">{index + 1}. {scholarship.name}</h3>
                        <Badge variant={scholarship.competitiveness === "Very High" ? "destructive" : scholarship.competitiveness === "High" ? "default" : "secondary"}>
                          {scholarship.competitiveness}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{scholarship.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">AWARD AMOUNT</p>
                      <p className="text-sm font-semibold text-green-600">{scholarship.amount}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">DEADLINE</p>
                      <p className="text-sm font-semibold text-red-600">{scholarship.deadline}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">STUDY LEVEL</p>
                      <p className="text-sm font-semibold">{scholarship.level}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">DESTINATION</p>
                      <p className="text-sm font-semibold text-blue-600">{scholarship.countries.join(", ")}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Eligibility Requirements:</p>
                      <p className="text-sm text-muted-foreground">{scholarship.eligibility}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Coverage Includes:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {scholarship.coverage.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Tips */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Application Tips for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Get Help CTA */}
          <section className="bg-gradient-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Need Help with Your Scholarship Applications?</h2>
            <p className="text-muted-foreground mb-4">
              Our expert education consultants can help you identify the best scholarship opportunities, prepare compelling applications, and increase your chances of success. Get personalized guidance for your scholarship journey.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const whatsappMessage = `Hello! I'm interested in applying for international scholarships and would like guidance on:

🎓 Identifying suitable scholarship opportunities
📝 Application preparation and essay writing
📋 Document preparation and certification
💰 Financial planning and backup options
⏰ Application timeline and deadline management

Please provide me with personalized scholarship consultation services.`;

                const whatsappNumber = "601114371926";
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappUrl, '_blank');
                setIsOpen(false);
              }}
            >
              Get Scholarship Guidance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScholarshipModal;