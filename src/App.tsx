import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Calendar, Mail, Play, X } from "lucide-react";

const products = [
  {
    name: "Classic Golf Sun Cream SPF50+",
    subtitle: "Strong UV protection with a smooth, non-whitening finish",
    tag: "Daily Sun Care",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=900",
  },
  {
    name: "Classic Golf Sun Stick SPF50+",
    subtitle: "Portable, non-greasy sun protection for outdoor lifestyles",
    tag: "Outdoor Care",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=900",
  },
  {
    name: "Blue Blended Toner Essence",
    subtitle: "Hydrating toner and nourishing essence in one formula",
    tag: "Hydration",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=900",
  },
  {
    name: "Blue Blended Lotion Essence",
    subtitle: "Lightweight lotion and essence combined for daily care",
    tag: "Moisture Care",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=900",
  },
  {
    name: "Be Brave All-in-One BB Essence",
    subtitle: "Moisturizing, sun protection, and natural coverage in one step",
    tag: "All-in-One",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900",
  },
];

const videos = [
  {
    title: "Brand Review Video",
    caption: "Insert YouTube review or product introduction video here.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Product Experience",
    caption: "Use this section for influencer, buyer, or customer review content.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Grooming Routine",
    caption: "Add a YouTube embed URL to showcase the actual product routine.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function App() {
  const productRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(() => {
    if (typeof window !== "undefined") {
      const today = new Date().toISOString().split('T')[0];
      const hiddenDate = localStorage.getItem("popupHiddenDate");
      return hiddenDate !== today;
    }
    return true;
  });
  const [dontShowToday, setDontShowToday] = useState(false);

  const handleClosePopup = () => {
    if (dontShowToday) {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem("popupHiddenDate", today);
    }
    setShowPopup(false);
  };

  useEffect(() => {
    // @ts-ignore
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    const cal = window.Cal;
    if (cal) {
      cal("init", "vietbeauty-2026", {origin:"https://app.cal.com"});
      cal.ns["vietbeauty-2026"]("inline", {
        elementOrSelector:"#my-cal-inline-vietbeauty-2026",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "connek-bccs2e/vietbeauty-2026",
      });
      cal.ns["vietbeauty-2026"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    }
  }, []);

  const scrollProducts = (direction: "left" | "right") => {
    if (!productRef.current) return;
    productRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#cfcfcf] selection:bg-white selection:text-black font-sans" style={{ fontStyle: "normal" }}>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#9a9a9a]">
          <div className="hidden gap-8 md:flex">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#exhibition" className="hover:text-white transition-colors">Exhibition</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#home" className="ml-auto font-display text-2xl font-bold uppercase tracking-tighter text-white md:ml-0 hover:text-[#9a9a9a] transition-colors">Scott Hamish</a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://drive.google.com/thumbnail?id=1qyhInF4EW745qRsOQ-GEVychXdDLG8S7&sz=w2400"
          alt="Scott Hamish Scottish heritage background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f0f0f]/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6"
        >
          <p className="mb-6 inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#9a9a9a]">Established 2020</p>
          <h1 className="max-w-4xl text-6xl font-semibold font-display leading-[0.95] tracking-[-0.01em] md:text-8xl lg:text-[7.5rem] text-white uppercase italic-none">
            Heritage<br />& Strength
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#cfcfcf] md:text-xl">
            Inspired by the rugged dignity and natural resilience of Scotland. Redefining modern grooming through bold precision.
          </p>
          <div className="mt-12">
            <a href="#about" className="inline-block bg-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-black transition hover:bg-[#cfcfcf] shadow-2xl">
              Discover Heritage
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative bg-[#0f0f0f] py-40 border-b border-white/5">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-20 md:grid-cols-2 md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9a9a9a] mb-8">The Brand Vision</p>
              <h2 className="font-display text-5xl font-semibold leading-[0.95] md:text-7xl text-white tracking-[-0.01em] uppercase">Scotland, <br/>The Great <br/>Heritage</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-10 text-xl leading-relaxed text-[#cfcfcf] font-medium pt-4 md:pt-40"
            >
              <p>
                Scott Hamish carries the spirit of the Scots—rugged yet gentle, rooted in a history of independence and proud tradition.
              </p>
              <p>
                We embody Scotland’s legacy, offering grooming solutions that honor masculine skin concerns while elevating a man's daily life to something more distinguished.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="product" className="bg-[#1a1a1a] py-32 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9a9a9a] mb-4">Grooming Collection</p>
              <h2 className="font-display text-5xl font-semibold leading-[0.95] md:text-7xl text-white tracking-[-0.01em] uppercase">Premium Range</h2>
            </motion.div>
            <div className="flex gap-4">
              <button onClick={() => scrollProducts("left")} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" aria-label="Scroll left"><ChevronLeft size={24} /></button>
              <button onClick={() => scrollProducts("right")} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" aria-label="Scroll right"><ChevronRight size={24} /></button>
            </div>
          </div>

          <div ref={productRef} className="flex snap-x gap-8 overflow-x-auto scroll-smooth pb-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {products.map((product, idx) => (
              <motion.article 
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[300px] md:min-w-[420px] snap-start group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#181818] mb-8">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" referrerPolicy="no-referrer" />
                  <span className="absolute left-6 top-6 bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black shadow-2xl">{product.tag}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight uppercase">{product.name}</h3>
                <p className="text-sm text-[#cfcfcf] leading-relaxed font-medium">{product.subtitle}</p>
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a9a9a]">Product Inquiry</span>
                  <div className="w-3 h-[2px] bg-white"></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#0f0f0f] py-32 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9a9a9a] mb-6">Media Presence</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] md:text-7xl text-white tracking-[-0.01em] uppercase">Reviews</h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-[#cfcfcf] font-medium">Explore the experiences of those who have embraced the Scott Hamish grooming routine.</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {videos.map((video, idx) => (
              <motion.article 
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-white/5 bg-[#181818] p-6 shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden bg-black mb-8">
                  <iframe className="h-full w-full opacity-60 group-hover:opacity-100 transition-opacity" src={video.embed} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div className="pointer-events-none absolute left-6 top-6 rounded-full bg-white p-2 text-black shadow-xl"><Play size={16} fill="currentColor" /></div>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight uppercase">{video.title}</h3>
                <p className="text-sm leading-relaxed text-[#cfcfcf] font-medium">{video.caption}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="exhibition" className="bg-[#1a1a1a] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9a9a9a] mb-6">Exhibition</p>
              <h2 className="font-display text-5xl font-semibold leading-[0.95] md:text-7xl text-white tracking-[-0.01em] mb-12 uppercase">Vietbeauty <br/>2026</h2>
              
              <div className="space-y-12">
                <div className="flex gap-10 items-start">
                  <div className="text-white mt-1"><Calendar size={24} /></div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9a9a9a] mb-2">Exhibition Dates</h4>
                    <p className="font-display text-3xl font-bold text-white">2026.07.23 – 2026.07.25</p>
                  </div>
                </div>
                <div className="flex gap-10 items-start">
                  <div className="text-white mt-1"><Mail size={24} /></div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9a9a9a] mb-2">Venue</h4>
                    <p className="font-display text-3xl font-bold text-white uppercase">Ho Chi Minh City</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <a href="#booking" className="inline-block bg-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-black transition hover:bg-[#cfcfcf] shadow-2xl">
                  Book a Meeting
                </a>
              </div>
            </motion.div>

            <motion.div
              id="booking"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#181818] p-4 md:p-8 border border-white/5 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#9a9a9a] mb-1">Reservation Portal</p>
                  <h3 className="font-display text-2xl font-bold text-white uppercase">Meeting Slot</h3>
                </div>
                <Calendar size={24} className="opacity-30 text-white" />
              </div>
              <div className="bg-white overflow-hidden">
                 <div id="my-cal-inline-vietbeauty-2026" className="w-full h-[700px] overflow-scroll"></div>
              </div>
              <p className="mt-6 text-center text-[10px] uppercase tracking-widest font-bold text-white/20">Connect directly with our global distribution team</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0f0f0f] py-40">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9a9a9a] mb-6">Contact Us</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] md:text-7xl text-white tracking-[-0.01em] uppercase">Join Us</h2>
          </div>
          <form className="grid gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <input className="border-b border-white/10 bg-transparent py-5 text-lg text-white outline-none focus:border-white transition-colors placeholder:text-[#9a9a9a]/40 font-medium" placeholder="Name" />
              <input className="border-b border-white/10 bg-transparent py-5 text-lg text-white outline-none focus:border-white transition-colors placeholder:text-[#9a9a9a]/40 font-medium" placeholder="Email" />
            </div>
            <input className="border-b border-white/10 bg-transparent py-5 text-lg text-white outline-none focus:border-white transition-colors placeholder:text-[#9a9a9a]/40 font-medium" placeholder="Company / Region" />
            <textarea className="min-h-32 border-b border-white/10 bg-transparent py-5 text-lg text-white outline-none focus:border-white transition-colors placeholder:text-[#9a9a9a]/40 font-medium resize-none" placeholder="Message" />
            <button type="button" className="mt-10 bg-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-black transition hover:bg-[#cfcfcf] shadow-2xl">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#0f0f0f] py-24 border-t border-white/5 font-sans">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column: Company Info */}
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tighter uppercase mb-6">Scott Hamish</h3>
                <div className="space-y-4 text-xs text-[#9a9a9a] leading-relaxed">
                  <p className="text-[#cfcfcf] font-semibold text-lg">Customer Support: +82-70-7777-2893</p>
                  <p>
                    Business Hours: Weekdays 10:00 AM – 6:00 PM<br/>
                    Lunch Break: 12:30 PM – 1:30 PM<br/>
                    Closed: Saturdays, Sundays, and Public Holidays
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-[11px] text-[#9a9a9a] leading-relaxed uppercase tracking-wider">
                <p>
                  <span className="text-white font-bold">Cheon365 Co., Ltd.</span> | CEO: Hong-jun Yoon<br/>
                  Business Registration: 730-86-01496<br/>
                  E-commerce: 2023-Seoul-Seocho-1439
                </p>
                <p>
                  Address: 1F, 38 Banpo-daero 9-gil, Seocho-gu,<br/>
                  Seoul, South Korea
                </p>
                <p>
                  Privacy Officer: Hong-jun Yoon | <Mail size={12} className="inline mr-1" /> help@cheon365.com
                </p>
                <p className="mt-8 text-[10px]">© 2020 Cheon365 Co., Ltd. All rights reserved.</p>
              </div>
            </div>

            {/* Right Column: Community */}
            <div className="space-y-12 lg:pl-16 lg:border-l lg:border-white/5">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">Community</h4>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5 lg:grid-cols-2">
                  {['Notice', 'Q&A', 'Review', 'Event', 'Delivery'].map((item) => (
                    <button 
                      key={item}
                      className="border border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#9a9a9a] transition hover:border-white hover:text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Entry Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg border border-white/20 bg-[#111111] p-10 shadow-2xl"
            >
              <button 
                onClick={handleClosePopup}
                className="absolute right-6 top-6 text-[#9a9a9a] hover:text-white transition-colors"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9a9a9a] mb-6">World Event</p>
                <h2 className="font-display text-3xl font-semibold leading-tight text-white uppercase mb-4">
                  Meet Scott Hamish <br/>at Vietbeauty 2026
                </h2>
                <p className="text-[#cfcfcf] text-sm leading-relaxed mb-8">
                  Book a meeting with us during Vietbeauty & Cosmobeauté Vietnam 2026.
                </p>
                
                <div className="mb-10 inline-block bg-white/5 border border-white/10 px-6 py-3">
                  <p className="text-[10px] font-bold text-[#9a9a9a] uppercase tracking-widest mb-1">Exhibition Dates</p>
                  <p className="font-display text-xl font-bold text-white tracking-widest">2026.07.23 – 2026.07.25</p>
                </div>

                <div className="flex flex-col gap-3">
                  <a 
                    href="#exhibition" 
                    onClick={() => {
                      handleClosePopup();
                      document.getElementById('exhibition')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-black transition hover:bg-[#cfcfcf]"
                  >
                    View Exhibition
                  </a>
                  <button 
                    onClick={handleClosePopup}
                    className="w-full border border-white/20 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-white/5"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2">
                  <input 
                    type="checkbox" 
                    id="dontShowToday" 
                    checked={dontShowToday}
                    onChange={(e) => setDontShowToday(e.target.checked)}
                    className="h-4 w-4 rounded border-white/20 bg-transparent text-white focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="dontShowToday" className="text-[9px] uppercase tracking-widest text-[#9a9a9a] font-bold cursor-pointer hover:text-white transition-colors">
                    Do not show again today
                  </label>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
