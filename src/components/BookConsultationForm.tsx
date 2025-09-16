import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon, MessageCircle, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const BookConsultationForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    fullName: "",
    dateTime: "",
    studyDestination: "",
    purposeOfStudy: "",
    futureInterests: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !date || !formData.studyDestination || !formData.purposeOfStudy) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Hello! I would like to book a consultation.

📝 *Consultation Details:*
• Name: ${formData.fullName}
• Preferred Date & Time: ${format(date, "PPP")} ${formData.dateTime}
• Study Destination: ${formData.studyDestination}
• Purpose of Study: ${formData.purposeOfStudy}
• Future Interests: ${formData.futureInterests || "Not specified"}

Please confirm my consultation booking. Thank you!`;

    const whatsappNumber = "601114371926"; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Consultation Request Sent!",
      description: "You will be redirected to WhatsApp to complete your booking.",
    });

    // Reset form
    setFormData({
      fullName: "",
      dateTime: "",
      studyDestination: "",
      purposeOfStudy: "",
      futureInterests: ""
    });
    setDate(undefined);
  };

  return (
    <Card className="max-w-2xl mx-auto border-none shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageCircle className="h-6 w-6 text-primary" />
          <span>Book Your Consultation</span>
        </CardTitle>
        <CardDescription>
          Fill out the form below to schedule your free consultation with our experts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Preferred Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateTime">Preferred Time</Label>
              <Select value={formData.dateTime} onValueChange={(value) => handleInputChange("dateTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                  <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                  <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                  <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Study Destination *</Label>
            <Select value={formData.studyDestination} onValueChange={(value) => handleInputChange("studyDestination", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Malaysia">Malaysia</SelectItem>
                <SelectItem value="Russia">Russia</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Purpose of Study *</Label>
            <Select value={formData.purposeOfStudy} onValueChange={(value) => handleInputChange("purposeOfStudy", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                <SelectItem value="Doctorate/PhD">Doctorate/PhD</SelectItem>
                <SelectItem value="Diploma">Diploma</SelectItem>
                <SelectItem value="Language Course">Language Course</SelectItem>
                <SelectItem value="MBBS">MBBS</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="futureInterests">Future Degree Interests / Knowledge</Label>
            <Textarea
              id="futureInterests"
              placeholder="Tell us about your academic interests, career goals, or any specific questions you have..."
              value={formData.futureInterests}
              onChange={(e) => handleInputChange("futureInterests", e.target.value)}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            <Send className="mr-2 h-4 w-4" />
            Book Consultation via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookConsultationForm;