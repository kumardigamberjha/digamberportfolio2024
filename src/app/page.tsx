"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { About } from './About/page';

function Index() {

  return (
    <div className="relative h-screen w-screen font-sans">
      {/* Background Video */}
      <video 
        autoPlay="autoplay" 
        muted 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/homebg.mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-6 p-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hi! I&pos;m Digamber Jha
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
            Full-Stack Developer and Computer Vision Enthusiast
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal">
            Content Creator @CodingIndia
          </h3>

         
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-8 left-8 z-20 flex space-x-6">
        <motion.img 
          src="/images/youtube.png"
          alt="YouTube" 
          className="h-12 w-12 cursor-pointer hover:scale-110 transition-transform duration-300" 
          whileHover={{ scale: 1.2 }}
        />
        <motion.img 
          src="/images/insta.png"
          alt="Instagram" 
          className="h-12 w-12 cursor-pointer hover:scale-110 transition-transform duration-300" 
          whileHover={{ scale: 1.2 }}
        />
      </div>
      <About />
    </div>
  );
}

export default Index;
