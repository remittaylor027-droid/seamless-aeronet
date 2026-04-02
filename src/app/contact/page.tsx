"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API endpoint
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans pt-32 pb-24">
      
      {/* Header Section */}
      <section className="px-6 mb-16 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-neutral-200 text-sm font-bold text-indigo-600 mb-8 uppercase tracking-widest">
          Get In Touch
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-neutral-950 leading-[1.1]">
          Let's build something <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#4f46e5,#9333ea,#e11d48)]">
            extraordinary.
          </span>
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed font-medium">
          Ready to aggressively scale your business? Drop us a line and our technical directors will get back to you within 24 hours.
        </p>
      </section>

      <section className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Contact Information Side */}
          <div className="lg:col-span-2 bg-neutral-950 text-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/3 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
              <p className="text-neutral-400 mb-12">
                Whether you have a massive enterprise project or just want to pick our brains, we're here to help.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400 font-medium mb-1">Email Us</div>
                    <div className="text-lg font-medium">hello@seamlessaeronet.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400 font-medium mb-1">Call Us</div>
                    <div className="text-lg font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-pink-300" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400 font-medium mb-1">Headquarters</div>
                    <div className="text-lg font-medium leading-relaxed">
                      100 Innovation Drive<br />
                      Suite 500<br />
                      San Francisco, CA 94103
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <div className="text-sm text-neutral-400 font-medium mb-4">Follow our journey</div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                  X
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                  in
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                  ig
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="lg:col-span-3 bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-neutral-200">
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                <p className="text-neutral-600 max-w-sm">
                  Thank you for reaching out. One of our technical directors will be in contact with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-neutral-700">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="John" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-neutral-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-neutral-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="john@company.com" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-bold text-neutral-700">What do you need help with?</label>
                  <select 
                    id="service"
                    className="px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option>Web Engineering & Development</option>
                    <option>SEO Optimization</option>
                    <option>Visual Identity & UX</option>
                    <option>Google Ads & Paid Search</option>
                    <option>Full-Funnel Digital Marketing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-neutral-700">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project goals..." 
                  />
                </div>

                <button 
                  type="submit" 
                  className="mt-4 w-full px-8 py-5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/20 group"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
          
        </div>
      </section>

    </div>
  );
}
