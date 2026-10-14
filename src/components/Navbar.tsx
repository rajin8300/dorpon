import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work', bengali: 'কাজ' },
    { label: 'Services', href: '#services', bengali: 'সেবা' },
    { label: 'Packages', href: '#packages', bengali: 'প্যাকেজ' },
    { label: 'Craft & Gear', href: '#equipment', bengali: 'যন্ত্রপাতি' },
    { label: 'About', href: '#about', bengali: 'সম্পর্কে' },
    { label: 'Contact', href: '#contact', bengali: 'যোগাযোগ' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckAvailability = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101010]/90 backdrop-blur-md border-b border-[#F3F0E9]/10 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 lg:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="group flex items-baseline gap-2.5 focus:outline-none"
          aria-label="DORPON Home"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-cinema uppercase text-[#F3F0E9] group-hover:text-[#C6A66B] transition-colors duration-200">
            {siteConfig.brandName}
          </span>
          <span className="text-xs font-serif tracking-widest text-[#C6A66B]/70 transition-opacity">
            {siteConfig.brandBengali}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs tracking-cinema-wide uppercase font-medium text-[#A5A29C]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 hover:text-[#F3F0E9] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A66B] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleCheckAvailability}
            className="group inline-flex items-center gap-1.5 px-4 py-2 border border-[#C6A66B]/50 hover:border-[#C6A66B] text-[#C6A66B] hover:text-[#101010] hover:bg-[#C6A66B] text-[11px] font-medium tracking-cinema uppercase transition-all duration-200"
          >
            <span>Check Availability</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F3F0E9] hover:text-[#C6A66B] transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#101010]/98 backdrop-blur-xl z-50 flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          <nav className="flex flex-col gap-6 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-baseline justify-between border-b border-[#F3F0E9]/10 pb-3 group text-[#F3F0E9] hover:text-[#C6A66B] transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[10px] text-[#A5A29C]/50 font-mono">0{idx + 1}</span>
                  <span className="font-serif text-2xl tracking-wide">{link.label}</span>
                </div>
                <span className="text-xs font-serif text-[#C6A66B]/70">{link.bengali}</span>
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6">
            <button
              onClick={handleCheckAvailability}
              className="w-full py-3.5 bg-[#C6A66B] text-[#101010] text-center font-medium tracking-cinema uppercase text-xs flex items-center justify-center gap-2 hover:bg-[#DBC392] transition-colors"
            >
              <span>Check Availability</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <p className="text-center text-[11px] text-[#A5A29C] tracking-wide">
              {siteConfig.taglineBengali}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
