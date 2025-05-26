
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Palette, Rocket, Zap, Sparkles, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', level: 90, color: 'bg-orange-500' },
        { name: 'CSS', level: 85, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 75, color: 'bg-yellow-500' },
        { name: 'Responsive Design', level: 80, color: 'bg-green-500' }
      ]
    },
    {
      category: 'Content Management',
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'WordPress', level: 85, color: 'bg-blue-600' },
        { name: 'Theme Development', level: 70, color: 'bg-purple-500' },
        { name: 'Plugin Development', level: 60, color: 'bg-indigo-500' }
      ]
    },
    {
      category: 'Currently Learning',
      icon: Rocket,
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python', level: 65, color: 'bg-green-600' },
        { name: 'Django', level: 45, color: 'bg-emerald-600' },
        { name: 'MongoDB', level: 40, color: 'bg-green-700' },
        { name: 'React', level: 50, color: 'bg-cyan-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Pattern with Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-500 rounded-lg rotate-45 animate-float animation-delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-pink-500 rounded-lg rotate-12 animate-rotate-y"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-float animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              filter: 'drop-shadow(0 0 8px currentColor)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header with Animations */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full mb-4 transform hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Zap className="text-blue-600 group-hover:animate-pulse relative z-10" size={20} />
            <span className="text-blue-800 font-semibold relative z-10">Skills & Technologies</span>
            <Sparkles className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin relative z-10" size={16} />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 transform hover:scale-105 transition-transform duration-500">
            My Technical Arsenal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-1000">
            Crafting digital experiences with passion and precision
          </p>
        </div>
        
        {/* Enhanced Skills Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotateY-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden opacity-0 animate-fade-in preserve-3d"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Enhanced Card Background Gradient with Animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 animate-gradient-x`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Star className="text-yellow-400 animate-spin" size={16} />
                </div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotateY-12 preserve-3d relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                      <IconComponent className="text-white relative z-10 group-hover:animate-pulse" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 transform group-hover:scale-110">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="space-y-3 transform transition-all duration-500 hover:translateX-2 opacity-0 animate-fade-in"
                        style={{
                          animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors duration-300">{skill.name}</span>
                          <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">{skill.level}%</span>
                        </div>
                        <div className="relative group/progress">
                          <Progress value={skill.level} className="h-3 bg-gray-200 group-hover:h-4 transition-all duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/progress:opacity-100 animate-shimmer transition-opacity duration-500"></div>
                          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover/progress:opacity-20 transition-opacity duration-500" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Enhanced Learning Timeline with Advanced Animations */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fade-in animation-delay-1000">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 px-6 py-2 rounded-full mb-4 transform hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
              <Rocket className="text-green-600 group-hover:animate-bounce relative z-10" size={20} />
              <span className="text-green-800 font-semibold relative z-10">Learning Timeline</span>
              <Sparkles className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin relative z-10" size={16} />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 transform hover:scale-105 transition-transform duration-500">
              Learning Journey
            </h3>
            <p className="text-gray-600 opacity-0 animate-fade-in animation-delay-2000">My path to becoming a full-stack developer</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Enhanced Timeline line with Gradient Animation */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg animate-gradient-x opacity-0 animate-fade-in animation-delay-1000" style={{ animationFillMode: 'forwards' }}></div>
              
              {/* Floating Timeline Decorations */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse-slow shadow-lg"></div>
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-slow shadow-lg animation-delay-2000"></div>
              
              {/* Timeline items with Enhanced Animations */}
              <div className="space-y-12">
                {[
                  { period: '2023', title: 'Started with HTML & CSS', description: 'Built my first website', color: 'from-blue-500 to-cyan-500', icon: '🚀' },
                  { period: '2023', title: 'JavaScript Fundamentals', description: 'Added interactivity to web pages', color: 'from-yellow-500 to-orange-500', icon: '⚡' },
                  { period: '2024', title: 'WordPress Development', description: 'Created custom themes and plugins', color: 'from-purple-500 to-pink-500', icon: '🎨' },
                  { period: '2024', title: 'Python & Django', description: 'Currently learning backend development', color: 'from-green-500 to-emerald-500', icon: '🐍' },
                  { period: '2025', title: 'Full Stack Projects', description: 'Goal: Build complete web applications', color: 'from-indigo-500 to-purple-500', icon: '🎯' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group opacity-0 animate-fade-in`}
                    style={{
                      animationDelay: `${1.5 + index * 0.3}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="w-1/2 pr-8 pl-8">
                      <Card className="hover:shadow-2xl transition-all duration-700 transform group-hover:scale-110 group-hover:rotateY-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden preserve-3d">
                        {/* Enhanced Card Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 animate-gradient-x`}></div>
                        
                        {/* Floating Icon */}
                        <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce">
                          {item.icon}
                        </div>
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500"></div>
                        
                        <CardContent className="p-6 relative z-10">
                          <div className={`inline-block bg-gradient-to-r ${item.color} text-white font-bold text-sm px-3 py-1 rounded-full mb-2 transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10">{item.period}</span>
                          </div>
                          <h4 className="font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300 transform group-hover:scale-105">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Enhanced Timeline Node */}
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-full border-4 border-white shadow-2xl z-10 group-hover:scale-150 transition-all duration-500 relative overflow-hidden preserve-3d`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                      <div className="absolute inset-0 animate-pulse-slow"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
    </section>
  );
};

export default Skills;
