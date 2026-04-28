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

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800 pb-12">
      {/* Hero Section */}
      <header className="bg-red-700 text-white py-16 text-center shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">শারদীয় দুর্গোৎসব ২০২৬</h1>
        <p className="text-xl md:text-2xl font-light">ইতিহাস, মাহাত্ম্য এবং পূর্ণাঙ্গ সময়সূচী</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-10 space-y-12">
        
        {/* History Section */}
        <section className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500">
          <h2 className="text-3xl font-bold text-red-700 mb-4">দুর্গাপূজার ইতিহাস</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            বাঙালি হিন্দু সমাজে দুর্গাপূজার প্রচলন ঠিক কবে শুরু হয়েছিল, তা নিয়ে নানা মতভেদ রয়েছে। তবে কৃত্তিবাস ওঝার রামায়ণে শ্রীরামচন্দ্র রাবণবধের উদ্দেশ্যে শরৎকালে দেবীর যে আরাধনা করেছিলেন, তা <strong>'অকালবোধন'</strong> নামে পরিচিত এবং এটিই শারদীয় দুর্গাপূজার মূল ভিত্তি। ঐতিহাসিকভাবে, ১৫শ শতকের শেষের দিকে বা ১৬শ শতকের শুরুতে রাজশাহীর তাহেরপুরের রাজা কংসনারায়ণ কিংবা নদীয়ার রাজা কৃষ্ণচন্দ্র রায় এই পূজাকে বর্তমান রূপ ও জাঁকজমক প্রদান করেন। ১৭৯০ সালের দিকে হুগলির গুপ্তিপাড়ায় প্রথম <strong>বারোয়ারি বা সর্বজনীন</strong> দুর্গাপূজার প্রচলন ঘটে, যা এই উৎসবকে রাজপ্রাসাদ থেকে সাধারণ মানুষের দোরগোড়ায় নিয়ে আসে।
          </p>
        </section>

        {/* Significance Section */}
        <section className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-red-500">
          <h2 className="text-3xl font-bold text-red-700 mb-4">দুর্গাপূজার মাহাত্ম্য</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            দুর্গাপূজা কেবল একটি ধর্মীয় আচার নয়, এটি অশুভ শক্তির বিনাশ এবং শুভ শক্তির বিজয়ের চিরন্তন প্রতীক। মহিষাসুরমর্দিনী দেবী দুর্গা হলেন মাতৃরূপ, শক্তিরূপ এবং শান্তিরূপ। তাঁর দশ হাতে দশ প্রহরণ প্রমাণ করে <strong>নারী শক্তির অসীম ক্ষমতা</strong> এবং অন্যায়ের বিরুদ্ধে প্রতিবাদ।
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            শরতের কাশফুল, শিউলি আর ঢাকের বাদ্যি মানুষের মনে যে আনন্দের সঞ্চার করে, তা সব ভেদাভেদ ভুলিয়ে সমাজে সম্প্রীতি ও মিলনের বার্তা বয়ে আনে। বিজয়া দশমীর কোলাকুলি ও মিষ্টিমুখ সমাজের সকল স্তরের মানুষকে এক সুতোয় গাঁথে।
          </p>
        </section>

        {/* Schedule Table Section */}
        <section className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">২০২৬ সালের পূজার সময়সূচী</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-100 text-red-900 text-lg">
                  <th className="p-4 border-b-2 border-red-200">পূজার দিন</th>
                  <th className="p-4 border-b-2 border-red-200">ইংরেজি তারিখ</th>
                  <th className="p-4 border-b-2 border-red-200">বাংলা তারিখ</th>
                  <th className="p-4 border-b-2 border-red-200">বার</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, index) => (
                  <tr key={index} className="hover:bg-orange-50 transition-colors border-b border-gray-100">
                    <td className="p-4 font-semibold text-red-700">{item.day}</td>
                    <td className="p-4">{item.engDate}</td>
                    <td className="p-4">{item.bangDate}</td>
                    <td className="p-4">{item.weekDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 italic text-center">
            * বি.দ্র: পঞ্জিকার তিথি অনুযায়ী এবং বাংলাদেশ পূজা উদ্‌যাপন পরিষদের সিদ্ধান্ত মোতাবেক সময়ের সামান্য পরিবর্তন হতে পারে।
          </p>
        </section>

      </main>
    </div>
  );
};

export default DurgaPuja2026;