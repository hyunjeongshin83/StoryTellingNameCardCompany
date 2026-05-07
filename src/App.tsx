/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Layout, Palette, Type, CreditCard, ShoppingBag, Package, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './components/Logo';
import BusinessCard from './components/BusinessCard';
import EmailSignatureGuide from './components/EmailSignatureGuide';
import BrochureCreator from './components/BrochureCreator';
import { CardTheme } from './types';

export default function App() {
  const [activeTheme, setActiveTheme] = useState<CardTheme>('classic');
  const [view, setView] = useState<'home' | 'brochure'>('home');

  // Smooth scroll back to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const themes: { id: CardTheme; name: string; color: string }[] = [
    { id: 'classic', name: 'Classic Dark', color: 'bg-dark-bg-secondary' },
    { id: 'midnight', name: 'Midnight', color: 'bg-[#05080e]' },
    { id: 'light', name: 'Clean Light', color: 'bg-white' },
    { id: 'clean-mint', name: 'Mint Power', color: 'bg-mint' },
  ];
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-mint/30 selection:text-mint-bright" id="app-root">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/70 backdrop-blur-md border-b border-white/5" id="main-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div onClick={() => setView('home')} className="cursor-pointer transition-opacity hover:opacity-80">
            <Logo text="StoryTelling" subtext="Premium Card Maker" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400" id="nav-links">
            <button 
              onClick={() => {
                setView('home');
                setTimeout(() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }} 
              className="hover:text-mint transition-colors"
            >디자인 예시</button>
            <button 
              onClick={() => {
                setView('home');
                setTimeout(() => document.getElementById('email-preview')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }} 
              className="hover:text-mint transition-colors"
            >이메일 서명</button>
            <button 
              onClick={() => setView('brochure')}
              className={`transition-colors flex items-center gap-1.5 ${view === 'brochure' ? 'text-mint font-bold' : 'hover:text-mint'}`}
            >
              <Layout className="w-4 h-4" />
              브로셔 제작
            </button>
            <button 
              onClick={() => {
                setView('home');
                setTimeout(() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }} 
              className="hover:text-mint transition-colors font-bold text-mint-bright"
            >실물 명함 주문</button>
          </div>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-mint transition-all flex items-center gap-2 group" id="get-started-btn">
            문의하기
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {view === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative pt-40 pb-20 px-6 overflow-hidden" id="hero-section">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                id="hero-content"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint-soft text-mint rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-mint-border" id="badge">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                  </span>
                  StoryTelling 비즈니스 솔루션
                </div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8" id="hero-title">
                  품격 있는 <br />
                  <span className="text-mint">정사각형 명함.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-medium" id="hero-description">
                  StoryTelling과 함께하는 현대적인 비즈니스 카드 솔루션. 디지털과 오프라인의 완벽한 조화를 선사합니다.
                </p>
                <div className="flex flex-wrap gap-4" id="hero-actions">
                  <button 
                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-mint text-dark-bg px-8 py-4 rounded-2xl text-lg font-bold hover:bg-mint-bright transition-all shadow-xl shadow-mint/10 flex items-center gap-2 group" 
                    id="primary-cta"
                  >
                    디자인 예시 보기
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setView('brochure')}
                    className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2 group"
                  >
                    브로셔 제작하기
                    <Sparkles className="w-5 h-5 text-mint group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
                id="hero-visual"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-mint/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="w-full h-[500px] border border-white/5 rounded-[3rem] p-4 bg-dark-bg-secondary shadow-2xl overflow-hidden relative flex items-center justify-center" id="logo-showcase-card">
                    <BusinessCard theme={activeTheme} />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/40 backdrop-blur-xl p-2 rounded-2xl border border-white/10">
                       {themes.map(t => (
                         <button
                           key={t.id}
                           onClick={() => setActiveTheme(t.id)}
                           className={`w-10 h-10 rounded-xl border-2 transition-all ${activeTheme === t.id ? 'border-mint scale-110' : 'border-transparent opacity-50 hover:opacity-100'} ${t.id === 'light' ? 'bg-white' : t.id === 'clean-mint' ? 'bg-mint' : t.id === 'midnight' ? 'bg-black' : 'bg-gray-800'}`}
                           title={t.name}
                         />
                       ))}
                    </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Showcase Section */}
          <section className="py-24 px-6 border-t border-white/5" id="showcase">
             <div className="max-w-7xl mx-auto">
               <div className="text-center mb-20">
                  <h2 className="text-5xl font-black tracking-tight mb-4">다채로운 테마 컬렉션</h2>
                  <p className="text-gray-400 text-lg uppercase tracking-widest font-bold">StoryTelling의 디지털 여정</p>
                </div>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {themes.map((t, idx) => (
                   <motion.div
                     key={t.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     className="flex flex-col items-center gap-6"
                   >
                     <div className="scale-75 origin-top">
                       <BusinessCard theme={t.id} />
                     </div>
                     <div className="text-center">
                       <h4 className="font-bold text-xl mb-1">{t.name}</h4>
                       <span className="text-gray-500 text-xs font-mono uppercase tracking-tighter">Edition. {idx + 1}</span>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
          </section>

          {/* Order Section */}
          <section className="py-32 px-6 bg-[#0c121e] relative overflow-hidden" id="order">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mint/30 to-transparent"></div>
             <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div id="order-info">
                      <div className="flex items-center gap-3 text-mint font-bold tracking-[0.2em] uppercase text-sm mb-6">
                         <ShoppingBag className="w-5 h-5" />
                         StoryTelling Premium Printing
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                         명함 한 박스, <br />
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint via-mint-bright to-white">
                           StoryTelling에서 완성하세요.
                         </span>
                      </h2>
                      <p className="text-xl text-gray-400 mb-10 leading-relaxed font-normal">
                         MedIT의 정사각형 명함 규격(60x60mm)에 가장 최적화된 용지와 인쇄 방식을 StoryTelling에서 제공합니다. 
                         일반 명함보다 2배 두꺼운 <strong>두꺼운 질감(하드보드 느낌)</strong>의 프리미엄 지질을 선택하실 수 있습니다.
                      </p>
                      
                      <ul className="space-y-4 mb-12">
                         {[
                           '최고급 엑스트라 매트(Extra Matte) 400g~600g 중량지',
                           '하드보드지처럼 단단하고 묵직한 촉각적 경험',
                           '정교한 사각 재단 및 라운딩 처리 옵션',
                           'MedIT 전용 투명 아크릴 명함 거치대 포함(선택)'
                         ].map((item, id) => (
                           <li key={id} className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                              <div className="w-6 h-6 rounded-full bg-mint/10 flex items-center justify-center text-mint">
                                 <CheckCircle2 className="w-4 h-4" />
                              </div>
                              {item}
                           </li>
                         ))}
                      </ul>

                      <div className="flex flex-col sm:flex-row gap-6 p-1 bg-white/5 rounded-3xl border border-white/5 items-center pr-4">
                         <div className="bg-dark-bg p-6 rounded-2xl border border-white/5 w-full sm:w-auto">
                            <div className="text-xs text-gray-500 font-bold uppercase mb-1">한 박스 (200매)</div>
                            <div className="text-3xl font-black text-white">₩24,900~</div>
                         </div>
                         <button className="w-full sm:w-auto flex-1 bg-mint-bright text-dark-bg py-5 px-8 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl shadow-mint/20">
                            지금 주문하기
                            <ChevronRight className="w-6 h-6" />
                         </button>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-6 text-center italic">
                         * 본 사이트의 추천 링크를 통해 주문 시 소정의 수수료가 운영자에게 지급됩니다. (구매 가격은 동일합니다)
                      </p>
                   </div>

                   <div className="relative" id="order-mockup">
                      <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-1 rounded-[4rem] border border-white/10 shadow-3xl overflow-hidden group">
                         <div className="bg-dark-bg-tertiary rounded-[3.8rem] overflow-hidden p-12">
                            <div className="relative mb-20 mt-10">
                               <motion.div 
                                 animate={{ y: [0, -10, 0] }}
                                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                 className="relative"
                               >
                                  <div className="absolute -inset-10 bg-mint/20 blur-[100px] -z-10"></div>
                                  <div className="flex flex-col items-center justify-center perspective-[1000px]">
                                     <div className="w-64 h-64 bg-dark-bg rounded-2xl border-4 border-white/5 shadow-2xl overflow-hidden relative z-10 rotate-x-12">
                                        <BusinessCard theme="classic" />
                                     </div>
                                     <div className="w-64 h-64 bg-dark-bg rounded-2xl border border-white/5 shadow-2xl overflow-hidden absolute top-4 left-4 -z-10 opacity-60 rotate-x-12"></div>
                                     <div className="w-64 h-64 bg-dark-bg rounded-2xl border border-white/5 shadow-2xl overflow-hidden absolute top-8 left-8 -z-20 opacity-30 rotate-x-12"></div>
                                  </div>
                               </motion.div>
                            </div>
                            <div className="space-y-6">
                               <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                  <div className="flex items-center gap-4">
                                     <Package className="w-6 h-6 text-mint" />
                                     <div className="font-bold">프리미엄 팩 (200매)</div>
                                   </div>
                                   <CheckCircle2 className="w-5 h-5 text-mint" />
                               </div>
                               <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 opacity-50">
                                  <div className="flex items-center gap-4">
                                     <Sparkles className="w-6 h-6 text-mint" />
                                     <div className="font-bold">아크릴 디스플레이 케이스</div>
                                   </div>
                                   <div className="w-5 h-5 rounded-full border-2 border-white/20" />
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Email Share Preview Section */}
          <section className="py-24 px-6 bg-dark-bg-secondary" id="email-preview">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">이메일 공유 미리보기</h2>
                <p className="text-gray-400">사용자님의 이메일 하단에 명함이 삽입된 모습입니다.</p>
              </div>
              
              <div className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl" id="gmail-mockup">
                {/* Gmail Header */}
                <div className="bg-[#f2f6fc] px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700 font-sans">새 메시지</span>
                  <div className="flex gap-2 text-gray-300">
                    <div className="w-3 h-3 rounded-full bg-current opacity-20"></div>
                    <div className="w-3 h-3 rounded-full bg-current opacity-20"></div>
                    <div className="w-3 h-3 rounded-full bg-current opacity-20"></div>
                  </div>
                </div>
                
                {/* Gmail Content */}
                <div className="p-10 text-gray-800 font-sans">
                  <div className="border-b border-gray-100 pb-4 mb-6 text-sm text-gray-500">
                    <div className="mb-2 uppercase font-bold text-[10px] tracking-widest text-mint">Digital Contact</div>
                    <div className="text-xl font-bold text-gray-900 group">제 새로운 명함을 보내드립니다.</div>
                  </div>
                  
                  <div className="space-y-4 mb-12 text-sm leading-relaxed">
                    <p>안녕하세요,</p>
                    <p>StoryTelling의 새로운 아이덴티티가 반영된 디지털 명함을 공유드립니다.</p>
                    <p>앞으로의 협업과 연락은 이 명함을 통해 더욱 편리하게 가능합니다.</p>
                    <p>감사합니다.</p>
                  </div>

                  {/* Embedded Component */}
                  <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 flex justify-center shadow-inner">
                    <div className="scale-90 md:scale-100 origin-center">
                       <BusinessCard theme={activeTheme} />
                    </div>
                  </div>
                </div>

                {/* Gmail Footer */}
                <div className="px-8 py-6 bg-white border-t border-gray-100 flex items-center gap-4">
                  <button className="bg-[#0b57d0] text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-[#0842a0] transition-colors">보내기</button>
                  <div className="flex gap-6 text-gray-400 ml-4">
                    <Palette className="w-5 h-5" />
                    <Type className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Signature Guide Section */}
          <section className="py-24 px-6 border-t border-white/5" id="how-to-use">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">이메일 서명 설정하기</h2>
                <p className="text-gray-400">복사하여 Gmail 설정에서 바로 사용할 수 있는 코드를 제공합니다.</p>
              </div>
              <EmailSignatureGuide />
            </div>
          </section>

          {/* Event Section */}
          <section className="py-32 px-6" id="event">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-mint p-1 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-[3rem]"
              >
                <div className="bg-dark-bg p-12 md:p-20 rounded-[2.8rem] flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint/10 text-mint rounded-full text-sm font-bold tracking-widest uppercase mb-8 border border-mint/20">
                    <span className="w-2 h-2 rounded-full bg-mint animate-pulse"></span>
                    기간 한정 런칭 이벤트
                  </div>
                  <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-4xl">
                    당신만을 위한 브랜드 디자인, <br /> <span className="text-mint">100% 무료.</span>
                  </h2>
                  <p className="text-xl text-gray-400 max-w-2xl mb-12 font-medium">
                    StoryTelling의 명함 솔루션과 함께하세요. 모든 사람을 위한 스마트한 비즈니스 커뮤니케이션을 제공합니다.
                  </p>
                  <button className="bg-mint text-dark-bg px-10 py-5 rounded-2xl text-xl font-black hover:bg-mint-bright hover:scale-105 transition-all shadow-2xl shadow-mint/20 uppercase tracking-tight">
                    지금 신청하기
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="bg-dark-bg-tertiary py-32 px-6" id="philosophy-section">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12" id="grid-phil">
                <div className="space-y-6" id="phil-1">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-mint" />
                  </div>
                  <h3 className="text-2xl font-bold">정교한 색채학</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    색상은 감성적 연결의 핵심입니다. 모든 팔레트는 디지털 환경에서의 선명도를 위해 과학적으로 조정됩니다.
                  </p>
                </div>
                <div className="space-y-6" id="phil-2">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <Type className="w-6 h-6 text-mint" />
                  </div>
                  <h3 className="text-2xl font-bold">타이포그래피의 권위</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    정체성은 글자에서 시작됩니다. 시선을 사로잡고 가독성을 보장하는 맞춤형 서체 시스템을 큐레이팅합니다.
                  </p>
                </div>
                <div className="space-y-6" id="phil-3">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-mint" />
                  </div>
                  <h3 className="text-2xl font-bold">체계적인 확장성</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    로고는 시작일 뿐입니다. 파비콘부터 대형 빌보드에 이르기까지 완벽하게 확장되는 포괄적인 디자인 언어를 구축합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <BrochureCreator onBack={() => setView('home')} />
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-dark-bg" id="main-footer">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-xs font-bold tracking-widest uppercase text-gray-500" id="footer-links">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
          <div className="text-xs font-mono text-gray-500" id="copyright">
            © 2026 StoryTelling. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}


