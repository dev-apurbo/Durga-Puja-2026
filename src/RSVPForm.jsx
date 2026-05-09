import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { X } from 'lucide-react';

function RSVPForm({ onClose }) {
  const [state, handleSubmit] = useForm("xeenrvbk");
  
  if (state.succeeded) {
      return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative text-center border-4 border-[#D4AF37] transform transition-all">
             <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-700">
              <X size={24} />
             </button>
             <div className="text-5xl mb-4">🎉</div>
             <h3 className="text-2xl font-bold text-red-700 mb-2">ধন্যবাদ!</h3>
             <p className="text-gray-600">আপনার RSVP সফলভাবে জমা হয়েছে।</p>
             <button 
                onClick={onClose}
                className="mt-6 bg-red-700 text-white px-6 py-2 rounded-full font-bold hover:bg-red-800 transition-all"
             >
                বন্ধ করুন
             </button>
          </div>
        </div>
      );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border-4 border-[#D4AF37]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-700 transition-colors">
          <X size={24} />
        </button>
        
        <h3 className="text-2xl font-bold text-red-700 mb-6 text-center font-display">RSVP ফর্ম</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
              নাম (Name)
            </label>
            <input
              id="name"
              type="text" 
              name="name"
              className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-orange-50/50"
              placeholder="আপনার নাম লিখুন"
              required
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
              ইমেইল এড্রেস (Email Address)
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-orange-50/50"
              placeholder="আপনার ইমেইল দিন"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              আপনি কি উপস্থিত থাকবেন? (Will you attend?)
            </label>
            <div className="flex flex-wrap gap-4 bg-orange-50/50 p-3 rounded-xl border border-orange-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" value="Yes" className="text-red-600 focus:ring-red-500 w-4 h-4 accent-red-700" required />
                <span className="text-gray-700 font-medium">হ্যাঁ (Yes)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" value="No" className="text-red-600 focus:ring-red-500 w-4 h-4 accent-red-700" required />
                <span className="text-gray-700 font-medium">না (No)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" value="Not confirmed" className="text-red-600 focus:ring-red-500 w-4 h-4 accent-red-700" required />
                <span className="text-gray-700 font-medium">নিশ্চিত নয় (Not Confirm)</span>
              </label>
            </div>
            <ValidationError prefix="Attendance" field="attendance" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
              অতিরিক্ত বার্তা (Additional Message)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-orange-50/50 resize-none"
              placeholder="আপনার সাথে কতজন আসবেন বা অন্য কোনো বার্তা..."

            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-red-700 text-white font-bold py-3 rounded-xl hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6 shadow-md"
          >
            {state.submitting ? 'পাঠানো হচ্ছে...' : 'জমা দিন (Submit)'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RSVPForm;
