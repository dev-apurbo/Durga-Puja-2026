import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // Durga Puja 2026 (Maha Shashthi) target date
    const targetDate = new Date('October 16, 2026 00:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center justify-center p-3 sm:p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl min-w-[70px] sm:min-w-[110px] transform hover:scale-105 transition-transform duration-300">
            <span className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg tabular-nums">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm font-medium text-orange-100 uppercase tracking-widest mt-1">
                {label}
            </span>
        </div>
    );

    return (
        <div className="w-full py-12 px-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-700 to-orange-600 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
                        পুজো আসতে আর বাকি...
                    </h2>
                    <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
                    <TimeUnit value={timeLeft.days} label="দিন" />
                    <div className="hidden sm:block text-4xl font-bold text-white/50">:</div>
                    <TimeUnit value={timeLeft.hours} label="ঘণ্টা" />
                    <div className="hidden sm:block text-4xl font-bold text-white/50">:</div>
                    <TimeUnit value={timeLeft.minutes} label="মিনিট" />
                    <div className="hidden sm:block text-4xl font-bold text-white/50">:</div>
                    <TimeUnit value={timeLeft.seconds} label="সেকেন্ড" />
                </div>

                {/* Decorative Om or Puja Symbol icon can go here */}
                <div className="absolute -bottom-6 -right-6 text-9xl text-white/10 select-none pointer-events-none font-serif">
                    ॐ
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
