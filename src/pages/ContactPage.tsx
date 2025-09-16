import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;