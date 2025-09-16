import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Eye, Clock, ArrowRight, BookOpen, MapPin, Star, DollarSign } from "lucide-react";

interface ArticleModalProps {
  triggerText: string;
  title: string;
  author: string;
  publishDate: string;
  views: number;
  readTime: string;
  category: string;
}

const ArticleModal = ({ triggerText, title, author, publishDate, views, readTime, category }: ArticleModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const malaysianUniversities = [
    {
      name: "INTI International University",
      highlights: ["Strong industry partnerships", "Modern campus facilities", "International curriculum"],
      benefits: "Known for engineering and business programs with excellent job placement rates.",
      location: "Subang Jaya, Selangor",
      ranking: "Top 150 in Asia"
    },
    {
      name: "UCSI University",
      highlights: ["Music and performing arts excellence", "Research-focused programs", "Diverse student community"],
      benefits: "Offers world-class facilities and strong alumni network in creative industries.",
      location: "Kuala Lumpur",
      ranking: "Top 300 Worldwide"
    },
    {
      name: "Taylor's University",
      highlights: ["Hospitality management leader", "State-of-the-art facilities", "Industry-relevant curriculum"],
      benefits: "Premier destination for hospitality, business, and design studies in Asia.",
      location: "Subang Jaya, Selangor",
      ranking: "Top 250 Worldwide"
    },
    {
      name: "MAHSA University",
      highlights: ["Medical and health sciences focus", "Modern medical facilities", "Clinical training excellence"],
      benefits: "Leading medical education with comprehensive healthcare programs.",
      location: "Kuala Lumpur",
      ranking: "Top 500 in Asia"
    },
    {
      name: "SEGI University",
      highlights: ["Affordable quality education", "Flexible learning options", "Career-focused programs"],
      benefits: "Excellent value for money with strong industry connections.",
      location: "Kota Damansara, Selangor",
      ranking: "Top 600 in Asia"
    },
    {
      name: "City University Malaysia",
      highlights: ["Innovation in technology", "Small class sizes", "Personalized attention"],
      benefits: "Growing reputation in technology and business education.",
      location: "Petaling Jaya, Selangor",
      ranking: "Emerging University"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          {triggerText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{views} views</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <Badge className="w-fit">{category}</Badge>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-primary" />
              Why Choose Malaysia for Your Studies?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Malaysia has emerged as one of Asia's premier study destinations, offering world-class education 
              at affordable costs. With over 150,000 international students, Malaysia provides a multicultural 
              environment that prepares students for global careers.
            </p>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Key Benefits of Studying in Malaysia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <DollarSign className="mr-2 h-4 w-4 text-green-600" />
                  Affordable Education
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tuition fees starting from RM 15,000 per year, significantly lower than Western countries.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <Star className="mr-2 h-4 w-4 text-yellow-600" />
                  Quality Education
                </h3>
                <p className="text-sm text-muted-foreground">
                  Universities ranked in QS World Rankings with international accreditation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-blue-600" />
                  Strategic Location
                </h3>
                <p className="text-sm text-muted-foreground">
                  Gateway to Asia with easy travel to neighboring countries and global connectivity.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <User className="mr-2 h-4 w-4 text-purple-600" />
                  Cultural Diversity
                </h3>
                <p className="text-sm text-muted-foreground">
                  Multicultural society with English as the primary language of instruction.
                </p>
              </div>
            </div>
          </section>

          {/* Universities */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Top Universities in Malaysia</h2>
            <div className="space-y-4">
              {malaysianUniversities.map((university, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg">{university.name}</h3>
                    <Badge variant="outline">{university.ranking}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    {university.location}
                  </p>
                  <p className="text-sm">{university.benefits}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Key Highlights:</p>
                    <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                      {university.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ready to Get Started */}
          <section className="bg-gradient-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-4">
              Let's discuss how studying in Malaysia can transform your future. Our expert team is here to guide you through every step.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                const whatsappMessage = `Hello! I read the article about studying in Malaysia and I'm interested in learning more about:

📚 University selection and programs
🎓 Application process and requirements
💰 Tuition fees and scholarships
📋 Visa guidance and documentation

Please provide me with detailed information about studying in Malaysia.`;

                const whatsappNumber = "601114371926";
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappUrl, '_blank');
                setIsOpen(false);
              }}
            >
              Start Your Project
            </Button>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;