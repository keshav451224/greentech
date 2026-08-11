import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import heroImg from "@/assets/hero-wall.jpg";
import outdoorImg from "@/assets/outdoor-wall.jpg";
import indoorImg from "@/assets/indoor-wall.jpg";
import grassImg from "@/assets/artificial-grass.jpg";
import pvcImg from "@/assets/pvc-planter.jpg";
import terraceImg from "@/assets/terrace-garden.jpg";
import bioImg from "@/assets/bio-panel.jpg";
import greenImg from "@/assets/green-wall.jpg";
import aboutImg1 from "@/assets/outdoor-wall.jpg";
import aboutImg2 from "@/assets/indoor-wall.jpg";
import footerLogo from "@/assets/logo.png";
import trustLogo from "@/assets/Screenshot 2026-07-17 141243.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom Swiper styles - Override default blue colors to black
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #000 !important;
    background-color: rgba(0, 0, 0, 0.3) !important;
  }
  
  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: #000 !important;
  }
  
  .swiper-pagination-bullet {
    background-color: #000 !important;
    opacity: 0.5 !important;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #000 !important;
    opacity: 1 !important;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = swiperStyles;
  document.head.appendChild(styleElement);
}

export const Route = createFileRoute("/")({
  component: Index,
});

const products = [
  {
    title: "Vertical Outdoor Wall Garden",
    img: outdoorImg,
    price: "₹850",
    unit: "per sq ft",
    desc: "Bio-felt outdoor wall with live plants, weather-resistant frame and drip irrigation.",
  },
  {
    title: "Bio Wall Service",
    img: greenImg,
    price: "₹1,200",
    unit: "per sq ft",
    desc: "End-to-end bio wall design, installation and annual maintenance for offices & cafes.",
  },
  {
    title: "Vertical Indoor Wall Garden",
    img: indoorImg,
    price: "₹950",
    unit: "per sq ft",
    desc: "Indoor living green wall with low-light plants and integrated LED grow lighting.",
  },
  {
    title: "PVC Planter Vertical Garden",
    img: pvcImg,
    price: "₹450",
    unit: "per sq ft",
    desc: "Modular PVC pots on MS frame — lightweight, easy to install and reconfigure.",
  },
  {
    title: "Bio Wall Panel Set",
    img: bioImg,
    price: "₹1,400",
    unit: "per panel (2x2 ft)",
    desc: "Pre-planted modular bio panels. Plug-and-play installation, ready in hours.",
  },
  {
    title: "Artificial Grass Wall",
    img: grassImg,
    price: "₹180",
    unit: "per sq ft",
    desc: "Zero-maintenance UV-stable artificial grass walls with optional flower accents.",
  },
  {
    title: "Green Wall (Facade)",
    img: heroImg,
    price: "₹1,350",
    unit: "per sq ft",
    desc: "Large-format exterior facade green walls with automated irrigation & drainage.",
  },
  {
    title: "Terrace Garden Service",
    img: terraceImg,
    price: "₹350",
    unit: "per sq ft",
    desc: "Turnkey terrace garden design — waterproofing, planters, plants and lighting.",
  },
];

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

const latestProjects = [
  { src: heroImg, alt: "Lush exterior green wall installation", title: "Vertical Outdoor Wall Garden", description: "Petunia, Verbena, Bacopa" },
  { src: indoorImg, alt: "Indoor living wall for a commercial space", title: "Indoor Living Wall", description: "Pothos, Philodendron, Ferns" },
  { src: outdoorImg, alt: "Residential vertical garden installation", title: "Vertical Indoor Wall Garden", description: "Monstera, Scindapsus, Syngonium" },
  { src: greenImg, alt: "Custom green wall feature", title: "PVC Planter Vertical Garden", description: "Ivy, Jasmine, Creeping Fig" },
  { src: terraceImg, alt: "Rooftop terrace garden project", title: "Rooftop Terrace Garden", description: "Mixed Foliage, Climbing Vines" },
  { src: bioImg, alt: "Modular bio wall panel installation", title: "Bio Wall Service", description: "Licorice Plant, Coleus, Dusty Miller" },
];

// Hero Slider Component
function HeroSlider () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef(null);
  const sliderImages = [heroImg, outdoorImg, greenImg, indoorImg];
  const sliderLabels = [
    "Exterior Green Walls",
    "Outdoor Wall Gardens",
    "Premium Bio Walls",
    "Indoor Living Walls",
  ];

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTouchEnd = event => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) distance > 0 ? prevSlide() : nextSlide();
    touchStart.current = null;
  };

  return (
    <div
      className='absolute inset-0 z-0 overflow-hidden bg-emerald-950'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={event => {
        touchStart.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Container */}
      <div className='relative w-full h-full'>
        {/* Image Slides */}
        {sliderImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img src={img} alt={sliderLabels[idx]} className='w-full h-full object-cover' />
            {/* Gradient Overlays */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/75 via-emerald-950/55 to-transparent' />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950/55' />

            {/* Slide Label */}
            <div className='absolute bottom-24 right-5 hidden max-w-xs text-right text-white drop-shadow-lg md:block lg:right-12'>
              <p className='mb-2 text-xs font-bold uppercase tracking-[0.24em]'>
                Featured installation
              </p>
              <p className='text-2xl font-black leading-tight'>{sliderLabels[idx]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className='absolute bottom-7 right-4 z-20 flex items-center gap-2 sm:bottom-9 sm:right-8'>
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className='grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-black/25 text-white backdrop-blur transition hover:bg-white hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-white'
          aria-label='Previous slide'
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className='grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-black/25 text-white backdrop-blur transition hover:bg-white hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-white'
          aria-label='Next slide'
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}

function Index () {
  const [contactForm, setContactForm] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    area: "",
    requirement: "",
  });

  const [formStatus, setFormStatus] = React.useState("");
  const [activeServiceCategory, setActiveServiceCategory] = React.useState("Misting Systems");

  const updateContactForm = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    if (formStatus) setFormStatus("");
  };

  const submitContactForm = e => {
    e.preventDefault();

    const recipient = "rajeshkumarparbhat@gmail.com";
    const subject = `Free Consultation Request - ${contactForm.fullName}`;
    const body = [
      "New consultation request from the GreenTech Solution Private Limited website.",
      "",
      `Full Name: ${contactForm.fullName}`,
      `Gmail / Email: ${contactForm.email}`,
      `Phone: ${contactForm.phone}`,
      `Area: ${contactForm.area || "Not provided"} sq ft`,
      "",
      "Requirement:",
      contactForm.requirement || "Not provided",
      "",
      "Please contact this customer within 24 hours.",
    ].join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipient,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setFormStatus("Your Gmail compose window is ready. Please review and send the email.");
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-emerald-50 via-white to-green-50'>
      {/* ==================== NAVBAR ==================== */}
      <header className='sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm'>
        <div className='mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8'>
          <div className='flex items-center justify-between py-2 sm:py-3'>
            {/* Left Section - Company Info */}
            <div className='flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1'>
              {/* Trust Seal */}
              <div className='relative flex-shrink-0'>
                <img 
                  src={trustLogo}
                  alt='IndiaMART Trust Seal'
                  className='w-10 h-14 sm:w-12 sm:h-16 md:w-16 md:h-20 object-contain'
                />
              </div>

              {/* Company Details */}
              <div className='flex flex-col min-w-0'>
                <h1 className='text-xs sm:text-sm md:text-lg font-bold text-gray-900 leading-tight truncate'>
                  Green Tech Solution Private Limited
                </h1>
                <div className='hidden sm:flex items-center gap-2 md:gap-4 mt-1 overflow-x-auto'>
                  <div className='flex items-center gap-1 text-[9px] sm:text-xs md:text-xs text-gray-600 flex-shrink-0'>
                    <svg className='w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 flex-shrink-0' fill='#7FB77E' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                    </svg>
                    <span className='font-medium whitespace-nowrap'>Nictn, New Delhi</span>
                  </div>
                  <div className='hidden md:flex items-center gap-1 text-xs text-gray-600 flex-shrink-0'>
                    <svg className='w-3.5 h-3.5 flex-shrink-0' fill='#7FB77E' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z' clipRule='evenodd' />
                    </svg>
                    <span className='font-medium'>GST No. -07AAFCG5355E2ZO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Actions */}
            <div className='flex items-center gap-1.5 sm:gap-2 md:gap-3 ml-2 flex-shrink-0'>
              {/* Call Button - Full on desktop, compact on mobile */}
              <a
                href='tel:08043880537'
                className='hidden sm:flex items-center gap-1 md:gap-2 px-2.5 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border-2 border-gray-300 rounded hover:border-[#7FB77E] hover:bg-[#F0F8F3] transition-all duration-300 group'
              >
                <svg className='w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0' fill='#7FB77E' viewBox='0 0 20 20'>
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                <div className='hidden md:block text-left'>
                  <div className='text-xs md:text-sm font-bold text-gray-900 group-hover:text-[#7FB77E]'>Call</div>
                  <div className='text-[7px] md:text-[10px] text-gray-500'>08043880537</div>
                </div>
              </a>

              {/* Call Icon on Mobile */}
              <a
                href='tel:08043880537'
                className='sm:hidden p-1.5 rounded-lg border-2 border-gray-300 hover:border-[#7FB77E] hover:bg-[#F0F8F3] transition-all flex-shrink-0'
              >
                <svg className='w-4 h-4' fill='#7FB77E' viewBox='0 0 20 20'>
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
              </a>

              {/* Email Button */}
              <a
                href='mailto:rajeshkumarparbhat@gmail.com'
                className='flex items-center gap-1 sm:gap-2 md:gap-3 px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#7FB77E] hover:bg-[#6B8E23] text-white rounded text-sm sm:text-base md:text-lg font-bold transition-all duration-300 shadow-sm hover:shadow-lg flex-shrink-0'
              >
                <svg className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                <span className='hidden sm:inline'>Email</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='flex items-center justify-center gap-2 sm:gap-4 md:gap-8 py-2 sm:py-3 border-t border-gray-200 overflow-x-auto'>
            <a href='/' className='text-xs sm:text-xs md:text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors whitespace-nowrap px-1 sm:px-2'>Home</a>
            <a href='/#about' className='text-xs sm:text-xs md:text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors whitespace-nowrap px-1 sm:px-2'>About</a>
            <a href='/#products' className='text-xs sm:text-xs md:text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors whitespace-nowrap px-1 sm:px-2'>Products</a>
            <a href='/#services' className='text-xs sm:text-xs md:text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors whitespace-nowrap px-1 sm:px-2'>Services</a>
            <a href='/#gallery' className='text-xs sm:text-xs md:text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors whitespace-nowrap px-1 sm:px-2'>Gallery</a>
            <a href='/#contact' className='text-xs sm:text-xs md:text-sm font-bold text-gray-700 hover:text-[#7FB77E] transition-colors whitespace-nowrap px-1 sm:px-2'>Contact</a>
          </div>
        </div>
      </header>

      {/* ==================== HERO SECTION WITH IMAGE SLIDER ==================== */}
      <section id='top' className='relative min-h-screen flex items-center overflow-hidden pt-16'>
        <HeroSlider />

        {/* Content Overlay */}
        <div className='relative z-10 mx-auto flex w-full max-w-7xl justify-center px-4 py-20 sm:px-6 lg:px-8'>
          <div className='max-w-2xl text-center'>
            {/* Badge */}
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8E6C8] bg-[#D8F3DC] px-4 py-2 text-base font-bold text-[#7FB77E]'>
              <span className='text-xl'>🌿</span>
              <span>Premium Green Wall Solutions Since 2015</span>
            </div>

            {/* Main Heading */}
            <h1 className='text-6xl text-white md:text-7xl font-black text-gray-900 leading-tight mb-6'>
              Transform Your
              <span className='block text-emerald-600 mt-2'>Walls Into Nature</span>
            </h1>

            {/* Description */}
            <p className='mx-auto mb-8 max-w-xl text-2xl font-medium leading-relaxed text-white'>
              Create stunning vertical gardens that bring life, beauty, and sustainability to any
              space. From residential to commercial installations.
            </p>

            {/* CTA Buttons */}
            <div className='mb-12 flex flex-col justify-center gap-4 sm:flex-row'>
              <a
                href='#products'
                className='group inline-flex items-center justify-center gap-2 rounded-lg bg-[#7FB77E] hover:bg-[#6B8E23] px-8 py-4 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7FB77E]/20'
              >
                Explore Products
                <span className='group-hover:translate-x-1 transition-transform'>→</span>
              </a>
              <a
                href='#contact'
                className='rounded-lg border-2 border-[#A8CFA8] px-8 py-4 text-xl font-bold text-[#7FB77E] transition-all duration-300 hover:bg-[#F0F8F3]'
              >
                Free Consultation
              </a>
            </div>

            {/* Stats */}
            <div className='mx-auto grid max-w-md grid-cols-3 gap-4 sm:gap-8'>
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "10+", label: "Years Experience" },
                { number: "4.9★", label: "Client Rated" },
              ].map((stat, i) => (
                <div key={i} className='group'>
                  <div className='text-5xl font-black text-[#7FB77E] transition-transform group-hover:scale-110'>
                    {stat.number}
                  </div>
                  <div className='mt-1 text-base font-semibold text-white'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-[#7FB77E] rounded-full flex justify-center'>
            <div className='w-1 h-2 bg-[#7FB77E] rounded-full mt-2 animate-bounce' />
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id='about' className='py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-[#F0F8F3] to-white relative overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='mb-12 md:mb-16 text-center'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-[#C8E6C8] bg-[#D8F3DC] px-4 py-2 text-sm font-bold text-[#7FB77E]'>
              <span className='text-lg'>🌱</span>
              <span>Our Story</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-4'>
              About Our Company
            </h2>
            <p className='mx-auto max-w-2xl text-lg md:text-xl text-gray-600 font-medium'>
              14+ Years of Creating Beautiful, Sustainable Green Walls
            </p>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Column - Content */}
            <div className='space-y-6 order-2 lg:order-1'>
              {/* Experience Badge */}
              <div className='inline-block'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-gradient-to-r from-[#7FB77E] to-[#6B8E23] rounded-xl blur-lg opacity-20' />
                  <div className='relative bg-white border-2 border-[#7FB77E] rounded-xl p-6 shadow-lg'>
                    <div className='text-center'>
                      <div className='text-5xl font-black text-[#7FB77E] mb-2'>14+</div>
                      <div className='text-sm md:text-base font-bold text-gray-900'>Years of Experience</div>
                      <div className='text-xs text-gray-600 mt-1'>Creating Premium Green Walls</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Description */}
              <div className='space-y-4'>
                <p className='text-base md:text-lg text-gray-700 leading-relaxed font-medium'>
                  With over 14 years of experience, we specialize in creating innovative green wall and vertical garden solutions that transform ordinary spaces into vibrant, living environments. Our expertise combines thoughtful design, quality plants, reliable installation, and professional maintenance to deliver green spaces that are both beautiful and sustainable.
                </p>
                <p className='text-base md:text-lg text-gray-700 leading-relaxed font-medium'>
                  From commercial buildings and corporate spaces to outdoor environments and architectural projects, we create customized green wall solutions designed to complement the character of every space. Our goal is to bring nature closer to people while enhancing the visual appeal and environmental quality of modern buildings.
                </p>
              </div>

              {/* Green Walls Benefits */}
              <div className='pt-4 border-t-2 border-[#D8F3DC]'>
                <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-4'>Transforming Spaces with Green Walls</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#7FB77E] flex items-center justify-center mt-1'>
                      <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-sm md:text-base text-gray-700 font-medium'>Vertical Gardens & Living Walls</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#7FB77E] flex items-center justify-center mt-1'>
                      <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-sm md:text-base text-gray-700 font-medium'>Custom Green Wall Design</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#7FB77E] flex items-center justify-center mt-1'>
                      <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-sm md:text-base text-gray-700 font-medium'>Professional Installation</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#7FB77E] flex items-center justify-center mt-1'>
                      <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-sm md:text-base text-gray-700 font-medium'>Expert Plant Selection</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#7FB77E] flex items-center justify-center mt-1'>
                      <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-sm md:text-base text-gray-700 font-medium'>Smart Irrigation Systems</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#7FB77E] flex items-center justify-center mt-1'>
                      <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-sm md:text-base text-gray-700 font-medium'>Long-term Maintenance</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className='pt-4'>
                <a
                  href='/#products'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-[#7FB77E] hover:bg-[#6B8E23] text-white rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg'
                >
                  Explore Our Services
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className='relative h-96 md:h-[500px] order-1 lg:order-2'>
              {/* Large Primary Image */}
              <div className='absolute inset-0 rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src={aboutImg1}
                  alt='Professional green wall installation with quality plants'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              </div>

              {/* Secondary Image - Overlapping */}
              <div className='absolute -bottom-6 -right-6 w-32 sm:w-40 h-32 sm:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-500'>
                <img
                  src={aboutImg2}
                  alt='Expert technicians maintaining green walls'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Decorative Accent */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7FB77E]/10 to-[#6B8E23]/10 rounded-full -mr-16 -mt-16' />
              <div className='absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#7FB77E]/10 to-transparent rounded-full -ml-20 -mb-20' />
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white opacity-50' />
      </section>

      {/* ==================== PRODUCTS SECTION ==================== */}
      <section id='products' className='py-24 bg-white relative'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-2 rounded-full bg-[#D8F3DC] text-[#7FB77E] text-sm font-bold mb-4'>
              OUR COLLECTION
            </div>
            <h2 className='text-5xl md:text-6xl font-black text-gray-900 mb-6'>
              Premium Wall Solutions
            </h2>
            <p className='text-xl text-gray-600'>
              Choose from our carefully curated selection of vertical garden systems for every space
              and budget.
            </p>
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.map(p => (
              <div
                key={p.title}
                className='group rounded-2xl overflow-hidden bg-white border-2 border-[#C8E6C8] shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[#7FB77E]'
              >
                {/* Image */}
                <div className='relative h-56 overflow-hidden bg-[#D8F3DC]'>
                  <img
                    src={p.img}
                    alt={p.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#7FB77E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='font-bold text-gray-900 text-lg mb-2 group-hover:text-[#7FB77E] transition-colors'>
                    {p.title}
                  </h3>
                  <p className='text-sm text-gray-600 mb-4 line-clamp-2'>{p.desc}</p>

                  {/* Price */}
                  <div className='mb-4 pb-4 border-t-2 border-[#C8E6C8]'>
                    <div className='text-2xl font-black text-[#7FB77E]'>{p.price}</div>
                    <div className='text-xs text-gray-500 font-semibold'>{p.unit}</div>
                  </div>

                  {/* Button */}
                  <a
                    href='#contact'
                    className='w-full px-4 py-2.5 rounded-lg bg-[#7FB77E] text-white font-bold text-sm hover:bg-[#6B8E23] hover:shadow-lg transition-all duration-300 text-center'
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY SECTION ==================== */}
      <section
        id='gallery'
        className='py-20 md:py-24 bg-gradient-to-b from-[#F0F8F3] via-[#F8FBF9] to-white'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center max-w-4xl mx-auto mb-16 md:mb-20'>
            <h2 className='text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-5 md:mb-6'>
              Our Latest Projects
            </h2>
            <p className='text-lg md:text-xl text-slate-600'>
              Showcase of beautiful green walls we've created for homes and businesses.
            </p>
          </div>

          {/* Gallery Grid */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className='py-4'
          >
            {latestProjects.map(project => (
              <SwiperSlide key={project.alt}>
                <div className='group flex flex-col'>
                  <div className='relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#D8F3DC] shadow-[0_12px_24px_rgba(127,183,126,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(127,183,126,0.2)]'>
                    <img
                      src={project.src}
                      alt={project.alt}
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                      loading='lazy'
                    />
                    <div className='absolute inset-0 bg-[#7FB77E]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                  </div>
                  {/* Project Info */}
                  <div className='mt-4 space-y-2'>
                    <h3 className='text-lg sm:text-xl font-bold text-gray-900'>{project.title}</h3>
                    <div className='border-2 border-orange-500 bg-orange-50 px-3 py-2 rounded'>
                      <p className='text-sm font-semibold text-orange-600'>{project.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ==================== SERVICES / MISTING SYSTEMS SECTION ==================== */}
      <section id='services' className='py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-2 rounded-full bg-[#D8F3DC] text-[#7FB77E] text-sm font-bold mb-4'>
              OUR SERVICES
            </div>
            <h2 className='text-5xl md:text-6xl font-black text-gray-900 mb-6'>
              Professional Misting & Cooling Systems
            </h2>
            <p className='text-xl text-gray-600'>
              Complete range of misting, fogging, cooling, and dust suppression solutions for residential and commercial applications.
            </p>
          </div>

          {/* Category Icons Navigation */}
          <div className='mb-12 sm:mb-16'>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
              {Object.keys(mistingSystems).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveServiceCategory(category)}
                  className={`flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-110 w-24 sm:w-28 md:w-32 ${
                    activeServiceCategory === category
                      ? 'bg-[#D8F3DC] border-2 border-[#7FB77E] scale-110'
                      : 'bg-white border-2 border-gray-200 hover:border-[#A8CFA8]'
                  }`}
                >
                  {/* Category Icon Circles */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold transition-all flex-shrink-0 ${
                    activeServiceCategory === category
                      ? 'bg-gradient-to-br from-[#7FB77E] to-[#A8CFA8] text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {category === "Misting Systems" && "💧"}
                    {category === "High Pressure Fogging System" && "🌫️"}
                    {category === "Dust Suppression System" && "💨"}
                    {category === "Mist Cooling System" && "❄️"}
                    {category === "Outdoor Cooling System" && "☀️"}
                  </div>
                  <span className={`text-center text-xs sm:text-xs md:text-sm font-bold transition-colors line-clamp-2 leading-tight ${
                    activeServiceCategory === category ? 'text-[#7FB77E]' : 'text-gray-700'
                  }`}>
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid for Selected Category */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {mistingSystems[activeServiceCategory]?.map(product => (
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
                    <div className='text-xl font-black text-[#7FB77E]'>{product.price}</div>
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
                    {product.pressure && (
                      <p><span className='font-semibold'>Pressure:</span> {product.pressure}</p>
                    )}
                    {product.color && (
                      <p><span className='font-semibold'>Color:</span> {product.color}</p>
                    )}
                    {product.cooling_method && (
                      <p><span className='font-semibold'>Method:</span> {product.cooling_method}</p>
                    )}
                  </div>

                  {/* Get Quote Button */}
                  <a
                    href='#contact'
                    className='w-full block px-3 py-2 rounded-lg bg-[#7FB77E] text-white font-bold text-xs hover:bg-[#6B8E23] hover:shadow-lg transition-all duration-300 text-center'
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View Complete Range CTA */}
          <div className='mt-16 text-center'>
            <a href='#services' className='inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#7FB77E] hover:bg-[#6B8E23] text-white font-bold hover:shadow-lg transition-all duration-300 hover:scale-105'>
              View Complete Range Of Products →
            </a>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section id='why-us' className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center max-w-2xl mx-auto mb-16'>
            <div className='inline-block px-4 py-2 rounded-full bg-[#D8F3DC] text-[#7FB77E] text-sm font-bold mb-4'>
              WHY US
            </div>
            <h2 className='text-5xl md:text-6xl font-black text-gray-900 mb-6'>
              Why Choose GreenTech
            </h2>
          </div>

          {/* Services Grid */}
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: "🎨",
                title: "Expert Design",
                desc: "Custom solutions tailored to your space with in-house horticulturists and designers.",
                color: "from-[#C8E6C8] to-[#D8F3DC]",
              },
              {
                icon: "🏗️",
                title: "Quality Materials",
                desc: "Rust-proof MS frames, premium bio-felt, and advanced irrigation systems.",
                color: "from-[#D8F3DC] to-[#C8E6C8]",
              },
              {
                icon: "🤝",
                title: "Lifetime Support",
                desc: "Comprehensive AMC, plant replacement guarantees, and 24/7 support.",
                color: "from-[#A8CFA8] to-[#D8F3DC]",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className={`group rounded-2xl p-8 bg-gradient-to-br ${service.color} text-[#6B8E23] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#C8E6C8]`}
              >
                <div className='text-5xl mb-4 group-hover:scale-110 transition-transform'>
                  {service.icon}
                </div>
                <h3 className='text-2xl font-bold mb-3 text-[#6B8E23]'>{service.title}</h3>
                <p className='text-[#6B8E23]/80 leading-relaxed'>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section
        id='contact'
        className='py-24 bg-gray-800 text-white relative overflow-hidden'
      >
        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Left Content */}
            <div className='flex flex-col justify-center'>
              <h2 className='text-5xl md:text-6xl font-black leading-tight mb-8'>
                Contact Us
              </h2>

              {/* Director Info */}
              <div className='mb-8'>
                <div className='flex items-start gap-3 mb-6'>
                  <div className='text-emerald-400 text-2xl mt-1'>📍</div>
                  <div>
                    <h3 className='text-xl font-bold text-white mb-1'>Rajesh Kumar (Director)</h3>
                    <p className='text-gray-300 font-bold mb-2'>Green Tech Solution Private Limited</p>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                      12 - B, KH No-34/24, Dilip Vihar, Nilothi Extt, Delhi, West New Delhi - 110041, Delhi, India
                    </p>
                    <a href='#' className='inline-block text-emerald-400 hover:text-emerald-300 font-bold mt-2 transition-colors'>
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Send Email */}
                <div className='flex items-center gap-3 mb-6'>
                  <div className='text-emerald-400 text-2xl'>✉️</div>
                  <div>
                    <p className='text-gray-300 font-bold'>Send Email</p>
                    <a href='mailto:rajeshkumarparbhat@gmail.com' className='text-emerald-400 hover:text-emerald-300 transition-colors'>
                      rajeshkumarparbhat@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-center gap-3 mb-8'>
                  <div className='text-emerald-400 text-2xl'>📞</div>
                  <div>
                    <a href='tel:08043880537' className='text-emerald-400 hover:text-emerald-300 font-bold text-lg transition-colors'>
                      08043880537
                    </a>
                  </div>
                </div>

                {/* Social Share */}
                <div>
                  <p className='text-gray-300 font-bold mb-3'>Share:</p>
                  <div className='flex items-center gap-4'>
                    {/* Facebook - Official Logo */}
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#166FE5] flex items-center justify-center transition-all hover:scale-110 shadow-lg'>
                      <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                      </svg>
                    </a>
                    {/* WhatsApp - Official Logo */}
                    <a href='https://wa.me' target='_blank' rel='noopener noreferrer' className='w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5C] flex items-center justify-center transition-all hover:scale-110 shadow-lg'>
                      <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.01 1 4.33L2 22l6.01-1.9C9.37 21.6 10.64 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2m0 18c-1.21 0-2.37-.31-3.38-.86l-.24-.14-2.51.79.81-2.47-.16-.26c-.62-1.01-.95-2.16-.95-3.36 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8m4.64-7.67c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.24-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.07-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43-.14 0-.3-.01-.46-.01-.16 0-.43.06-.65.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z'/>
                      </svg>
                    </a>
                    {/* LinkedIn - Official Logo */}
                    <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='w-12 h-12 rounded-full bg-[#0A66C2] hover:bg-[#095195] flex items-center justify-center transition-all hover:scale-110 shadow-lg'>
                      <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.643h3.554v1.364c.429-.668 1.196-1.618 2.905-1.618 2.121 0 3.71 1.385 3.71 4.362v5.535zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.187 0 1.927.76 1.94 1.715 0 .953-.753 1.715-1.983 1.715zm1.946 11.597H3.392V9.209h3.891v11.243zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'/>
                      </svg>
                    </a>
                    {/* Instagram - Official Logo */}
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC411] via-[#FB1581] to-[#833AB4] hover:opacity-90 flex items-center justify-center transition-all hover:scale-110 shadow-lg'>
                      <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4.29-10.195c-.798 0-1.45-.652-1.45-1.45s.652-1.45 1.45-1.45 1.45.652 1.45 1.45-.652 1.45-1.45 1.45z'/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className='relative'>
              <form
                onSubmit={submitContactForm}
                className='relative rounded-2xl bg-white text-gray-900 p-8 md:p-10 space-y-6 shadow-2xl'
              >
                {/* Requirement Textarea */}
                <div>
                  <label className='block text-sm font-bold text-[#7FB77E] mb-2'>
                    Describe Your Requirement
                  </label>
                  <textarea
                    rows={4}
                    value={contactForm.requirement}
                    onChange={e => updateContactForm("requirement", e.target.value)}
                    placeholder="I would like to..."
                    className='w-full rounded-lg bg-gray-50 border-2 border-[#C8E6C8] focus:border-[#7FB77E] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-200 resize-none'
                  />
                </div>

                {/* Phone Input with Country Code */}
                <div>
                  <label className='block text-sm font-bold text-[#7FB77E] mb-2'>
                    Phone *
                  </label>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50 border-2 border-[#C8E6C8] text-gray-600 font-semibold'>
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      required
                      value={contactForm.phone}
                      onChange={e => updateContactForm("phone", e.target.value)}
                      type='tel'
                      autoComplete='tel'
                      placeholder='Enter Your Number'
                      className='flex-1 rounded-lg bg-gray-50 border-2 border-[#C8E6C8] focus:border-[#7FB77E] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-200'
                    />
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label className='block text-sm font-bold text-[#7FB77E] mb-2'>
                    Name
                  </label>
                  <input
                    value={contactForm.fullName}
                    onChange={e => updateContactForm("fullName", e.target.value)}
                    type='text'
                    autoComplete='name'
                    placeholder='Enter your name'
                    className='w-full rounded-lg bg-gray-50 border-2 border-[#C8E6C8] focus:border-[#7FB77E] px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-200'
                  />
                </div>

                {/* Email Input - Hidden but still functional */}
                <input
                  required
                  value={contactForm.email}
                  onChange={e => updateContactForm("email", e.target.value)}
                  type='email'
                  autoComplete='email'
                  placeholder='yourname@gmail.com'
                  className='hidden'
                />

                {/* Area Input - Hidden but still functional */}
                <input
                  value={contactForm.area}
                  onChange={e => updateContactForm("area", e.target.value)}
                  type='number'
                  min='1'
                  inputMode='numeric'
                  placeholder='e.g., 500'
                  className='hidden'
                />

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full px-8 py-3 rounded-lg bg-[#7FB77E] hover:bg-[#6B8E23] text-white font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md'
                >
                  Submit
                </button>

                <p className='text-xs text-gray-500 text-center'>
                  {formStatus || "We'll respond within 24 hours. Your privacy is important to us."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className='border-t-2 border-emerald-200 bg-gradient-to-b from-gray-50 to-emerald-50 py-8 sm:py-12'>
        <div className='mx-auto max-w-7xl px-3 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8'>
            {/* Brand */}
            <div>
              <div className='mb-4 group'>
                <img
                  src={footerLogo}
                  alt='GTS Logo'
                  className='mb-3 h-24 w-auto object-contain sm:h-28'
                />
                <h4 className='mb-3 text-base sm:text-lg font-bold text-gray-900'>GreenTech Solution Private Limited</h4>
                <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                  Transforming spaces with premium green wall solutions since 2015.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='mb-3 sm:mb-4 text-base sm:text-lg font-bold text-gray-900'>Quick Links</h4>
              <div className='space-y-1.5 sm:space-y-2 text-xs sm:text-base text-gray-600'>
                <a href='#products' className='hover:text-emerald-600 transition-colors block'>
                  Products
                </a>
                <a href='#gallery' className='hover:text-emerald-600 transition-colors block'>
                  Gallery
                </a>
                <a href='#services' className='hover:text-emerald-600 transition-colors block'>
                  Services
                </a>
                <a href='#contact' className='hover:text-emerald-600 transition-colors block'>
                  Contact
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className='mb-3 sm:mb-4 text-base sm:text-lg font-bold text-gray-900'>Services</h4>
              <div className='space-y-1.5 sm:space-y-2 text-xs sm:text-base text-gray-600'>
                <div>Wall Design</div>
                <div>Installation</div>
                <div>Maintenance</div>
                <div>Support</div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className='mb-3 sm:mb-4 text-base sm:text-lg font-bold text-gray-900'>Newsletter</h4>
              <p className='mb-2 sm:mb-3 text-xs sm:text-base text-gray-600'>Get latest green wall ideas</p>
              <input
                type='email'
                placeholder='your@email.com'
                className='w-full rounded-lg border-2 border-emerald-200 bg-white px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-base text-gray-900 placeholder-gray-400 focus:border-emerald-600 focus:outline-none'
              />
            </div>
          </div>

          {/* Bottom */}
          <div className='flex flex-col items-center justify-between border-t-2 border-emerald-200 pt-6 sm:pt-8 text-xs sm:text-base text-gray-600 gap-3 sm:gap-0 sm:flex-row'>
            <div className='text-center sm:text-left'>© 2025 GreenTech Solution Private Limited. All rights reserved.</div>
            <div className='flex gap-4 sm:gap-6'>
              <a href='#' className='hover:text-emerald-600 transition-colors'>
                Privacy
              </a>
              <a href='#' className='hover:text-emerald-600 transition-colors'>
                Terms
              </a>
              <a href='#' className='hover:text-emerald-600 transition-colors'>
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
