import { useState, useEffect } from "react";

export function useIsMobile() {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(function () {
    
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return function () {
      window.removeEventListener("resize", checkMobile);
    };
    
  }, []);

  return isMobile;
}