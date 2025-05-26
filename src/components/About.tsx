
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital experiences and constantly learning new technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm currently pursuing my Bachelor's in Computer Applications (BCA), 
              where I've discovered my passion for web development. What started as 
              curiosity about how websites work has evolved into a deep fascination 
              with creating meaningful digital experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey began with HTML and CSS, and I've since expanded my skills 
              to include JavaScript and WordPress development. Currently, I'm exploring 
              the exciting world of Python and Django to become a well-rounded 
              full-stack developer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in continuous learning and staying updated with the latest 
              technologies. Every project is an opportunity to grow and create 
              something impactful.
            </p>
          </div>
          
          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Education</h4>
                    <p className="text-gray-600">
                      Currently pursuing BCA with focus on web technologies and software development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Code className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Current Skills</h4>
                    <p className="text-gray-600">
                      Proficient in HTML, CSS, JavaScript, and WordPress. Learning Python & Django
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Target className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Future Goals</h4>
                    <p className="text-gray-600">
                      Aspiring to become a full-stack developer and contribute to meaningful projects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
