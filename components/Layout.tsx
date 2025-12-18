import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, MapPin } from 'lucide-react';
import { NavItem } from '../types';
import Logo from './Logo';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Product', path: '/product' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-primary bg-background overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2' 
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                <Logo />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                      isActive 
                        ? 'text-primary bg-primary/5' 
                        : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full mb-1"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg animate-fade-in">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                     location.pathname === item.path
                        ? 'bg-primary/5 text-primary'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {item.label}
                    {location.pathname === item.path && <ChevronRight size={16} className="text-secondary" />}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content - Add top padding to account for fixed header */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-5">
              <div className="mb-6">
                <Logo variant="light" />
              </div>
              <p className="text-green-100/70 text-base leading-relaxed max-w-sm mb-8">
                Clear insight for Nigeria. SentiNEX helps teams understand public sentiment through data-aware insights, transforming noise into actionable strategy.
              </p>
              
              <div className="flex items-center gap-4">
                 {/* Social placeholders could go here */}
                 <div className="text-sm font-medium text-accent">Built for Nigeria with care.</div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-4 text-sm text-green-100/70">
                <li><Link to="/about" className="hover:text-accent transition-colors flex items-center gap-2">About Us</Link></li>
                <li><Link to="/product" className="hover:text-accent transition-colors flex items-center gap-2">Platform</Link></li>
                <li><Link to="/consulting" className="hover:text-accent transition-colors flex items-center gap-2">Consulting</Link></li>
                <li><Link to="/careers" className="hover:text-accent transition-colors flex items-center gap-2">Careers <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white">Future</span></Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
              <ul className="space-y-4 text-sm text-green-100/70">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-secondary" />
                  <span>support@sentinex.ng</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-secondary" />
                  <span>Lagos, Nigeria</span>
                </li>
                <li className="pt-4">
                  <Link to="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-white/20 rounded-md text-sm hover:bg-white hover:text-primary transition-all">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-green-100/50">
            <p>&copy; {new Date().getFullYear()} SentiNEX. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;