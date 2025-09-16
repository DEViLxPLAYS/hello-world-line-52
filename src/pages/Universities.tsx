import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star, Users, DollarSign, Filter } from "lucide-react";

// Import university logos
import taylorsLogo from "@/assets/taylors-logo.jpg";
import mahsaLogo from "@/assets/mahsa-logo.jpg";
import segiLogo from "@/assets/segi-logo.jpg";
import cityLogo from "@/assets/city-logo.jpg";
import ucsiLogo from "@/assets/ucsi-logo.jpg";
import intiLogo from "@/assets/inti-logo.jpg";

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

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
      description: "Malaysia's leading private university, strong in Hospitality, Tourism, Business & Design.",
      programs: 100,
      acceptanceRate: "Top private university in Malaysia – QS"
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
      description: "Specialized in Medicine, Dentistry, Pharmacy, Nursing & Allied Health with modern campus.",
      programs: 80,
      acceptanceRate: "Leading in health sciences"
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
      description: "Large multi-campus private university with diverse programs in Business, IT, Engineering & Health.",
      programs: 120,
      acceptanceRate: "QS 5 Stars Plus rated"
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
      description: "Established private university with strong programs in Business, IT, Education & Design.",
      programs: 90,
      acceptanceRate: "QS 5 Stars, SETARA \"Competitive\""
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
      description: "Highly ranked for Medicine, Pharmacy, Music & Hospitality with global recognition.",
      programs: 100,
      acceptanceRate: "Top 300 QS World Ranking"
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
      description: "Strong in Business, Engineering & IT; known for industry collaborations & international exposure.",
      programs: 110,
      acceptanceRate: "QS ranked, globally partnered"
    }
  ];

  const countries = ["all", "Malaysia", "Russia"];
  const types = ["all", "Public", "Private"];

  const filteredUniversities = universities.filter((uni) => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "all" || uni.country === selectedCountry;
    const matchesType = selectedType === "all" || uni.type === selectedType;
    
    return matchesSearch && matchesCountry && matchesType;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Universities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover world-class universities from around the globe. Find the perfect institution for your academic journey.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search universities or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country === "all" ? "All Countries" : country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredUniversities.length} of {universities.length} universities
          </p>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((university) => (
            <Card key={university.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={university.image} 
                      alt={`${university.name} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{university.name}</CardTitle>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{university.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">#{university.ranking}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {university.description}
                </CardDescription>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{university.students}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{university.tuition}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <Badge variant={university.type === "Private" ? "default" : "secondary"}>
                    {university.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {university.programs} Programs
                  </span>
                </div>

                <Button asChild className="w-full">
                  <Link to={`/university/${university.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No universities found matching your criteria.</p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedCountry("all");
              setSelectedType("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Universities;