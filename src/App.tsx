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
    <div className="min-h-screen bg-[#0d0d0d] text-[#cfcfcf] selection:bg-[#070a38] selection:text-white" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "normal" }}>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0d0d0d]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a90c7]">
          <div className="hidden gap-8 md:flex">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#exhibition" className="hover:text-white transition-colors">Exhibition</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#home" className="ml-auto font-serif text-2xl normal-case tracking-normal text-white md:ml-0 hover:text-[#8a90c7] transition-colors">Scott Hamish</a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <img
          src="https://drive.google.com/thumbnail?id=1qyhInF4EW745qRsOQ-GEVychXdDLG8S7&sz=w2400"
          alt="Scott Hamish Scottish heritage background"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 text-white"
        >
          <p className="mb-5 inline-block border border-[#8a90c7]/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8a90c7]">Established 2026</p>
          <h1 className="max-w-4xl text-6xl font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl lg:text-9xl">
            Timeless<br />Scottish Heritage
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-[#cfcfcf] md:text-xl">
            Premium men’s grooming care inspired by the rugged dignity, independence, and natural strength of Scotland.
          </p>
          <div className="mt-10">
            <a href="#about" className="inline-block bg-white px-9 py-5 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#8a90c7] hover:text-white">
              Discover Heritage
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="bg-[#070a38] py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a90c7]">About Scott Hamish</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl text-white">Scotland, The Great Heritage for your skin</h2>
            </div>
            <div className="space-y-6 text-[15px] leading-8 text-[#cfcfcf] font-medium opacity-90">
              <p>
                With a rugged yet gentle design, a history of struggle for freedom and independence, a unique culture and proud spirit that only they possess, and the thoughts, names, and inventions that changed the world, Scott Hamish carries the spirit of the Scots.
              </p>
              <p>
                Scott Hamish embodies Scotland’s heritage, offering grooming care that proposes solutions to men’s skin concerns and styling needs while making a man’s life more distinguished.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {[
              ["Urban Classy", "A refined, city-ready sensibility for men who value elegance and self-care."],
              ["Positive Energy", "A confident grooming ritual that brings vitality to daily life."],
              ["Timeless One Thing", "A lasting, classic approach to men’s skincare beyond passing trends."],
            ].map(([title, text]) => (
              <div key={title} className="border border-[#8a90c7]/10 bg-[#070a38]/50 p-8 shadow-sm">
                <h3 className="font-serif text-2xl text-white mb-4">{title}</h3>
                <p className="text-sm leading-7 text-[#cfcfcf] font-medium opacity-80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="bg-[#0d0d0d] px-6 py-28 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a90c7]">Product</p>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl text-white">Premium Grooming Collection</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scrollProducts("left")} className="rounded-full border border-white/20 p-3 text-white hover:bg-[#070a38] transition-colors" aria-label="Scroll products left"><ChevronLeft size={20} /></button>
              <button onClick={() => scrollProducts("right")} className="rounded-full border border-white/20 p-3 text-white hover:bg-[#070a38] transition-colors" aria-label="Scroll products right"><ChevronRight size={20} /></button>
            </div>
          </div>

          <div ref={productRef} className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {products.map((product) => (
              <article key={product.name} className="min-w-[280px] snap-start bg-[#070a38]/30 p-5 shadow-sm md:min-w-[360px] group border border-white/5">
                <div className="relative h-80 overflow-hidden bg-[#161512] mb-6">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                  <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black shadow-lg">{product.tag}</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-2 tracking-tight">{product.name}</h3>
                <p className="text-sm leading-6 text-[#cfcfcf] opacity-80">{product.subtitle}</p>
                <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#8a90c7]">Details</span>
                  <div className="w-2 h-2 rounded-full bg-[#070a38]"></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#070a38] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a90c7]">Reviews</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-white">Media & Video Reviews</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#cfcfcf] font-medium opacity-80">Embed YouTube videos here to present product reviews, grooming routines, or buyer-facing brand content.</p>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {videos.map((video) => (
              <article key={video.title} className="bg-[#0d0d0d]/40 p-5 shadow-sm group border border-white/5">
                <div className="relative aspect-video overflow-hidden bg-black mb-5">
                  <iframe className="h-full w-full opacity-60 group-hover:opacity-100 transition-opacity" src={video.embed} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 p-2 text-black shadow-md"><Play size={16} fill="black" /></div>
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{video.title}</h3>
                <p className="text-sm leading-6 text-[#cfcfcf] opacity-80">{video.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="exhibition" className="bg-[#0d0d0d] px-6 py-28 text-white border-b border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a90c7]">Exhibition</p>
            <h2 className="mt-5 font-serif text-4xl tracking-[0.12em] md:text-5xl">VIETBEAUTY & COSMOBEAUTÉ VIETNAM 2026</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#cfcfcf] font-medium opacity-80">
              Scott Hamish will meet global beauty and grooming buyers at Vietnam’s leading international beauty exhibition.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-[1fr_0.9fr] md:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 bg-[#070a38]/20 p-10 text-center shadow-sm relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e73593] opacity-40"></div>
              <div className="mx-auto max-w-xl">
                <div className="text-center font-serif text-5xl font-semibold leading-none tracking-tight text-[#e73593] md:text-7xl">
                  cosmobeauté
                </div>
                <div className="mb-8 text-right text-xl text-[#e73593]">Vietnam</div>
                <div className="text-6xl font-bold tracking-tight md:text-8xl flex justify-center items-baseline gap-1">
                  <span className="font-light text-white/40">viet</span><span className="text-[#006b3f]">beauty</span>
                </div>
                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#cfcfcf]/60">Vietnam’s Premier International Beauty Show</p>
              </div>
              <div className="mt-10 border-t border-white/10 pt-8 text-sm leading-8 text-[#cfcfcf]/80 flex justify-between items-center">
                <div className="text-left">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a90c7] mb-1">Venue</p>
                   <p>Ho Chi Minh City, Vietnam</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a90c7] mb-1">Date</p>
                   <p className="font-serif text-xl text-white">2026.07.23</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a90c7]">Buyer Meeting</p>
              <h3 className="font-serif text-4xl leading-tight md:text-4xl text-white">Meet Scott Hamish in Vietnam</h3>
              <p className="text-base leading-8 text-[#cfcfcf] opacity-90">
                Scott Hamish is ready to meet premium beauty, grooming, retail, and distribution partners looking for a distinctive men’s skincare brand with Scottish heritage and mature masculine positioning.
              </p>
              <p className="text-base leading-8 text-[#cfcfcf] opacity-90">
                Book a meeting to discuss product lineup, distribution opportunities, retail positioning, and long-term partnership potential in Vietnam and Southeast Asia.
              </p>
              <div className="pt-4">
                <a href="#booking" className="inline-block border border-white px-10 py-5 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-[#070a38] hover:border-[#070a38] text-white shadow-lg">Book a Meeting</a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            id="booking" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-[#070a38]/40 p-4 text-white shadow-2xl md:p-8 border border-white/5"
          >
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8a90c7]">Reservation Channel</p>
                <h3 className="font-serif text-3xl">Schedule a Meeting</h3>
              </div>
              <Calendar size={24} className="opacity-50" />
            </div>
            <div className="min-h-[620px] overflow-hidden border border-white/15 bg-white">
              <iframe
                src="https://cal.com/scott-hamish/meeting?embed=true"
                title="Book a meeting with Scott Hamish"
                className="h-[620px] w-full"
              />
            </div>
            <p className="mt-4 text-center text-[10px] leading-6 text-white/40 uppercase tracking-widest font-bold">Secure Calendar Interface Powered by Cal.com</p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="bg-[#070a38] py-28 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a90c7]">Contact</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-white">Contact Us</h2>
          </div>
          <form className="mt-14 grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="border border-white/10 bg-[#0d0d0d] px-5 py-4 text-sm text-white outline-none focus:border-[#8a90c7] transition-colors" placeholder="Your Name" />
              <input className="border border-white/10 bg-[#0d0d0d] px-5 py-4 text-sm text-white outline-none focus:border-[#8a90c7] transition-colors" placeholder="Your Email" />
            </div>
            <input className="border border-white/10 bg-[#0d0d0d] px-5 py-4 text-sm text-white outline-none focus:border-[#8a90c7] transition-colors" placeholder="Company / Buyer Type" />
            <textarea className="min-h-44 border border-white/10 bg-[#0d0d0d] px-5 py-4 text-sm text-white outline-none focus:border-[#8a90c7] transition-colors resize-none" placeholder="How can we help you?" />
            <button type="button" className="bg-white px-8 py-5 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-[#8a90c7] hover:text-white shadow-xl">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="px-6 py-12 bg-[#0d0d0d]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 text-sm text-[#cfcfcf] md:flex-row items-start font-sans">
          <div className="space-y-4">
            <h3 className="font-serif text-3xl text-white tracking-tight">Scott Hamish</h3>
            <p className="max-w-xs leading-relaxed opacity-80">Premium Scottish heritage grooming care for the modern gentleman.</p>
          </div>
          <div className="grid grid-cols-2 gap-16 md:text-right">
             <div className="space-y-3">
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Connect</h4>
               <p className="flex items-center gap-2 md:justify-end opacity-80 hover:text-white transition-all"><Mail size={14} /> partner@scotthamish.com</p>
             </div>
             <div className="space-y-3">
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Legal</h4>
               <p className="opacity-80">© 2026 Scott Hamish.</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
