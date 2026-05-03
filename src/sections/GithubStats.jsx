import React from 'react';
import { motion } from 'framer-motion';

const GithubStats = () => {
  const username = "basheer123-ahmed";
  const theme = "transparent"; 

  return (
    <section className="py-20 relative z-10 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-[#0f172a] mb-4 font-display uppercase tracking-tighter">Coding Velocity</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl bg-slate-50 p-4 rounded-3xl border border-slate-100 shadow-md"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&bg_color=f8fafc&title_color=0f172a&icon_color=f97316&text_color=475569`} 
              alt="GitHub Stats" 
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-xl bg-slate-50 p-4 rounded-3xl border border-slate-100 shadow-md"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&bg_color=f8fafc&title_color=0f172a&text_color=475569`} 
              alt="Top Languages" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-full max-w-3xl bg-slate-50 p-4 rounded-3xl border border-slate-100 shadow-md">
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&background=f8fafc&border=f1f5f9&stroke=f97316&ring=f97316&fire=f97316&currStreakLabel=f97316&sideLabels=475569&dates=475569`} 
              alt="GitHub Streak" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
