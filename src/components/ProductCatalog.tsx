import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { productCategories } from '../data/categories';

export default function ProductCatalog() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb and Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">
            <a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-1">
              <ArrowLeft size={16} /> 首頁
            </a>
            <ChevronRight size={14} />
            <span className="text-gray-900">產品目錄</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            機台目錄 <span className="text-brand-primary">Our Products</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            我們提供種類最豐富、品質最可靠的娛樂設備。從經典的旋轉木馬到最新的互動科技機台，滿足您的各種商業需求。
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productCategories.map((category, idx) => (
            <motion.a
              href={`#/catalog/${category.id}`}
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-brand-primary/30"
            >
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors duration-300 z-10" />
                <img 
                  src={category.img} 
                  alt={category.title} 
                  className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-gray-100 bg-white relative z-20">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors flex items-center justify-between">
                  {category.title}
                  <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
