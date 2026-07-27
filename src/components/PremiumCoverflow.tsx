import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageItem {
  id: string | number;
  src: string;
  title: string;
  description: string;
}

interface PremiumCoverflowProps {
  images: ImageItem[];
  onSlideChange?: (activeIndex: number) => void;
  autoplayDelay?: number;
  height?: string;
}

const PremiumCoverflow: React.FC<PremiumCoverflowProps> = ({
  images,
  onSlideChange,
  autoplayDelay = 3000,
  height = '600px',
}) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  return (
    <div className="premium-coverflow-wrapper">
      <style>{`
        .premium-coverflow-wrapper {
          width: 100%;
          background: linear-gradient(135deg, #f5f1e8 0%, #e8e3d8 100%);
          padding: 60px 20px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .premium-coverflow-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(200, 180, 160, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(220, 200, 180, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .coverflow-container {
          position: relative;
          z-index: 10;
          height: ${height};
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .slide-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .swiper-slide-active .slide-image {
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25),
                      inset 0 0 0 3px #ffffff;
          border: 4px solid white;
        }

        .swiper-slide-next .slide-image,
        .swiper-slide-prev .slide-image {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .navigation-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          width: 56px;
          height: 56px;
          border: 2px solid #8b7355;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #8b7355;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .navigation-button:hover {
          background: #8b7355;
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 12px 32px rgba(139, 115, 85, 0.3);
        }

        .navigation-button.prev {
          left: 30px;
        }

        .navigation-button.next {
          right: 30px;
        }

        .caption-container {
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 50;
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .caption-title {
          font-size: 32px;
          font-weight: 700;
          color: #2c2c2c;
          margin: 0 0 12px 0;
          letter-spacing: -0.5px;
        }

        .caption-description {
          font-size: 16px;
          color: #666666;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .pagination-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .pagination-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(139, 115, 85, 0.4);
          cursor: pointer;
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .pagination-dot.active {
          width: 28px;
          border-radius: 6px;
          background: #8b7355;
          border-color: #8b7355;
        }

        .pagination-dot:hover {
          transform: scale(1.2);
          background: rgba(139, 115, 85, 0.7);
        }

        .autoplay-toggle {
          position: absolute;
          top: 30px;
          right: 30px;
          z-index: 100;
          width: 48px;
          height: 48px;
          border: 2px solid #8b7355;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #8b7355;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
        }

        .autoplay-toggle:hover {
          background: #8b7355;
          color: white;
          transform: scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .premium-coverflow-wrapper {
            padding: 50px 20px;
          }

          .coverflow-container {
            height: 450px;
          }

          .caption-title {
            font-size: 24px;
          }

          .caption-description {
            font-size: 14px;
          }

          .navigation-button {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .navigation-button.prev {
            left: 15px;
          }

          .navigation-button.next {
            right: 15px;
          }

          .autoplay-toggle {
            width: 40px;
            height: 40px;
            font-size: 16px;
            top: 20px;
            right: 20px;
          }
        }

        @media (max-width: 768px) {
          .premium-coverflow-wrapper {
            padding: 40px 15px;
          }

          .coverflow-container {
            height: 350px;
          }

          .caption-title {
            font-size: 20px;
            margin-bottom: 8px;
          }

          .caption-description {
            font-size: 12px;
          }

          .navigation-button {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .navigation-button.prev {
            left: 10px;
          }

          .navigation-button.next {
            right: 10px;
          }

          .caption-container {
            bottom: 30px;
          }

          .pagination-dots {
            bottom: 15px;
            gap: 8px;
          }

          .pagination-dot {
            width: 8px;
            height: 8px;
          }

          .pagination-dot.active {
            width: 24px;
          }
        }

        @media (max-width: 480px) {
          .premium-coverflow-wrapper {
            padding: 30px 10px;
          }

          .coverflow-container {
            height: 280px;
          }

          .caption-title {
            font-size: 16px;
            margin-bottom: 6px;
          }

          .caption-description {
            font-size: 11px;
            max-width: 90vw;
          }

          .navigation-button {
            width: 36px;
            height: 36px;
            font-size: 16px;
          }

          .navigation-button.prev {
            left: 8px;
          }

          .navigation-button.next {
            right: 8px;
          }

          .autoplay-toggle {
            width: 36px;
            height: 36px;
            font-size: 14px;
            top: 15px;
            right: 15px;
          }
        }
      `}</style>

      <div className="coverflow-container">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={isAutoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay, Keyboard]}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            onSlideChange?.(swiper.activeIndex);
          }}
          loop={true}
          className="coverflow-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} style={{ width: '400px' }}>
              <div className="slide-content">
                <div className="slide-image-wrapper">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="slide-image"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="navigation-button prev swiper-button-prev"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="navigation-button next swiper-button-next"
          aria-label="Next slide"
        >
          ›
        </button>

        <button
          className="autoplay-toggle"
          onClick={() => setIsAutoplay(!isAutoplay)}
          aria-label="Toggle autoplay"
          title={isAutoplay ? 'Pause autoplay' : 'Resume autoplay'}
        >
          {isAutoplay ? '⏸' : '▶'}
        </button>

        {images[activeIndex] && (
          <div className="caption-container">
            <h2 className="caption-title">{images[activeIndex].title}</h2>
            <p className="caption-description">{images[activeIndex].description}</p>
          </div>
        )}
      </div>

      <div className="pagination-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              if (swiperRef.current?.swiper) {
                swiperRef.current.swiper.slideToLoop(index);
                setIsAutoplay(false);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PremiumCoverflow;
