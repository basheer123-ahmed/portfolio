import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-[#0f172a] mb-4 font-display uppercase tracking-tighter">Let's Connect 📬</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <a href="mailto:basheerm2006@gmail.com" className="bg-slate-50 p-6 md:p-8 rounded-3xl flex items-center gap-6 hover:bg-white hover:shadow-xl transition-all group border border-slate-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-[#0f172a] group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                <FiMail size={28} />
              </div>
              <div>
                <h4 className="text-[#0f172a] font-bold font-display uppercase tracking-wider text-xs">Email Me</h4>
                <p className="text-slate-500 font-medium text-xs md:text-base break-all">basheerm2006@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/m-basheer-ahmed/" target="_blank" rel="noreferrer" className="bg-slate-50 p-6 md:p-8 rounded-3xl flex items-center gap-6 hover:bg-white hover:shadow-xl transition-all group border border-slate-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-[#0f172a] group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                <FiLinkedin size={28} />
              </div>
              <div>
                <h4 className="text-[#0f172a] font-bold font-display uppercase tracking-wider text-xs">LinkedIn</h4>
                <p className="text-slate-500 font-medium text-xs">Professional Profile</p>
              </div>
            </a>

            <a href="https://github.com/basheer123-ahmed" target="_blank" rel="noreferrer" className="bg-slate-50 p-6 md:p-8 rounded-3xl flex items-center gap-6 hover:bg-white hover:shadow-xl transition-all group border border-slate-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-[#0f172a] group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                <FiGithub size={28} />
              </div>
              <div>
                <h4 className="text-[#0f172a] font-bold font-display uppercase tracking-wider text-xs">GitHub</h4>
                <p className="text-slate-500 font-medium text-xs">Check my repos</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100 shadow-sm"
          >
            <form 
              action="https://formsubmit.co/basheerm2006@gmail.com" 
              method="POST"
              className="space-y-8"
            >
              {/* FormSubmit.co configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Message!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest font-display">Your Name</label>
                  <input type="text" name="name" id="name" required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest font-display">Your Email</label>
                  <input type="email" name="email" id="email" required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest font-display">Message</label>
                <textarea name="message" id="message" required rows="5" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1e1b4b] hover:bg-[#2e2a75] text-white font-black py-4 px-8 rounded-xl transition-all shadow-lg shadow-indigo-500/20 font-display uppercase tracking-widest border border-white/10">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
