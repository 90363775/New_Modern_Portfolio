import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Science and Engineering (Artificial Intelligence Machine Learning)',
      institution: 'ATME College of Engineering',
      location: 'Mysore, India',
      period: '2022 – 2026',
      status: 'In Progress',
      type: 'Undergraduate',
      color: 'from-blue-500 to-purple-500',
      highlights: [
        'Mathematical modeling for machine learning',
        'Numerical methods for data analysis',
        'Optimization techniques for AI algorithms',
        'Advanced programming and software development',
        'Research methodologies and project management'
      ]
    },
    {
      degree: 'PUC (11th & 12th)',
      field: 'Science Stream',
      institution: "Maharaja's College",
      location: 'Mysore, India',
      period: '2020 – 2022',
      status: 'Completed',
      type: 'Higher Secondary',
      color: 'from-green-500 to-teal-500',
      highlights: [
        'Physics, Chemistry, Mathematics foundation',
        'Computer Science fundamentals',
        'Research and analytical thinking',
        'Academic excellence and leadership',
        'Preparation for engineering entrance exams'
      ]
    }
  ];

  const academicAchievements = [
    {
      title: 'Harvard CS50P Certification',
      description: 'Introduction to Python Programming',
      year: '2024',
      icon: '🎓'
    },
    {
      title: 'Machine Learning Specialization',
      description: 'Coursera Advanced Certification',
      year: '2024',
      icon: '🤖'
    },
    {
      title: 'Research Projects',
      description: 'Multiple AI/ML research initiatives',
      year: '2023-2025',
      icon: '🔬'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900/30 to-slate-800/30">
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
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
            My academic journey in computer science and AI/ML specialization
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-10 flex items-center justify-center">
                <GraduationCap className="w-3 h-3 text-white" />
              </div>

              {/* Education Card */}
              <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} md:w-1/2`}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={`bg-gradient-to-r ${edu.color} text-white border-none`}>
                          {edu.type}
                        </Badge>
                        <Badge variant={edu.status === 'Completed' ? 'secondary' : 'outline'} 
                               className={edu.status === 'In Progress' ? 'border-yellow-500 text-yellow-400' : ''}>
                          {edu.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h3>
                      
                      <p className="text-blue-400 font-medium mb-3">{edu.field}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-slate-300">
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>{edu.institution}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Areas of Study</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Academic Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {academicAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-slate-400 text-sm mb-3">{achievement.description}</p>
                <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                  {achievement.year}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Currently pursuing my BE degree while actively engaging in research projects, 
              online certifications, and hands-on development to stay at the forefront of AI/ML innovations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}