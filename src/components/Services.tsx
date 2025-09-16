import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Battery, Zap, Wrench, Snowflake, Settings } from "lucide-react";
import solarPanelsImg from "@/assets/solar-panels.jpg";
import inverterImg from "@/assets/inverter.jpg";
import batteryImg from "@/assets/battery.jpg";
import chillerImg from "@/assets/chiller.jpg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Panels",
      description:
        "High-efficiency solar panels from leading brands like Canadian Solar, JA Solar, Jinko Solar, and LONGi.",
      image: solarPanelsImg,
      features: [
        "25-year warranty",
        "Tier-1 manufacturers",
        "High efficiency rating",
      ],
    },
    {
      icon: Zap,
      title: "Solar Inverters",
      description:
        "Premium inverters including SOFAR, Huawei, SOLIS, and Sungrow with WiFi connectivity.",
      image: inverterImg,
      features: [
        "WiFi monitoring",
        "10-15 year warranty",
        "Grid-tie capability",
      ],
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description:
        "Advanced battery solutions for residential and commercial energy storage systems.",
      image: batteryImg,
      features: ["Lithium technology", "Long cycle life", "Smart management"],
    },
    {
      icon: Wrench,
      title: "Installation Services",
      description:
        "Professional installation services available throughout Lahore and surrounding areas.",
      image: solarPanelsImg,
      features: [
        "Certified technicians",
        "Quality assurance",
        "After-sales support",
      ],
    },
    {
      icon: Snowflake,
      title: "Chiller Systems",
      description:
        "Complete HVAC solutions with York, Carrier, and other premium chiller brands.",
      image: chillerImg,
      features: ["Energy efficient", "Commercial grade", "Maintenance support"],
    },
    {
      icon: Settings,
      title: "Chiller Parts",
      description:
        "Comprehensive inventory of chiller spare parts, valves, sensors, and control systems.",
      image: chillerImg,
      features: ["OEM parts", "Quick delivery", "Technical support"],
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-solar text-primary-foreground rounded-full text-sm font-medium mb-4">
            ⚡ Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">
              Complete Solar & HVAC Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential solar installations to commercial HVAC systems, we
            provide comprehensive energy solutions backed by premium products
            and expert service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-lift bg-gradient-card border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-solar rounded-lg">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Transform Your Energy Future?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a free consultation and custom quote for your solar
              installation or HVAC needs. Our experts are ready to help you make
              the switch to clean, reliable energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="solar"
                size="lg"
                className="hover-lift"
                onClick={() => navigate("/contact")}
              >
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift"
                onClick={() => window.open("tel:+92-301-4015189")}
              >
                Call: +92-301-4015189
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
