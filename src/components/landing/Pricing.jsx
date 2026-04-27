import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$1,490",
    cadence: "/ one-time",
    desc: "For founders validating their offer.",
    features: [
      "1 conversion-optimised landing page",
      "Lead capture form + CRM sync",
      "Basic analytics setup",
      "2 weeks support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$3,990",
    cadence: "/ month",
    desc: "Our most popular growth engine.",
    features: [
      "Full AI lead-gen funnel",
      "AI chatbot + email automation",
      "Paid ads management ($5k spend incl.)",
      "Weekly reporting + Slack support",
      "A/B testing & CRO",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "tailored",
    desc: "For 7-figure brands ready to dominate.",
    features: [
      "Everything in Growth",
      "Dedicated growth pod",
      "Custom AI integrations",
      "Sales enablement & training",
      "Quarterly strategy retreats",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Pricing
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Simple, <span className="text-gradient-brand">transparent</span>{" "}
            packages.
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick the engine that matches your stage. Cancel or upgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-2 ${
                t.highlight
                  ? "bg-gradient-brand text-primary-foreground border-transparent shadow-brand md:scale-105"
                  : "bg-card border-border shadow-card-soft hover:shadow-card-hover"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-cta">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </span>
              )}
              <h3 className="font-display font-semibold text-xl mb-1">
                {t.name}
              </h3>
              <p
                className={`text-sm mb-5 ${t.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}
              >
                {t.desc}
              </p>
              <div className="mb-6">
                <span className="font-display font-bold text-4xl">
                  {t.price}
                </span>
                <span
                  className={`ml-1 text-sm ${t.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {t.cadence}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${t.highlight ? "text-accent-glow" : "text-accent"}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center w-full h-12 rounded-xl text-base font-semibold transition-all ${
                  t.highlight
                    ? "bg-gradient-cta text-accent-foreground shadow-cta hover:scale-[1.02]"
                    : "border-2 border-input bg-background hover:bg-muted hover:border-primary/40"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
