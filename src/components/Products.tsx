import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import horseImg from '../assets/images/category_horse_1779875602243.png';
import shooterImg from '../assets/images/category_shooter_1779875564057.png';
import interactiveImg from '../assets/images/category_interactive_1779875581738.png';
import carouselImg from '../assets/images/category_carousel_1779875546553.png';

const categories = [
  {
    title: '螢幕搖搖馬',
    description: '結合動態畫面與互動設計，LED燈光效果讓小朋友體驗更生動有趣的乘坐樂趣。',
    image: horseImg,
    tag: '互動體驗',
  },
  {
    title: '射擊冒險',
    description: '實彈射擊機台提供打王快感，聲光效果完美呈現海怪冒險等刺激關卡。',
    image: shooterImg,
    tag: '熱血刺激',
  },
  {
    title: '親子互動',
    description: '打地鼠、投擲遊戲訓練孩子判斷力與肢體協調，適合親子同樂競賽。',
    image: interactiveImg,
    tag: '教育意義',
  },
  {
    title: '夢幻旋轉木馬',
    description: '經典旋轉設計，營造夢幻氛圍，適合親子共乘，留下美好遊樂回憶。',
    image: carouselImg,
    tag: '經典熱銷',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-2 text-xs">產品目錄</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              熱門遊戲機台系列
            </h3>
            <p className="text-gray-600 text-lg">
              包羅萬象的親子遊樂機台，結合吸睛造型、聲光效果與互動體驗，適合商場、賣場與親子空間規劃，打造高吸引力的遊覽環境。
            </p>
          </div>
          <a
            href="#/catalog"
            className="inline-flex items-center gap-2 font-bold text-sm tracking-wider text-gray-900 hover:text-brand-primary transition-colors group uppercase"
          >
            觀看完整目錄
            <span className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] rounded overflow-hidden mb-6 bg-gray-900">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-primary text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded shadow-sm">
                    {category.tag}
                  </span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                {category.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
