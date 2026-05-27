import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroBg from '../assets/images/hero_bg_1779875526029.png';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AuotLand Amusement Equipment"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 block"
          >
            <span className="text-brand-secondary font-bold tracking-widest text-xs uppercase">
              40年以上經驗專業親子遊樂設備
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            奧特龍 <br />
            <span className="text-brand-light">
              提供全方位娛樂服務
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
          >
            專營各式旋轉木馬、搖搖馬、投籃機、娃娃機、賽車等親子娛樂機台。提供機台租賃、買賣、維修及客製化店面規劃，打造安全、有趣且高吸引力的遊樂環境。
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white px-8 py-4 rounded font-semibold transition-all shadow-lg shadow-brand-primary/30 hover:scale-105 active:scale-95"
            >
              探索更多機台
              <ArrowRight size={20} />
            </a>
            <a
              href="https://line.me/ti/p/N6jVzb2yFR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded font-semibold transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={20} className="text-brand-secondary" />
              洽談合作 (LINE)
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
    </div>
  );
}
