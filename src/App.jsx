import React from 'react';

const DurgaPuja2026 = () => {
  const scheduleData = [
    { day: "শুভ মহালয়া", engDate: "১০ অক্টোবর ২০২৬", bangDate: "২২ আশ্বিন ১৪৩৩", weekDay: "শনিবার" },
    { day: "মহাপঞ্চমী", engDate: "১৫ অক্টোবর ২০২৬", bangDate: "২৭ আশ্বিন ১৪৩৩", weekDay: "বৃহস্পতিবার" },
    { day: "মহাষষ্ঠী", engDate: "১৬ অক্টোবর ২০২৬", bangDate: "২৮ আশ্বিন ১৪৩৩", weekDay: "শুক্রবার" },
    { day: "মহাসপ্তমী", engDate: "১৭ অক্টোবর ২০২৬", bangDate: "২৯ আশ্বিন ১৪৩৩", weekDay: "শনিবার" },
    { day: "মহাষ্টমী", engDate: "১৯ অক্টোবর ২০২৬", bangDate: "১ কার্তিক ১৪৩৩", weekDay: "সোমবার" },
    { day: "মহানবমী", engDate: "২০ অক্টোবর ২০২৬", bangDate: "২ কার্তিক ১৪৩৩", weekDay: "মঙ্গলবার" },
    { day: "বিজয়া দশমী", engDate: "২১ অক্টোবর ২০২৬", bangDate: "৩ কার্তিক ১৪৩৩", weekDay: "বুধবার" },
  ];

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

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800 pb-12">
      {/* Hero Section */}
      <header className="bg-red-700 text-white py-16 text-center shadow-lg px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">শারদীয় দুর্গোৎসব ২০২৬</h1>
        <p className="text-xl md:text-2xl font-light">ইতিহাস, মাহাত্ম্য এবং পূর্ণাঙ্গ সময়সূচী</p>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-10 space-y-12">
        
        {/* History and Significance Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold text-red-700 mb-4">দুর্গাপূজার ইতিহাস</h2>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              বাঙালি হিন্দু সমাজে দুর্গাপূজার প্রচলন ঠিক কবে শুরু হয়েছিল, তা নিয়ে নানা মতভেদ রয়েছে। তবে কৃত্তিবাস ওঝার রামায়ণে শ্রীরামচন্দ্র রাবণবধের উদ্দেশ্যে শরৎকালে দেবীর যে আরাধনা করেছিলেন, তা <strong>'অকালবোধন'</strong> নামে পরিচিত এবং এটিই শারদীয় দুর্গাপূজার মূল ভিত্তি। ১৫শ শতকের শেষের দিকে বা ১৬শ শতকের শুরুতে রাজশাহীর তাহেরপুরের রাজা কংসনারায়ণ এই পূজাকে বর্তমান রূপ ও জাঁকজমক প্রদান করেন বলে প্রচলিত আছে। ১৭৯০ সালের দিকে হুগলির গুপ্তিপাড়ায় প্রথম <strong>বারোয়ারি বা সর্বজনীন</strong> দুর্গাপূজার প্রচলন ঘটে।
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-red-500 hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold text-red-700 mb-4">পূজার মাহাত্ম্য</h2>
            <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
              দুর্গাপূজা কেবল একটি ধর্মীয় আচার নয়, এটি অশুভ শক্তির বিনাশ এবং শুভ শক্তির বিজয়ের চিরন্তন প্রতীক। মহিষাসুরমর্দিনী দেবী দুর্গা হলেন মাতৃরূপ, শক্তিরূপ এবং শান্তিরূপ। তাঁর দশ হাতে দশ প্রহরণ প্রমাণ করে <strong>নারী শক্তির অসীম ক্ষমতা</strong> এবং অন্যায়ের বিরুদ্ধে প্রতিবাদ।
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              শরতের কাশফুল, শিউলি আর ঢাকের বাদ্যি মানুষের মনে যে আনন্দের সঞ্চার করে, তা সব ভেদাভেদ ভুলিয়ে সমাজে সম্প্রীতি ও মিলনের বার্তা বয়ে আনে। বিজয়া দশমীর কোলাকুলি ও মিষ্টিমুখ সমাজের সকল স্তরের মানুষকে এক সুতোয় গাঁথে।
            </p>
          </section>
        </div>

        {/* Special Timings Section (New) */}
        <section className="bg-red-50 p-8 rounded-2xl shadow-inner border-l-4 border-r-4 border-red-600">
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">বিশেষ পূজার লগ্ন (বাংলাদেশ সময়)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specialTimings.map((timing, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{timing.icon}</div>
                <h3 className="text-xl font-bold text-red-700 mb-2 text-center">{timing.title}</h3>
                <p className="text-md font-semibold text-orange-600 mb-3 text-center">{timing.time}</p>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">{timing.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6 text-center">* পঞ্জিকার তিথি অনুযায়ী লগ্ন হিসাব করা হয়েছে। স্থানীয়ভাবে কয়েক মিনিটের সামান্য তারতম্য হতে পারে।</p>
        </section>

        {/* Schedule Table Section */}
        <section className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">২০২৬ সালের পূজার দিনপঞ্জিকা</h2>
          <div className="overflow-x-auto rounded-lg border border-red-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-50 text-red-900 text-lg">
                  <th className="p-4 border-b-2 border-red-200">পূজার দিন</th>
                  <th className="p-4 border-b-2 border-red-200">ইংরেজি তারিখ</th>
                  <th className="p-4 border-b-2 border-red-200">বাংলা তারিখ</th>
                  <th className="p-4 border-b-2 border-red-200">বার</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, index) => (
                  <tr key={index} className="hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-0">
                    <td className="p-4 font-bold text-red-700">{item.day}</td>
                    <td className="p-4 text-gray-700">{item.engDate}</td>
                    <td className="p-4 text-gray-700">{item.bangDate}</td>
                    <td className="p-4 text-gray-700">{item.weekDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

export default DurgaPuja2026;