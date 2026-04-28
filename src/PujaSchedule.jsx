import React from 'react';
import { pujaSchedule2026 } from './pujaData';

const PujaSchedule = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4 drop-shadow-sm">
            🌺 শারদীয় দুর্গোৎসব ২০২৬ - পূজার নির্ঘণ্ট 🌺
          </h2>
          <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            "মা আসছেন আমাদের ঘরে, আনন্দের জোয়ারে ভাসুক সারা দুনিয়া"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujaSchedule2026.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden animate-fadeIn"
            >
              {/* Decorative Background Element */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.day.split(' ')[0]}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-red-900 mb-2">{item.day}</h3>
                <p className="text-orange-600 font-semibold mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {item.events.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-red-500 mt-1">✦</span>
                      <span className="text-sm font-medium leading-relaxed">{event}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-orange-100">
                  {item.anjaliTime && (
                    <div className="flex items-center gap-3 bg-red-50 p-3 rounded-xl">
                      <span className="text-xl">🙏</span>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-red-400 leading-none mb-1">পুষ্পাঞ্জলি</p>
                        <p className="text-sm font-bold text-red-800">{item.anjaliTime}</p>
                      </div>
                    </div>
                  )}
                  {item.aratiTime && (
                    <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-xl">
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
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PujaSchedule;
