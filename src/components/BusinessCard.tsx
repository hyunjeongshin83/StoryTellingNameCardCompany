/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import Logo from './Logo';
import { BusinessCardProps } from '../types';

export default function BusinessCard({ theme = 'classic' }: BusinessCardProps) {
  const getThemeClasses = () => {
    switch (theme) {
      case 'midnight':
        return {
          container: 'bg-[#05080e] border-[#1a202c] shadow-[0_20px_50px_rgba(0,0,0,0.5)]',
          text: 'text-gray-100',
          subtext: 'text-gray-400',
          accent: 'bg-mint/80',
          icon: 'text-mint',
          logoColor: 'text-white'
        };
      case 'light':
        return {
          container: 'bg-white border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]',
          text: 'text-gray-900',
          subtext: 'text-gray-500',
          accent: 'bg-mint',
          icon: 'text-mint',
          logoColor: 'text-gray-900'
        };
      case 'clean-mint':
        return {
          container: 'bg-mint border-transparent shadow-[0_20px_50px_rgba(0,210,180,0.3)]',
          text: 'text-dark-bg',
          subtext: 'text-dark-bg/70',
          accent: 'bg-white/40',
          icon: 'text-dark-bg',
          logoColor: 'text-dark-bg'
        };
      case 'classic':
      default:
        return {
          container: 'bg-dark-bg-secondary border-white/10 shadow-[0_20px_50px_rgba(0,210,180,0.15)]',
          text: 'text-white',
          subtext: 'text-gray-300',
          accent: 'bg-mint/50',
          icon: 'text-mint',
          logoColor: 'text-white'
        };
    }
  };

  const styles = getThemeClasses();
  const isMintTheme = theme === 'clean-mint';
  const iconColor = isMintTheme ? '0a0f1a' : '00d2b4';
  const contentColor = isMintTheme ? 'text-dark-bg' : 'text-mint';

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98, brightness: 1.2 }}
      className={`relative w-full max-w-[340px] aspect-square rounded-[2.5rem] p-10 border overflow-hidden group cursor-pointer transition-all ${styles.container}`}
      id="business-card-container"
    >
      {/* Glossy Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br pointer-events-none group-active:opacity-40 transition-all ${theme === 'light' ? 'from-black/5 to-transparent' : 'from-white/10 to-transparent'}`}></div>
      
      {/* Holographic accent */}
      {theme !== 'clean-mint' && (
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-colors ${theme === 'light' ? 'bg-mint/5' : 'bg-mint/10'} group-hover:bg-mint/20`}></div>
      )}

      <div className="relative h-full flex flex-col items-center justify-between py-2" id="card-content">
        {/* Header: Logo area */}
        <div className="flex flex-col items-center gap-4" id="card-header">
          <Logo className={`scale-105 transition-transform group-hover:scale-110`} />
        </div>

        {/* Body: Name (Centered, Dodum font) */}
        <div className="flex flex-col items-center gap-2" id="card-body">
            <h3 className={`text-4xl font-extrabold tracking-tight leading-none font-dotum ${theme === 'clean-mint' ? 'text-dark-bg' : styles.text}`}>신현정</h3>
            <div className={`h-0.5 w-6 my-1 ${styles.accent}`}></div>
            <p className={`text-[7.5px] uppercase font-black font-dotum tracking-[0.25em] opacity-90 ${contentColor}`}>Premium Card Maker</p>
        </div>

        {/* Footer: Contact info (Cleanly aligned, Dotum font) */}
        <div className={`flex flex-col items-center gap-1.5 text-[8.5px] font-dotum mt-4 ${styles.subtext}`} id="card-footer">
          <div className="flex items-center justify-center gap-2">
            <img src={`https://img.icons8.com/?size=40&id=9730&format=png&color=${iconColor}`} alt="Phone" className="w-2.5 h-2.5 object-contain" />
            <span className={`tracking-widest ${contentColor}`}>+82 10 8497 9634</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={`https://img.icons8.com/?size=40&id=12580&format=png&color=${iconColor}`} alt="Mail" className="w-2.5 h-2.5 object-contain" />
            <span className={contentColor}>hyunjeong.shin@sookmyung.ac.kr</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={`https://img.icons8.com/?size=40&id=13665&format=png&color=${iconColor}`} alt="Web" className="w-2.5 h-2.5 object-contain" />
            <span className={`truncate max-w-[240px] ${contentColor}`}>https://hyunjeongshin83.github.io/medit-homepage</span>
          </div>
          <div className="flex flex-col items-center mt-2 text-center leading-tight">
            <div className="flex items-center gap-1 justify-center">
              <img src={`https://img.icons8.com/?size=40&id=13800&format=png&color=${iconColor}`} alt="Pin" className="w-2.5 h-2.5 object-contain flex-shrink-0" />
              <span className={contentColor}>숙명여자대학교 창업보육센터 202호</span>
            </div>
            <span className={`pl-3.5 ${contentColor}`}>서울시 용산구 청파로47길 1</span>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      {theme !== 'light' && (
        <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r-full shadow-[0_0_20px_rgba(0,210,180,0.8)] ${styles.accent}`}></div>
      )}
    </motion.div>
  );
}
