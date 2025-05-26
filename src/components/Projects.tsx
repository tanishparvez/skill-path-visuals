import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A modern e-commerce platform with sleek design, featuring product catalogs, shopping cart, and secure payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      github: '#',
      live: '#',
      featured: true,
      stats: { stars: 24, views: 150 }
    },
    {
      id: 2,
      title: 'Restaurant WordPress Theme',
      description: 'Elegant restaurant theme with online menu, reservation system, and immersive visual experience.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      tags: ['WordPress', 'PHP', 'CSS'],
      category: 'WordPress',
      github: '#',
      live: '#',
      featured: false,
      stats: { stars: 18, views: 89 }
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A simple task management application built with vanilla JavaScript featuring drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'Web Development',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Blog Management System',
      description: 'A Django-based blog system with user authentication, post management, and comment functionality.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      tags: ['Python', 'Django', 'HTML'],
      category: 'Backend',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      tags: ['React', 'CSS', 'JavaScript'],
      category: 'Web Development',
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Business WordPress Site',
      description: 'Professional business website with custom post types, contact forms, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      tags: ['WordPress', 'Custom Fields', 'SEO'],
      category: 'WordPress',
      github: '#',
      live: '#'
    }
  ];

  const filters = ['All', 'Web Development', 'WordPress', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 border border-purple-300 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-blue-300 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full mb-4">
            <Star className="text-purple-600" size={20} />
            <span className="text-purple-800 font-semibold">Featured Work</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Creative Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative digital experiences
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`
                relative overflow-hidden transition-all duration-300 transform hover:scale-105
                ${activeFilter === filter 
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg border-0" 
                  : "border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:text-blue-700 shadow-md"
                }
              `}
            >
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
              )}
              <span className="relative z-10">{filter}</span>
            </Button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/90 backdrop-blur-sm">
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  ⭐ Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-blue-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a href={project.github} className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Github size={20} className="text-gray-800" />
                    </a>
                    <a href={project.live} className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} />
                    {project.stats?.stars || 0}
                  </div>
                  <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Eye size={12} />
                    {project.stats?.views || 0}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300">
                    <ExternalLink size={16} className="mr-1" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
