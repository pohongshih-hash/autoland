import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於奧特龍', href: '#about' },
    { name: '服務項目', href: '#services' },
    { name: '產品目錄', href: '#/catalog' },
    { name: '聯絡我們', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Actual Logo */}
            <img 
              src="https://static.wixstatic.com/media/8bf147_e7407ed58490452d92deb475c1810cd5.png/v1/fill/w_140,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8bf147_e7407ed58490452d92deb475c1810cd5.png" 
              alt="Auto-Land Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className={`font-bold text-2xl tracking-tighter transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              奧特龍 <span className="text-brand-primary text-sm md:text-lg font-bold hidden sm:inline-block ml-2 uppercase">Auto-Land</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-brand-light ${
                  isScrolled ? 'text-gray-500' : 'text-gray-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.facebook.com/autoland.coltd"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-brand-light ${isScrolled ? 'text-gray-500' : 'text-gray-200'}`}
            >
              <Facebook size={20} />
            </a>
            <a
              href="tel:+886-7-751-3273"
              className="flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white px-5 py-2 rounded font-semibold text-sm transition-all shadow-lg shadow-brand-primary/25"
            >
              <Phone size={16} />
              <span>Contact Expert</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col md:hidden border-t"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 py-4 flex items-center gap-4 border-t mt-2">
              <a href="https://www.facebook.com/autoland.coltd" className="text-gray-500 hover:text-brand-primary">
                <Facebook size={24} />
              </a>
              <a
                href="tel:+886-7-751-3273"
                className="flex flex-1 justify-center items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white px-5 py-3 rounded font-semibold transition-colors"
              >
                <Phone size={18} />
                聯絡我們
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
