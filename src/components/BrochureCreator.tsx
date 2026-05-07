import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Share2, Eye, Layout, Type, Image as ImageIcon, Sparkles, ChevronLeft, ArrowRight, CheckCircle2, Palette } from 'lucide-react';

interface BrochureData {
  title: string;
  subtitle: string;
  description: string;
  contactEmail: string;
  website: string;
  features: string[];
  color: string;
}

export default function BrochureCreator({ onBack }: { onBack: () => void }) {
  const [data, setData] = useState<BrochureData>({
    title: "Premium Digital Solutions",
    subtitle: "Empowering Your Business Story",
    description: "We provide state-of-the-art digital tools to help you build a distinctive brand identity in the modern marketplace.",
    contactEmail: "contact@example.com",
    website: "www.example.com",
    features: ["Innovative Design", "Seamless Integration", "Scalable Performance"],
    color: "#00d2b4"
  });

  const [previewMode, setPreviewMode] = useState<boolean>(false);

  const colors = [
    { name: 'Mint', value: '#00d2b4' },
    { name: 'Electric Blue', value: '#3b82f6' },
    { name: 'Pure White', value: '#ffffff' },
    { name: 'Deep Purple', value: '#8b5cf6' },
    { name: 'Sunset Gold', value: '#f59e0b' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...data.features];
    newFeatures[index] = value;
    setData(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    if (data.features.length < 5) {
      setData(prev => ({ ...prev, features: [...prev.features, "New Feature"] }));
    }
  };

  const removeFeature = (index: number) => {
    setData(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }));
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-24 px-6 pb-20" id="brochure-creator">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            id="back-to-home"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            메인으로 돌아가기
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setPreviewMode(!previewMode)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${previewMode ? 'bg-mint text-dark-bg' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
              id="toggle-preview"
            >
              <Eye className="w-4 h-4" />
              {previewMode ? '편집 모드' : '미리보기'}
            </button>
            <button className="flex items-center gap-2 bg-mint text-dark-bg px-6 py-2.5 rounded-full text-sm font-bold hover:bg-mint-bright transition-all" id="download-brochure">
              <Download className="w-4 h-4" />
              브로셔 저장
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Editor Form */}
          {!previewMode ? (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 bg-dark-bg-secondary p-8 rounded-[2rem] border border-white/5 shadow-2xl"
              id="editor-pane"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-mint">
                  <Layout className="w-6 h-6" />
                  브로셔 구성 요소
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">메인 타이틀</label>
                    <input 
                      type="text" 
                      name="title" 
                      value={data.title} 
                      onChange={handleInputChange}
                      className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-mint focus:ring-1 focus:ring-mint outline-none transition-all"
                      id="input-title"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">서브 타이틀</label>
                    <input 
                      type="text" 
                      name="subtitle" 
                      value={data.subtitle} 
                      onChange={handleInputChange}
                      className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-mint focus:ring-1 focus:ring-mint outline-none transition-all"
                      id="input-subtitle"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">설명문</label>
                    <textarea 
                      name="description" 
                      value={data.description} 
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-mint focus:ring-1 focus:ring-mint outline-none transition-all resize-none"
                      id="input-description"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                  <Sparkles className="w-5 h-5 text-mint" />
                  주요 특징 (최대 5개)
                </h3>
                <div className="space-y-3">
                  {data.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input 
                        type="text" 
                        value={feature} 
                        onChange={(e) => handleFeatureChange(idx, e.target.value)}
                        className="flex-1 bg-dark-bg border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-mint outline-none transition-all"
                      />
                      {data.features.length > 1 && (
                        <button 
                          onClick={() => removeFeature(idx)}
                          className="bg-red-500/10 text-red-500 p-2 rounded-xl border border-red-500/20 hover:bg-red-500/20 transition-all"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  {data.features.length < 5 && (
                    <button 
                      onClick={addFeature}
                      className="w-full py-2 border-2 border-dashed border-white/10 rounded-xl text-gray-500 hover:text-mint hover:border-mint transition-all text-sm font-bold"
                    >
                      + 특징 추가
                    </button>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                  <Palette className="w-5 h-5 text-mint" />
                  테마 색상
                </h3>
                <div className="flex gap-4">
                  {colors.map(color => (
                    <button
                      key={color.value}
                      onClick={() => setData(prev => ({ ...prev, color: color.value }))}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${data.color === color.value ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">연락처</label>
                  <input 
                    type="email" 
                    name="contactEmail" 
                    value={data.contactEmail} 
                    onChange={handleInputChange}
                    className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-mint focus:ring-1 focus:ring-mint outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">웹사이트</label>
                  <input 
                    type="text" 
                    name="website" 
                    value={data.website} 
                    onChange={handleInputChange}
                    className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-mint focus:ring-1 focus:ring-mint outline-none transition-all"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-dark-bg-secondary p-12 rounded-[2rem] border border-white/5 shadow-2xl flex flex-col items-center justify-center text-center"
               id="preview-info"
            >
               <div className="w-16 h-16 bg-mint/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-mint" />
               </div>
               <h3 className="text-2xl font-bold mb-4">전체 화면 미리보기</h3>
               <p className="text-gray-400 max-w-sm mb-8">
                  실제 고객들에게 보여질 세련된 브로셔 디자인을 오른쪽에서 실시간으로 확인할 수 있습니다. 
               </p>
               <div className="space-y-4 w-full">
                 <button className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-mint transition-all flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    디지털 브로셔 링크 공유
                 </button>
                 <button 
                  onClick={() => setPreviewMode(false)}
                  className="w-full bg-white/5 text-white py-4 rounded-xl font-bold hover:bg-white/10 border border-white/5 transition-all"
                >
                    내용 수정하기
                 </button>
               </div>
            </motion.div>
          )}

          {/* Preview Pane */}
          <div className="sticky top-24" id="preview-section">
             <div className="relative group">
                <div className="absolute -inset-4 bg-mint/20 blur-[100px] -z-10 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden aspect-[3/4] text-dark-bg relative" id="brochure-preview">
                   {/* Brochure Header */}
                   <div style={{ backgroundColor: data.color }} className="h-48 flex items-end p-8">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mb-4">
                         <span className="font-black text-2xl" style={{ color: data.color }}>S</span>
                      </div>
                   </div>
                   
                   <div className="p-10">
                      <motion.h1 
                        layoutId="title"
                        className="text-4xl font-black mb-4 tracking-tighter leading-none"
                      >
                        {data.title}
                      </motion.h1>
                      <motion.p 
                        layoutId="subtitle"
                        className="text-xl font-bold mb-8 uppercase tracking-widest text-gray-500"
                        style={{ color: `${data.color}dd` }}
                      >
                        {data.subtitle}
                      </motion.p>
                      
                      <div className="h-0.5 w-12 bg-gray-200 mb-8"></div>
                      
                      <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                        {data.description}
                      </p>

                      <div className="space-y-6 mb-12">
                        {data.features.map((feature, idx) => (
                           <div key={idx} className="flex items-start gap-4">
                              <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${data.color}20`, color: data.color }}>
                                 <CheckCircle2 className="w-4 h-4" />
                              </div>
                              <span className="font-bold text-gray-700">{feature}</span>
                           </div>
                        ))}
                      </div>

                      <div className="pt-10 border-t border-gray-100 flex flex-col gap-2">
                         <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-tighter">
                            <span>Email.</span>
                            <span className="text-dark-bg">{data.contactEmail}</span>
                         </div>
                         <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-tighter">
                            <span>Web.</span>
                            <span className="text-dark-bg">{data.website}</span>
                         </div>
                      </div>
                   </div>

                   {/* Footer Decorative Element */}
                   <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                         <circle cx="100" cy="100" r="100" fill={data.color} />
                      </svg>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
