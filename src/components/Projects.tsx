
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A responsive e-commerce site built with HTML, CSS, and JavaScript featuring product catalogs and shopping cart functionality.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Restaurant WordPress Theme',
      description: 'Custom WordPress theme for restaurants with online menu, reservation system, and responsive design.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      tags: ['WordPress', 'PHP', 'CSS'],
      category: 'WordPress',
      github: '#',
      live: '#'
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my work and the projects I'm proud of
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                    <Github size={20} className="text-gray-800" />
                  </a>
                  <a href={project.live} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                    <ExternalLink size={20} className="text-gray-800" />
                  </a>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
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
