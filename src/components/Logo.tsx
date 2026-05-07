/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Logo({ 
  className = "", 
  text = "StoryTelling", 
  subtext = "Premium Card Maker" 
}: { 
  className?: string;
  text?: string;
  subtext?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`} id="company-logo-container">
      <motion.div 
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex items-center justify-center w-12 h-12 bg-mint/10 border border-mint/20 rounded-xl overflow-hidden backdrop-blur-sm shadow-lg shadow-mint/5"
        id="logo-icon-box"
      >
        <div className="absolute inset-0 bg-mint/20 blur-xl"></div>
        <img 
          src="https://img.icons8.com/?size=100&id=2807&format=png&color=00d2b4" 
          alt="Brand Logo"
          className="w-6 h-6 object-contain relative z-10"
        />
      </motion.div>
      <div className="flex flex-col leading-none" id="logo-text-box">
        <span className="text-xl font-black tracking-tighter text-white font-dotum">{text}</span>
        <span className="text-[7.5px] font-bold tracking-[0.15em] text-mint-bright uppercase pt-0.5 whitespace-nowrap opacity-80 font-dotum">{subtext}</span>
      </div>
    </div>
  );
}
