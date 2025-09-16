import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide reliable, sustainable energy solutions that empower businesses and homes across Pakistan with clean, efficient power systems.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be Pakistan's leading renewable energy company, driving the transition to sustainable power through innovative solar and HVAC solutions.",
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description:
        "We partner with world-class manufacturers and maintain the highest standards in product quality, installation, and customer service.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our certified professionals bring years of experience in solar technology and HVAC systems to every project.",
    },
  ];

  const team = [
    {
      name: "Shafi Khan",
      role: "Director",
      description:
        "With over 15 years in the energy sector, Shafi leads our strategic vision and business development initiatives.",
    },
    {
      name: "Huma Khan",
      role: "Chief Executive Officer",
      description:
        "Huma brings extensive experience in operations management and customer relations, ensuring excellence in service delivery.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-solar text-primary-foreground rounded-full text-sm font-medium mb-4">
            🏢 About SAWA Trading
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">
              Pioneering Clean Energy in Pakistan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based in Garhi Shahu, Lahore, SAWA Trading has been at the forefront
            of Pakistan's renewable energy revolution, providing comprehensive
            solar and HVAC solutions to homes and businesses across the region.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center hover-lift bg-gradient-card border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-solar rounded-full mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Leadership Team
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team combines deep industry knowledge
              with a commitment to customer satisfaction and sustainable energy
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover-lift transition-smooth"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">
              Successful Installations
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
