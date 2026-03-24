import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo-canopi.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
<<<<<<< HEAD
  { name: 'Team', href: '/team' },
=======
>>>>>>> 12f051f3554684a518ae090b82cc3bfbdc2711c0
  { name: 'Approach', href: '/approach' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/insights' },
  { name: 'FAQs', href: '/faqs' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        'border-b bg-primary border-primary-foreground/10',
        isScrolled && 'shadow-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
<<<<<<< HEAD
            <img
              src={logo}
              alt="Canopi Strategy Partners"
              className="h-16 md:h-20 w-auto brightness-0 invert"
=======
            <img 
              src={logo} 
              alt="Canopi Strategy Partners" 
              className="h-16 md:h-20 w-auto brightness-0 invert" 
>>>>>>> 12f051f3554684a518ae090b82cc3bfbdc2711c0
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors duration-200',
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
<<<<<<< HEAD
            <Button
              size="sm"
              asChild
=======
            <Button 
              size="sm" 
              asChild 
>>>>>>> 12f051f3554684a518ae090b82cc3bfbdc2711c0
              className="bg-accent text-accent-foreground hover:bg-gold-light font-medium px-5"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'block px-3 py-2 text-sm font-medium transition-colors',
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-primary-foreground/10 mt-2">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-gold-light font-medium" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}