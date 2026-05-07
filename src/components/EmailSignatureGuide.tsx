/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';

export default function EmailSignatureGuide() {
  const [copied, setCopied] = useState(false);

  // Simplified HTML/Inline CSS version for Gmail compatibility
  const signatureHtml = `
<table cellpadding="0" cellspacing="0" style="font-family: 'Malgun Gothic', '맑은 고딕', 'Dotum', '돋움', sans-serif; border: 1px solid rgba(0,210,180,0.3); border-radius: 20px; background-color: #0a0f1a; width: 280px; color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
  <tr>
    <td align="center" style="padding: 25px 20px;">
      <div style="background-color: rgba(0,210,180,0.08); width: 42px; height: 42px; border-radius: 12px; margin-bottom: 15px; display: inline-block; border: 1px solid rgba(0,210,180,0.3);">
        <img src="https://img.icons8.com/?size=100&id=8606&format=png&color=00d2b4" width="24" height="24" style="padding: 9px; display: block;" alt="StoryTelling" />
      </div>
      <div style="margin-bottom: 12px;">
        <div style="font-size: 18px; font-weight: 700; margin-bottom: 2px;">StoryTelling</div>
        <div style="font-size: 7.5px; font-weight: 600; color: #00e8c8; letter-spacing: 1.8px; text-transform: uppercase;">Premium Card Maker</div>
      </div>
      <div style="margin-bottom: 18px;">
        <div style="font-size: 20px; font-weight: 700;">신현정</div>
        <div style="width: 20px; height: 1.5px; background-color: #00d2b4; margin: 6px auto 0;"></div>
      </div>
      <div style="font-size: 8.5px; color: #aaaaaa; line-height: 1.7; font-weight: 500;">
        <div style="margin-bottom: 5px; white-space: nowrap;">
          <img src="https://img.icons8.com/?size=50&id=9730&format=png&color=00d2b4" width="10" height="10" style="vertical-align: middle; margin-right: 6px; display: inline-block;" />
          <span style="color: #00d2b4; vertical-align: middle; display: inline-block;">+82 10 8497 9634</span>
        </div>
        <div style="margin-bottom: 5px; white-space: nowrap;">
          <img src="https://img.icons8.com/?size=50&id=12580&format=png&color=00d2b4" width="10" height="10" style="vertical-align: middle; margin-right: 6px; display: inline-block;" />
          <a href="mailto:hyunjeong.shin@sookmyung.ac.kr" style="color: #00d2b4; text-decoration: none; vertical-align: middle; display: inline-block;">hyunjeong.shin@sookmyung.ac.kr</a>
        </div>
        <div style="margin-bottom: 5px; white-space: nowrap;">
          <img src="https://img.icons8.com/?size=50&id=13665&format=png&color=00d2b4" width="10" height="10" style="vertical-align: middle; margin-right: 6px; display: inline-block;" />
          <a href="https://hyunjeongshin83.github.io/medit-homepage" style="color: #00d2b4; text-decoration: none; vertical-align: middle; display: inline-block;">hyunjeongshin83.github.io/medit-homepage</a>
        </div>
        <div style="color: #00d2b4; font-size: 8px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px; text-align: center;">
          <div style="margin-bottom: 2px;">
            <img src="https://img.icons8.com/?size=50&id=13800&format=png&color=00d2b4" width="10" height="10" style="vertical-align: middle; margin-right: 4px; display: inline-block;" />
            <span style="vertical-align: middle; display: inline-block; color: #00d2b4;">숙명여자대학교 창업보육센터 202호</span>
          </div>
          <div style="display: block; color: #00d2b4;">서울시 용산구 청파로47길 1</div>
        </div>
      </div>
    </td>
  </tr>
</table>
  `.trim();

  const handleCopyDesign = async () => {
    const signatureElement = document.getElementById('rendered-signature-preview');
    if (!signatureElement) return;

    try {
      const type = 'text/html';
      const blob = new Blob([signatureHtml], { type });
      const data = [new ClipboardItem({ [type]: blob })];
      await navigator.clipboard.write(data);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const range = document.createRange();
      range.selectNode(signatureElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-dark-bg-tertiary rounded-[2.5rem] p-8 md:p-12 border border-white/5" id="signature-guide">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 text-mint mb-6">
            <Info className="w-6 h-6" />
            <h3 className="text-2xl font-bold font-serif">Gmail 서명 설정 가이드</h3>
          </div>
          
          <ol className="space-y-6 text-gray-400 text-sm font-dotum">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center font-bold text-mint text-xs">1</span>
              <div>
                <p className="text-white font-bold mb-1">디자인 복사하기</p>
                <p>오른쪽의 <b>'디자인 복사하기'</b> 버튼을 클릭하세요. (코드가 아닌 명함 모양 그대로 복사됩니다)</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center font-bold text-mint text-xs">2</span>
              <p>Gmail 설정(⚙️) → <b>'모든 설정 보기'</b> → <b>'서명'</b> 섹션으로 갑니다.</p>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center font-bold text-mint text-xs">3</span>
              <p>서명 편집기 빈 칸을 클릭하고 <b>붙여넣기(Ctrl+V)</b> 하세요.</p>
            </li>
            <li className="flex gap-4 font-medium text-white bg-mint/10 p-5 rounded-2xl border border-mint/20 shadow-lg shadow-mint/5 animate-pulse">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-mint flex items-center justify-center font-bold text-dark-bg text-sm">!</span>
              <div>
                <p className="font-bold mb-1 underline decoration-mint underline-offset-4">중요: 코드가 아닌 '디자인'을 복사하세요</p>
                <p className="text-xs leading-relaxed opacity-90">Gmail은 HTML 소스 코드를 직접 넣는 기능을 지원하지 않습니다. 반드시 아래의 <b>[디자인 복사하기]</b> 버튼을 누른 후, Gmail 서명 편집기에 <b>붙여넣기(Ctrl+V)</b> 하셔야 명함 모양이 그대로 나타납니다.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="flex-1 flex flex-col items-center gap-6" id="preview-area">
          <div className="flex items-center justify-between w-full uppercase tracking-widest text-[10px] font-bold text-gray-500">
            <span>Visual Preview (Copy this)</span>
            <button 
              onClick={handleCopyDesign}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all shadow-lg ${copied ? 'bg-white text-dark-bg' : 'bg-mint text-dark-bg hover:bg-mint-bright hover:scale-105'}`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? '디자인 복사됨!' : '디자인 복사하기'}
            </button>
          </div>
          
          <div 
            id="rendered-signature-preview"
            className="p-8 bg-dark-bg-secondary rounded-[2.5rem] shadow-xl border border-white/5"
            dangerouslySetInnerHTML={{ __html: signatureHtml }}
          ></div>

          <div className="w-full">
            <details className="group">
              <summary className="text-[10px] text-gray-600 cursor-pointer hover:text-gray-400 transition-colors list-none text-center uppercase tracking-tighter">
                 Show Technical HTML Code (Developer Only)
              </summary>
              <div className="mt-4 bg-black/40 rounded-2xl p-4 border border-white/5 overflow-x-auto max-h-[150px]">
                <pre className="text-[9px] text-gray-600 font-mono italic">
                  {signatureHtml}
                </pre>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
