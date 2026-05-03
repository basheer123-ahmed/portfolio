import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiJavascript, SiPython, SiGit, SiGithub, SiPostman, SiMysql, SiMongoose,
  SiLeetcode
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava, FaCode } from 'react-icons/fa';

const skillCategories = [
  {
    title: "MERN Stack",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-blue-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-800" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ]
  },
  {
    title: "Programming (Java DSA)",
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "Python", icon: SiPython, color: "text-blue-600" },
      { name: "DSA", icon: FaCode, color: "text-indigo-600" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Mongoose", icon: SiMongoose, color: "text-red-700" },
      { name: "PostgreSQL", icon: SiLeetcode, color: "text-blue-400" }, // Placeholder or just 3
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-800" },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-900" },
      { name: "Postman", icon: SiPostman, color: "text-orange-600" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-600" },
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-[#0f172a] mb-4 font-display uppercase tracking-tighter">Tech Arsenal</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#0f172a] mb-8 text-center border-b border-slate-200 pb-4 font-display uppercase tracking-widest">
                {category.title}
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 xs:grid-cols-3 gap-4 md:gap-6"
              >
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center border border-slate-100 group-hover:border-primary group-hover:shadow-xl transition-all transform group-hover:-translate-y-3">
                      <skill.icon className={`text-4xl ${skill.color} transition-transform group-hover:scale-110`} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-primary transition-colors uppercase tracking-widest font-display">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
