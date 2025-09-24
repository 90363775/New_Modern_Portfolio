import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'Cognifyz Technology',
      location: 'Maharashtra, India',
      period: 'Oct 2024 – Apr 2025',
      type: 'Internship',
      description: [
        'Analyzed and processed complex datasets for machine learning applications',
        'Assisted in developing ML models for real-world business problems',
        'Enhanced skills in data preparation, model implementation, and problem-solving',
        'Gained valuable hands-on experience in the machine learning domain',
        'Contributed to improving model accuracy and performance metrics'
      ],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Data Analysis'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Frontend Developer & Full-Stack',
      company: 'Freelancing',
      location: 'India',
      period: 'Nov 2024 – Present',
      type: 'Freelance',
      description: [
        'Providing development services via LinkedIn to assist students with major projects',
        'Building responsive web applications with modern frameworks',
        'Developed a community platform for village people to report issues to politicians',
        'Creating custom solutions tailored to client requirements',
        'Managing end-to-end project delivery and client communications'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
            My journey in the tech industry, building real-world solutions and growing professionally
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-10" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge 
                          className={`bg-gradient-to-r ${exp.color} text-white border-none mb-2`}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center text-slate-300 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6 text-slate-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-slate-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-slate-300 mb-6">
              I'm actively seeking exciting opportunities to contribute to innovative projects 
              and grow my expertise in AI/ML and full-stack development.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}