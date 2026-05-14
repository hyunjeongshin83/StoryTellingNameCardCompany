import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, CreditCard, ChevronRight, CornerRightDown, Layers, Sparkles } from 'lucide-react';
import BusinessCard from './BusinessCard';

export default function FolderCardConcept() {
  return (
    <section className="py-32 px-6 bg-dark-bg relative overflow-hidden" id="folder-concept">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/10 text-mint rounded-full text-xs font-bold tracking-widest uppercase border border-mint/20">
              <Layers className="w-3.5 h-3.5" />
              Innovation Design
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
              명함, 그 이상의 <br />
              <span className="text-mint">패키지 경험.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              단순한 종이 한 장이 아닙니다. 명함 사이즈의 미니 폴더에 명함과 
              접이식 브로셔가 하나로 결합된 품격 있는 비즈니스 패키지를 만나보세요.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Layers className="w-5 h-5 text-mint" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">명함 사이즈 미니 폴더</h4>
                  <p className="text-gray-500">명함과 동일한 규격으로 제작되어 휴대가 간편하며 전문성을 전달합니다.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <FileText className="w-5 h-5 text-mint" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">4단 병풍 접지 (Gate-fold)</h4>
                  <p className="text-gray-500">정교하게 설계된 4단 접지 방식을 통해 작은 공간에 방대한 정보를 담았습니다.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[600px] flex items-center justify-center" id="folder-animation-container">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-mint/5 blur-[120px] rounded-full" />
            
            <div className="relative perspective-[2000px] w-full max-w-[400px] aspect-[1.6/1]">
              <div className="absolute -top-12 left-0 right-0 text-center text-[10px] font-black tracking-[0.5em] text-mint/40 uppercase">Folding Blueprint</div>
              
              {/* Folder Back */}
              <motion.div 
                className="absolute inset-0 bg-[#1a1f2e] border border-white/10 rounded-xl shadow-2xl origin-bottom"
                initial={{ rotateX: 20, y: 0 }}
                whileInView={{ rotateX: 10, y: -20 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                 {/* Brochure (Folding Paper Action) */}
                 <div className="absolute top-4 left-4 right-4 h-full flex gap-0.5 overflow-visible">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i}
                        className="h-[120%] w-1/4 bg-white rounded-sm shadow-md border-x border-gray-100 flex flex-col p-2 gap-2"
                        initial={{ rotateY: i % 2 === 0 ? 80 : -80, opacity: 0.8 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.1 }}
                      >
                         <div className="w-full h-1 bg-gray-100 rounded" />
                         <div className="w-full h-8 bg-mint/5 rounded" />
                         <div className="space-y-1">
                            <div className="w-full h-0.5 bg-gray-50 rounded" />
                            <div className="w-3/4 h-0.5 bg-gray-50 rounded" />
                         </div>
                      </motion.div>
                    ))}
                 </div>

                 {/* Folder Front Flap */}
                 <motion.div 
                    className="absolute inset-0 bg-dark-bg-secondary border border-white/10 rounded-xl shadow-2xl z-20 flex items-center justify-center overflow-hidden"
                 >
                    {/* Pocket for Card */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white/5 to-transparent border-t border-white/10 z-30" />
                    
                    {/* The Business Card */}
                    <motion.div 
                        initial={{ y: 15, scale: 0.9, rotate: -1 }}
                        whileInView={{ y: -5, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="relative z-40 scale-[0.85]"
                    >
                        <BusinessCard theme="classic" />
                    </motion.div>

                    {/* Logo/Identity on Folder - Only Company Name as requested */}
                    <div className="absolute top-4 left-6 flex items-center gap-2 opacity-50">
                       <span className="font-black text-[10px] tracking-[0.2em] uppercase text-white">StoryTelling</span>
                    </div>
                 </motion.div>

                 {/* Folder Tab Detail */}
                 <div className="absolute -top-4 left-0 w-24 h-8 bg-dark-bg-secondary border-l border-t border-r border-white/10 rounded-t-xl -z-10" />
              </motion.div>

              {/* Annotation labels */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute -right-12 top-0 space-y-24"
              >
                 <div className="flex items-center gap-3">
                    <CornerRightDown className="w-6 h-6 text-mint" />
                    <span className="text-xs font-bold uppercase tracking-widest text-mint whitespace-nowrap">Folded Brochure</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CornerRightDown className="w-6 h-6 text-mint" />
                    <span className="text-xs font-bold uppercase tracking-widest text-mint whitespace-nowrap">Premium Business Card</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
