import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiCheckCircle, FiTrendingUp, FiAward, FiLayers, FiUsers } from 'react-icons/fi';

const experiences = [
  {
    role: "Team Lead – MERN Stack Development",
    company: "Sofzenix Pvt. Ltd.",
    location: "Remote",
    period: "June 2026 – Present",
    badge: "Promoted to Team Lead",
    logoUrl: "/sofzenix-logo.png",
    summary: "Started as a MERN Stack Developer Intern and earned a promotion to Team Lead based on strong technical performance, leadership, and consistent contributions.",
    stats: [
      { label: "Projects Delivered", value: "5 Apps", icon: FiLayers, desc: "3 Internal & 2 Client" },
      { label: "Leadership Role", value: "Team Lead", icon: FiUsers, desc: "Sprints & Reviews" },
      { label: "Growth Track", value: "Fast-Track", icon: FiAward, desc: "Intern to Lead" }
    ],
    points: [
      "Lead a team of developers in designing, developing, and maintaining scalable full-stack web applications.",
      "Successfully delivered 3 internal company projects and 2 client projects, ensuring high-quality and timely delivery.",
      "Managed task allocation, code reviews, sprint planning, and frontend-backend integration.",
      "Collaborated directly with clients to gather requirements, provide project updates, and deliver solutions aligned with business needs.",
      "Developed and maintained secure, responsive web applications using React.js, Node.js, Express.js, MySQL, and Prisma ORM.",
      "Implemented RESTful APIs, authentication, database optimization, and performance improvements to enhance application reliability."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "Prisma ORM", "RESTful APIs", "Team Leadership", "Code Reviews"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 relative z-10 bg-slate-900 text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-tr from-orange-500/15 via-pink-500/10 to-indigo-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black tracking-widest uppercase mb-2.5 font-display">
            Career Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3 font-display uppercase tracking-tight">
            Work <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Sleek Gradient Border Wrapper */}
              <div className="p-[1.5px] rounded-3xl bg-gradient-to-r from-orange-500/70 via-pink-500/60 to-indigo-500/70 shadow-xl shadow-orange-500/5">
                
                {/* Compact Dark Card Surface */}
                <div className="bg-[#0f172a]/95 backdrop-blur-xl p-6 md:p-8 rounded-[1.4rem] relative overflow-hidden">
                  
                  {/* Top Header Section */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/80 mb-5">
                    <div className="flex items-center gap-4">
                      
                      {/* Compact Logo Box */}
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white p-2 shadow-md shadow-orange-500/10 flex items-center justify-center border-2 border-slate-700/50 flex-shrink-0">
                        <img 
                          src={exp.logoUrl} 
                          alt={exp.company} 
                          className="w-full h-full object-contain" 
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm uppercase tracking-wider">
                            <FiTrendingUp size={11} />
                            {exp.badge}
                          </span>
                        </div>

                        <h3 className="text-lg md:text-2xl font-black text-white font-display tracking-tight leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm md:text-base font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent font-display">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Date and Location Badge */}
                    <div className="flex flex-row sm:flex-col justify-start sm:items-end gap-2 text-xs font-semibold text-slate-300 flex-shrink-0">
                      <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/60">
                        <FiCalendar className="text-orange-400" size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 text-slate-400 text-[11px]">
                        <FiMapPin className="text-pink-400" size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Compact Highlights Banner */}
                  <div className="mb-6 bg-gradient-to-r from-orange-500/10 to-transparent border-l-3 border-orange-500 py-3 px-4 rounded-r-xl text-slate-300 text-xs md:text-sm leading-relaxed">
                    <span className="font-bold text-orange-400 mr-1.5">Career Progression:</span>
                    {exp.summary}
                  </div>

                  {/* Compact Metric Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {exp.stats.map((stat, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="bg-slate-800/40 border border-slate-700/50 p-3 rounded-xl flex items-center gap-3 hover:border-orange-500/30 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center flex-shrink-0">
                          <stat.icon size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">{stat.label}</p>
                          <p className="text-sm font-black text-white font-display">{stat.value}</p>
                          <p className="text-[10px] text-slate-500 truncate">{stat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Responsibilities List */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 font-display flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
                      Key Responsibilities & Achievements
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {exp.points.map((point, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-2.5 bg-slate-800/30 p-3 rounded-xl border border-slate-800/80 text-slate-300 text-xs md:text-sm leading-relaxed"
                        >
                          <FiCheckCircle className="text-orange-400 mt-0.5 flex-shrink-0" size={14} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 font-display">
                      Tech Stack:
                    </span>
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[10px] font-black text-slate-200 bg-slate-800/90 hover:bg-orange-500 hover:text-white rounded-lg border border-slate-700/50 transition-colors font-display uppercase tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
