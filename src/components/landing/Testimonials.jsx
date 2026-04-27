import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Khan",
    role: "CEO, ABC Corp",
    text: "Codecelix rebuilt our funnel in 12 days. We went from 8 demos a month to 30. They're now an extension of our team.",
    initials: "Sk",
  },
  {
    name: "Zainab Ahmed",
    role: "Founder, XYZ",
    text: "The AI chatbot alone paid for the entire engagement in week two. ROI is genuinely insane. Cannot recommend enough.",
    initials: "ZA",
  },
  {
    name: "Urwa Ali",
    role: "Marketing Director",
    text: "Strategic, fast, and obsessed with results. The Codecelix team delivered what three previous agencies couldn't.",
    initials: "UA",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-gradient-hero text-surface-dark-foreground relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Client Success
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-surface-dark-foreground mb-4">
            Founders <span className="text-gradient-brand">love</span> working
            with us.
          </h2>
          <p className="text-lg text-surface-dark-foreground/75">
            See what our clients have achieved with our growth system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/5 backdrop-blur rounded-2xl p-7 border border-white/10 shadow-card-soft hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-white/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-surface-dark-foreground/85 leading-relaxed mb-6">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-full bg-gradient-brand grid place-items-center text-primary-foreground font-display font-semibold">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-surface-dark-foreground">
                    {r.name}
                  </div>
                  <div className="text-xs text-surface-dark-foreground/60">
                    {r.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
