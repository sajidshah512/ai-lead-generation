import { ArrowRight, PlayCircle, Star, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-hero text-surface-dark-foreground pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-secondary/30 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              AI-Powered Growth Agency
            </span> */}

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6">
              Scale Your Business with{" "}
              <span className="text-gradient-brand">AI-Driven Leads</span>
            </h1>

            <p className="text-lg md:text-xl text-surface-dark-foreground/75 max-w-xl mx-auto lg:mx-0 mb-8">
              High-converting landing pages designed with futuristic AI
              precision to turn visitors into loyal clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-base font-semibold bg-gradient-cta text-accent-foreground shadow-cta hover:scale-[1.04] hover:shadow-glow active:scale-[0.98] transition-all duration-300"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </a>
              {/* <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-base font-semibold border border-white/20 text-surface-dark-foreground bg-white/5 backdrop-blur hover:bg-white/15 hover:border-white/40 transition-all duration-300"
              >
                <PlayCircle className="w-4 h-4" /> See Case Studies
              </a> */}
            </div>

            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-surface-dark-foreground/70">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 from 120+ clients</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>GDPR compliant</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>Launch in 14 days</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-brand rounded-[2rem] blur-2xl opacity-40" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-glow animate-float">
              <img
                src={heroImg}
                alt="AI lead generation neural network funnel illustration"
                width={1536}
                height={1280}
                className="w-full h-auto"
              />
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-4 md:-left-10 bottom-10 glass rounded-2xl p-4 shadow-glow"
            >
              <div className="text-xs text-surface-dark-foreground/70">
                Conversion lift
              </div>
              <div className="text-2xl font-display font-bold text-accent">
                +287%
              </div>
            </motion.div> */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -right-2 md:-right-6 top-10 glass rounded-2xl p-4 shadow-glow"
            >
              <div className="text-xs text-surface-dark-foreground/70">
                Qualified leads / mo
              </div>
              <div className="text-2xl font-display font-bold">1,240</div>
            </motion.div> */}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
