import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Web Engineering",
      description: "Custom, scalable, and high-performance websites built with cutting-edge technologies like modern React and Next.js. We ensure your platforms never compromise on speed.",
      image: "/web_dev_code_1775132322864.png",
      reverse: false
    },
    {
      title: "Search & Digital Marketing",
      description: "Dominate search engine rankings and drive organic traffic with our data-driven SEO strategies and omnichannel ads. Turn clicks into lasting customers.",
      image: "/digital_marketing_chart_1775132338211.png",
      reverse: true
    }
  ];

  const features = [
    "Dedicated Expert Teams",
    "Agile Development Process",
    "Performance Optimization",
    "24/7 Priority Support",
    "Data-Driven Decisions",
    "Transparent Reporting"
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans pt-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Empowering Connectivity
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-neutral-950">
                Building Digital Growth for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Visionary Brands</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto md:mx-0">
                Seamless Aeronet delivers exceptional web development, strategic SEO, and comprehensive digital marketing to scale your business effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-indigo-600/20">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/projects" className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50 rounded-full font-semibold transition-colors flex items-center justify-center shadow-sm">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-300/50">
                <Image
                  src="/agency_hero_team_1775132305654.png"
                  alt="Seamless Aeronet Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-neutral-950">Core Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We leverage modern technology and strategy to put your brand directly in front of the right audience.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col gap-10 items-center ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-950">{service.title}</h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                        <span className="font-medium text-neutral-700 text-sm md:text-base">Premium Delivery</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="text-indigo-600 font-semibold flex items-center gap-2 hover:text-indigo-700 group inline-flex">
                    Learn more about {service.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-indigo-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why partner with Seamless Aeronet?
              </h2>
              <p className="text-indigo-200 mb-10 text-lg">
                We combine deep technical expertise with beautiful aesthetics and strategy. Partnering with us means you get a dedicated team driven by your revenue and metrics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-indigo-50">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                <div className="text-indigo-200 font-medium">Client Success</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
                <div className="text-indigo-200 font-medium">Projects Shipped</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
                <div className="text-indigo-200 font-medium">Years Active</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-indigo-200 font-medium">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-950 mb-6">
            Ready to upgrade your digital presence?
          </h2>
          <p className="text-lg text-neutral-600 mb-10">
            Join the forward-thinking brands who trust Seamless Aeronet to build their technical foundation.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2 shadow-xl shadow-indigo-600/20">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
