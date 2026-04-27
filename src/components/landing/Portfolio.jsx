import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import case1 from "@/assets/case-1.png";
import case2 from "@/assets/case-2.png";
import case3 from "@/assets/case-3.jpg";

const projects = [
  {
    img: case2,
    type: "E-commerce",
    title: "ShopAshine",
    result: "+187% revenue",
    desc: "Conversion-optimised PDP and abandoned-cart automation tripled monthly orders.",
  },
  {
    img: case3,
    type: "B2B Services",
    title: "Pulsar Consulting",
    result: "+540% bookings",
    desc: "AI chatbot + outbound sequence delivered 60 booked calls in the first month.",
  },
    {
    img: case1,
    type: "FinTech SaaS",
    title: "Restaurant Website",
    result: "+312% qualified demos",
    desc: "Revamped online presence and implemented targeted marketing strategies to drive qualified demo requests.",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Real businesses.{" "}
            <span className="text-gradient-brand">Real growth.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Check out our latest successful projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-card-soft hover:shadow-card-hover transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} case study preview`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-surface-dark/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-semibold">
                    {p.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-cta">
                    <TrendingUp className="w-4 h-4" />
                    {p.result}
                  </div>
                  <div className="w-10 h-10 grid place-items-center rounded-full bg-background/90 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
