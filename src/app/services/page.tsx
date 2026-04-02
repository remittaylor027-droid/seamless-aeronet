import { 
  Code2, 
  Megaphone, 
  PenTool, 
  LineChart, 
  Search, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Engineering & Development",
      description: "We build blazing fast, highly scalable web applications that serve as the technical engine for your business growth. From complex SaaS platforms to premium corporate websites, our code is robust, secure, and future-proof.",
      icon: <Code2 className="w-6 h-6 text-indigo-600" />,
      image: "/web_dev_code_1775132322864.png",
      features: ["Custom React/Next.js Apps", "API Integration", "Database Architecture", "Performance Audits"]
    },
    {
      title: "Advanced SEO Optimization",
      description: "Stop renting traffic and start owning it. Our technical and content-driven SEO strategies push your brand to the top of Google, capturing high-intent organic search queries that convert into revenue.",
      icon: <Search className="w-6 h-6 text-purple-600" />,
      image: "/digital_marketing_chart_1775132338211.png",
      features: ["Technical SEO", "Keyword Strategy", "Content Optimization", "Link Building Contexts"]
    },
    {
      title: "Visual Identity & Graphic Design",
      description: "First impressions are everything. We design breathtaking user interfaces, marketing collateral, and brand identities that perfectly communicate your value and command instant trust.",
      icon: <PenTool className="w-6 h-6 text-pink-600" />,
      image: "/graphic_design_mockup_1775132929280.png",
      features: ["UI/UX Design", "Brand Guidelines", "Marketing Assets", "Interactive Prototypes"]
    },
    {
      title: "Google Ads & Paid Search",
      description: "Turn your ad spend into an aggressive revenue multiplier. We meticulously craft and manage Google Ads campaigns that target the exact people actively looking for what you sell right now.",
      icon: <LineChart className="w-6 h-6 text-rose-600" />,
      image: "/google_ads_dashboard_1775132945064.png",
      features: ["Search Campaigns", "Retargeting", "Conversion Tracking", "A/B Copy Testing"]
    },
    {
      title: "Comprehensive Digital Marketing",
      description: "Omnichannel dominance. We orchestrate a unified marketing presence across social media and email to engage your audience constantly and drive extreme brand loyalty.",
      icon: <Megaphone className="w-6 h-6 text-orange-600" />,
      image: "/social_media_marketing_1775132962357.png",
      features: ["Social Media Strategy", "Email Campaigns", "Funnel Automation", "Growth Analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans pt-32 pb-24">
      
      {/* Services Header */}
      <section className="px-6 mb-24 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 mb-6">
            Our Capabilities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-neutral-950">
            Solutions engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">absolute market dominance.</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl">
            We don't offer generic packages. We provide specialized, high-impact services designed specifically to scale visionary brands past their competition.
          </p>
        </div>
        <div className="flex-1 w-full bg-white p-8 rounded-[2rem] shadow-xl border border-neutral-100 hidden md:flex items-center justify-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[80px] rounded-full"></div>
           <p className="text-2xl font-bold text-neutral-900 relative z-10 leading-snug">
             "They don't just build websites, they engineer entire revenue pipelines."
           </p>
        </div>
      </section>

      {/* Services Detailed List with Images */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-20">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-neutral-200 group-hover:shadow-indigo-600/20 transition-all duration-700 pointer-events-none">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-neutral-900/10 rounded-[2rem]"></div>
              </div>
              
              {/* Content Side */}
              <div className="flex-1 w-full bg-white p-10 md:p-12 rounded-[2rem] shadow-lg shadow-neutral-200/50 border border-neutral-100 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 p-16 bg-neutral-50 rounded-full blur-2xl z-0 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-8 shadow-sm">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-950 mb-4">{service.title}</h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-neutral-100">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        <span className="font-medium text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="/contact" className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 group inline-flex shadow-md shadow-indigo-600/10 transition-colors">
                      Request {service.title}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mt-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-950 mb-6">
          Ready to deploy these solutions?
        </h2>
        <p className="text-lg text-neutral-600 mb-10">
          Book a strategy session with our technical directors. Let's map out exactly what your brand needs to scale.
        </p>
        <Link href="/contact" className="px-10 py-5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/20 active:scale-95">
          Start Your Project Today
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

    </div>
  );
}
