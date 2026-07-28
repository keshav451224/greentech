import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import heroImg from "@/assets/hero-wall.jpg";
import outdoorImg from "@/assets/outdoor-wall.jpg";
import indoorImg from "@/assets/indoor-wall.jpg";
import grassImg from "@/assets/artificial-grass.jpg";
import pvcImg from "@/assets/pvc-planter.jpg";
import terraceImg from "@/assets/terrace-garden.jpg";
import bioImg from "@/assets/bio-panel.jpg";
import greenImg from "@/assets/green-wall.jpg";
import logo from "@/assets/Screenshot 2026-07-17 141243.svg";
import footerLogo from "@/assets/logo.png";
import PremiumCoverflow from "@/components/PremiumCoverflow";

export const Route = createFileRoute("/images")({
  component: ImagesPage,
});

const coverflowImages = [
  {
    id: 1,
    src: heroImg,
    title: "Exterior Green Walls",
    description: "Large-format facade green walls with automated irrigation & drainage systems for stunning outdoor spaces"
  },
  {
    id: 2,
    src: outdoorImg,
    title: "Outdoor Wall Gardens",
    description: "Bio-felt outdoor walls with live plants, weather-resistant frames and professional drip irrigation"
  },
  {
    id: 3,
    src: indoorImg,
    title: "Indoor Wall Garden",
    description: "Indoor living green walls with low-light plants and integrated LED grow lighting technology"
  },
  {
    id: 4,
    src: greenImg,
    title: "Premium Bio Walls",
    description: "End-to-end bio wall design, installation and annual maintenance for offices & premium cafes"
  },
  {
    id: 5,
    src: grassImg,
    title: "Artificial Grass Wall",
    description: "Zero-maintenance UV-stable artificial grass walls with optional flower accents for modern aesthetics"
  },
  {
    id: 6,
    src: bioImg,
    title: "Bio Wall Panel Set",
    description: "Pre-planted modular bio panels with plug-and-play installation, ready in hours"
  },
  {
    id: 7,
    src: pvcImg,
    title: "PVC Planter Garden",
    description: "Modular PVC pots on MS frame — lightweight, durable and easy to install and reconfigure"
  },
  {
    id: 8,
    src: terraceImg,
    title: "Terrace Garden",
    description: "Turnkey terrace garden design with waterproofing, premium planters, plants and ambient lighting"
  },
];

function ImagesPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <style>{`
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-100px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounceIn { 0% { opacity: 0; transform: scale(0.3); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 10px rgba(45, 90, 45, 0.3); } 50% { box-shadow: 0 0 30px rgba(76, 175, 80, 0.6); } }

        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        .animate-bounce-in { animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        .animate-pulse-glow { animation: pulse 2s infinite, glow 3s ease-in-out infinite; }

        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.15); }
        .hover-scale { transition: all 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }
      `}</style>

      {/* ==================== NAVBAR ==================== */}
      <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b-2 border-emerald-200 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3 group hover-lift">
              <div className="p-1.5 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 border-2 border-emerald-200 group-hover:border-emerald-400 transition-all group-hover:scale-110">
                <img src={logo} alt="GreenTech" className="h-10 w-10 object-contain rounded-full" width={40} height={40} />
              </div>
              <div>
                <div className="font-black text-lg text-emerald-700">GreenTech</div>
                <div className="text-xs text-emerald-600 font-semibold">Solution</div>
              </div>
            </a>

            <nav className="hidden md:flex gap-8">
              {[{ name: "Home", href: "/" }, { name: "Products", href: "/#products" }, { name: "Gallery", href: "/images" }, { name: "Contact", href: "/#contact" }].map((item) => (
                <a key={item.name} href={item.href} className={`text-sm font-semibold transition-all ${item.name === "Gallery" ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"}`}>
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all"></span>
                </a>
              ))}
            </nav>

            <a href="/#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm hover:shadow-lg hover:scale-105 transition-all hover-lift">
              Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 text-sm font-bold mb-4 border-2 border-emerald-200 animate-bounce-in cursor-pointer hover:shadow-lg hover:scale-110 transition-all animate-pulse-glow">
              ✨ OUR GALLERY ✨
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 animate-slide-in-left">Featured Image Showcase</h1>
            <p className="text-lg md:text-xl text-gray-600 animate-slide-in-up">Experience our latest green wall projects through stunning photography.</p>
          </div>
          <div className="animate-slide-in-up">
            <PremiumCoverflow 
              images={coverflowImages}
              autoplayDelay={3000}
              height="600px"
              onSlideChange={(index) => console.log('Active slide:', index)}
            />
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[{ number: "500+", label: "Projects Completed" }, { number: "10+", label: "Years Experience" }, { number: "8+", label: "Image Collections" }, { number: "4.9★", label: "Client Rated" }].map((stat, i) => (
              <div key={i} className="group hover-scale hover-lift p-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/20 cursor-pointer" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-125 transition-transform">{stat.number}</div>
                <div className="text-white/90 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 bg-transparent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-emerald-200 p-12 text-center animate-slide-in-up hover:border-emerald-400 hover:shadow-2xl transition-all bg-gradient-to-br from-emerald-50/20 to-transparent">
            <h2 className="text-4xl md:text-5xl font-black text-emerald-900 mb-6 animate-slide-in-left">Ready to Create Your Own Green Wall?</h2>
            <p className="text-lg text-emerald-800 mb-8">Let us design and install a stunning green wall solution for your space.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold hover:shadow-xl hover:scale-105 transition-all hover-lift">
                Get Free Consultation →
              </a>
              <a href="/#products" className="px-8 py-4 rounded-lg border-2 border-emerald-600 text-emerald-600 font-bold hover:bg-emerald-50 hover:scale-105 transition-all hover-lift">
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t-2 border-emerald-200 bg-transparent py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div><div className="mb-4 group hover:scale-110 transition-all"><img src={footerLogo} alt="GTS Logo" className="mb-3 h-28 w-auto object-contain" /><span className="font-black text-lg text-emerald-700">GreenTech</span></div><p className="text-gray-600 text-sm">Transforming spaces with premium green wall solutions since 2015.</p></div>
            <div><h4 className="font-bold text-gray-900 mb-4">Quick Links</h4><div className="space-y-2 text-sm text-gray-600">{["Home", "Products", "Gallery", "Contact"].map((link, i) => (<a key={i} href="#" className="block hover:text-emerald-600 hover:translate-x-2 transition-all">{link}</a>))}</div></div>
            <div><h4 className="font-bold text-gray-900 mb-4">Services</h4><div className="space-y-2 text-sm text-gray-600">{["Wall Design", "Installation", "Maintenance", "Support"].map((service, i) => (<div key={i} className="hover:text-emerald-600 hover:translate-x-2 transition-all cursor-pointer">{service}</div>))}</div></div>
            <div><h4 className="font-bold text-gray-900 mb-4">Newsletter</h4><p className="text-gray-600 text-sm mb-3">Get latest green wall ideas</p><input type="email" placeholder="your@email.com" className="w-full rounded-lg bg-white border-2 border-emerald-200 px-3 py-2 text-gray-900 text-sm focus:outline-none focus:border-emerald-600 focus:shadow-lg transition-all" /></div>
          </div>
          <div className="border-t-2 border-emerald-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div>© 2025 GreenTech Solution. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">{["Privacy", "Terms", "Sitemap"].map((link, i) => (<a key={i} href="#" className="hover:text-emerald-600 hover:font-semibold transition-all">{link}</a>))}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ImagesPage;
