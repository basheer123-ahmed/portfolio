import React, { useEffect, useState, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';

const Counter = ({ value }) => {
  const hasNumber = /[0-9]/.test(value);
  const [displayValue, setDisplayValue] = useState(hasNumber ? 0 : value);
  const numericValue = hasNumber ? (parseInt(value.replace(/[^0-9]/g, '')) || 0) : null;
  const suffix = hasNumber ? value.replace(/[0-9]/g, '') : '';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && hasNumber) {
      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate(val) {
          setDisplayValue(Math.round(val));
        },
      });
      return () => controls.stop();
    }
  }, [numericValue, isInView, hasNumber]);

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <h4 className="text-3xl font-black text-primary group-hover:scale-110 transition-transform font-display">
        {displayValue}
      </h4>
      <span className="text-3xl font-black text-primary font-display">{suffix}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-[#0f172a] mb-4 font-display uppercase tracking-tighter">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden group border border-slate-100">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <h3 className="text-3xl font-bold text-[#0f172a] mb-6 font-display">My Journey</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                I'm <span className="font-bold text-primary">Basheer Ahmed</span>, a 3rd year B.Tech (CSE) student and a passionate <span className="font-bold text-[#0f172a]">MERN Stack & Full Stack Developer</span>.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                I started my journey with web development out of curiosity and quickly developed a strong interest in building real-world applications. Over time, I gained hands-on experience in developing full-stack projects using modern technologies.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                I enjoy solving practical problems and building scalable applications with clean UI and efficient backend systems.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                🚀 Currently, I am looking for internship opportunities where I can contribute and grow as a developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 md:mt-0"
          >
            {[
              { label: 'Built', value: '5+', unit: 'Projects', desc: 'Real-world Apps' },
              { label: 'Specialization', value: 'MERN', unit: 'Stack', desc: 'Full-Stack Dev' },
              { label: 'Recognition', value: 'Award', unit: 'Special', desc: 'AI_X Hackathon' },
              { label: 'DSA Problems', value: '100+', unit: 'Solved', desc: 'GFG & LeetCode' },
              { label: 'Education', value: '3rd', unit: 'Year B.Tech', desc: 'CSE Student' }
            ].map((stat, i) => (
              <div key={i} className={`bg-white p-6 rounded-3xl flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-all border border-slate-100 group ${i === 4 ? 'col-span-2' : ''}`}>
                <Counter value={stat.value} />
                <span className="text-[10px] font-bold text-slate-400 uppercase">{stat.unit}</span>
                <p className="text-[#0f172a] font-bold mb-1 font-display tracking-tight uppercase text-[10px] mt-2">{stat.label}</p>
                <p className="text-slate-400 text-[9px] uppercase tracking-widest">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
