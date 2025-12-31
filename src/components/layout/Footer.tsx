import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-canopi.png";

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Industries", href: "/industries/healthcare" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="Canopi Strategy Partners" 
                className="h-12 md:h-14 max-w-[180px] md:max-w-[220px] object-contain object-left brightness-0 invert" 
              />
            </Link>
            <p className="text-primary-foreground/75 max-w-md leading-relaxed text-sm">
              Canopi partners with you to overcome challenges and unlock growth. Our experts bring your vision to life
              with precision for sustainable success and measurable results.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/canopi-strategy-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <div>
                  <p className="text-xs text-primary-foreground/60">Email</p>
                  <a href="mailto:anupama.s@thecanopi.ai" className="text-sm hover:text-primary-foreground/90 transition-colors">
                    anupama.s@thecanopi.ai
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <div>
                  <p className="text-xs text-primary-foreground/60">Phone</p>
                  <a href="tel:+919515212509" className="text-sm hover:text-primary-foreground/90 transition-colors">
                    +91 9515212509
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <div>
                  <p className="text-xs text-primary-foreground/60">Location</p>
                  <p className="text-sm">Hyderabad,India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-primary-foreground/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">© 2025 Canopi Strategy Partners. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground/80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-primary-foreground/80 transition-colors">
              Terms of Service
            </Link>
            <Link to="/admin/login" className="hover:text-primary-foreground/80 transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}