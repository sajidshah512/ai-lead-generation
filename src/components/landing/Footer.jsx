import { Sparkles, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <a href="#top" className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-brand">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </span>
              <span className="font-display font-bold text-lg">
                AI-Lead <span className="text-gradient-brand"> Generation</span>
              </span>
            </a>
            <p className="text-sm text-surface-dark-foreground/65 leading-relaxed max-w-xs">
              AI-powered lead generation systems for ambitious teams. Engineered for growth, built for scale.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm text-surface-dark-foreground/65">
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#work" className="hover:text-accent transition">Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-accent transition">Pricing</a></li>
              <li><a href="#work" className="hover:text-accent transition">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-sm text-surface-dark-foreground/65">
              <li>infocodecelix@gmail.com</li>
              <li>+92 3185790940</li>
              <li>Remote — Rawalpindi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Follow</h4>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 grid place-items-center rounded-xl glass hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface-dark-foreground/50">
          <p>© {new Date().getFullYear()} Codecelix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition">Privacy</a>
            <a href="#" className="hover:text-accent transition">Terms</a>
            <a href="#" className="hover:text-accent transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
