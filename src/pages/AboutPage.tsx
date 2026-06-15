import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Sparkles, Download, MessageSquare, Box, Play, CheckCircle2, ArrowRight, Sofa } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('quality');

  useEffect(() => {
    document.title = "About Us | Legacy-29";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-body">
      <Navbar />
      
      <div className="pb-16">
        
        {/* =========================================
            SECTION 1: HERO (Based on Image 1)
            ========================================= */}
        <div className="bg-[#F8F9FA] lg:pt-52 pt-32 pb-12 lg:pb-24 border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left side: Exact Phone Mockup Style */}
              <div className="w-full lg:w-1/2 flex justify-center relative min-h-[600px] items-center">
                
                {/* Background Large Gray Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-[#EBEBEB] rounded-full z-0"></div>

                {/* Background Dots Pattern Left */}
                <div className="absolute left-4 md:left-12 bottom-20 grid grid-cols-4 gap-2 z-0 opacity-30">
                  {Array.from({length: 24}).map((_, i) => <div key={`dot-l-${i}`} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>)}
                </div>
                
                {/* Background Dots Pattern Right */}
                <div className="absolute right-12 md:right-24 -bottom-4 grid grid-cols-4 gap-2 z-0 opacity-30">
                  {Array.from({length: 24}).map((_, i) => <div key={`dot-r-${i}`} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>)}
                </div>

                {/* The Phone Mockup */}
                <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[8px] border-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden z-10 flex flex-col">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-20"></div>
                  
                  {/* Fake App UI Header */}
                  <div className="pt-10 px-4 pb-4">
                    <div className="flex items-center justify-between mb-5 px-1">
                       <p className="text-[11px] font-bold tracking-tight">9:41</p>
                       <div className="flex gap-1.5 items-center text-black">
                         <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                         <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.23C20.85 4.85 17.05 3 12 3z"/></svg>
                         <div className="w-5 h-3 border-2 border-black rounded-[4px] relative"><div className="absolute right-0.5 top-[1px] bottom-[1px] left-[1px] bg-black rounded-[1px]"></div></div>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-2.5 mb-6">
                        <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-2.5 flex items-center text-[10px] text-gray-400 font-medium">
                          <svg className="w-3.5 h-3.5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                          Search products...
                        </div>
                        <div className="w-9 h-9 bg-[#111] rounded-[0.8rem] flex items-center justify-center shrink-0 shadow-md">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                        </div>
                    </div>

                    {/* Categories Row */}
                    <div className="flex justify-between items-center gap-2 overflow-hidden px-1">
                        <div className="flex flex-col items-center gap-2">
                           <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1486262715619-670810a044e1?auto=format&fit=crop&q=80&w=100" alt="Engine" className="w-full h-full object-cover opacity-90" /></div>
                           <span className="text-[7px] font-bold text-gray-500">Engine</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                           <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center overflow-hidden border border-yellow-200/50 shadow-inner"><img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=100" alt="Brakes" className="w-full h-full object-cover p-1.5" /></div>
                           <span className="text-[7px] font-bold text-[#FF4B4B]">Brakes</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                           <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1503375816912-308354c2514d?auto=format&fit=crop&q=80&w=100" alt="Lighting" className="w-full h-full object-cover opacity-90" /></div>
                           <span className="text-[7px] font-bold text-gray-500">Lighting</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                           <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=100" alt="Interior" className="w-full h-full object-cover opacity-90" /></div>
                           <span className="text-[7px] font-bold text-gray-500">Interior</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                           <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=100" alt="Suspension" className="w-full h-full object-cover opacity-90" /></div>
                           <span className="text-[7px] font-bold text-gray-500">Suspension</span>
                        </div>
                    </div>
                  </div>
                  
                  {/* Fake App UI Grid */}
                  <div className="flex-1 bg-white px-4 grid grid-cols-2 gap-x-3 gap-y-4 overflow-hidden pt-2">
                    {/* Product 1 */}
                    <div className="flex flex-col">
                        <div className="w-full aspect-square bg-[#F4F4F4] rounded-[1.2rem] mb-2.5 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1552689486-f6773047d19f?auto=format&fit=crop&q=80&w=200" alt="Product 1" className="w-full h-full object-cover mix-blend-multiply" /></div>
                        <p className="text-[10px] font-extrabold text-[#111] leading-tight">OMR 45.00</p>
                        <p className="text-[8px] font-semibold text-gray-400 mt-0.5">Oil Filter</p>
                    </div>
                    {/* Product 2 */}
                    <div className="flex flex-col relative">
                        <div className="absolute top-2 right-2 bg-[#4ADE80] text-[#111] text-[6px] font-extrabold px-1.5 py-0.5 rounded-sm z-10 tracking-wide">15%</div>
                        <div className="w-full aspect-square bg-[#F4F4F4] rounded-[1.2rem] mb-2.5 flex items-center justify-center p-3"><img src="https://images.unsplash.com/photo-1598971576404-e3505cdd0412?auto=format&fit=crop&q=80&w=200" alt="Product 2" className="w-full h-full object-contain mix-blend-multiply" /></div>
                        <p className="text-[10px] font-extrabold text-[#111] leading-tight">OMR 120.00 <span className="line-through text-gray-300 ml-1 font-semibold text-[8px]">OMR 140.00</span></p>
                        <p className="text-[8px] font-semibold text-gray-400 mt-0.5">LED Headlight</p>
                    </div>
                    {/* Product 3 */}
                    <div className="flex flex-col relative">
                        <div className="absolute top-2 right-2 bg-[#4ADE80] text-[#111] text-[6px] font-extrabold px-1.5 py-0.5 rounded-sm z-10 tracking-wide">30%</div>
                        <div className="w-full aspect-square bg-[#F4F4F4] rounded-[1.2rem] mb-2.5 flex items-center justify-center p-3"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=200" alt="Product 3" className="w-full h-full object-cover mix-blend-multiply" /></div>
                        <p className="text-[10px] font-extrabold text-[#111] leading-tight">OMR 85.00 <span className="line-through text-gray-300 ml-1 font-semibold text-[8px]">OMR 120.00</span></p>
                        <p className="text-[8px] font-semibold text-gray-400 mt-0.5">Brake Pads</p>
                    </div>
                    {/* Product 4 */}
                    <div className="flex flex-col">
                        <div className="w-full aspect-square bg-[#F4F4F4] rounded-[1.2rem] mb-2.5 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1616423641405-b4ebfa313c05?auto=format&fit=crop&q=80&w=200" alt="Product 4" className="w-full h-full object-cover mix-blend-multiply opacity-90" /></div>
                        <p className="text-[10px] font-extrabold text-[#111] leading-tight">OMR 32.00</p>
                        <p className="text-[8px] font-semibold text-gray-400 mt-0.5">Floor Mats</p>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="h-[4.5rem] bg-white border-t border-gray-50 flex justify-between items-center px-6 pb-4">
                    <svg className="w-5 h-5 text-gray-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <svg className="w-5 h-5 text-gray-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <svg className="w-5 h-5 text-red-400 cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    <svg className="w-5 h-5 text-gray-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                </div>
                  
                {/* Floating Element Top Left (Ratings) */}
                <div className="absolute left-0 md:left-4 top-20 bg-white p-4 rounded-[1.2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex gap-4 animate-[pulse_5s_ease-in-out_infinite] z-20">
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 mb-2">Ratings</p>
                    <div className="bg-gray-100 text-gray-500 text-[8px] font-bold px-2 py-1 rounded-full w-fit mb-3">Last 6 months</div>
                    <div className="flex items-end gap-2">
                      <p className="text-xl font-extrabold text-[#111]">8.14k</p>
                      <p className="text-[10px] font-bold text-green-500 mb-1">+16.2%</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden shrink-0 mt-1">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Floating Element Bottom Right (Product Insight) */}
                <div className="absolute right-0 md:right-8 bottom-28 bg-white p-4 rounded-[1.2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 min-w-[240px] z-20 hidden md:block">
                  <div className="flex gap-3 mb-4 border-b border-gray-50 pb-4">
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-gray-800">Product insight</p>
                      <p className="text-[8px] text-gray-400 mt-1">Published on 12 MAY 2024 -<br/>6:10 PM</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                       <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80" alt="Product" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex justify-between items-end gap-4">
                    <div>
                      <p className="text-[8px] text-gray-400 font-bold mb-1">Product reached</p>
                      <p className="text-lg font-extrabold text-[#111]">21,153</p>
                    </div>
                    <div className="flex items-end gap-1.5 pb-1">
                      <div className="w-2 h-4 bg-gray-200 rounded-[2px]"></div>
                      <div className="w-2 h-6 bg-[#111] rounded-[2px]"></div>
                      <div className="w-2 h-4 bg-gray-200 rounded-[2px]"></div>
                      <div className="w-2 h-9 bg-[#111] rounded-[2px]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Text and Stats Grid */}
              <div className="w-full lg:w-1/2 space-y-10">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111]">The Journey of Our Success</h1>
                  <p className="text-gray-500 leading-relaxed text-lg pt-2">
                    Our story is a testament to our passion for automotive excellence. Driven by a commitment to quality and service, we have built a trusted destination for car enthusiasts and daily drivers alike.
                  </p>
                </div>

                {/* Stats 4-Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-100 p-6 rounded-[1.2rem] shadow-sm flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center shrink-0">
                      <Download className="w-5 h-5 text-[#111]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#111]">50K+</h3>
                      <p className="text-sm text-gray-500 font-medium">Parts Delivered</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 p-6 rounded-[1.2rem] shadow-sm flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[#111]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#111]">10K+</h3>
                      <p className="text-sm text-gray-500 font-medium">Happy Drivers</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 p-6 rounded-[1.2rem] shadow-sm flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#111]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#111]">2300+</h3>
                      <p className="text-sm text-gray-500 font-medium">Reviews</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 p-6 rounded-[1.2rem] shadow-sm flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center shrink-0">
                      <Box className="w-5 h-5 text-[#111]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#111]">150+</h3>
                      <p className="text-sm text-gray-500 font-medium">Partner Brands</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button className="bg-[#1C1C1C] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-black transition-colors shadow-lg shadow-black/10">
                    Start Free Trial
                  </button>
                  <button className="bg-white text-[#111] border border-gray-200 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 2: OUR STORY (Based on Image 2)
            ========================================= */}
        <div className="container mx-auto px-4 lg:px-8 mb-40 pt-10">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
            
            {/* Top Left: Title and Bold Text */}
            <div className="space-y-6 flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-[#111]">Our story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-400 leading-snug">
                Genuine parts <span className="text-[#111]">Premium accessories</span> Reliable service <span className="text-[#111]">Automotive excellence.</span>
              </h3>
            </div>

            {/* Top Right: Two small images */}
            <div className="grid grid-cols-2 gap-6 h-[220px] md:h-[280px]">
              <div className="bg-gray-100 rounded-[2rem] overflow-hidden relative shadow-sm">
                <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80" alt="Engine" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-[#111] text-white text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">Parts</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-[2rem] overflow-hidden relative shadow-sm">
                <img src="https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80" alt="Accessories" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-[#111] text-white text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">Accessories</span>
                </div>
              </div>
            </div>

            {/* Bottom Left: One Large Image */}
            <div className="h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden relative shadow-sm">
              <img src="https://images.unsplash.com/photo-1486262715619-670810a044e1?auto=format&fit=crop&q=80" alt="Garage" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" />
            </div>

            {/* Bottom Right: Text, Stats, Play Button */}
            <div className="flex flex-col justify-center space-y-10 pl-0 lg:pl-6">
              <p className="text-gray-500 leading-relaxed text-lg">
                Oman Auto Parts was born out of a passion for high-performance vehicles and reliable components. We set out with a clear vision: to bridge the gap between premium auto parts and everyday accessibility. Today, our catalog spans across essential maintenance components, performance upgrades, and high-quality accessories.
              </p>
              
              <div className="grid grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <div>
                  <h4 className="text-4xl font-extrabold text-[#111] mb-1">3+</h4>
                  <p className="text-sm text-gray-500 font-medium">Categories</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-[#111] mb-1">100%</h4>
                  <p className="text-sm text-gray-500 font-medium">Genuine</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-[#111] mb-1">24/7</h4>
                  <p className="text-sm text-gray-500 font-medium">Support</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="Avatar" /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="Avatar" /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="Avatar" /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+</div>
                </div>
                <button className="flex items-center gap-3 text-sm font-bold text-[#111] hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                    <Play className="w-4 h-4 ml-1" />
                  </div>
                  WATCH OUR STORY
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 3: TABS / VALUES (Based on Image 3)
            ========================================= */}
        <div className="container mx-auto px-4 lg:px-8 pt-6 lg:pt-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left side: Text and Tabs */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] leading-tight">
                Our Core Values & Legacy
              </h2>
              
              <p className="text-gray-500 leading-relaxed text-lg">
                Operating a seamless e-commerce model means we focus entirely on making your shopping experience smooth, fast, and reliable. We are committed to providing our customers with the best possible lifestyle products.
              </p>

              {/* Tabs */}
              <div className="flex flex-wrap items-center gap-2 bg-gray-50 p-1.5 rounded-2xl w-fit">
                <button 
                  onClick={() => setActiveTab('quality')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'quality' ? 'bg-white text-[#111] shadow-sm' : 'text-gray-500 hover:text-[#111]'}`}
                >
                  Quality
                </button>
                <button 
                  onClick={() => setActiveTab('customer')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'customer' ? 'bg-white text-[#111] shadow-sm' : 'text-gray-500 hover:text-[#111]'}`}
                >
                  Customer-Centric
                </button>
                <button 
                  onClick={() => setActiveTab('durability')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'durability' ? 'bg-white text-[#111] shadow-sm' : 'text-gray-500 hover:text-[#111]'}`}
                >
                  Durability
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[160px] pt-4">
                {activeTab === 'quality' && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease-in-out]">
                    <h3 className="text-xl font-bold text-[#111]">Uncompromised Quality</h3>
                    <p className="text-gray-500 leading-relaxed">
                      We do not cut corners. From material selection in our replacement parts to the fine engineering of our performance gear, quality is our top priority. Every single product we sell undergoes rigorous quality curation, ensuring it meets the high standards our customers and their vehicles deserve.
                    </p>
                  </div>
                )}
                {activeTab === 'customer' && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease-in-out]">
                    <h3 className="text-xl font-bold text-[#111]">Customer-Centric Approach</h3>
                    <p className="text-gray-500 leading-relaxed">
                      Operating a seamless e-commerce model means we focus entirely on making your shopping experience smooth, fast, and reliable. Our goal is to redefine automotive parts retail in Oman by placing customer satisfaction and vehicle safety at the heart of everything we do.
                    </p>
                  </div>
                )}
                {activeTab === 'durability' && (
                  <div className="space-y-4 animate-[fadeIn_0.3s_ease-in-out]">
                    <h3 className="text-xl font-bold text-[#111]">Reliable Durability</h3>
                    <p className="text-gray-500 leading-relaxed">
                      We believe in the power of reliable engineering. Our products are sourced to provide long-lasting performance and undeniable value. Whether it is essential brake components or advanced lighting systems, we bridge the gap between high-end performance and everyday reliability.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right side: Image with floating card */}
            <div className="relative">
              <div className="w-full aspect-[4/5] md:aspect-square bg-gray-100 rounded-[3rem] overflow-hidden">
                 <img src="/assets/ceo.png" alt="Shoriful Islam Nishat" className="w-full h-full object-cover grayscale" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -left-4 md:-left-12 -bottom-8 md:bottom-12 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 min-w-[220px]">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <span className="text-xs font-bold text-gray-500">Founder & CEO</span>
                  <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Active
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#111]" />
                    <p className="text-sm font-bold text-[#111]">Shoriful Islam Nishat</p>
                  </div>
                  <p className="text-xs text-gray-500 italic">"Our goal is to redefine premium auto parts e-commerce in Oman."</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Join the Legacy CTA */}
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center mt-6 border-t border-gray-100 pt-20">
          <h3 className="text-3xl font-extrabold text-[#111] mb-6">Drive with Confidence</h3>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Whether you are repairing your daily driver, upgrading your performance car, or shopping for essential maintenance parts, we are here to accompany you on that journey. Experience the next level of automotive retail.
          </p>
          <Link to="/parts" className="inline-flex items-center gap-3 bg-[#111] text-white px-10 py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-black transition-all shadow-lg hover:-translate-y-1">
            Explore Store <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;