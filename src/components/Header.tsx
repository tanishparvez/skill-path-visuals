
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Sparkles, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              filter: 'drop-shadow(0 0 6px rgba(6, 182, 212, 0.8))',
            }}
          />
        ))}
      </div>

      <nav className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between py-4">
          {/* Enhanced Logo with 3D Effects */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl font-bold transform group-hover:scale-110 group-hover:rotateY-6 transition-all duration-500 preserve-3d">
              <span className="drop-shadow-lg">Alex Johnson</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Desktop Navigation with Enhanced Animations */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-white hover:text-cyan-400 font-medium transition-all duration-300 transform hover:scale-110 hover:rotateY-6 preserve-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Animated Underline */}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500 shadow-lg"></div>
                
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-110 blur-sm"></div>
                
                {/* Floating Sparkle */}
                <Sparkles 
                  className="absolute -top-2 -right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" 
                  size={12}
                  style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))' }}
                />
              </a>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 hover:rotateY-6 transition-all duration-500 border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12"></div>
              <Download className="mr-2 group-hover:animate-bounce" size={16} />
              <span className="relative z-10">Resume</span>
              <Zap className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" size={14} />
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10 relative group transform hover:scale-110 hover:rotateY-6 transition-all duration-300 preserve-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? (
                <X size={24} className="relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with 3D Animations */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 shadow-2xl animate-slide-in-right">
            <div className="relative overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-x"></div>
              
              <div className="container mx-auto px-6 py-6 relative z-10">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="relative group text-white hover:text-cyan-400 font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:translateX-2"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        animation: 'fade-in 0.3s ease-out forwards'
                      }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                  
                  <Button className="mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Download className="mr-2" size={16} />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Top Border Animation */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </header>
  );
};

export default Header;
