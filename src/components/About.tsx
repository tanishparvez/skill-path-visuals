
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Target, BookOpen, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-32 w-16 h-16 border-2 border-pink-500/30 rounded-lg rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 right-32 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/10">
            <BookOpen className="text-cyan-400" size={20} />
            <span className="text-white font-semibold">About Me</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6 transform hover:scale-105 transition-transform duration-300">
            My Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences and constantly learning new technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Column - Bio with 3D Effects */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transform group-hover:scale-105 group-hover:rotateY-2 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={32} />
                  My Story
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="transform hover:translateX-2 transition-transform duration-300">
                    I'm currently pursuing my Bachelor's in Computer Applications (BCA), 
                    where I've discovered my passion for web development. What started as 
                    curiosity about how websites work has evolved into a deep fascination 
                    with creating meaningful digital experiences.
                  </p>
                  <p className="transform hover:translateX-2 transition-transform duration-300">
                    My journey began with HTML and CSS, and I've since expanded my skills 
                    to include JavaScript and WordPress development. Currently, I'm exploring 
                    the exciting world of Python and Django to become a well-rounded 
                    full-stack developer.
                  </p>
                  <p className="transform hover:translateX-2 transition-transform duration-300">
                    I believe in continuous learning and staying updated with the latest 
                    technologies. Every project is an opportunity to grow and create 
                    something impactful.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Right Column - 3D Cards */}
          <div className="space-y-8">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                description: "Currently pursuing BCA with focus on web technologies and software development",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-500/10 to-cyan-500/10"
              },
              {
                icon: Code,
                title: "Current Skills",
                description: "Proficient in HTML, CSS, JavaScript, and WordPress. Learning Python & Django",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/10 to-pink-500/10"
              },
              {
                icon: Target,
                title: "Future Goals",
                description: "Aspiring to become a full-stack developer and contribute to meaningful projects",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-500/10 to-emerald-500/10"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="group relative overflow-hidden bg-transparent border-0 transform hover:scale-105 hover:rotateY-6 transition-all duration-700 preserve-3d">
                  {/* 3D Glow Effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${item.bgGradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Card Background with Glass Effect */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="relative group/icon">
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur opacity-75 group-hover/icon:opacity-100 transition-opacity duration-300`}></div>
                          <div className={`relative p-4 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg transform group-hover/icon:scale-110 group-hover/icon:rotateY-12 transition-all duration-500`}>
                            <IconComponent className="text-white" size={28} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Enhanced Stats Section with 3D Elements */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2+", label: "Years Learning", icon: BookOpen },
              { number: "10+", label: "Projects Built", icon: Code },
              { number: "5+", label: "Technologies", icon: Target },
              { number: "∞", label: "Passion Level", icon: Trophy }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform group-hover:scale-110 group-hover:rotateY-6 transition-all duration-500">
                    <IconComponent className="mx-auto mb-4 text-cyan-400 group-hover:text-white transition-colors duration-300" size={32} />
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
