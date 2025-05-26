
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 90, color: 'bg-orange-500' },
        { name: 'CSS', level: 85, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 75, color: 'bg-yellow-500' },
        { name: 'Responsive Design', level: 80, color: 'bg-green-500' }
      ]
    },
    {
      category: 'Content Management',
      skills: [
        { name: 'WordPress', level: 85, color: 'bg-blue-600' },
        { name: 'Theme Development', level: 70, color: 'bg-purple-500' },
        { name: 'Plugin Development', level: 60, color: 'bg-indigo-500' }
      ]
    },
    {
      category: 'Currently Learning',
      skills: [
        { name: 'Python', level: 65, color: 'bg-green-600' },
        { name: 'Django', level: 45, color: 'bg-emerald-600' },
        { name: 'MongoDB', level: 40, color: 'bg-green-700' },
        { name: 'React', level: 50, color: 'bg-cyan-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My technical toolkit and the technologies I'm passionate about
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Learning Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Learning Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                {[
                  { period: '2023', title: 'Started with HTML & CSS', description: 'Built my first website' },
                  { period: '2023', title: 'JavaScript Fundamentals', description: 'Added interactivity to web pages' },
                  { period: '2024', title: 'WordPress Development', description: 'Created custom themes and plugins' },
                  { period: '2024', title: 'Python & Django', description: 'Currently learning backend development' },
                  { period: '2025', title: 'Full Stack Projects', description: 'Goal: Build complete web applications' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 pr-8 pl-8">
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-4">
                          <div className="text-blue-600 font-bold text-sm">{item.period}</div>
                          <h4 className="font-bold text-gray-800">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
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
