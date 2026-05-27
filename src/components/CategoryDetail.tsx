import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight, MessageCircle, X, ChevronLeft, Maximize2 } from 'lucide-react';
import { productCategories } from '../data/categories';
import { categoryProducts } from '../data/products';

interface CategoryDetailProps {
  categoryId: string;
}

export default function CategoryDetail({ categoryId }: CategoryDetailProps) {
  const category = productCategories.find(c => c.id === categoryId);
  const products = categoryProducts[categoryId] || [];
  
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProductIndex === null) return;
      
      if (e.key === 'Escape') {
        setSelectedProductIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedProductIndex((prev) => (prev !== null && prev < products.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setSelectedProductIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scrolling when lightbox is open
    if (selectedProductIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedProductIndex, products.length]);

  if (!category) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-900">找不到此分類</h1>
        <a href="#/catalog" className="text-brand-primary hover:underline mt-4 inline-block">返回目錄</a>
      </div>
    );
  }

  const navigatePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProductIndex !== null && selectedProductIndex > 0) {
      setSelectedProductIndex(selectedProductIndex - 1);
    }
  };

  const navigateNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProductIndex !== null && selectedProductIndex < products.length - 1) {
      setSelectedProductIndex(selectedProductIndex + 1);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">
            <a href="#/catalog" className="hover:text-brand-primary transition-colors flex items-center gap-1">
              <ArrowLeft size={16} /> 產品目錄
            </a>
            <ChevronRight size={14} />
            <span className="text-gray-900">{category.title}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {category.title}
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            全系列 {category.title} 產品，每一款都經過嚴格測試品質保證。如需詳細規格及報價，歡迎與我們聯繫。
          </p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
            <p className="text-gray-500">目前沒有產品記錄。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProductIndex(idx)}
              >
                <div className="aspect-square bg-white relative overflow-hidden flex items-center justify-center p-6 border-b border-gray-50">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 text-brand-dark">
                    <Maximize2 size={32} className="opacity-50" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-brand-primary transition-colors line-clamp-2" title={product.title}>
                    {product.title}
                  </h3>
                  
                  <div className="mt-auto">
                    <a 
                      href="https://line.me/ti/p/N6jVzb2yFR" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-50 hover:bg-brand-primary hover:text-white text-brand-dark rounded-lg font-semibold text-sm transition-colors border border-gray-100 hover:border-brand-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageCircle size={18} />
                      立即詢價
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox / Gallery */}
      <AnimatePresence>
        {selectedProductIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedProductIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
              onClick={() => setSelectedProductIndex(null)}
            >
              <X size={32} className="drop-shadow-lg" />
            </button>

            {/* Previous Button */}
            {selectedProductIndex > 0 && (
              <button 
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 hover:bg-white/10 rounded-full transition-all"
                onClick={navigatePrev}
              >
                <ChevronLeft size={48} />
              </button>
            )}

            {/* Next Button */}
            {selectedProductIndex < products.length - 1 && (
              <button 
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 hover:bg-white/10 rounded-full transition-all"
                onClick={navigateNext}
              >
                <ChevronRight size={48} />
              </button>
            )}

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking on image */
            >
              <div className="relative w-full flex-1 flex items-center justify-center min-h-0 bg-transparent rounded-lg">
                <img 
                  src={products[selectedProductIndex].img} 
                  alt={products[selectedProductIndex].title}
                  className="max-w-full max-h-[75vh] object-contain drop-shadow-2xl rounded-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Product Info inside Lightbox */}
              <div className="mt-6 text-center w-full max-w-2xl px-4">
                <span className="inline-block px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                  {category.title}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md mb-6">
                  {products[selectedProductIndex].title}
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <a 
                    href="https://line.me/ti/p/N6jVzb2yFR" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#06C755] hover:bg-[#05b34c] text-white rounded font-bold transition-all shadow-lg shadow-green-900/50 hover:scale-105 active:scale-95"
                  >
                    <MessageCircle size={20} />
                    LINE 快速詢價
                  </a>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm font-medium tracking-widest bg-black/50 px-4 py-1.5 rounded-full">
                {selectedProductIndex + 1} / {products.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
