import { Sun, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-solar rounded-lg">
                <Sun className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">SAWA Trading</span>
                <span className="text-sm text-background/70">
                  Solar Solutions
                </span>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Leading provider of solar energy solutions and HVAC systems in
              Lahore. Committed to delivering reliable, sustainable energy
              solutions for homes and businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-background/90">
                  Garhi Shahu, Lahore, Pakistan
                </span>
              </div>
              <div
                className="flex items-center space-x-3"
                onClick={() => window.open("tel:+92-301-4015189")}
              >
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-background/90">+92-301-4015189</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-background/90">
                  Mon-Sat: 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  onClick={() => navigate("/services")}
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  Solar Panels
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/services")}
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  Solar Inverters
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/services")}
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  Battery Storage
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/services")}
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/services")}
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  Chiller Systems
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/services")}
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  HVAC Parts
                </a>
              </li>
            </ul>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Leadership</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-accent">Shafi Khan</h4>
                <p className="text-sm text-background/80">Director</p>
              </div>
              <div>
                <h4 className="font-medium text-accent">Huma Khan</h4>
                <p className="text-sm text-background/80">CEO</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Get In Touch</h4>
              <Button
                variant="solar"
                size="sm"
                className="w-full"
                onClick={() =>
                  window.open(
                    `https://wa.me/923014015189?text=Hello, I'm interested in your solar solutions!`,
                    "_blank"
                  )
                }
              >
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 SAWA Trading. All rights reserved.
          </p>
          <p className="text-background/60 text-sm mt-4 md:mt-0">
            Powering Pakistan's renewable energy future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
