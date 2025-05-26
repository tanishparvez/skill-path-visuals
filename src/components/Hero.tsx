
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Code, Sparkles, Star, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const texts = ['Web Developer', 'BCA Student', 'Full Stack Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(texts[currentIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated 3D Spheres */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotateX(45deg) rotateY(45deg)`,
            top: '10%',
            right: '10%',
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-pink-400 to-red-600 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px) rotateX(-45deg) rotateY(-45deg)`,
            bottom: '10%',
            left: '10%',
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px) rotateX(30deg) rotateY(60deg)`,
            top: '40%',
            left: '20%',
          }}
        ></div>

        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-16 h-16 border-2 border-blue-400/30 animate-float ${i % 2 === 0 ? 'animate-spin' : 'animate-pulse'}`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                transform: `rotateX(${i * 30}deg) rotateY(${i * 45}deg) rotateZ(${i * 60}deg)`,
                animationDelay: `${i * 0.5}s`,
                background: i % 3 === 0 ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))' : 'transparent',
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating 3D Icons with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Code 
          className="absolute text-blue-400 opacity-30 animate-float"
          size={40} 
          style={{
            top: '20%',
            left: '15%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotateX(45deg) rotateY(45deg)`,
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
          }}
        />
        <Sparkles 
          className="absolute text-purple-400 opacity-30 animate-float animation-delay-1000"
          size={36} 
          style={{
            top: '30%',
            right: '20%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px) rotateX(-30deg) rotateY(60deg)`,
            filter: 'drop-shadow(0 0 25px rgba(147, 51, 234, 0.6))',
          }}
        />
        <Rocket 
          className="absolute text-pink-400 opacity-30 animate-float animation-delay-2000"
          size={32} 
          style={{
            bottom: '25%',
            left: '25%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotateX(60deg) rotateY(-45deg)`,
            filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))',
          }}
        />
        <Zap 
          className="absolute text-yellow-400 opacity-30 animate-float animation-delay-1000"
          size={28} 
          style={{
            bottom: '35%',
            right: '30%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px) rotateX(-60deg) rotateY(30deg)`,
            filter: 'drop-shadow(0 0 25px rgba(251, 191, 36, 0.6))',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Enhanced Left Content with 3D Effects */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="relative perspective-1000">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 relative transform-gpu">
                <span className="relative z-10 text-white drop-shadow-2xl">Hi, I'm </span>
                <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x transform hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                  Alex Johnson
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl animate-pulse transform rotate-1"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/10 to-blue-600/10 rounded-lg blur-2xl animate-pulse-slow transform -rotate-1"></div>
              </h1>
            </div>
            
            <div className="text-xl md:text-2xl mb-6 h-8 relative perspective-500">
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transform hover:rotateY-12 transition-transform duration-300 drop-shadow-lg">
                {currentText}
              </span>
              <span className="animate-pulse text-cyan-400 font-bold drop-shadow-glow">|</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent animate-shimmer transform skew-x-12"></div>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed transform hover:translateZ-4 transition-transform duration-300">
              A passionate BCA student exploring the world of web development with 
              <span className="font-semibold text-cyan-400 drop-shadow-lg"> creative solutions</span> and 
              <span className="font-semibold text-purple-400 drop-shadow-lg"> innovative designs</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 hover:rotateY-6 transition-all duration-500 border-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12"></div>
                <Sparkles className="mr-2 group-hover:animate-spin" size={18} />
                <span className="relative z-10">View My Work</span>
              </Button>
              <Button size="lg" variant="outline" className="group border-2 border-cyan-400/50 hover:border-cyan-400 bg-white/10 backdrop-blur-sm text-white hover:bg-cyan-400/20 shadow-lg hover:shadow-cyan-400/25 transform hover:scale-110 hover:rotateY-6 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Download className="mr-2 group-hover:animate-bounce" size={18} />
                <span className="relative z-10">Download Resume</span>
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 transform group-hover:scale-110"></div>
                <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotateY-12">
                  <Github size={24} className="text-white group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 transform group-hover:scale-110"></div>
                <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotateY-12">
                  <Linkedin size={24} className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Enhanced 3D Avatar with Advanced Effects */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group perspective-1000">
              {/* Main Avatar Container with 3D Transform */}
              <div className="relative w-80 h-80 transform-gpu group-hover:rotateY-12 group-hover:rotateX-6 transition-transform duration-700 preserve-3d">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 animate-pulse-slow transform-gpu">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center relative overflow-hidden border-4 border-white/30">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                      alt="Profile"
                      className="w-64 h-64 rounded-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-full animate-shimmer"></div>
                  </div>
                </div>
                
                {/* 3D Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg transform group-hover:translateZ-8 transition-transform duration-500" style={{ filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.8))' }}></div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce animation-delay-1000 shadow-lg transform group-hover:translateZ-6 transition-transform duration-500" style={{ filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))' }}></div>
                <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce animation-delay-2000 shadow-lg transform group-hover:translateZ-4 transition-transform duration-500" style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))' }}></div>
                
                {/* 3D Ring Elements */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin"
                    style={{
                      width: `${100 + i * 20}%`,
                      height: `${100 + i * 20}%`,
                      top: `${-i * 10}%`,
                      left: `${-i * 10}%`,
                      animationDuration: `${10 + i * 5}s`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                      transform: `rotateX(${i * 30}deg) rotateY(${i * 45}deg)`,
                    }}
                  />
                ))}
                
                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse-slow transform scale-125"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-400/20 rounded-full blur-3xl animate-pulse transform scale-150"></div>
              </div>
              
              {/* Orbiting Elements */}
              {[...Array(5)].map((_, i) => {
                const icons = [Star, Sparkles, Zap, Code, Rocket];
                const IconComponent = icons[i];
                return (
                  <div
                    key={i}
                    className="absolute w-8 h-8 animate-spin"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-200px) rotateZ(-${i * 72}deg)`,
                      animationDuration: `${15 + i * 2}s`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <IconComponent 
                      size={16} 
                      className="text-white opacity-60 animate-pulse" 
                      style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translateZ(${Math.random() * 50}px)`,
              filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
