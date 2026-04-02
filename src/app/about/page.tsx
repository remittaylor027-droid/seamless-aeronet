import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Search, PenTool, LayoutTemplate } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans pt-32 pb-24">
      
      {/* Centered Hero Intro */}
      <section className="px-6 mb-16 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-neutral-200 text-sm font-bold text-indigo-600 mb-8 uppercase tracking-widest">
          Who We Are
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-neutral-950 leading-[1.1]">
          We engineer massive <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#4f46e5,#9333ea,#e11d48)]">
            digital growth.
          </span>
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed font-medium">
          A premium software house and digital agency. We fuse world-class web development with aggressive SEO and marketing strategies to annihilate your competition.
        </p>
      </section>

      {/* Massive Bento Grid Layout */}
      <section className="px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[250px]">
          
          {/* Main Hero Image Tile - Takes up huge space */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden shadow-xl group">
            <Image
              src="/software_house_team_1775133613620.png"
              alt="Software House Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Technical Excellence</h2>
              <p className="text-white/80 font-medium">Our powerhouse team of developers, designers, and marketers working in perfect sync.</p>
            </div>
          </div>

          {/* Stat Tile 1 */}
          <div className="md:col-span-1 md:row-span-1 bg-white rounded-[2.5rem] p-8 shadow-xl border border-neutral-200 flex flex-col justify-center items-center text-center">
             <div className="text-6xl font-black text-indigo-600 mb-2">50+</div>
             <div className="text-neutral-500 font-bold uppercase tracking-widest text-sm">Elite Experts</div>
          </div>

          {/* Stat Tile 2 */}
          <div className="md:col-span-1 md:row-span-1 bg-neutral-950 text-white rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
             <div className="relative z-10 text-6xl font-black text-white mb-2">250+</div>
             <div className="relative z-10 text-neutral-300 font-bold uppercase tracking-widest text-sm">Deployments</div>
          </div>

          {/* Service Highlight Tile */}
          <div className="md:col-span-2 md:row-span-1 bg-white rounded-[2.5rem] p-8 shadow-xl border border-neutral-200 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Uncompromising Code</h3>
            </div>
            <p className="text-neutral-600">
              We never use templates. Every application is custom-coded using highly secure Next.js architectures built for immediate speed and limitless scale.
            </p>
          </div>

          {/* Graphic Design Image Tile */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-[2.5rem] overflow-hidden shadow-xl group">
            <Image
              src="/about_sketching_1775133180392.png"
              alt="Graphic Design & UX"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Service Highlight Tile 2 */}
          <div className="md:col-span-1 md:row-span-1 bg-white rounded-[2.5rem] p-8 shadow-xl border border-neutral-200 flex flex-col justify-center text-center items-center">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Dominant SEO</h3>
            <p className="text-neutral-500 text-sm">Owning the algorithms.</p>
          </div>

          {/* Wide Strategy Tile */}
          <div className="md:col-span-2 md:row-span-1 bg-neutral-950 rounded-[2.5rem] p-8 md:p-10 shadow-xl text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/30 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 text-white">Full-Funnel Marketing</h3>
            <p className="text-neutral-400 relative z-10 max-w-md">
              Google Ads, Facebook campaigns, and funnel automation all managed under one roof to maximize your return on ad spend.
            </p>
          </div>

        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mt-32 max-w-5xl mx-auto px-6 text-center">
        <LayoutTemplate className="w-12 h-12 text-neutral-300 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-950 leading-tight mb-8">
          "A beautiful website without technical scale is useless. Perfect code without brilliant marketing is invisible. We do it all."
        </h2>
        <div className="font-bold text-indigo-600 uppercase tracking-widest">
          The Seamless Aeronet Promise
        </div>
      </section>

      {/* CTA Line */}
      <section className="mt-24 max-w-4xl mx-auto px-6 text-center">
        <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 shadow-2xl shadow-indigo-600/30">
          Book a Discovery Call
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

    </div>
  );
}
