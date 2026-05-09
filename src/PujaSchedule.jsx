import React from 'react';
import { motion } from 'framer-motion';
import { pujaSchedule2026 } from './pujaData';

const PujaSchedule = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4 drop-shadow-sm font-display">
            🌺 পূজার নির্ঘণ্ট 🌺
          </h2>
          <div className="h-1.5 w-32 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic font-medium">
            "মা আসছেন আমাদের ঘরে, আনন্দের জোয়ারে ভাসুক সারা দুনিয়া"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujaSchedule2026.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 border-2 border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl filter drop-shadow-sm">{item.icon}</span>
                  <span className="bg-[#8B0000] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.day.split(' ')[0]}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#8B0000] mb-2 font-display">{item.day}</h3>
                <p className="text-orange-600 font-bold mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {item.events.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-red-500 mt-1">✦</span>
                      <span className="text-sm font-semibold leading-relaxed">{event}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t-2 border-orange-50 border-dashed">
                  {item.anjaliTime && (
                    <div className="flex items-center gap-3 bg-red-50 p-3 rounded-2xl border border-red-100">
                      <span className="text-xl">🙏</span>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-red-400 leading-none mb-1">পুষ্পাঞ্জলি</p>
                        <p className="text-sm font-bold text-red-800">{item.anjaliTime}</p>
                      </div>
                    </div>
                  )}
                  {item.aratiTime && (
                    <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-2xl border border-orange-100">
                      <span className="text-xl">🪔</span>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-orange-400 leading-none mb-1">সন্ধ্যা আরতি</p>
                        <p className="text-sm font-bold text-orange-800">{item.aratiTime}</p>
                      </div>
                    </div>
                  )}
                  {!item.anjaliTime && !item.aratiTime && (
                    <div className="text-center py-2 italic text-gray-400 text-xs">
                      বিশেষ কোনো নির্দিষ্ট সময় নেই
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#8B0000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PujaSchedule;
