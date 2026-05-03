import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Special Appreciation Award",
    event: "AI_X Hackathon",
    description: "Honored with a Special Appreciation Award in a highly competitive event featuring 1000+ participants and 300+ teams, recognized for building an outstanding AI-driven solution.",
    year: "2026"
  },
  {
    title: "Runner-up",
    event: "Tech Clash Hackathon",
    description: "Developed a competitive full-stack application during an intense 3-day hackathon, securing the second position among 50+ participating teams.",
    year: "2026"
  },
  {
    title: "Runner-up",
    event: "Paper Presentation",
    description: "Presented a comprehensive research paper on modern web architecture and performance optimization techniques.",
    year: "2024"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative z-10 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-[#0f172a] mb-4 font-display uppercase tracking-tighter">Milestones</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line in middle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 rounded-full hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {achievements.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary rounded-full z-10 hidden md:block shadow-sm"></div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="w-full md:w-[45%] bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 group relative overflow-hidden"
                >
                  <div className={`absolute top-0 ${idx % 2 === 0 ? 'left-0' : 'right-0'} w-1.5 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500`}></div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-1 font-display">{item.event}</h4>
                      <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] font-display tracking-tight leading-tight">{item.title}</h3>
                    </div>
                    <span className="text-4xl font-black text-slate-100 font-display leading-none">{item.year}</span>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                </motion.div>

                {/* Spacer side for empty space */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
