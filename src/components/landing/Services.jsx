import { Bot, Megaphone, Search, Mail, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    desc: "24/7 conversational agents that qualify leads, book meetings and close deals while you sleep.",
  },
  {
    icon: Megaphone,
    title: "Paid Ads & Funnels",
    desc: "High-converting Meta and Google ad funnels engineered around your ideal customer profile.",
  },
  {
    icon: Search,
    title: "SEO & Content",
    desc: "AI-assisted SEO that ranks pages fast and pulls in organic, intent-driven traffic month after month.",
  },
  {
    icon: Mail,
    title: "Email & Outreach",
    desc: "Personalised cold email and LinkedIn outreach campaigns that book qualified discovery calls.",
  },
  {
    icon: BarChart3,
    title: "CRM Automation",
    desc: "Connect every channel. Auto-score leads, trigger follow-ups, and never let a hot lead go cold.",
  },
  {
    icon: Globe,
    title: "Landing Pages",
    desc: "Conversion-obsessed landing pages built fast — designed, copywritten, and A/B tested for ROI.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Everything you need to grow{" "}
            <span className="text-gradient-brand">predictably</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Six battle-tested services combined into one growth system tailored
            to your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-gradient-card rounded-2xl p-7 border border-border shadow-card-soft hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-brand text-primary-foreground shadow-brand mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
