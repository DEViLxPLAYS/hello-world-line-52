import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">Future Ace Consultancy</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted partner for studying abroad in Malaysia and Russia. We help students achieve their dreams of international education with expert guidance and personalized support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/universities" className="block text-sm hover:text-primary transition-colors">Universities</Link>
              <Link to="/programs" className="block text-sm hover:text-primary transition-colors">Programs</Link>
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="block text-sm hover:text-primary transition-colors">About Us</Link>
              <Link to="/consultation" className="block text-sm hover:text-primary transition-colors">Book Consultation</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <div className="space-y-2">
              <p className="text-sm">University Selection</p>
              <p className="text-sm">Application Assistance</p>
              <p className="text-sm">Visa Guidance</p>
              <p className="text-sm">Scholarship Advice</p>
              <p className="text-sm">Career Counseling</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+60 11-1437 1926</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">fa.consultancy2020@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Petaling Jaya, Cova Villa</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Office Hours:</span>
                </div>
                <div className="text-xs text-slate-400 ml-6">
                  <p>Monday – Friday: 9 AM – 6 PM</p>
                  <p>Saturday: 10 AM – 4 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © 2024 Future Ace Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-slate-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-slate-400 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;