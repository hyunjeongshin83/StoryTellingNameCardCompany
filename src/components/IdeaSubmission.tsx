import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Youtube, Send, CheckCircle2, Video, Link as LinkIcon, Sparkles, Lightbulb, Rocket, MessageSquare, Zap } from 'lucide-react';

export default function IdeaSubmission() {
  const [videoUrl, setVideoUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeId(videoUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (videoUrl) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#080b12]" id="idea-submission">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/10 text-mint rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-mint/20">
              <Video className="w-3.5 h-3.5" />
              Idea Showcase
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              나의 아이디어를 <br />
              <span className="text-mint">영상으로 들려주세요.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Q7. 당신의 특별한 아이디어를 세상에 소개하는 영상을 공유해주세요. (선택사항) 
              유튜브 링크를 통해 당신의 비전을 더 생생하게 전달할 수 있습니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">유튜브 링크 지원</h4>
                  <p className="text-gray-500 text-sm">유튜브에 업로드한 영상의 URL을 그대로 붙여넣어 주세요.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-mint" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">실시간 미리보기</h4>
                  <p className="text-gray-500 text-sm">링크를 입력하면 제출 전에 영상을 바로 확인할 수 있습니다.</p>
                </div>
              </div>

              {/* Decorative Icons Row */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-black tracking-[0.2em] text-gray-600 uppercase mb-4">Possible Idea Categories</p>
                <div className="flex gap-4">
                  <div className="group relative">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-mint/50 transition-all">
                      <Lightbulb className="w-6 h-6 text-mint/60 group-hover:text-mint" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-400/50 transition-all">
                      <Rocket className="w-6 h-6 text-blue-400/60 group-hover:text-blue-400" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-400/50 transition-all">
                      <MessageSquare className="w-6 h-6 text-purple-400/60 group-hover:text-purple-400" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-orange-400/50 transition-all">
                      <Zap className="w-6 h-6 text-orange-400/60 group-hover:text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-mint/10 blur-[100px] -z-10"></div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-dark-bg-secondary border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <LinkIcon className="w-4 h-4 text-mint" />
                    유튜브 영상 링크 (Q7)
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="w-full bg-dark-bg border border-white/10 rounded-2xl p-5 text-white focus:border-mint focus:ring-1 focus:ring-mint outline-none transition-all font-mono text-sm"
                    />
                  </div>
                </div>

                {/* Video Preview Area */}
                <div className="aspect-video bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center relative group">
                  {videoId ? (
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-gray-600 group-hover:text-gray-400 transition-colors">
                      <Youtube className="w-16 h-16 opacity-10" />
                      <p className="text-xs font-bold uppercase tracking-widest">Video Preview</p>
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={!videoUrl || submitted}
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 ${submitted ? 'bg-mint text-dark-bg' : 'bg-white text-black hover:bg-mint active:scale-95'}`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-6 h-6" />
                      제출 완료!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      영상 링크 제출하기
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                  Security Protocol: Encrypted Submission Enforced
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
