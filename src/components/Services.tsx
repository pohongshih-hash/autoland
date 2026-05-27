import { motion } from 'motion/react';
import { MonitorPlay, Wrench, CalendarHeart, Paintbrush2, Aperture, Globe2 } from 'lucide-react';

const services = [
  {
    icon: MonitorPlay,
    title: '機台均列擺設',
    description: '提供賣場、園區、教育機構等各式場地的機台陳列與常駐擺設服務。',
  },
  {
    icon: Wrench,
    title: '售後維修與技術',
    description: '專業技師團隊提供即時維修、硬體更新與長期維護保養。',
  },
  {
    icon: CalendarHeart,
    title: '支援活動租賃',
    description: '企業家庭日、節慶活動、主題短租企劃，帶來豐富歡樂的遊戲體驗。',
  },
  {
    icon: Paintbrush2,
    title: '客製化設計',
    description: '可配合客戶需求，進行機台外觀、造型與企業 CI 視覺的專屬客製。',
  },
  {
    icon: Aperture,
    title: '裝置藝術應用',
    description: '結合燈光、音樂與影像科技，打造具備地標性的互動裝置藝術。',
  },
  {
    icon: Globe2,
    title: '海外配套服務',
    description: '跨足國際市場，提供外銷裝櫃、跨國技術支援與海外發展配套。',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase mb-2 text-xs"
          >
            專業服務
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
          >
            滿足全方位的遊樂需求
          </motion.h3>
        </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(55,109,77,0.15)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
