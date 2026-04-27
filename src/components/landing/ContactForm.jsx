import { useState } from "react";
import { z } from "zod";
import {
  CheckCircle2,
  Send,
  Mail,
  Phone,
  MapPin,
  X,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  business: z.string().min(1, "Pick a business type"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more (10+ chars)")
    .max(1000),
});

const businessTypes = [
  "SaaS / Tech",
  "E-commerce",
  "Agency / Services",
  "Coaching / Education",
  "Local Business",
  "Other",
];

const inputCls =
  "flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
const labelCls = "text-sm font-medium leading-none";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (loading) return;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs = {};
      result.error.issues.forEach((i) => (errs[i.path[0]] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    const submitted = { name: result.data.name, email: result.data.email };
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setPopup(submitted);
      setData({ name: "", email: "", business: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-hero text-surface-dark-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/30 blur-3xl rounded-full" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
              Get Started
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 leading-tight">
              Let's map out your{" "}
              <span className="text-gradient-brand">growth playbook.</span>
            </h2>
            <p className="text-lg text-surface-dark-foreground/75 mb-8">
              Book a free 30-minute strategy call. We'll audit your funnel,
              identify opportunities, and show exactly how AI can accelerate
              your pipeline.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "100% free, no commitment",
                "Custom growth roadmap delivered",
                "Direct access to a senior strategist",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-surface-dark-foreground/85">{b}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 text-sm text-surface-dark-foreground/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" /> hello@codecelix.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" /> +1 (555) 010-2024
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" /> Remote — Worldwide
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-card text-card-foreground rounded-3xl p-8 md:p-10 shadow-glow border border-border space-y-5"
          >
            <div>
              <label htmlFor="name" className={labelCls}>
                Full name
              </label>
              <input
                id="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Jane Doe"
                maxLength={80}
                className={`${inputCls} mt-2`}
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelCls}>
                Work email
              </label>
              <input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="jane@company.com"
                maxLength={160}
                className={`${inputCls} mt-2`}
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="business" className={labelCls}>
                Business type
              </label>
              <select
                id="business"
                value={data.business}
                onChange={(e) => setData({ ...data, business: e.target.value })}
                className={`${inputCls} mt-2 bg-background`}
              >
                <option value="">Choose one...</option>
                {businessTypes.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              {errors.business && (
                <p className="text-destructive text-xs mt-1">
                  {errors.business}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className={labelCls}>
                What are you trying to grow?
              </label>
              <textarea
                id="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder="Tell us a bit about your business and goals..."
                maxLength={1000}
                rows={4}
                className={`${inputCls} mt-2 h-auto py-3`}
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={sent || loading}
              className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl text-base font-semibold bg-gradient-cta text-accent-foreground shadow-cta hover:scale-[1.02] hover:shadow-glow active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending your
                  request...
                </>
              ) : sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Sent — talk soon!
                </>
              ) : (
                <>
                  Get Free Strategy Call <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. No spam, ever.
            </p>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setPopup(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-card text-card-foreground p-8 md:p-10 shadow-glow border border-border text-center"
            >
              <button
                onClick={() => setPopup(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full inline-flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", bounce: 0.5 }}
                className="mx-auto mb-5 w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center shadow-cta"
              >
                <CheckCircle2 className="w-9 h-9 text-accent-foreground" />
              </motion.div>

              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Thanks, {popup.name}! 🎉
              </h3>
              <p className="text-muted-foreground mb-2">
                Your strategy call request has been received.
              </p>
              <p className="text-sm text-muted-foreground mb-7">
                We'll reach out to{" "}
                <span className="font-semibold text-foreground">
                  {popup.email}
                </span>{" "}
                within 24 hours.
              </p>

              <button
                onClick={() => setPopup(null)}
                className="inline-flex items-center justify-center w-full h-11 rounded-xl text-sm font-semibold bg-gradient-cta text-accent-foreground shadow-cta hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Awesome, got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
