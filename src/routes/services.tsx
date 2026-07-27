import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import outdoorImg from "@/assets/outdoor-wall.jpg";
import indoorImg from "@/assets/indoor-wall.jpg";
import heroImg from "@/assets/hero-wall.jpg";
import grassImg from "@/assets/artificial-grass.jpg";
import bioImg from "@/assets/bio-panel.jpg";
import logo from "@/assets/gts-logo.svg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

// Misting Systems Services Data
const mistingSystems = {
  "Misting Systems": [
    {
      id: 1,
      title: "High Pressure Misting System",
      price: "₹1,00,000",
      unit: "unit",
      img: outdoorImg,
      operating_pressure: "High Pressure",
      coverage_area: "Up to 500 sq ft",
      category: "Misting Systems"
    },
    {
      id: 2,
      title: "Outdoor Misting System",
      price: "₹70,000",
      unit: "unit",
      img: outdoorImg,
      operating_pressure: "Medium Pressure",
      coverage_area: "500-1500 sq ft",
      category: "Misting Systems"
    },
    {
      id: 3,
      title: "Low Pressure Misting System",
      price: "₹50,000",
      unit: "unit",
      img: indoorImg,
      operating_pressure: "Low Pressure",
      coverage_area: "Up to 500 sq ft",
      category: "Misting Systems"
    },
    {
      id: 4,
      title: "Industrial Misting System",
      price: "₹1,00,000",
      unit: "Piece",
      img: heroImg,
      operating_pressure: "High Pressure",
      coverage_area: "Up to 500 sq ft",
      category: "Misting Systems"
    },
    {
      id: 5,
      title: "Residential Misting System",
      price: "₹80,000",
      unit: "Piece",
      img: grassImg,
      operating_pressure: "High Pressure",
      coverage_area: "Up to 500 sq ft",
      category: "Misting Systems"
    }
  ],
  "High Pressure Fogging System": [
    {
      id: 6,
      title: "80LPH High Pressure Fogging System",
      price: "₹2,00,000",
      unit: "Piece",
      img: outdoorImg,
      capacity: "80LPH",
      material: "SS",
      pressure: "High Pressure",
      category: "High Pressure Fogging System"
    },
    {
      id: 7,
      title: "10LPH High Pressure Fogging System",
      price: "₹46,000",
      unit: "Piece",
      img: indoorImg,
      capacity: "10 LPH",
      material: "SS",
      pressure: "High Pressure",
      category: "High Pressure Fogging System"
    },
    {
      id: 8,
      title: "5LPH High Pressure Fogging System",
      price: "₹36,000",
      unit: "Piece",
      img: heroImg,
      capacity: "5 LPH",
      material: "SS",
      pressure: "High Pressure",
      category: "High Pressure Fogging System"
    },
    {
      id: 9,
      title: "55LPH High Pressure Fogging System",
      price: "₹1,50,000",
      unit: "Piece",
      img: grassImg,
      capacity: "55LPH",
      material: "SS",
      pressure: "High Pressure",
      category: "High Pressure Fogging System"
    },
    {
      id: 10,
      title: "15LPH High Pressure Fogging System",
      price: "₹55,000",
      unit: "Piece",
      img: bioImg,
      capacity: "15 LPH",
      material: "SS",
      pressure: "High Pressure",
      category: "High Pressure Fogging System"
    }
  ],
  "Dust Suppression System": [
    {
      id: 11,
      title: "8 HP Dust Suppression System",
      price: "₹75,000",
      unit: "Piece",
      img: outdoorImg,
      power_consumption: "8 HP",
      material: "Mild Steel",
      color: "Gray",
      category: "Dust Suppression System"
    },
    {
      id: 12,
      title: "6 HP Dust Suppression System",
      price: "₹55,000",
      unit: "Piece",
      img: indoorImg,
      power_consumption: "6 HP",
      material: "Mild Steel",
      color: "Gray",
      category: "Dust Suppression System"
    },
    {
      id: 13,
      title: "5 HP Dust Suppression System",
      price: "₹45,000",
      unit: "Piece",
      img: heroImg,
      power_consumption: "5 HP",
      material: "Mild Steel",
      color: "Gray",
      category: "Dust Suppression System"
    },
    {
      id: 14,
      title: "4 HP Dust Suppression System",
      price: "₹30,000",
      unit: "Piece",
      img: grassImg,
      power_consumption: "4 HP",
      material: "Mild Steel",
      color: "Gray",
      category: "Dust Suppression System"
    },
    {
      id: 15,
      title: "10 HP Dust Suppression System",
      price: "₹86,500",
      unit: "Piece",
      img: bioImg,
      power_consumption: "10 HP",
      material: "Stainless Steel",
      color: "Silver",
      category: "Dust Suppression System"
    }
  ],
  "Mist Cooling System": [
    {
      id: 16,
      title: "Indoor Mist Cooling System",
      price: "₹75,000",
      unit: "Piece",
      img: outdoorImg,
      operating_pressure: "High Pressure",
      pressure_type: "High Pressure",
      coverage_area: "500-1500 sq",
      category: "Mist Cooling System"
    },
    {
      id: 17,
      title: "Garden Mist Cooling System",
      price: "₹75,000",
      unit: "Piece",
      img: indoorImg,
      operating_pressure: "High Pressure",
      pressure_type: "High Pressure",
      coverage_area: "500-1500 sq",
      category: "Mist Cooling System"
    },
    {
      id: 18,
      title: "Yard Mist Cooling System",
      price: "₹85,000",
      unit: "Piece",
      img: heroImg,
      operating_pressure: "High Pressure",
      pressure_type: "High Pressure",
      coverage_area: "500-1500 sq",
      category: "Mist Cooling System"
    },
    {
      id: 19,
      title: "Agricultural Mist Cooling System",
      price: "₹35,000",
      unit: "Piece",
      img: grassImg,
      operating_pressure: "High Pressure",
      pressure_type: "High Pressure",
      coverage_area: "500-1500 sq",
      category: "Mist Cooling System"
    },
    {
      id: 20,
      title: "Roof Mist Cooling System",
      price: "₹95,000",
      unit: "Piece",
      img: bioImg,
      cooling_method: "Misting",
      pressure_level: "Medium Pressure",
      mounting_type: "Wall Mounted",
      category: "Mist Cooling System"
    }
  ],
  "Outdoor Cooling System": [
    {
      id: 21,
      title: "Outdoor Water Mist System",
      price: "₹1,25,000",
      unit: "Piece",
      img: outdoorImg,
      system_pressure: "High Pressure",
      coverage_area: "500-1500 sq",
      category: "Outdoor Cooling System"
    },
    {
      id: 22,
      title: "Outdoor Patio Cooling System",
      price: "₹65,000",
      unit: "Piece",
      img: indoorImg,
      system_pressure: "Medium Pressure",
      cooling_type: "Evaporative",
      category: "Outdoor Cooling System"
    },
    {
      id: 23,
      title: "Terrace Cooling System",
      price: "₹55,000",
      unit: "Piece",
      img: heroImg,
      system_type: "Misting",
      coverage_area: "500-1000 sq ft",
      category: "Outdoor Cooling System"
    },
    {
      id: 24,
      title: "Garden Area Cooling System",
      price: "₹45,000",
      unit: "Piece",
      img: grassImg,
      cooling_capacity: "5 Ton",
      installation_type: "Free Standing",
      category: "Outdoor Cooling System"
    }
  ]
};

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("Misting Systems");

  const categoryIcons: { [key: string]: string } = {
    "Misting Systems": "💧",
    "High Pressure Fogging System": "🌫️",
    "Dust Suppression System": "💨",
    "Mist Cooling System": "❄️",
    "Outdoor Cooling System": "☀️"
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50'>
      {/* ==================== NAVBAR ==================== */}
      <header className='sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between py-3'>
            {/* Left Section */}
            <a href='/' className='flex items-center gap-3 group'>
              <div className='p-2 rounded-full bg-gradient-to-br from-[#D8F3DC] to-[#E8F8F1] border-2 border-[#C8E6C8]'>
                <img
                  src={logo}
                  alt='GreenTech Solutions'
                  className='h-8 w-8 object-contain rounded-full'
                  width={32}
                  height={32}
                />
              </div>
              <span className='font-black text-lg text-[#7FB77E]'>GreenTech</span>
            </a>

            {/* Right Section */}
            <div className='flex items-center gap-3'>
              <a
                href='tel:08043880537'
                className='flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded hover:border-[#7FB77E] transition-colors group'
              >
                <span className='text-[#7FB77E] font-bold text-sm'>Call 08043880537</span>
              </a>
              <a
                href='/#contact'
                className='flex items-center gap-2 px-6 py-2.5 bg-[#7FB77E] hover:bg-[#6B8E23] text-white rounded font-bold text-sm transition-colors'
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='flex items-center justify-center gap-8 py-3 border-t border-gray-200'>
            <a href='/' className='text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors'>Home</a>
            <a href='/#products' className='text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors'>Products</a>
            <a href='/services' className='text-sm font-bold text-[#7FB77E]'>Services</a>
            <a href='/#gallery' className='text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors'>Gallery</a>
            <a href='/#contact' className='text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors'>Contact</a>
          </div>
        </div>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className='relative py-16 md:py-24 overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
            <div className='inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#D8F3DC] to-[#E8F8F1] text-[#7FB77E] text-sm font-bold mb-4 border-2 border-[#C8E6C8]'>
              ✨ OUR SERVICES ✨
            </div>
            <h1 className='text-5xl md:text-7xl font-black text-gray-900 mb-6'>Misting & Cooling Systems</h1>
            <p className='text-lg md:text-xl text-gray-600'>Professional misting, fogging, cooling, and dust suppression solutions for every need.</p>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORY FILTER ==================== */}
      <section className='py-12 bg-white border-b border-gray-200'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
            {Object.keys(mistingSystems).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-[#D8F3DC] border-2 border-[#7FB77E] scale-105'
                    : 'bg-gray-100 border-2 border-gray-300 hover:border-[#A8CFA8]'
                }`}
              >
                <span className='text-2xl'>{categoryIcons[category]}</span>
                <span className={`text-xs md:text-sm font-bold text-center transition-colors ${
                  activeCategory === category ? 'text-[#7FB77E]' : 'text-gray-700'
                }`}>
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS GRID ==================== */}
      <section className='py-20 bg-gray-50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-12'>
            {activeCategory}
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {mistingSystems[activeCategory]?.map(product => (
              <div
                key={product.id}
                className='group rounded-lg overflow-hidden bg-white border-2 border-[#C8E6C8] shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[#7FB77E]'
              >
                {/* Product Image */}
                <div className='relative h-40 overflow-hidden bg-[#D8F3DC]'>
                  <img
                    src={product.img}
                    alt={product.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>

                {/* Product Content */}
                <div className='p-4'>
                  <h3 className='font-bold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-[#7FB77E] transition-colors'>
                    {product.title}
                  </h3>

                  {/* Price */}
                  <div className='mb-3 pb-3 border-t border-[#C8E6C8]'>
                    <div className='text-lg font-black text-[#7FB77E]'>{product.price}</div>
                    <div className='text-xs text-gray-500 font-semibold'>{product.unit}</div>
                  </div>

                  {/* Specifications */}
                  <div className='space-y-1 mb-4 text-xs text-gray-600'>
                    {product.operating_pressure && (
                      <p><span className='font-semibold'>Operating Pressure:</span> {product.operating_pressure}</p>
                    )}
                    {product.coverage_area && (
                      <p><span className='font-semibold'>Coverage Area:</span> {product.coverage_area}</p>
                    )}
                    {product.capacity && (
                      <p><span className='font-semibold'>Capacity:</span> {product.capacity}</p>
                    )}
                    {product.material && (
                      <p><span className='font-semibold'>Material:</span> {product.material}</p>
                    )}
                    {product.power_consumption && (
                      <p><span className='font-semibold'>Power:</span> {product.power_consumption}</p>
                    )}
                  </div>

                  {/* Get Quote Button */}
                  <a
                    href='/#contact'
                    className='w-full block px-3 py-2 rounded-lg bg-[#7FB77E] hover:bg-[#6B8E23] text-white font-bold text-xs hover:shadow-lg transition-all duration-300 text-center'
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className='border-t border-[#C8E6C8] bg-white py-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-gray-600 mb-2'>© 2025 GreenTech Solution Private Limited. All rights reserved.</p>
          <p className='text-sm text-gray-500'>Premium Misting & Cooling Solutions for Every Space</p>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
