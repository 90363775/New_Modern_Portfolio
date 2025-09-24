import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Rocket, Trophy, Coffee, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const languages = [
    { name: 'English', level: 'B2', flag: '🇺🇸' },
    { name: 'Hindi', level: 'A2', flag: '🇮🇳' },
    { name: 'Kannada', level: 'A1', flag: '🇮🇳' },
    { name: 'Urdu', level: 'Native', flag: '🇵🇰' }
  ];

  const interests = [
    { icon: Brain, title: 'AI & Machine Learning', desc: 'Exploring cutting-edge AI technologies' },
    { icon: Rocket, title: 'Space Technology', desc: 'Following space exploration developments' },
    { icon: Code, title: 'Innovation', desc: 'Building creative solutions to real problems' },
    { icon: Coffee, title: 'Late Night Coding', desc: 'Best ideas come after midnight' }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-slate-300">
              <p className="text-xl leading-relaxed">
                I'm a passionate Computer Science student with expertise in 
                <span className="text-blue-400 font-semibold"> full-stack development</span>, 
                <span className="text-purple-400 font-semibold"> Python</span>, and 
                <span className="text-blue-400 font-semibold"> machine learning</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                I build innovative solutions like voice assistants and IoT systems, 
                aiming to solve real-world problems and grow through collaboration 
                and continuous learning.
              </p>

              <p className="text-lg leading-relaxed">
                Currently pursuing Bachelor of Engineering in Computer Science 
                and Engineering with specialization in Artificial Intelligence 
                and Machine Learning at ATME College of Engineering.
              </p>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-4">
                  <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
                  <h4 className="font-semibold text-white">Status</h4>
                  <p className="text-slate-400">Single</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-4">
                  <Globe className="w-8 h-8 text-green-500 mb-2" />
                  <h4 className="font-semibold text-white">Citizenship</h4>
                  <p className="text-slate-400">India</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Right Column - Languages & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-blue-400" />
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{lang.flag}</span>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                        {lang.level}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-white">{lang.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Interests & Hobbies
              </h3>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <interest.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{interest.title}</h4>
                      <p className="text-slate-400 text-sm">{interest.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}