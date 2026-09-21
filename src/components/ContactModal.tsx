import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const timer = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsMounted(false), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      handleClose();
    }, 2500);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div 
        className={`relative w-full max-w-md rounded-3xl bg-white border-2 border-purple-200 p-6 sm:p-8 shadow-2xl shadow-purple-900/20 text-left overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-3'
        }`}
      >
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Talk to us
              </h3>
              <p className="text-xs text-slate-600">
                Have questions about your ad accounts or specific marketing goals? Our team is here to help.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Miller"
                  required
                  className="w-full rounded-xl bg-slate-50 border border-purple-200 p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  required
                  className="w-full rounded-xl bg-slate-50 border border-purple-200 p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">What are you trying to achieve?</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the channels you run or the numbers you want to fix..."
                  className="w-full rounded-xl bg-slate-50 border border-purple-200 p-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-600/20 active:scale-[0.99] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
            <p className="text-xs text-slate-600">
              A member of our product team will reply to <span className="text-purple-700 font-semibold">{email}</span> within a few hours.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
