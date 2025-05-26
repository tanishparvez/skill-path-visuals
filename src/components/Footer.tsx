
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Code, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Geometric Shapes */}
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-blue-500/20 rounded-lg rotate-45 animate-spin preserve-3d" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-500/20 rounded-full animate-pulse preserve-3d"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 border-2 border-pink-500/20 rounded-lg rotate-12 animate-bounce preserve-3d"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-2xl animate-blob preserve-3d"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-red-600/10 rounded-full blur-2xl animate-blob animation-delay-2000 preserve-3d"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-1/4 left-1/6 text-blue-400/30 animate-float preserve-3d" size={24} style={{ animationDelay: '0s', filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))' }} />
        <Sparkles className="absolute top-1/2 right-1/6 text-purple-400/30 animate-float preserve-3d" size={20} style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.5))' }} />
        <Zap className="absolute bottom-1/4 left-1/3 text-yellow-400/30 animate-float preserve-3d" size={18} style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.5))' }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Enhanced Back to Top Button */}
        <div className="text-center mb-12">
          <Button
            onClick={scrollToTop}
            className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 hover:rotateY-6 transition-all duration-500 border-0 relative overflow-hidden preserve-3d"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12"></div>
            <ArrowUp className="mr-2 group-hover:animate-bounce" size={18} />
            <span className="relative z-10">Back to Top</span>
          </Button>
        </div>

        {/* Enhanced Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section with 3D Effects */}
          <div className="text-center md:text-left relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative transform group-hover:scale-105 group-hover:rotateY-2 transition-all duration-500 preserve-3d">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
                Alex Johnson
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                BCA Student & Aspiring Full Stack Developer passionate about creating 
                innovative web solutions and learning new technologies.
              </p>
            </div>
          </div>

          {/* Quick Links with Animations */}
          <div className="text-center relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative transform group-hover:scale-105 group-hover:rotateY-2 transition-all duration-500 preserve-3d">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:translateX-2 relative group/link"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 transform scale-110"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="text-center md:text-right relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative transform group-hover:scale-105 group-hover:rotateY-2 transition-all duration-500 preserve-3d">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-pink-300 transition-all duration-300">
                Connect With Me
              </h3>
              <div className="flex justify-center md:justify-end gap-6">
                {[
                  { icon: Github, href: '#', color: 'from-gray-400 to-gray-600', hoverColor: 'group-hover:text-white' },
                  { icon: Linkedin, href: '#', color: 'from-blue-400 to-blue-600', hoverColor: 'group-hover:text-blue-400' },
                  { icon: Mail, href: '#', color: 'from-purple-400 to-purple-600', hoverColor: 'group-hover:text-purple-400' }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="group/social relative transform hover:scale-110 hover:rotateY-12 transition-all duration-500 preserve-3d"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur opacity-0 group-hover/social:opacity-75 transition-opacity duration-300 transform scale-150`}></div>
                      <div className="relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover/social:bg-white/10 transition-all duration-300">
                        <IconComponent size={24} className={`text-gray-400 transition-colors duration-300 ${social.hoverColor}`} />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/10 pt-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 animate-gradient-x"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 relative z-10">
            <div className="flex items-center gap-2 mb-4 md:mb-0 transform hover:scale-105 transition-transform duration-300">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>by Alex Johnson</span>
            </div>
            <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
              <span>&copy; 2024 Alex Johnson. All rights reserved.</span>
              <Code size={16} className="text-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 animate-float preserve-3d"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))',
              transform: `translateZ(${Math.random() * 30}px) rotateX(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"></div>
    </footer>
  );
};

export default Footer;
