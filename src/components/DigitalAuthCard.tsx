import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, ShieldCheck, QrCode, Barcode, Fingerprint } from 'lucide-react';
import Logo from './Logo';

export default function DigitalAuthCard() {
  return (
    <div className="flex flex-col gap-8 items-center py-12 px-6">
      <div className="text-center max-w-lg mb-8">
        <h3 className="text-3xl font-black mb-4 tracking-tighter">사이버 클라우드 가상 오피스</h3>
        <p className="text-[10px] font-black tracking-[0.4em] text-mint uppercase mb-4">Company cloud virtual</p>
        <p className="text-gray-400">사원증 대신 바코드나 QR코드로 가상 오피스에 로그인하세요. 미래지향적인 디지털 보안 인증 솔루션입니다.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
        {/* QR Version */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative aspect-[3/4] bg-dark-bg-secondary border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-between shadow-2xl overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-mint" />
          <div className="absolute inset-0 bg-gradient-to-b from-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <ShieldCheck className="w-6 h-6 text-mint" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">Secure Access</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="p-4 bg-white rounded-3xl shadow-[0_0_40px_rgba(0,210,180,0.2)]">
              <QrCode className="w-32 h-32 text-dark-bg" />
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold font-dotum">신현정</h4>
              <p className="text-xs text-mint font-bold uppercase tracking-widest mt-1 italic">Company Cloud Virtual</p>
            </div>
          </div>

          <div className="w-full space-y-4">
             <div className="flex justify-between items-center text-[10px] text-gray-500 border-t border-white/5 pt-4">
                <span>IDENTITY NO.</span>
                <span className="font-mono text-white">#2026-HJ83</span>
             </div>
             <div className="flex justify-center gap-2">
                <Fingerprint className="w-4 h-4 text-white/20" />
                <Smartphone className="w-4 h-4 text-white/20" />
             </div>
          </div>
        </motion.div>

        {/* Barcode Version */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative aspect-[3/4] bg-[#05080e] border border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-between shadow-2xl overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-white/20" />
          
          <div className="flex flex-col items-center gap-2">
            <Logo className="scale-75 opacity-80" />
          </div>

          <div className="flex flex-col items-center gap-10 w-full">
            <div className="relative w-full py-8 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center group-hover:border-mint/50 transition-colors">
              <Barcode className="w-56 h-16 text-white group-hover:text-mint transition-colors" />
              <div className="absolute bottom-2 font-mono text-[10px] text-white/30 tracking-[0.5em]">AUTH-ST-2026</div>
              
              {/* Scan Line Animation */}
              <motion.div 
                className="absolute left-4 right-4 h-0.5 bg-mint shadow-[0_0_15px_rgba(0,210,180,1)] z-10"
                animate={{ top: ['20%', '80%', '20%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold tracking-tight">CLOUD VIRTUAL LOGIN</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Virtual Terminal Scan</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-4 text-[9px] font-bold text-white/40 uppercase tracking-widest">
            <span className="px-2 py-1 bg-white/5 rounded">Secure</span>
            <span className="px-2 py-1 bg-white/5 rounded">Encrypted</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
