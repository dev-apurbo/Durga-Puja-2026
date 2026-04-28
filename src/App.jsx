import React from 'react';
import CountdownTimer from './CountdownTimer';
import PujaSchedule from './PujaSchedule';

const DurgaPuja2026 = () => {

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

  const [showSandhiPuja, setShowSandhiPuja] = React.useState(false);
  const [showDevoteeDuties, setShowDevoteeDuties] = React.useState(false);

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800 pb-12">
      {/* Hero Section */}
      <header className="bg-red-700 text-white py-16 text-center shadow-lg px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">শারদীয় দুর্গোৎসব ২০২৬</h1>
        <p className="text-xl md:text-2xl font-light">ইতিহাস, মাহাত্ম্য এবং পূর্ণাঙ্গ সময়সূচী</p>
      </header>

      <CountdownTimer />

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
            <p className="text-lg leading-relaxed text-gray-700 text-justify mb-6">
              শরতের কাশফুল, শিউলি আর ঢাকের বাদ্যি মানুষের মনে যে আনন্দের সঞ্চার করে, তা সব ভেদাভেদ ভুলিয়ে সমাজে সম্প্রীতি ও মিলনের বার্তা বয়ে আনে। বিজয়া দশমীর কোলাকুলি ও মিষ্টিমুখ সমাজের সকল স্তরের মানুষকে এক সুতোয় গাঁথে।
            </p>
            <button
              onClick={() => setShowSandhiPuja(!showSandhiPuja)}
              className="bg-red-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition-colors shadow-md flex items-center gap-2"
            >
              {showSandhiPuja ? 'বন্ধ করুন' : 'সন্ধিপূজার মাহাত্ম্য জানুন'}
              <span>{showSandhiPuja ? '↑' : '↓'}</span>
            </button>
          </section>
        </div>

        {/* Sandhi Puja Section (Collapsible) */}
        {showSandhiPuja && (
          <section className="bg-orange-100 p-8 rounded-2xl shadow-md border-l-8 border-red-700 animate-fadeIn">
            <h3 className="text-2xl font-bold text-red-800 mb-6 border-b border-orange-200 pb-2">সন্ধিপূজার মাহাত্ম্য</h3>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed text-justify">
              দুর্গাপূজায় <strong>সন্ধিপূজা</strong> বা সন্ধিক্ষণের মাহাত্ম্য অপরিসীম। এটি পুরো দুর্গাপূজার সবচেয়ে গুরুত্বপূর্ণ, পবিত্র এবং শক্তিপূর্ণ মুহূর্ত হিসেবে বিবেচিত হয়। এর প্রধান তাৎপর্যগুলো নিচে তুলে ধরা হলো:
            </p>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-700 font-bold">•</span>
                <p><strong>পূজার সময়কাল (সন্ধিক্ষণ):</strong> মহাষ্টমী তিথির শেষ ২৪ মিনিট এবং মহানবমী তিথির প্রথম ২৪ মিনিট—সব মিলিয়ে মোট ৪৮ মিনিট সময়কে ‘সন্ধিক্ষণ’ বলা হয়। অষ্টমীর সমাপ্তি এবং নবমীর সূচনার ঠিক এই সংযোগস্থলেই সন্ধিপূজা অনুষ্ঠিত হয়।</p>
              </li>
              <li className="flex gap-3">
                <span className="text-red-700 font-bold">•</span>
                <p><strong>চামুণ্ডা রূপে আরাধনা:</strong> পৌরাণিক কাহিনী বা মার্কণ্ডেয় পুরাণ অনুসারে, ঠিক এই সন্ধিক্ষণেই দেবী দুর্গার ত্রিনয়ন থেকে তাঁর সবচেয়ে ভয়ংকর এবং উগ্র রূপ <strong>'চামুণ্ডা'</strong>-এর আবির্ভাব ঘটেছিল। এই রূপেই তিনি চণ্ড ও মুণ্ড নামক দুই প্রবল পরাক্রমশালী অসুরকে বধ করেন। তাই সন্ধিপূজায় দেবীকে দুর্গা নয়, বরং চামুণ্ডা রূপে আরাধনা করা হয়।</p>
              </li>
              <li className="flex gap-3">
                <span className="text-red-700 font-bold">•</span>
                <p><strong>১০৮ প্রদীপ ও ১০৮ পদ্ম:</strong> সন্ধিপূজার অন্যতম প্রধান অনুষঙ্গ হলো ১০৮টি মাটির প্রদীপ প্রজ্জ্বলন এবং দেবীর চরণে ১০৮টি তাজা পদ্মফুল নিবেদন। প্রদীপের এই আলো অজ্ঞতা ও অন্ধকারের বিনাশ ঘটিয়ে জ্ঞানের আলো ছড়িয়ে দেওয়ার প্রতীক।</p>
              </li>
              <li className="flex gap-3">
                <span className="text-red-700 font-bold">•</span>
                <p><strong>অশুভ শক্তির বিনাশ:</strong> এই ক্ষণটি চরম অশুভ শক্তির বিরুদ্ধে পরম শুভ শক্তির চূড়ান্ত বিজয়ের প্রতীক। হিন্দু ধর্মাবলম্বীরা বিশ্বাস করেন, এই সময়ে দেবী অত্যন্ত জাগ্রত অবস্থায় থাকেন এবং একনিষ্ঠ ভক্তিতে প্রার্থনা করলে তিনি ভক্তের কল্যাণ করেন।</p>
              </li>
              <li className="flex gap-3">
                <span className="text-red-700 font-bold">•</span>
                <p><strong>বলিদান প্রথা:</strong> দেবী চামুণ্ডাকে সন্তুষ্ট করতে প্রাচীনকাল থেকেই সন্ধিপূজার সময় বলিদানের প্রথা প্রচলিত রয়েছে। তবে বর্তমানে বেশিরভাগ মণ্ডপেই পশুবলির বদলে চালকুমড়া, শসা বা কলা বলির মাধ্যমে এই প্রথাটি প্রতীকীভাবে পালন করা হয়।</p>
              </li>
            </ul>
            <p className="mt-8 text-lg font-semibold text-red-800 text-center italic bg-white/50 py-4 rounded-xl">
              সংক্ষেপে, সন্ধিপূজা হলো দেবী দুর্গার শক্তির সর্বোচ্চ বিকাশ এবং অশুভ শক্তির চূড়ান্ত পতনের এক আধ্যাত্মিক উদযাপন।
            </p>
          </section>
        )}

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

        {/* Devotee Duties Section (Toggleable) */}
        <section className="text-center">
          <button
            onClick={() => setShowDevoteeDuties(!showDevoteeDuties)}
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg flex items-center gap-2 mx-auto text-lg"
          >
            🙏 ভক্তদের করণীয় ও আধ্যাত্মিক বিধি
            <span>{showDevoteeDuties ? '↑' : '↓'}</span>
          </button>
        </section>

        {showDevoteeDuties && (
          <section className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-600 animate-fadeIn">
            <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">ভক্তদের প্রধান করণীয়</h2>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
              দুর্গাপূজা শুধু একটি উৎসব নয়, এটি ভক্তদের জন্য আত্মশুদ্ধি এবং দেবী শক্তির আরাধনার এক বিশেষ সময়। এই সময়ে ভক্তদের বেশ কিছু আধ্যাত্মিক, ধর্মীয় এবং সামাজিক করণীয় থাকে।
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "পুষ্পাঞ্জলি প্রদান", desc: "পূজার অন্যতম প্রধান অঙ্গ হলো দেবীকে পুষ্পাঞ্জলি নিবেদন করা। বিশেষ করে মহাষ্টমীর দিন সকালে স্নান সেরে, শুদ্ধ বস্ত্রে (বা নতুন পোশাকে) দেবীর চরণে অঞ্জলি দেওয়া হয়। অঞ্জলি দেওয়ার আগে পর্যন্ত ভক্তরা সাধারণত উপবাস পালন করেন।" },
                { title: "শারীরিক ও মানসিক শুদ্ধতা", desc: "পূজার দিনগুলোতে কায়মনোবাক্যে শুদ্ধতা বজায় রাখা অত্যন্ত জরুরি। মনে কোনো হিংসা, বিদ্বেষ বা নেতিবাচক চিন্তা না রেখে ভক্তিভাব বজায় রাখতে হয়।" },
                { title: "সাত্ত্বিক আহার গ্রহণ", desc: "পূজার দিনগুলোতে (বিশেষ করে সপ্তমী, অষ্টমী ও নবমীতে) অনেক ভক্তই আমিষ খাবার বর্জন করে নিরামিষ বা সাত্ত্বিক আহার গ্রহণ করেন। অনেকে এ সময় পেঁয়াজ ও রসুনও পরিহার করেন।" },
                { title: "আরতি ও সন্ধিপূজা দর্শন", desc: "প্রতিদিন সন্ধ্যায় মণ্ডপে দেবীর আরতি দর্শন করা এবং ধুনুচি নাচে অংশগ্রহণ করা পূজার একটি আনন্দময় অংশ। এছাড়া অষ্টমীর ও নবমীর সন্ধিক্ষণে পবিত্র 'সন্ধিপূজা' দর্শন করা অত্যন্ত পুণ্যজনক বলে মনে করা হয়।" },
                { title: "চণ্ডীপাঠ ও জপ", desc: "পূজার সময় 'শ্রীশ্রীচণ্ডী' পাঠ করা বা শোনা অত্যন্ত ফলদায়ক। ভক্তরা এই সময় দুর্গা মন্ত্র (যেমন: 'ওঁ দুং দুর্গায়ৈ নমঃ' বা 'সর্বমঙ্গল মঙ্গল্যে...') জপ করে দেবীর কৃপা প্রার্থনা করেন।" },
                { title: "কুমারী পূজা দর্শন", desc: "অষ্টমীর দিন কুমারী পূজার মাধ্যমে ছোট কন্যা শিশুর মধ্যে দেবীর রূপ আরাধনা করা হয়। এটি দর্শন করা এবং নারীর প্রতি সর্বোচ্চ শ্রদ্ধা জ্ঞাপন করা ভক্তের একটি বিশেষ কর্তব্য।" },
                { title: "দশমীর আচার ও সিঁদুর খেলা", desc: "বিজয়া দশমীর দিন দেবী প্রতিমা বিসর্জনের আগে বিবাহিত নারীরা দেবীকে সিঁদুর পরিয়ে মিষ্টি মুখ করান এবং একে অপরের সাথে সিঁদুর খেলায় মেতে ওঠেন।" },
                { title: "সম্প্রীতি ও শুভেচ্ছা বিনিময়", desc: "বিসর্জনের পর শুরু হয় বিজয়ার শুভেচ্ছা বিনিময়। ছোটরা বড়দের প্রণাম করে আশীর্বাদ নেন এবং সমবয়সীরা কোলাকুলি করে 'শুভ বিজয়া' জানান। সকল বিভেদ ভুলে সবার সাথে সম্প্রীতি গড়ে তোলাই এই উৎসবের মূল বার্তা।" }
              ].map((duty, idx) => (
                <div key={idx} className="border-l-4 border-orange-200 pl-4 py-2 hover:border-red-600 transition-colors">
                  <h4 className="text-xl font-bold text-red-700 mb-2">{duty.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-justify">{duty.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xl font-bold text-red-800 text-center italic bg-orange-50 py-6 rounded-2xl border-2 border-dashed border-orange-200">
              সবশেষে, পূজায় জাঁকজমক বা আড়ম্বরের চেয়েও বেশি গুরুত্বপূর্ণ হলো <span className="text-red-600 underline">আন্তরিক ভক্তি ও নিষ্ঠা</span>। শুদ্ধ মনে প্রার্থনা করাই একজন ভক্তের সবচেয়ে বড় করণীয়।
            </p>
          </section>
        )}

        {/* Schedule Section */}
        <PujaSchedule />

      </main>
    </div>
  );
};

export default DurgaPuja2026;