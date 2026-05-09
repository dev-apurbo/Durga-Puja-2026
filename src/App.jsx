import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Calendar, Clock, Info, ChevronDown, ChevronUp, Sparkles, Heart } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import PujaSchedule from './PujaSchedule';
import bgImage from './assets/bg.png';
import envelopeImage from './assets/envelope.png';
import RSVPForm from './RSVPForm';

const DurgaPuja2026 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('invitation');
  const [showRSVP, setShowRSVP] = useState(false);

  const specialTimings = [
    {
      title: "সন্ধিপূজা",
      time: "১৯ অক্টোবর (সকাল ১০:৫৭ থেকে ১১:৪৫)",
      icon: "🪔",
      description: "অষ্টমী ও নবমী তিথির সন্ধিক্ষণে এই বিশেষ পূজা অনুষ্ঠিত হয়। মহাষ্টমী তিথি সকাল ১১:২১-এ শেষ হবে, এর ঠিক পূর্ববর্তী ২৪ মিনিট এবং পরবর্তী ২৪ মিনিট মিলিয়ে মোট ৪৮ মিনিট অত্যন্ত পবিত্র সন্ধিলগ্ন।"
    },
    {
      title: "নবমী বিহিত পূজা",
      time: "১৯ অক্টোবর বেলা ১১:২১ এর পর থেকে ২০ অক্টোবর সকাল ৮:৫০ পর্যন্ত",
      icon: "🌺",
      description: "মহানবমীর মূল পূজা এই সময়ের মধ্যে সম্পন্ন হবে। ২০ তারিখ সকাল ৮:৫০-এ নবমী তিথি শেষ হওয়ার পূর্বেই যজ্ঞ ও অন্যান্য গুরুত্বপূর্ণ আচার পালিত হবে।"
    },
    {
      title: "দশমী বিহিত পূজা ও বিজয়া",
      time: "২০ অক্টোবর সকাল ৮:৫০ এর পর থেকে ২১ অক্টোবর সকাল ১১:১১ পর্যন্ত",
      icon: "✨",
      description: "২০ তারিখ সকালে নবমী তিথি শেষ হওয়ার পর দশমী তিথি শুরু হবে। ২১ অক্টোবর সকালে দশমী বিহিত পূজা, দর্পণ বিসর্জন এবং সন্ধ্যায় প্রতিমা বিসর্জনের মাধ্যমে দুর্গোৎসবের সমাপ্তি ঘটবে।"
    }
  ];

  const [showSandhiPuja, setShowSandhiPuja] = useState(false);
  const [showDevoteeDuties, setShowDevoteeDuties] = useState(false);

  return (
    <div className="min-h-screen bg-[#fffaf5] font-sans text-gray-800 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#8B0000] p-4 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative w-full max-w-md aspect-[4/3] perspective">
              {/* Envelope Body */}
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-lg shadow-2xl overflow-hidden border-4 border-[#D4AF37]"
                style={{ backgroundImage: `url(${envelopeImage})` }}
              >
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              {/* Envelope Flap */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#A52A2A] rounded-t-lg origin-bottom border-b-2 border-black/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg border-2 border-[#8B0000] animate-bounce">
                  <Mail size={32} className="text-[#8B0000]" />
                </div>
              </div>

              <div className="absolute bottom-10 left-0 w-full text-center text-white px-4">
                <p className="text-2xl font-serif italic mb-2">আপনি আমন্ত্রিত</p>
                <p className="text-sm tracking-widest opacity-80">শারদীয় দুর্গোৎসব ২০২৬</p>
                <div className="mt-8 px-6 py-2 bg-[#D4AF37] text-[#8B0000] rounded-full font-bold inline-block animate-pulse shadow-lg">
                  খুলতে ক্লিক করুন
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            {/* Header / Hero Section with Card Feel */}
            <header className="relative min-h-[80vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/10 via-transparent to-[#fffaf5]" />
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="z-10 bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl border-4 border-[#D4AF37] max-w-4xl w-full relative"
              >
                {/* Decorative Corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-xl" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-xl" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#D4AF37] rounded-br-xl" />

                <div className="text-[#8B0000] font-script text-4xl md:text-6xl mb-4">স্বাগতম</div>
                <h1 className="text-4xl md:text-7xl font-bold text-[#8B0000] mb-6 drop-shadow-sm font-display">
                  শারদীয় দুর্গোৎসব ২০২৬
                </h1>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full" />
                
                <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                  "যা দেবী সর্বভূতেষু শক্তিরূপেণ সংস্থিতা।<br/>
                  নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ।।"
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-2xl border border-orange-200">
                    <Calendar className="text-red-700" size={32} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-orange-600 font-bold">তারিখ</p>
                      <p className="text-lg font-bold text-gray-800">১৬ - ২১ অক্টোবর ২০২৬</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-2xl border border-orange-200">
                    <MapPin className="text-red-700" size={32} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-orange-600 font-bold">স্থান</p>
                      <p className="text-lg font-bold text-gray-800">সর্বজনীন পূজা মণ্ডপ</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => {
                      setShowDetails(true);
                      setTimeout(() => {
                        document.getElementById('details-section').scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="bg-red-700 text-white px-8 py-3 rounded-full font-bold hover:bg-red-800 transition-all shadow-lg flex items-center gap-2 group"
                  >
                    বিস্তারিত দেখুন <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setShowRSVP(true)}
                    className="bg-white text-red-700 border-2 border-red-700 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-all shadow-md flex items-center gap-2"
                  >
                    RSVP করুন <Heart className="text-red-500" />
                  </button>
                </div>
              </motion.div>
            </header>

            {showDetails && (
              <motion.div 
                id="details-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto px-6 pb-24 space-y-20"
              >
                <CountdownTimer />

                {/* Tabs for Navigation */}
                <div className="flex justify-center border-b border-orange-200 sticky top-0 bg-[#fffaf5]/80 backdrop-blur-sm z-30 py-4">
                  <div className="flex gap-2 md:gap-8 overflow-x-auto no-scrollbar">
                    {[
                      { id: 'invitation', label: 'আমন্ত্রণ', icon: Sparkles },
                      { id: 'schedule', label: 'সময়সূচী', icon: Clock },
                      { id: 'history', label: 'ইতিহাস', icon: Info },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
                          activeTab === tab.id 
                            ? 'bg-red-700 text-white shadow-md' 
                            : 'text-gray-500 hover:bg-orange-100'
                        }`}
                      >
                        <tab.icon size={18} />
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {activeTab === 'invitation' && (
                  <div className="space-y-12 animate-fadeIn">
                    {/* Special Timings */}
                    <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border-t-8 border-red-700 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-8xl text-red-50 opacity-10 font-serif">ॐ</div>
                      <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-10 text-center flex items-center justify-center gap-3">
                        <Sparkles className="text-[#D4AF37]" /> বিশেষ পূজার লগ্ন
                      </h2>
                      <div className="grid md:grid-cols-3 gap-8">
                        {specialTimings.map((timing, index) => (
                          <div key={index} className="bg-orange-50 p-8 rounded-3xl border border-orange-100 hover:shadow-lg transition-all duration-300 relative group">
                            <div className="text-5xl mb-6 flex justify-center group-hover:scale-110 transition-transform">{timing.icon}</div>
                            <h3 className="text-2xl font-bold text-red-700 mb-3 text-center">{timing.title}</h3>
                            <p className="text-lg font-bold text-orange-600 mb-4 text-center bg-white py-2 rounded-full shadow-sm">{timing.time}</p>
                            <p className="text-gray-600 leading-relaxed text-justify">{timing.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Devotee Duties */}
                    <section className="bg-red-800 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                       <div className="absolute inset-0 opacity-10 bg-repeat pointer-events-none" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: '200px' }} />
                       <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                          🙏 ভক্তদের করণীয় ও বিধি
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                          {[
                            { title: "পুষ্পাঞ্জলি প্রদান", desc: "পূজার অন্যতম প্রধান অঙ্গ হলো দেবীকে পুষ্পাঞ্জলি নিবেদন করা। বিশেষ করে মহাষ্টমীর দিন সকালে স্নান সেরে, শুদ্ধ বস্ত্রে (বা নতুন পোশাকে) দেবীর চরণে অঞ্জলি দেওয়া হয়।" },
                            { title: "সাত্ত্বিক আহার", desc: "পূজার দিনগুলোতে (বিশেষ করে সপ্তমী, অষ্টমী ও নবমীতে) অনেক ভক্তই আমিষ খাবার বর্জন করে নিরামিষ বা সাত্ত্বিক আহার গ্রহণ করেন।" },
                            { title: "সন্ধিপূজা দর্শন", desc: "অষ্টমীর ও নবমীর সন্ধিক্ষণে পবিত্র 'সন্ধিপূজা' দর্শন করা অত্যন্ত পুণ্যজনক বলে মনে করা হয়।" },
                            { title: "সিঁদুর খেলা", desc: "বিজয়া দশমীর দিন দেবী প্রতিমা বিসর্জনের আগে বিবাহিত নারীরা দেবীকে সিঁদুর পরিয়ে মিষ্টি মুখ করান এবং একে অপরের সাথে সিঁদুর খেলায় মেতে ওঠেন।" }
                          ].map((duty, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                              <h4 className="text-xl font-bold text-orange-300 mb-2">{duty.title}</h4>
                              <p className="text-gray-100 leading-relaxed opacity-90">{duty.desc}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-12 text-center">
                          <button 
                            onClick={() => setShowDevoteeDuties(!showDevoteeDuties)}
                            className="bg-[#D4AF37] text-red-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
                          >
                            {showDevoteeDuties ? 'সংক্ষিপ্ত করুন' : 'সবগুলো নিয়ম দেখুন'}
                          </button>
                        </div>
                       </div>
                    </section>
                  </div>
                )}

                {activeTab === 'schedule' && (
                  <div className="animate-fadeIn">
                    <PujaSchedule />
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                    <section className="bg-white p-8 rounded-[2.5rem] shadow-lg border-l-8 border-orange-500">
                      <h2 className="text-3xl font-bold text-red-700 mb-6">দুর্গাপূজার ইতিহাস</h2>
                      <p className="text-lg leading-relaxed text-gray-700 text-justify">
                        বাঙালি হিন্দু সমাজে দুর্গাপূজার প্রচলন ঠিক কবে শুরু হয়েছিল, তা নিয়ে নানা মতভেদ রয়েছে। তবে কৃত্তিবাস ওঝার রামায়ণে শ্রীরামচন্দ্র রাবণবধের উদ্দেশ্যে শরৎকালে দেবীর যে আরাধনা করেছিলেন, তা <strong>'অকালবোধন'</strong> নামে পরিচিত এবং এটিই শারদীয় দুর্গাপূজার মূল ভিত্তি।
                      </p>
                    </section>
                    <section className="bg-white p-8 rounded-[2.5rem] shadow-lg border-l-8 border-red-500">
                      <h2 className="text-3xl font-bold text-red-700 mb-6">পূজার মাহাত্ম্য</h2>
                      <p className="text-lg leading-relaxed text-gray-700 text-justify">
                        দুর্গাপূজা কেবল একটি ধর্মীয় আচার নয়, এটি অশুভ শক্তির বিনাশ এবং শুভ শক্তির বিজয়ের চিরন্তন প্রতীক। মহিষাসুরমর্দিনী দেবী দুর্গা হলেন মাতৃরূপ, শক্তিরূপ এবং শান্তিরূপ। তাঁর দশ হাতে দশ প্রহরণ প্রমাণ করে <strong>নারী শক্তির অসীম ক্ষমতা</strong>।
                      </p>
                    </section>
                  </div>
                )}

                {/* Footer */}
                <footer className="text-center py-12 border-t border-orange-100">
                  <div className="font-script text-4xl text-red-700 mb-4">শুভ শারদীয়া</div>
                  <p className="text-gray-500 italic">"মা আসছেন আমাদের ঘরে, আনন্দের জোয়ারে ভাসুক সারা দুনিয়া"</p>
                </footer>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {showRSVP && <RSVPForm onClose={() => setShowRSVP(false)} />}

      {/* Decorative Floating Elements (only when open) */}
      {isOpen && (
        <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, x: Math.random() * 100 + 'vw', rotate: 0 }}
              animate={{ 
                y: '110vh', 
                rotate: 360,
                x: (Math.random() * 100 - 50) + 'vw'
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
              className="absolute text-3xl opacity-20"
            >
              {['🌸', '🌺', '✨', '🌼'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DurgaPuja2026;