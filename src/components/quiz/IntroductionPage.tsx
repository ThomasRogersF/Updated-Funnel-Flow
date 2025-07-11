
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

interface IntroductionPageProps {
  onStart: () => void;
  onDebugOffer?: () => void;
}

const LOGO_URL =
  'https://spanishvip.com/wp-content/uploads/2025/06/SpanishVIP-Original-Logo.png';
const HERO_IMAGE_URL =
  'https://spanishvip.com/wp-content/uploads/2025/06/Spanish-Learning-for-All-Ages.png';

const testimonials = [
  {
    name: 'Koji',
    role: 'SpanishVIP Student',
    quote:
      'I can finally talk to my grandchildren in Spanish!',
    image: '/images/testimonials-preview/koji-testimonial.png',
    video: '/videos/koji-testimonial.mp4',
    rating: 5,
  },
  {
    name: 'Suzanne',
    role: 'SpanishVIP Student',
    quote:
      'My confidence has skyrocketed!',
    image: '/images/testimonials-preview/suzanne-testimonial.png',
    video: '/videos/suzanne-testimonial.mp4',
    rating: 5,
  },
  {
    name: 'Catie',
    role: 'SpanishVIP Student',
    quote:
      'Learning Spanish opened new doors!',
    image: '/images/testimonials-preview/catie-testimonial.png',
    video: '/videos/catie-testimonial.mp4',
    rating: 5,
  },
  {
    name: 'Boris',
    role: 'SpanishVIP Student',
    quote:
      'Classes were structured to meet my needs... the best experience I have had with online language instruction.',
    image: '/images/testimonials-preview/boris-testimonial.png',
    video: '/videos/boris-testimonial.mp4',
    rating: 5,
  },
  {
    name: 'Chris',
    role: 'SpanishVIP Student',
    quote:
      'Each class is tailored to my individual needs and abilities. My one-on-one instructor is very passionate.',
    image: '/images/testimonials-preview/chris-testimonial.png',
    video: '/videos/chris-testimonial.mp4',
    rating: 5,
  },
  {
    name: 'Kholman',
    role: 'SpanishVIP Student',
    quote:
      'Spanish VIP is the best program I\'ve worked with. My instructor stays flexible while providing a structured curriculum.',
    image: '/images/testimonials-preview/kholman-testimonial.png',
    video: '/videos/kholman-testimonial.mp4',
    rating: 5,
  },
];

export default function IntroductionPage({ onStart, onDebugOffer }: IntroductionPageProps) {
  const [videoModal, setVideoModal] = useState<{ open: boolean; videoUrl: string | null }>({ open: false, videoUrl: null });

  const openVideoModal = (videoUrl: string) => {
    setVideoModal({ open: true, videoUrl });
  };
  const closeVideoModal = () => {
    setVideoModal({ open: false, videoUrl: null });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col font-sans overflow-x-hidden w-full" style={{ boxSizing: 'border-box' }}>
      {/* Header */}
      <header className="w-full flex flex-col items-center pt-8 pb-2 max-w-screen">
        <img
          src={LOGO_URL}
          alt="SpanishVIP Logo"
          className="h-14 mb-2"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.04))' }}
        />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-12 py-6 md:py-12 max-w-6xl mx-auto w-full max-w-screen">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl text-center md:text-left w-full">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            It's Never Too Late to <br />
            <span className="text-[#F36A20]">Master Spanish!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Take our quick quiz to discover the ideal learning style for you, and unlock a special offer to start your journey today.
          </p>
          <div className="text-left inline-block mb-6">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Why Spanish Learning After 50 is Perfect:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-base">
                <span className="text-[#3EB489] text-xl">✅</span> Start learning at your own comfortable pace
              </li>
              <li className="flex items-center gap-2 text-base">
                <span className="text-[#3EB489] text-xl">✅</span> Boost your brain health and memory
              </li>
              <li className="flex items-center gap-2 text-base">
                <span className="text-[#3EB489] text-xl">✅</span> Achieve your lifelong dream of speaking Spanish
              </li>
            </ul>
          </div>
          <button
            onClick={onStart}
            className="mt-2 px-8 py-3 bg-[#F36A20] text-white font-semibold rounded-full text-lg flex items-center gap-2 shadow-lg hover:bg-[#e85c0c] transition-colors duration-200 mx-auto md:mx-0"
          >
            Start Now <ArrowRight className="w-5 h-5" />
          </button>

        </div>
        {/* Right: Image with video call UI */}
        <div className="flex-1 flex items-center justify-center relative max-w-md w-full">
          <div className="relative w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src={HERO_IMAGE_URL}
              alt="Older adult learning Spanish via video call"
              className="w-full h-80 object-cover object-center rounded-3xl"
            />
            {/* Video call UI overlay */}
            <div className="absolute bottom-0 left-0 w-full flex flex-col items-center pb-4">
              <div className="flex gap-3 bg-white/80 rounded-full px-4 py-2 shadow-md">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 10v4M9 10v4M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2l1-2h6l1 2h2a2 2 0 0 1 2 2Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F36A20] hover:bg-[#e85c0c]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 10v4M9 10v4M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2l1-2h6l1 2h2a2 2 0 0 1 2 2Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3EB489] hover:bg-[#2fa77e]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5"/><path d="M15 9l-6 6M9 9l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicator */}
      <section className="w-full text-center mt-6 mb-2 max-w-screen">
        <p className="text-gray-500 text-base tracking-wide mb-1">Trusted by Thousands</p>
      </section>

      {/* Testimonials */}
      <section className="w-full flex flex-col items-center px-4 pb-12 max-w-screen">
        <div className="w-full max-w-5xl overflow-x-hidden">
          <Carousel opts={{ align: 'start', slidesToScroll: 1 }} plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}>
            <CarouselContent className="w-full">
          {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="w-full md:basis-1/3 basis-full">
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center h-full max-w-sm mx-auto">
              <div className="relative mb-4 w-24 h-24 cursor-pointer" onClick={() => openVideoModal(t.video)}>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-[#F36A20] shadow-md"
                />
                {/* Play icon overlay */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="19" fill="#F36A20" fillOpacity="0.85" />
                    <polygon points="15,12 28,19 15,26" fill="#fff" />
                  </svg>
                </span>
              </div>
                    <blockquote className="italic text-gray-700 text-base mb-3 text-center">"{t.quote}"</blockquote>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900">{t.name}</span>
                <span className="text-gray-400 text-sm">{t.role}</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#F36A20] text-lg">★</span>
                ))}
              </div>
            </div>
                </CarouselItem>
          ))}
            </CarouselContent>
            {/* Removed CarouselPrevious and CarouselNext */}
          </Carousel>
        </div>
        {videoModal.open && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
            <div className="relative max-w-4xl w-full max-h-[80vh]" onClick={e => e.stopPropagation()}>
              <button
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 z-10"
              >
                ✕
              </button>
              <video
                src={videoModal.videoUrl || undefined}
                className="w-full h-full rounded-lg"
                controls
                autoPlay
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
