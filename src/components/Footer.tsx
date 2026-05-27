import { MapPin, Phone, Printer, Mail, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-gray-600 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center text-brand-primary font-black italic text-2xl mr-3">
                AutoLand
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tighter">
                奧特龍企業有限公司
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
              成為客戶長期信賴的合作夥伴。提供機台擺設、活動租賃、客製化製作、中古與全新遊戲機台販售，涵蓋娃娃機、籃球機、飛鏢機等設備，並支援國際化服務與完善售後維修。
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/autoland.coltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors text-gray-600"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://line.me/ti/p/N6jVzb2yFR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-gray-200 hover:border-brand-primary hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-wider"
              >
                LINE 洽詢
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold text-sm uppercase tracking-widest mb-6">快速連結</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><a href="#about" className="hover:text-brand-primary transition-colors">關於奧特龍</a></li>
              <li><a href="#/catalog" className="hover:text-brand-primary transition-colors">機台目錄</a></li>
              <li><a href="https://www.auto-land.com.tw/services" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">服務項目</a></li>
              <li><a href="https://autolandkao.wixsite.com/autoland-en" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">English Site</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold text-sm uppercase tracking-widest mb-6">聯絡資訊</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-primary shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">公司地址</span>
                  <a href="https://maps.app.goo.gl/bSEmj5hkcxJjrmU8A" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors text-gray-600">高雄市苓雅區河北路79號</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">工廠地址</span>
                  <a href="https://maps.app.goo.gl/nfA9xNu1DFS52dzf6" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors text-gray-600">高雄市大寮區鳳林二路946號</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-primary shrink-0" />
                <a href="tel:+886-7-751-3273" className="hover:text-brand-primary transition-colors text-gray-600">
                  (07) 751-3273
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={18} className="text-gray-400 shrink-0" />
                <a href="tel:+886-7-721-4685" className="hover:text-brand-primary transition-colors text-gray-600">
                  (07) 721-4685
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary shrink-0" />
                <a href="mailto:autoland.kao@gmail.com" className="hover:text-brand-primary transition-colors text-gray-600">
                  聯絡我們 (Email)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Auto-Land 奧特龍企業有限公司. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-primary transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-brand-primary transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
