import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppInquiry = () => {
    const { name, phone, email, message } = formData;

    if (!name || !phone || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in name, phone, and message fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage =
      `Hello SAWA Trading!\n\n` +
      `*New Inquiry:*\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      (email ? `Email: ${email}\n` : "") +
      `\nMessage: ${message}`;

    const whatsappUrl = `https://wa.me/923014015189?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp with your inquiry message.",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+92-301-4015189",
      description: "Call us for immediate assistance",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Garhi Shahu, Lahore",
      description: "Visit our office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 9 AM - 6 PM",
      description: "Sunday: By appointment",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+92-301-4015189",
      description: "Quick response guaranteed",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-solar text-primary-foreground rounded-full text-sm font-medium mb-4">
            📞 Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Ready to Go Solar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for a free consultation and custom quote. Our team
            is ready to help you make the switch to clean, reliable energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-lift bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-6 h-6 text-primary" />
                <span>Send Us An Inquiry</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll send your message directly to
                our WhatsApp for quick response.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Phone *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                  rows={6}
                  className="mt-1"
                />
              </div>

              <Button
                onClick={handleWhatsAppInquiry}
                variant="solar"
                size="lg"
                className="w-full hover-lift flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send WhatsApp Inquiry</span>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Required fields. Your inquiry will be sent directly to our
                WhatsApp for immediate attention.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover-lift bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-solar rounded-lg">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-primary font-medium">{info.details}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <Button
                variant="solar"
                size="lg"
                className="w-full hover-lift"
                onClick={() => window.open("tel:+92-301-4015189")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +92-301-4015189
              </Button>

              <Button
                variant="energy"
                size="lg"
                className="w-full hover-lift"
                onClick={() =>
                  window.open(
                    "https://wa.me/923014015189?text=Hello, I need information about your solar solutions!",
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direct
              </Button>
            </div>

            {/* Map Placeholder */}
            <Card className="hover-lift bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Visit Our Office
                </h3>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Garhi Shahu, Lahore</p>
                    <p className="text-sm text-muted-foreground">Pakistan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
