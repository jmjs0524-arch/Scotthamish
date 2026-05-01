import React, { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Calendar, Mail, Play } from "lucide-react";

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

  const scrollProducts = (direction: "left" | "right") => {
    if (!productRef.current) return;
    productRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white selection:bg-[#c9b37e] selection:text-black" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "normal" }}>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#2a2a2a]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9b37e]">
          <div className="hidden gap-8 md:flex">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#exhibition" className="hover:text-white transition-colors">Exhibition</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#home" className="ml-auto font-serif text-2xl font-bold normal-case tracking-tight text-white md:ml-0 hover:text-[#c9b37e] transition-colors">Scott Hamish</a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://drive.google.com/thumbnail?id=1qyhInF4EW745qRsOQ-GEVychXdDLG8S7&sz=w2400"
          alt="Scott Hamish Scottish heritage background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6"
        >
          <p className="mb-6 inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#c9b37e]">Established 2026</p>
          <h1 className="max-w-4xl text-6xl font-bold leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-[7rem]">
            Timeless<br />Scottish Heritage
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#d1d1d1] md:text-xl">
            Premium men’s grooming care inspired by the rugged dignity, independence, and natural strength of Scotland.
          </p>
          <div className="mt-12">
            <a href="#about" className="inline-block border-2 border-white bg-transparent px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black shadow-2xl">
              Discover Heritage
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative flex min-h-screen items-center overflow-hidden bg-[#2a2a2a]">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c9b37e] mb-8">The Brand Vision</p>
            <h2 className="font-serif text-5xl font-bold leading-tight md:text-7xl text-white tracking-[-0.03em] mb-10">Scotland, The Great Heritage for Your Skin</h2>
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[#d1d1d1] font-medium max-w-xl">
              <p>
                Scott Hamish carries the spirit of the Scots—rugged yet gentle, rooted in a history of independence and proud tradition.
              </p>
              <p>
                We embody Scotland’s legacy, offering grooming solutions that honor masculine skin concerns while elevating a man's daily life to something more distinguished.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="product" className="bg-[#2a2a2a] py-32 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c9b37e] mb-4">Grooming Collection</p>
              <h2 className="font-serif text-5xl font-bold md:text-7xl text-white tracking-[-0.03em]">Premium Range</h2>
            </motion.div>
            <div className="flex gap-4">
              <button onClick={() => scrollProducts("left")} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#c9b37e] hover:text-black hover:border-[#c9b37e] transition-all" aria-label="Scroll left"><ChevronLeft size={24} /></button>
              <button onClick={() => scrollProducts("right")} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#c9b37e] hover:text-black hover:border-[#c9b37e] transition-all" aria-label="Scroll right"><ChevronRight size={24} /></button>
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
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-8">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                  <span className="absolute left-6 top-6 bg-[#c9b37e] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black shadow-2xl">{product.tag}</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-3 tracking-tight">{product.name}</h3>
                <p className="text-base text-[#d1d1d1] leading-relaxed font-medium">{product.subtitle}</p>
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9b37e]">Product Inquiry</span>
                  <div className="w-3 h-[2px] bg-[#c9b37e]"></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#2a2a2a] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c9b37e] mb-6">Media Presence</p>
            <h2 className="font-serif text-5xl font-bold md:text-7xl text-white tracking-[-0.03em]">Video Reviews</h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-[#d1d1d1] font-medium">Explore the experiences of those who have embraced the Scott Hamish grooming routine.</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {videos.map((video, idx) => (
              <motion.article 
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-white/5 bg-[#0a0a0a] p-6 shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden bg-black mb-8">
                  <iframe className="h-full w-full opacity-70 group-hover:opacity-100 transition-opacity" src={video.embed} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div className="pointer-events-none absolute left-6 top-6 rounded-full bg-[#c9b37e] p-2 text-black shadow-xl"><Play size={16} fill="black" /></div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">{video.title}</h3>
                <p className="text-sm leading-relaxed text-[#d1d1d1] font-medium">{video.caption}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="exhibition" className="bg-[#2a2a2a] py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c9b37e] mb-6">Exhibition</p>
              <h2 className="font-serif text-5xl font-bold leading-[1.1] md:text-6xl text-white tracking-[-0.03em] mb-12">Vietbeauty & <br/>Cosmobeauté 2026</h2>
              
              <div className="space-y-12">
                <div className="flex gap-10 items-start">
                  <div className="text-[#c9b37e] mt-1"><Calendar size={24} /></div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#c9b37e] mb-2">Exhibition Date</h4>
                    <p className="font-serif text-3xl font-bold text-white">2026.07.23 — 07.25</p>
                  </div>
                </div>
                <div className="flex gap-10 items-start">
                  <div className="text-[#c9b37e] mt-1"><Mail size={24} /></div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#c9b37e] mb-2">Venue</h4>
                    <p className="font-serif text-3xl font-bold text-white">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <a href="#booking" className="inline-block bg-[#c9b37e] px-12 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-black transition hover:bg-white shadow-2xl">
                  Book a Meeting
                </a>
              </div>
            </motion.div>

            <motion.div
              id="booking"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] p-4 md:p-8 border border-white/10 shadow-[0_0_50px_rgba(201,179,126,0.05)]"
            >
              <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#c9b37e] mb-1">Reservation Portal</p>
                  <h3 className="font-serif text-3xl font-bold text-white">Schedule Meeting</h3>
                </div>
                <Calendar size={24} className="opacity-30" />
              </div>
              <div className="min-h-[600px] bg-white overflow-hidden">
                 <iframe src="https://cal.com/scott-hamish/meeting?embed=true" title="Meeting Slot" className="w-full h-[600px]" />
              </div>
              <p className="mt-6 text-center text-[10px] uppercase tracking-widest font-bold text-white/30">Connect directly with our global distribution team</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#2a2a2a] py-40">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c9b37e] mb-6">Contact Us</p>
            <h2 className="font-serif text-5xl font-bold md:text-6xl text-white tracking-[-0.03em]">Join the Heritage</h2>
          </div>
          <form className="grid gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <input className="border-b border-white/20 bg-transparent py-5 text-lg text-white outline-none focus:border-[#c9b37e] transition-colors placeholder:text-white/20 font-medium" placeholder="Name" />
              <input className="border-b border-white/20 bg-transparent py-5 text-lg text-white outline-none focus:border-[#c9b37e] transition-colors placeholder:text-white/20 font-medium" placeholder="Email" />
            </div>
            <input className="border-b border-white/20 bg-transparent py-5 text-lg text-white outline-none focus:border-[#c9b37e] transition-colors placeholder:text-white/20 font-medium" placeholder="Company / Region" />
            <textarea className="min-h-32 border-b border-white/20 bg-transparent py-5 text-lg text-white outline-none focus:border-[#c9b37e] transition-colors placeholder:text-white/20 font-medium resize-none" placeholder="Message" />
            <button type="button" className="mt-10 bg-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-black transition hover:bg-[#c9b37e] shadow-2xl">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#2a2a2a] py-20 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 px-6 text-sm text-white/40 md:flex-row items-start font-sans">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold text-white tracking-tighter">Scott Hamish</h3>
            <p className="max-w-xs leading-relaxed font-medium">Defining the modern gentleman through premium Scottish-inspired grooming care.</p>
          </div>
          <div className="grid grid-cols-2 gap-20 md:text-right">
             <div className="space-y-4">
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Contact</h4>
               <p className="flex items-center gap-2 md:justify-end hover:text-white transition-colors cursor-pointer"><Mail size={14} /> partner@scotthamish.com</p>
             </div>
             <div className="space-y-4">
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Legal</h4>
               <p className="hover:text-white transition-colors cursor-pointer">© 2026 Scott Hamish. All rights reserved.</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
