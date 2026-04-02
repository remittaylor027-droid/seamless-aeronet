import Link from "next/link";
import { Wrench, ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] mt-20 bg-neutral-100 text-neutral-900 font-sans flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Graphic Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        
        {/* Animated Icon Container */}
        <div className="w-24 h-24 bg-white border border-neutral-200 rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-indigo-500/5 relative">
          <Wrench className="w-10 h-10 text-indigo-600" />
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-neutral-950 leading-tight">
          Under <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#4f46e5,#9333ea,#e11d48)]">
            Maintenance
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed max-w-lg">
          We are currently updating our project portfolio showcasing our latest Enterprise Web Applications and marketing campaigns. Check back soon!
        </p>
        
        <Link 
          href="/" 
          className="group inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all hover:-translate-x-1 shadow-xl shadow-indigo-600/20"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Return to Home
        </Link>
      </div>
      
    </div>
  );
}
