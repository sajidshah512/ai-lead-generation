import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 text-primary-foreground text-center shadow-brand"
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary-glow/40 blur-3xl rounded-full" />

          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-semibold tracking-wider uppercase mb-6">
              Final Opportunity
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl mb-5 max-w-3xl mx-auto leading-tight">
              Your competitors are already using{" "}
              <span className="text-gradient-cta">AI</span>. Don't get left
              behind.
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8">
              Book a free 30-minute strategy call and walk away with a custom
              growth roadmap — no obligation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-base font-semibold bg-gradient-cta text-accent-foreground shadow-cta hover:scale-[1.04] hover:shadow-glow transition-all duration-300 animate-pulse-glow"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-5 text-sm text-primary-foreground/70">
              ⚡ Limited slots available this month
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
