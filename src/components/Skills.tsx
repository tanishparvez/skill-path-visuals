
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-500 rounded-lg rotate-45"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-500 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-pink-500 rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full mb-4">
            <Zap className="text-blue-600" size={20} />
            <span className="text-blue-800 font-semibold">Skills & Technologies</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            My Technical Arsenal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden">
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-semibold">{skill.name}</span>
                          <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress value={skill.level} className="h-3 bg-gray-200" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Enhanced Learning Timeline */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Learning Journey
            </h3>
            <p className="text-gray-600">My path to becoming a full-stack developer</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Enhanced Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  { period: '2023', title: 'Started with HTML & CSS', description: 'Built my first website', color: 'from-blue-500 to-cyan-500' },
                  { period: '2023', title: 'JavaScript Fundamentals', description: 'Added interactivity to web pages', color: 'from-yellow-500 to-orange-500' },
                  { period: '2024', title: 'WordPress Development', description: 'Created custom themes and plugins', color: 'from-purple-500 to-pink-500' },
                  { period: '2024', title: 'Python & Django', description: 'Currently learning backend development', color: 'from-green-500 to-emerald-500' },
                  { period: '2025', title: 'Full Stack Projects', description: 'Goal: Build complete web applications', color: 'from-indigo-500 to-purple-500' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}>
                    <div className="w-1/2 pr-8 pl-8">
                      <Card className="hover:shadow-xl transition-all duration-500 transform group-hover:scale-105 border-0 shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        <CardContent className="p-6 relative z-10">
                          <div className={`inline-block bg-gradient-to-r ${item.color} text-white font-bold text-sm px-3 py-1 rounded-full mb-2`}>
                            {item.period}
                          </div>
                          <h4 className="font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-white shadow-xl z-10 group-hover:scale-125 transition-transform duration-300`}></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
