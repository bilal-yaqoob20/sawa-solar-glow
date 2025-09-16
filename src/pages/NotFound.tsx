import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-solar bg-clip-text text-transparent mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            variant="solar" 
            size="lg" 
            onClick={() => window.location.href = '/'}
            className="hover-lift"
          >
            Return to Home
          </Button>
          
          <div className="text-sm text-muted-foreground">
            <p>Need help? Contact us:</p>
            <p className="text-primary font-medium">03014015189</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
