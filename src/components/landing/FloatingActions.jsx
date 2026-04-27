import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingActions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/15550102024?text=Hi%20Codecelix%2C%20I'd%20like%20to%20book%20a%20strategy%20call"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 grid place-items-center rounded-full bg-gradient-cta text-accent-foreground shadow-cta hover:scale-110 transition-transform animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-40 w-11 h-11 grid place-items-center rounded-full bg-card border border-border shadow-card-soft hover:shadow-card-hover hover:-translate-y-1 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default FloatingActions;
