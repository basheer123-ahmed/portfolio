import React, { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';

const Constellation = () => {
  const pointsRef = useRef();
  const linesRef = useRef();
  
  const particleCount = 120;
  const maxDistance = 0.6;
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 4;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 4;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [particles] = useState(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003
        ),
      });
    }
    return temp;
  });

  const [points, lines] = useMemo(() => {
    const p = new Float32Array(particleCount * 3);
    const l = new Float32Array(particleCount * particleCount * 6);
    return [p, l];
  }, []);

  useFrame((state) => {
    let lineIdx = 0;
    
    particles.forEach((p, i) => {
      // Movement
      p.position.add(p.velocity);

      // Mouse influence
      const distToMouse = p.position.distanceTo(new THREE.Vector3(mouse.current.x, mouse.current.y, 0));
      if (distToMouse < 0.5) {
        const dir = p.position.clone().sub(new THREE.Vector3(mouse.current.x, mouse.current.y, 0)).normalize();
        p.position.add(dir.multiplyScalar(0.02));
      }

      // Boundary check
      if (Math.abs(p.position.x) > 2.5) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 2.5) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > 2.5) p.velocity.z *= -1;

      points[i * 3] = p.position.x;
      points[i * 3 + 1] = p.position.y;
      points[i * 3 + 2] = p.position.z;
    });

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dist = particles[i].position.distanceTo(particles[j].position);
        if (dist < maxDistance) {
          lines[lineIdx++] = particles[i].position.x;
          lines[lineIdx++] = particles[i].position.y;
          lines[lineIdx++] = particles[i].position.z;
          lines[lineIdx++] = particles[j].position.x;
          lines[lineIdx++] = particles[j].position.y;
          lines[lineIdx++] = particles[j].position.z;
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIdx / 3);
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#475569" transparent opacity={0.7} sizeAttenuation={true} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lines.length / 3}
            array={lines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#94a3b8" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
};

const Hero = () => {
  const socials = [
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/m-basheer-ahmed/", color: "hover:text-[#0077b5]" },
    { icon: FaGithub, link: "https://github.com/basheer123-ahmed", color: "hover:text-[#333]" },
    { icon: FaInstagram, link: "https://www.instagram.com/iam__basheer/", color: "hover:text-[#e4405f]" },
    { icon: SiDevdotto, link: "#", color: "hover:text-[#000]" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden bg-white">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Constellation />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-2 font-display">
            Hi There,
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-6 font-display tracking-tight leading-tight">
            I'm Basheer <span className="text-primary">Ahmed</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-8 flex flex-wrap items-center gap-2">
            <span>I Am Into</span>
            <span className="text-[#b91c1c]">
              <TypeAnimation
                sequence={[
                  'MERN Stack Development',
                  2000,
                  'Full Stack Development',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <motion.a 
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1e1b4b] text-white font-bold text-lg mb-10 shadow-lg shadow-indigo-500/30 hover:bg-[#2e2a75] transition-all font-display"
          >
            About Me <span className="text-xl">➜</span>
          </motion.a>

          <div className="flex flex-wrap gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={`w-12 h-12 rounded-full bg-[#0f172a] flex items-center justify-center text-white text-xl transition-all ${social.color} hover:bg-white hover:border-2 border-[#0f172a] shadow-md`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* The circular yellow background like in screenshot */}
            <div className="absolute inset-0 bg-[#fab005] rounded-full shadow-2xl border-[12px] border-white overflow-hidden group">
               <img 
                src="/profile.jpg" 
                alt="Basheer Ahmed" 
                className="w-full h-full object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://api.dicebear.com/7.x/initials/svg?seed=BA&backgroundColor=fab005&textColor=ffffff";
                }}
              />
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-[-20px] border-2 border-dashed border-slate-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-[-40px] border border-slate-100 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
