import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopWrapperProps = {
  children: React.ReactNode;
};

const ScrollToTopWrapper = ({ children }: ScrollToTopWrapperProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
};
export default ScrollToTopWrapper;
