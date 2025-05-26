
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Star, Sparkles, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated 3D Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500/30 rounded-lg rotate-45 animate-spin preserve-3d" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-500/30 rounded-full animate-pulse preserve-3d"></div>
        <div className="absolute bottom-20 left-32 w-16 h-16 border-2 border-pink-500/30 rounded-lg rotate-12 animate-bounce preserve-3d"></div>
        <div className="absolute bottom-40 right-32 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full animate-float preserve-3d"></div>
        
        {/* Floating 3D Orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-blob preserve-3d"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-blob animation-delay-2000 preserve-3d"></div>
      </div>

      {/* Floating 3D Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-1/4 left-1/6 text-yellow-400/40 animate-float preserve-3d" size={32} style={{ animationDelay: '0s', filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))' }} />
        <Sparkles className="absolute top-1/2 right-1/6 text-purple-400/40 animate-float preserve-3d" size={28} style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))' }} />
        <Zap className="absolute bottom-1/4 left-1/3 text-cyan-400/40 animate-float preserve-3d" size={24} style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.6))' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/10 transform hover:scale-105 transition-transform duration-300">
            <Mail className="text-cyan-400" size={20} />
            <span className="text-white font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6 transform hover:scale-105 transition-transform duration-300">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Contact Form with 3D Effects */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Card className="relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transform group-hover:scale-105 group-hover:rotateY-2 transition-all duration-500 preserve-3d">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Send className="text-cyan-400 animate-pulse" size={32} />
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group/input">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 transform group-hover/input:scale-105"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-md opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group/input">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 transform group-hover/input:scale-105"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-md opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="relative group/input">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 transform group-hover/input:scale-105"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-md opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 hover:rotateY-6 transition-all duration-500 border-0 relative overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 transform skew-x-12"></div>
                    <Send className="mr-2 group-hover/btn:animate-spin" size={18} />
                    <span className="relative z-10">Send Message</span>
                  </Button>
                </form>
              </CardContent>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </Card>
          </div>

          {/* Enhanced Contact Info with 3D Cards */}
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "alex.johnson@email.com",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-500/10 to-cyan-500/10"
              },
              {
                icon: Phone,
                title: "Phone",
                info: "+1 (555) 123-4567",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/10 to-pink-500/10"
              },
              {
                icon: MapPin,
                title: "Location",
                info: "Your City, Country",
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
                      <div className="flex items-center gap-6">
                        <div className="relative group/icon">
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur opacity-75 group-hover/icon:opacity-100 transition-opacity duration-300`}></div>
                          <div className={`relative p-4 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg transform group-hover/icon:scale-110 group-hover/icon:rotateY-12 transition-all duration-500 preserve-3d`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            {item.info}
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
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float preserve-3d"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))',
              transform: `translateZ(${Math.random() * 50}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
