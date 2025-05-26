
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Web Developer', 'BCA Student', 'Full Stack Enthusiast', 'Problem Solver'];

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 mb-6 h-8">
              <span>{currentText}</span>
              <span className="animate-pulse">|</span>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A passionate BCA student exploring the world of web development. 
              Currently mastering frontend technologies and diving into Python & Django.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View My Work
              </Button>
              <Button size="lg" variant="outline">
                Download Resume
              </Button>
            </div>
            
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Github size={24} className="text-gray-700" />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Linkedin size={24} className="text-gray-700" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Avatar */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                    alt="Profile"
                    className="w-64 h-64 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
