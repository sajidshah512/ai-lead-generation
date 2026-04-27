import { Rocket, BadgeDollarSign, Users, LifeBuoy } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "Most projects live in 14 days. No bloated retainers, no endless slide decks.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Agency-grade work at startup-friendly rates. Transparent, fixed-scope packages.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Senior strategists, designers and engineers — no juniors learning on your dime.",
  },
  {
    icon: LifeBuoy,
    title: "Reliable Support",
    desc: "Slack-channel access, weekly reporting, and a dedicated account lead from day one.",
  },
];

const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const dur = 1600;
    const step = (t) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const stats = [
  { v: 320, suffix: "+", label: "Projects shipped" },
  { v: 12, suffix: "M+", label: "Leads generated" },
  { v: 98, suffix: "%", label: "Client retention" },
  { v: 14, suffix: " days", label: "Avg. launch time" },
];

const WhyUs = () => {
  return (
    <section
      id="why"
      className="py-24 md:py-32 bg-gradient-hero text-surface-dark-foreground relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 leading-tight">
              An unfair advantage{" "}
              <span className="text-gradient-brand">delivered weekly.</span>
            </h2>
            <p className="text-lg text-surface-dark-foreground/75 mb-10">
              We combine senior strategy, AI tooling, and obsessive execution to
              build growth engines that compound—not campaigns that fizzle.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-gradient-card rounded-2xl p-5 border border-border shadow-card-soft"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient-brand">
                    <Counter to={s.v} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 shadow-card-soft hover:shadow-card-hover hover:-translate-y-1 transition-all ${
                  i % 2 === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl grid place-items-center bg-accent/10 text-accent mb-4">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-surface-dark-foreground">
                  {r.title}
                </h3>
                <p className="text-sm text-surface-dark-foreground/70 leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
