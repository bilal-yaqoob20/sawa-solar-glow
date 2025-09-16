import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/solar-hero.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "Reliable Energy",
      description: "Clean, sustainable solar power solutions",
    },
    {
      icon: Shield,
      title: "Professional Installation",
      description: "Expert installation and maintenance services",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "Premium solar panels, inverters & batteries",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels installation in Lahore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-solar text-primary-foreground rounded-full text-sm font-medium animate-fade-in">
                ⚡ Leading Solar Solutions in Lahore
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">
                  Power Your Future with SAWA Trading
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform your energy needs with our comprehensive solar
                solutions. From residential installations to commercial HVAC
                systems, we deliver reliable, sustainable power for Pakistan's
                growing energy demands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="solar"
                size="lg"
                className="flex items-center space-x-2 hover-lift"
                onClick={() => navigate("/contact")}
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="hover-lift"
                onClick={() => navigate("/services")}
              >
                View Our Products
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Installations
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-lift transition-smooth bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-solar rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full animate-float hidden lg:block" />
      <div
        className="absolute bottom-20 left-20 w-16 h-16 bg-secondary/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default Hero;
