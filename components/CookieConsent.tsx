"use client";
import { useState, useEffect } from "react";

// Extend the Window interface to include the clarity method
declare global {
  interface Window {
    clarity?: (action: string) => void;
  }
}

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "true" && process.env.NODE_ENV === "production") {
      window.clarity?.("consent");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");

    if (process.env.NODE_ENV === "production") {
      window.clarity?.("consent");
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <p>
        We use cookies on this site to improve its content and functionality.
        By continuing to use the site, you agree to our use of cookies.
      </p>
      <button onClick={handleAccept}>OK</button>
    </div>
  );
};
