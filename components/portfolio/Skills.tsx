import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Palette, MessageSquare, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'C', level: 80 },
        { name: 'R', level: 75 },
        { name: 'SQL', level: 90 }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'Scikit-learn', level: 95 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 95 },
        { name: 'Matplotlib', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Tools & Technologies',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'MS Office Suite', level: 90 },
        { name: 'Data Analysis', level: 88 },
        { name: 'Web Development', level: 80 },
        { name: 'IoT Systems', level: 75 }
      ]
    },
    {
      icon: MessageSquare,
      title: 'Soft Skills',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Team Collaboration', level: 95 },
        { name: 'Problem Solving', level: 92 },
        { name: 'Project Management', level: 80 },
        { name: 'Leadership', level: 85 }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ x: [0, 20, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 bg-white/20 rounded-full"
                          style={{ width: '20px' }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Introduction to Python – CS50P', issuer: 'Harvard University', icon: '🎓' },
              { title: 'Machine Learning', issuer: 'Coursera', icon: '🤖' },
              { title: 'Advanced Machine Learning', issuer: 'Coursera', icon: '🧠' }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-slate-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}