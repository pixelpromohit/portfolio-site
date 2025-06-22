import React from 'react';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion'; // ✅ Import framer-motion
import MohitImg3 from '../assets/MohitImg3.png';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-[#1e2533] transition-colors duration-500 px-4 min-h-screen py-[80px] md:py-[160px]"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-[40px] md:gap-x-[130px] px-4">
        
        {/* Text Content with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-center md:text-left space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl md:text-5xl font-bold text-[#1e293b] dark:text-white mb-5">
              Welcome!
            </h2>
            <h2 className="text-2xl md:text-5xl font-bold whitespace-nowrap">
              <span className="text-[#1e293b] dark:text-white">I’m </span>
              <span className="text-[#3b82f6] dark:text-[#60a5fa]">Mohit Ramchandani</span>
            </h2>
          </div>

          <h3 className="text-lg md:text-4xl mt-2 text-[#475569] dark:text-gray-300 font-medium">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Programmer',
                  'Software Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h3>

          <p className="text-[#475569] dark:text-gray-400 text-base md:text-[1.32rem] leading-relaxed">
          I am a passionate, creative developer who is always open to possibilities. I enjoy learning new technologies and solving real world problems. Looking forward to connect and collaborate with each other.
          </p>

          {/* Resume and Socials */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-4 pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-lg shadow-md transition text-base font-medium"
            >
              Download Resume
            </a>
            <div className="flex justify-center sm:justify-start gap-5">
              <a
                href="https://github.com/pixelpromohit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#475569] dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/mohit-ramchandani-763479252/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#475569] dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ramchandanimohit771@gmail.com"
                aria-label="Email"
                className="text-[#475569] dark:text-gray-300 hover:text-[#3b82f6] dark:hover:text-[#60a5fa] transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Profile Image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[345px] lg:h-[345px] rounded-full overflow-hidden border-[px] border-[#3b82f6] shadow-2xl transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] -mt-[0px] md:-mt-[38px]">
            <img
              src={MohitImg3}
              alt="Mohit Ramchandani"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
