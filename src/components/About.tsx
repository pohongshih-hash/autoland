import { motion } from 'motion/react';
import aboutImg from '../assets/images/about_img_1779875759631.png';

const stats = [
  { label: '業界經驗', value: '40+', suffix: '年' },
  { label: '機台種類', value: '100+', suffix: '款' },
  { label: '合作商場', value: '500+', suffix: '家' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-2 text-xs">關於奧特龍 Auto-Land</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              台灣專業的 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                親子遊樂設備品牌
              </span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              我們在許多賣場及商場均陳列擺設，也配合活動企劃、活動租賃、客製化服務、全新及中古機台販賣。產品眾多囊括旋轉木馬、搖搖馬、投籃機、按摩椅、娃娃機、打地鼠機、曲棍球、太鼓達人、賽車及射擊機台等。
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-brand-primary mb-1 flex items-baseline">
                    {stat.value}
                    <span className="text-xl text-brand-primary ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gray-900 rounded border-b-4 border-brand-primary transform translate-y-4 -translate-x-4" />
            <img 
              src={aboutImg} 
              alt="Auto-Land Arcade Machines" 
              className="relative z-10 w-full h-[500px] object-cover rounded shadow-2xl"
            />
            {/* Decorative element */}
            <div className="absolute bottom-4 right-4 z-20 bg-gray-900/80 backdrop-blur-sm p-4 rounded shadow-xl border border-white/10">
              <span className="text-white text-[10px] font-mono tracking-widest opacity-80">EST. 1980</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
