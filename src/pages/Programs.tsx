import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Clock, DollarSign, GraduationCap, Calendar, Filter, BookOpen } from "lucide-react";

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedUniversity, setSelectedUniversity] = useState("all");

  const programs = [
    // Taylor's University Programs
    {
      id: 1,
      name: "Business Administration",
      level: "Diploma",
      duration: "2.5 years",
      tuition: "RM 35,000/year",
      university: "Taylor's University",
      universityId: 1,
      country: "Malaysia",
      intakeMonths: ["January", "March", "August"],
      description: "Comprehensive business program covering management, marketing, and entrepreneurship.",
      requirements: "SPM with 5 credits including English and Mathematics",
      specializations: ["Marketing", "Finance", "Human Resources", "Operations"]
    },
    {
      id: 2,
      name: "Hospitality Management",
      level: "BS",
      duration: "3 years",
      tuition: "RM 45,000/year",
      university: "Taylor's University",
      universityId: 1,
      country: "Malaysia",
      intakeMonths: ["January", "March", "August"],
      description: "World-class hospitality program with industry placements and international exposure.",
      requirements: "STPM, A-Levels, or Foundation qualification",
      specializations: ["Hotel Management", "Event Management", "Culinary Arts", "Tourism"]
    },
    {
      id: 3,
      name: "Computer Science",
      level: "BS",
      duration: "3 years",
      tuition: "RM 50,000/year",
      university: "Taylor's University",
      universityId: 1,
      country: "Malaysia",
      intakeMonths: ["January", "March", "August"],
      description: "Advanced computing program with focus on AI, software engineering, and cybersecurity.",
      requirements: "STPM with Mathematics, A-Levels, or Foundation in Computing",
      specializations: ["AI/ML", "Software Engineering", "Cybersecurity", "Data Science"]
    },

    // MAHSA University Programs
    {
      id: 4,
      name: "Medicine (MBBS)",
      level: "Doctorate",
      duration: "5 years",
      tuition: "RM 65,000/year",
      university: "MAHSA University",
      universityId: 2,
      country: "Malaysia",
      intakeMonths: ["September"],
      description: "Comprehensive medical program preparing students for medical practice with clinical training.",
      requirements: "STPM with Biology, Chemistry, Physics, A-Levels in Sciences",
      specializations: ["General Practice", "Surgery", "Internal Medicine", "Pediatrics"]
    },
    {
      id: 5,
      name: "Dentistry",
      level: "Doctorate",
      duration: "5 years",
      tuition: "RM 70,000/year",
      university: "MAHSA University",
      universityId: 2,
      country: "Malaysia",
      intakeMonths: ["September"],
      description: "Professional dental program with modern facilities and clinical exposure.",
      requirements: "STPM with Biology, Chemistry, Physics, A-Levels in Sciences",
      specializations: ["General Dentistry", "Orthodontics", "Oral Surgery", "Periodontics"]
    },
    {
      id: 6,
      name: "Pharmacy",
      level: "BS",
      duration: "4 years",
      tuition: "RM 45,000/year",
      university: "MAHSA University",
      universityId: 2,
      country: "Malaysia",
      intakeMonths: ["February", "September"],
      description: "Pharmaceutical sciences program with focus on drug development and patient care.",
      requirements: "STPM with Chemistry, Biology, Mathematics or Physics",
      specializations: ["Clinical Pharmacy", "Industrial Pharmacy", "Community Pharmacy", "Research"]
    },

    // SEGi University Programs
    {
      id: 7,
      name: "Engineering",
      level: "BS",
      duration: "4 years",
      tuition: "RM 40,000/year",
      university: "SEGi University",
      universityId: 3,
      country: "Malaysia",
      intakeMonths: ["January", "May", "September"],
      description: "Comprehensive engineering program with hands-on laboratory experience.",
      requirements: "STPM with Mathematics and Physics, A-Levels, or Foundation in Engineering",
      specializations: ["Mechanical", "Electrical", "Civil", "Chemical"]
    },
    {
      id: 8,
      name: "Information Technology",
      level: "BS",
      duration: "3 years",
      tuition: "RM 35,000/year",
      university: "SEGi University",
      universityId: 3,
      country: "Malaysia",
      intakeMonths: ["January", "May", "September"],
      description: "Modern IT program covering software development, networking, and cybersecurity.",
      requirements: "STPM, A-Levels, or Foundation qualification",
      specializations: ["Software Development", "Network Security", "Database Management", "Web Development"]
    },
    {
      id: 9,
      name: "Business Management",
      level: "MS",
      duration: "1.5 years",
      tuition: "RM 45,000/year",
      university: "SEGi University",
      universityId: 3,
      country: "Malaysia",
      intakeMonths: ["February", "June", "October"],
      description: "Advanced business management program for working professionals.",
      requirements: "Bachelor's degree in Business or related field",
      specializations: ["Strategic Management", "Digital Marketing", "Finance", "Leadership"]
    },

    // City University Programs
    {
      id: 10,
      name: "Education",
      level: "BS",
      duration: "4 years",
      tuition: "RM 32,000/year",
      university: "City University Malaysia",
      universityId: 4,
      country: "Malaysia",
      intakeMonths: ["February", "June", "October"],
      description: "Teaching education program preparing future educators with modern pedagogical methods.",
      requirements: "STPM, A-Levels, or Diploma in Education",
      specializations: ["Primary Education", "Secondary Education", "Special Education", "Educational Technology"]
    },
    {
      id: 11,
      name: "Graphic Design",
      level: "BS",
      duration: "3 years",
      tuition: "RM 38,000/year",
      university: "City University Malaysia",
      universityId: 4,
      country: "Malaysia",
      intakeMonths: ["February", "June", "October"],
      description: "Creative design program combining traditional and digital design techniques.",
      requirements: "STPM, A-Levels, or Foundation in Design/Arts",
      specializations: ["Digital Design", "Branding", "Web Design", "Print Media"]
    },

    // UCSI University Programs
    {
      id: 12,
      name: "Medicine (MBBS)",
      level: "Doctorate",
      duration: "5 years",
      tuition: "RM 75,000/year",
      university: "UCSI University",
      universityId: 5,
      country: "Malaysia",
      intakeMonths: ["September"],
      description: "Prestigious medical program with international recognition and clinical excellence.",
      requirements: "STPM with excellent grades in Biology, Chemistry, Physics",
      specializations: ["General Practice", "Surgery", "Cardiology", "Neurology"]
    },
    {
      id: 13,
      name: "Music Performance",
      level: "BS",
      duration: "4 years",
      tuition: "RM 55,000/year",
      university: "UCSI University",
      universityId: 5,
      country: "Malaysia",
      intakeMonths: ["January", "September"],
      description: "World-class music program with renowned faculty and performance opportunities.",
      requirements: "Music audition, STPM or A-Levels",
      specializations: ["Classical Performance", "Jazz", "Music Technology", "Music Education"]
    },
    {
      id: 14,
      name: "Pharmacy",
      level: "BS",
      duration: "4 years",
      tuition: "RM 50,000/year",
      university: "UCSI University",
      universityId: 5,
      country: "Malaysia",
      intakeMonths: ["February", "September"],
      description: "Comprehensive pharmacy program with research focus and industry partnerships.",
      requirements: "STPM with Chemistry, Biology, Mathematics or Physics",
      specializations: ["Clinical Pharmacy", "Pharmaceutical Research", "Drug Development", "Community Pharmacy"]
    },

    // INTI University Programs
    {
      id: 15,
      name: "Mechanical Engineering",
      level: "BS",
      duration: "4 years",
      tuition: "RM 42,000/year",
      university: "INTI International University",
      universityId: 6,
      country: "Malaysia",
      intakeMonths: ["January", "May", "August"],
      description: "Engineering program with strong industry collaboration and practical training.",
      requirements: "STPM with Mathematics and Physics, A-Levels, or Foundation",
      specializations: ["Automotive", "Manufacturing", "Aerospace", "Energy Systems"]
    },
    {
      id: 16,
      name: "Business Studies",
      level: "BS",
      duration: "3 years",
      tuition: "RM 38,000/year",
      university: "INTI International University",
      universityId: 6,
      country: "Malaysia",
      intakeMonths: ["January", "May", "August"],
      description: "Comprehensive business program with international exposure and industry partnerships.",
      requirements: "STPM, A-Levels, or Foundation qualification",
      specializations: ["International Business", "Marketing", "Finance", "Entrepreneurship"]
    },
    {
      id: 17,
      name: "Computer Science",
      level: "MS",
      duration: "2 years",
      tuition: "RM 45,000/year",
      university: "INTI International University",
      universityId: 6,
      country: "Malaysia",
      intakeMonths: ["February", "June", "October"],
      description: "Advanced computing program with research focus and industry collaboration.",
      requirements: "Bachelor's degree in Computer Science or related field",
      specializations: ["Data Science", "AI/ML", "Software Engineering", "Cybersecurity"]
    }
  ];

  const levels = ["all", "Diploma", "BS", "MS", "Doctorate"];
  const durations = ["all", "1.5 years", "2 years", "2.5 years", "3 years", "4 years", "5 years"];
  const universities = ["all", ...new Set(programs.map(p => p.university))];

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || program.level === selectedLevel;
    const matchesDuration = selectedDuration === "all" || program.duration === selectedDuration;
    const matchesUniversity = selectedUniversity === "all" || program.university === selectedUniversity;
    
    return matchesSearch && matchesLevel && matchesDuration && matchesUniversity;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Study Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of academic programs from world-renowned universities. Find the perfect program to launch your career.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search programs, universities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((duration) => (
                  <SelectItem key={duration} value={duration}>
                    {duration === "all" ? "All Durations" : duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
              <SelectTrigger>
                <SelectValue placeholder="University" />
              </SelectTrigger>
              <SelectContent>
                {universities.map((university) => (
                  <SelectItem key={university} value={university}>
                    {university === "all" ? "All Universities" : university}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPrograms.length} of {programs.length} programs
          </p>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline">{program.level}</Badge>
                  <Badge variant="secondary">{program.country}</Badge>
                </div>
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {program.university}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{program.tuition}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Intake: {program.intakeMonths.join(", ")}</span>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.specializations.slice(0, 3).map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                    {program.specializations.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{program.specializations.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full" asChild>
                    <Link to={`/university/${program.universityId}`}>
                      <GraduationCap className="mr-2 h-4 w-4" />
                      View University
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/consultation">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No programs found matching your criteria.</p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedLevel("all");
              setSelectedDuration("all");
              setSelectedUniversity("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;