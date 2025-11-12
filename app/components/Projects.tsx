'use client';

import Image from "next/image";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  image: string;
  category: string;
}

export default function Projects() {
  // Featured projects with online images
  const projects: Project[] = [
    {
      name: "Code E-Commerce Platform",
      description: "A full-featured e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, user authentication, payment integration, and admin dashboard for managing products and orders.",
      tech: ["TypeScript", "React", "Next.js", "Node.js"],
      github: "https://github.com/JOSHUA-KINYWA/code",
      demo: null,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
      category: "E-Commerce"
    },
    {
      name: "Smart Laptop System",
      description: "An intelligent laptop management system with advanced features including hardware monitoring, performance optimization, battery management, and system diagnostics. Built to enhance laptop efficiency and user experience.",
      tech: ["JavaScript", "Node.js", "Electron", "System APIs"],
      github: "https://github.com/JOSHUA-KINYWA/Smart-Laptop",
      demo: null,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop&q=80",
      category: "System Management"
    },
    {
      name: "Personal Tracking App",
      description: "A comprehensive personal finance and expense tracking application. Track your spending, set budgets, view analytics, and manage your finances with an intuitive interface. Features include categorization, reports, and data visualization.",
      tech: ["TypeScript", "React", "Data Visualization"],
      github: "https://github.com/JOSHUA-KINYWA/Personal-Spending",
      demo: null,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      category: "Finance & Analytics"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Featured</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Showcasing my latest work and innovative solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg card-hover group"
            >
              {/* Project Image */}
              <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-sm text-blue-700 rounded-full text-xs font-bold shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {project.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
