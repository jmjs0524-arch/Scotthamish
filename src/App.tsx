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
    <div className="min-h-screen bg-[#00075A] text-[#e6e1a8] selection:bg-[#FEF7A4] selection:text-[#00075A]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "normal" }}>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#FEF7A4]/10 bg-[#00075A]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#cfc87a]">
          <div className="hidden gap-8 md:flex">
            <a href="#about" className="hover:text-[#FEF7A4] transition-colors">About</a>
            <a href="#product" className="hover:text-[#FEF7A4] transition-colors">Product</a>
            <a href="#reviews" className="hover:text-[#FEF7A4] transition-colors">Reviews</a>
            <a href="#exhibition" className="hover:text-[#FEF7A4] transition-colors">Exhibition</a>
            <a href="#contact" className="hover:text-[#FEF7A4] transition-colors">Contact</a>
          </div>
          <a href="#home" className="ml-auto font-serif text-2xl font-bold normal-case tracking-tight text-[#FEF7A4] md:ml-0 hover:text-[#cfc87a] transition-colors">Scott Hamish</a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://drive.google.com/thumbnail?id=1qyhInF4EW745qRsOQ-GEVychXdDLG8S7&sz=w2400"
          alt="Scott Hamish Scottish heritage background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00075A]/45" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6"
        >
          <p className="mb-6 inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#cfc87a]">Established 2026</p>
          <h1 className="max-w-4xl text-6xl font-bold leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-[7rem] text-[#FEF7A4]">
            Timeless<br />Scottish Heritage
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#e6e1a8] md:text-xl">
            Premium men’s grooming care inspired by the rugged dignity, independence, and natural strength of Scotland.
          </p>
          <div className="mt-12">
            <a href="#about" className="inline-block bg-[#FEF7A4] px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#00075A] transition hover:opacity-90 shadow-2xl">
              Discover Heritage
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative flex min-h-screen items-center overflow-hidden bg-[#00075A]">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#cfc87a] mb-8">The Brand Vision</p>
            <h2 className="font-serif text-5xl font-bold leading-tight md:text-7xl text-[#FEF7A4] tracking-[-0.03em] mb-10">Scotland, The Great Heritage for Your Skin</h2>
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[#e6e1a8] font-medium max-w-xl">
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

      <section id="product" className="bg-[#00075A] py-32 border-y border-[#FEF7A4]/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#cfc87a] mb-4">Grooming Collection</p>
              <h2 className="font-serif text-5xl font-bold md:text-7xl text-[#FEF7A4] tracking-[-0.03em]">Premium Range</h2>
            </motion.div>
            <div className="flex gap-4">
              <button onClick={() => scrollProducts("left")} className="w-14 h-14 rounded-full border border-[#FEF7A4]/20 flex items-center justify-center text-[#FEF7A4] hover:bg-[#FEF7A4] hover:text-[#00075A] transition-all" aria-label="Scroll left"><ChevronLeft size={24} /></button>
              <button onClick={() => scrollProducts("right")} className="w-14 h-14 rounded-full border border-[#FEF7A4]/20 flex items-center justify-center text-[#FEF7A4] hover:bg-[#FEF7A4] hover:text-[#00075A] transition-all" aria-label="Scroll right"><ChevronRight size={24} /></button>
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
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0f6e] mb-8">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                  <span className="absolute left-6 top-6 bg-[#FEF7A4] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#00075A] shadow-2xl">{product.tag}</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#FEF7A4] mb-3 tracking-tight">{product.name}</h3>
                <p className="text-base text-[#e6e1a8] leading-relaxed font-medium">{product.subtitle}</p>
                <div className="mt-8 pt-8 border-t border-[#FEF7A4]/10 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#cfc87a]">Product Inquiry</span>
                  <div className="w-3 h-[2px] bg-[#cfc87a]"></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#00075A] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#cfc87a] mb-6">Media Presence</p>
            <h2 className="font-serif text-5xl font-bold md:text-7xl text-[#FEF7A4] tracking-[-0.03em]">Video Reviews</h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-[#e6e1a8] font-medium">Explore the experiences of those who have embraced the Scott Hamish grooming routine.</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {videos.map((video, idx) => (
              <motion.article 
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-[#FEF7A4]/10 bg-[#0a0f6e] p-6 shadow-2xl"
              >
                <div className="relative aspect-video overflow-hidden bg-[#00075A] mb-8">
                  <iframe className="h-full w-full opacity-70 group-hover:opacity-100 transition-opacity" src={video.embed} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div className="pointer-events-none absolute left-6 top-6 rounded-full bg-[#FEF7A4] p-2 text-[#00075A] shadow-xl"><Play size={16} fill="currentColor" /></div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#FEF7A4] mb-4 tracking-tight">{video.title}</h3>
                <p className="text-sm leading-relaxed text-[#e6e1a8] font-medium">{video.caption}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="exhibition" className="bg-[#00075A] py-32 border-t border-[#FEF7A4]/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#cfc87a] mb-6">Exhibition</p>
              <h2 className="font-serif text-5xl font-bold leading-[1.1] md:text-6xl text-[#FEF7A4] tracking-[-0.03em] mb-12">Vietbeauty & <br/>Cosmobeauté 2026</h2>
              
              <div className="space-y-12">
                <div className="flex gap-10 items-start">
                  <div className="text-[#cfc87a] mt-1"><Calendar size={24} /></div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#cfc87a] mb-2">Exhibition Date</h4>
                    <p className="font-serif text-3xl font-bold text-[#FEF7A4]">2026.07.23 — 07.25</p>
                  </div>
                </div>
                <div className="flex gap-10 items-start">
                  <div className="text-[#cfc87a] mt-1"><Mail size={24} /></div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#cfc87a] mb-2">Venue</h4>
                    <p className="font-serif text-3xl font-bold text-[#FEF7A4]">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <a href="#booking" className="inline-block bg-[#FEF7A4] px-12 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#00075A] transition hover:opacity-90 shadow-2xl">
                  Book a Meeting
                </a>
              </div>
            </motion.div>

            <motion.div
              id="booking"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0f6e] p-4 md:p-8 border border-[#FEF7A4]/10 shadow-[0_0_50px_rgba(254,247,164,0.05)]"
            >
              <div className="mb-6 flex items-center justify-between border-b border-[#FEF7A4]/10 pb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#cfc87a] mb-1">Reservation Portal</p>
                  <h3 className="font-serif text-3xl font-bold text-[#FEF7A4]">Schedule Meeting</h3>
                </div>
                <Calendar size={24} className="opacity-30 text-[#FEF7A4]" />
              </div>
              <div className="min-h-[600px] bg-white overflow-hidden">
                 <iframe src="https://cal.com/scott-hamish/meeting?embed=true" title="Meeting Slot" className="w-full h-[600px]" />
              </div>
              <p className="mt-6 text-center text-[10px] uppercase tracking-widest font-bold text-[#FEF7A4]/30">Connect directly with our global distribution team</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#00075A] py-40">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#cfc87a] mb-6">Contact Us</p>
            <h2 className="font-serif text-5xl font-bold md:text-6xl text-[#FEF7A4] tracking-[-0.03em]">Join the Heritage</h2>
          </div>
          <form className="grid gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <input className="border-b border-[#FEF7A4]/20 bg-transparent py-5 text-lg text-[#FEF7A4] outline-none focus:border-[#FEF7A4] transition-colors placeholder:text-[#cfc87a]/40 font-medium" placeholder="Name" />
              <input className="border-b border-[#FEF7A4]/20 bg-transparent py-5 text-lg text-[#FEF7A4] outline-none focus:border-[#FEF7A4] transition-colors placeholder:text-[#cfc87a]/40 font-medium" placeholder="Email" />
            </div>
            <input className="border-b border-[#FEF7A4]/20 bg-transparent py-5 text-lg text-[#FEF7A4] outline-none focus:border-[#FEF7A4] transition-colors placeholder:text-[#cfc87a]/40 font-medium" placeholder="Company / Region" />
            <textarea className="min-h-32 border-b border-[#FEF7A4]/20 bg-transparent py-5 text-lg text-[#FEF7A4] outline-none focus:border-[#FEF7A4] transition-colors placeholder:text-[#cfc87a]/40 font-medium resize-none" placeholder="Message" />
            <button type="button" className="mt-10 bg-[#FEF7A4] px-12 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#00075A] transition hover:opacity-90 shadow-2xl">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#00075A] py-20 border-t border-[#FEF7A4]/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 px-6 text-sm text-[#e6e1a8]/60 md:flex-row items-start font-sans">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold text-[#FEF7A4] tracking-tighter">Scott Hamish</h3>
            <p className="max-w-xs leading-relaxed font-medium">Defining the modern gentleman through premium Scottish-inspired grooming care.</p>
          </div>
          <div className="grid grid-cols-2 gap-20 md:text-right">
             <div className="space-y-4">
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#FEF7A4]">Contact</h4>
               <p className="flex items-center gap-2 md:justify-end hover:text-[#FEF7A4] transition-colors cursor-pointer"><Mail size={14} /> partner@scotthamish.com</p>
             </div>
             <div className="space-y-4">
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#FEF7A4]">Legal</h4>
               <p className="hover:text-[#FEF7A4] transition-colors cursor-pointer">© 2026 Scott Hamish. All rights reserved.</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
