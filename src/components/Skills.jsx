import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const techStack = [
  { label: "C", customIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
  { name: "cplusplus", label: "C++" },
  { name: "python", label: "Python" },
  { name: "html5", label: "HTML" },
  { label: "CSS", customIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "javascript", label: "JavaScript" },
  { name: "mongodb", label: "MongoDB" },
  { name: "express", label: "Express" },
  { name: "react", label: "React" },
  { name: "nodedotjs", label: "Node.js" },
  { name: "mysql", label: "MySQL" },
  { name: "vercel", label: "Vercel" },
  { name: "git", label: "Git" },
  { name: "github", label: "GitHub" },
  { label: "VS Code", customIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
  { label: "OpenAI", customIcon: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png" },
  { label: "Postman", customIcon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" },
  { label: "shadcn/ui", customIcon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDevice = () => setIsDesktop(window.innerWidth >= 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-gray-100 dark:bg-[#1e2533] transition-colors duration-500 px-4 pt-0 pb-[80px] md:pt-0 md:pb-[100px] font-[Poppins]"
    >
      <div className="max-w-5xl mx-auto px-2 sm:px-6">
        {/* Outer Card Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gray-200 dark:bg-[#2e3748] border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg px-4 sm:px-10 py-5"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-[#1e293b] dark:text-white">
            Skills and Tech Stack
          </h2>

          {isDesktop ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 sm:gap-5"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group flex flex-col items-center justify-center border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#283041] px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-sm w-[80px] sm:w-[100px] transition-all hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                >
                  <img
                    src={tech.customIcon || `https://cdn.simpleicons.org/${tech.name}`}
                    alt={tech.label}
                    className="w-8 h-8 sm:w-8 sm:h-8 object-contain mb-1 transition-transform duration-300"
                  />
                  <span className="text-xs sm:text-sm text-center text-gray-800 dark:text-gray-200">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#283041] px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-sm w-[80px] sm:w-[100px] transition-all hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                >
                  <img
                    src={tech.customIcon || `https://cdn.simpleicons.org/${tech.name}`}
                    alt={tech.label}
                    className="w-8 h-8 sm:w-8 sm:h-8 object-contain mb-1"
                  />
                  <span className="text-xs sm:text-sm text-center text-gray-800 dark:text-gray-200">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
