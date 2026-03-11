import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const navLinks = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Opportunity', href: '#opportunity' },
  { name: 'Partnership', href: '#partnership' },
  { name: 'Teams', href: '#teams' },
  { name: 'Contact', href: '#contact' },
];
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-infinigate tracking-tighter">INFINIGATE</span>
            <div className="h-4 w-px bg-border/50" />
            <span className="text-xl font-black text-cloudflare tracking-tighter">CLOUDFLARE</span>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-cloudflare transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="bg-gradient-brand text-white font-bold rounded-lg shadow-glow"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>
          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-foreground/80 hover:text-cloudflare p-2"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-gradient-brand text-white font-bold w-full"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}