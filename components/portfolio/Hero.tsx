
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ChevronDown, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-1 opacity-75"
            />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 p-1">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d86fc5e6f_image2.jpg"
                alt="Syed Farhan Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <span className="text-blue-400 text-lg md:text-xl font-medium">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name with Animated Letters */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
        >
          SYED FARHAN
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h2
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="text-xl md:text-3xl font-medium bg-gradient-to-r from-blue-400 via-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            AI/ML Engineer & Full-Stack Developer
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Passionate Computer Science student specializing in AI/ML and full-stack development. 
          Building innovative solutions like voice assistants and IoT systems to solve real-world problems.
        </motion.p>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-slate-400 mb-12"
        >
          <MapPin className="w-5 h-5" />
          <span>Mysore, India</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View Projects
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          <motion.a
            href="mailto:farhaansyed34@gmail.com"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://github.com/90363775"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-slate-700 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/syed-farhaan-245739259"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/farhaansyed34/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-slate-700 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-slate-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2" />
          </div>
          <ChevronDown className="w-6 h-6 text-slate-500 mx-auto mt-2" />
        </motion.div>
      </motion.div>
    </div>
  );
}
