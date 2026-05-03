import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Smart Complaint Management System",
    description: "An AI-powered portal for managing complaints featuring authentication, an advanced admin dashboard, and automated issue categorization.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "AI Integration"],
    liveUrl: "https://citizens-ai-1.onrender.com",
    githubUrl: "https://github.com/basheer123-ahmed/citizens_ai",
    featured: true,
  },
  {
    title: "Student Attendance Management System",
    description: "A comprehensive futuristic attendance portal for educational institutions. Supports CRUD operations, accurate attendance tracking, and secure database management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-[#0f172a] mb-4 font-display uppercase tracking-tighter">Selected Works</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
              style={{ perspective: 1000 }}
              className="bg-white p-6 md:p-10 rounded-3xl relative overflow-hidden group flex flex-col h-full border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-6 z-10">
                <div className="p-3 bg-slate-50 rounded-xl inline-block border border-slate-100 shadow-inner">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex gap-4">
                  {project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0f172a] transition-colors">
                      <FiGithub size={22} />
                    </a>
                  )}
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                      <FiExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-3xl font-black text-[#0f172a] mb-4 z-10 group-hover:text-primary transition-colors font-display tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow z-10 text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 z-10 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-4 py-1.5 text-[10px] font-black text-primary bg-primary/5 rounded-lg border border-primary/20 uppercase tracking-widest font-display">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
