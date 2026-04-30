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
    <div className="min-h-screen bg-[#f7f4ee] text-[#1d1a17] selection:bg-[#2d4f3a] selection:text-white" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "normal" }}>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#161512]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8e1d2]">
          <div className="hidden gap-8 md:flex">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#exhibition" className="hover:text-white transition-colors">Exhibition</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#home" className="ml-auto font-serif text-2xl normal-case tracking-normal text-white md:ml-0 hover:opacity-80 transition-opacity">Scott Hamish</a>
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
          <p className="mb-5 inline-block border border-[#d9c7a3]/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-[#d9c7a3]">Established 2026</p>
          <h1 className="max-w-4xl text-6xl font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl lg:text-9xl">
            Timeless<br />Scottish Heritage
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-[#f0eadf] md:text-xl italic">
            Premium men’s grooming care inspired by the rugged dignity, independence, and natural strength of Scotland.
          </p>
          <div className="mt-10">
            <a href="#about" className="inline-block border border-white/60 bg-white/10 px-9 py-5 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black">
              Discover Heritage
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6d604d]">About Scott Hamish</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl italic">Scotland, The Great Heritage for your skin</h2>
          </div>
          <div className="space-y-6 text-[15px] leading-8 text-[#51483e] italic font-medium opacity-90">
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
            <div key={title} className="border border-[#d9d0c0] bg-white/50 p-8 shadow-sm">
              <h3 className="font-serif text-2xl italic mb-4">{title}</h3>
              <p className="text-sm leading-7 text-[#5c5146] font-medium opacity-80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="product" className="bg-[#ebe4d7] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6d604d]">Product</p>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl italic">Premium Grooming Collection</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scrollProducts("left")} className="rounded-full border border-[#90836f] p-3 hover:bg-white transition-colors" aria-label="Scroll products left"><ChevronLeft size={20} /></button>
              <button onClick={() => scrollProducts("right")} className="rounded-full border border-[#90836f] p-3 hover:bg-white transition-colors" aria-label="Scroll products right"><ChevronRight size={20} /></button>
            </div>
          </div>

          <div ref={productRef} className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {products.map((product) => (
              <article key={product.name} className="min-w-[280px] snap-start bg-[#f8f5ef] p-5 shadow-sm md:min-w-[360px] group">
                <div className="relative h-80 overflow-hidden bg-white mb-6">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <span className="absolute left-4 top-4 bg-[#161512] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9c7a3] shadow-lg">{product.tag}</span>
                </div>
                <h3 className="font-serif text-2xl italic mb-2 tracking-tight">{product.name}</h3>
                <p className="text-sm leading-6 text-[#665b50] opacity-80 italic">{product.subtitle}</p>
                <div className="mt-6 pt-6 border-t border-[#d8cfc0] flex justify-between items-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#6d604d]">Details</span>
                  <div className="w-2 h-2 rounded-full bg-[#d9c7a3]"></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6d604d]">Reviews</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl italic">Media & Video Reviews</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5c5146] font-medium opacity-80">Embed YouTube videos here to present product reviews, grooming routines, or buyer-facing brand content.</p>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title} className="bg-white p-5 shadow-sm group">
              <div className="relative aspect-video overflow-hidden bg-black mb-5">
                <iframe className="h-full w-full opacity-80 group-hover:opacity-100 transition-opacity" src={video.embed} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 p-2 text-black shadow-md"><Play size={16} fill="black" /></div>
              </div>
              <h3 className="font-serif text-xl italic mb-2">{video.title}</h3>
              <p className="text-sm leading-6 text-[#665b50] opacity-80">{video.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="exhibition" className="bg-[#f7f4ee] px-6 py-28 text-[#1d1a17]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6d604d]">Exhibition</p>
            <h2 className="mt-5 font-serif text-4xl tracking-[0.12em] md:text-5xl italic">VIETBEAUTY & <span className="not-italic">COSMOBEAUTÉ</span> VIETNAM 2026</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#5c5146] font-medium opacity-80 italic">
              Scott Hamish will meet global beauty and grooming buyers at Vietnam’s leading international beauty exhibition.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-[1fr_0.9fr] md:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-[#e3daca] bg-white p-10 text-center shadow-sm relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e73593] opacity-20"></div>
              <div className="mx-auto max-w-xl">
                <div className="text-center font-serif text-5xl font-semibold leading-none tracking-tight text-[#e73593] md:text-7xl">
                  cosmobeauté
                </div>
                <div className="mb-8 text-right text-xl text-[#e73593] italic">Vietnam</div>
                <div className="text-6xl font-bold tracking-tight md:text-8xl flex justify-center items-baseline gap-1">
                  <span className="font-light text-[#666666]">viet</span><span className="text-[#006b3f]">beauty</span>
                </div>
                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#555]">Vietnam’s Premier International Beauty Show</p>
              </div>
              <div className="mt-10 border-t border-[#e3daca] pt-8 text-sm leading-8 text-[#4e463d] flex justify-between items-center italic">
                <div className="text-left">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-[#6d604d] mb-1">Venue</p>
                   <p>Ho Chi Minh City, Vietnam</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-[#6d604d] mb-1">Date</p>
                   <p className="font-serif text-xl text-black">2026.07.23</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6d604d]">Buyer Meeting</p>
              <h3 className="font-serif text-4xl leading-tight md:text-4xl italic">Meet Scott Hamish in Vietnam</h3>
              <p className="text-base leading-8 text-[#5c5146] italic opacity-90">
                Scott Hamish is ready to meet premium beauty, grooming, retail, and distribution partners looking for a distinctive men’s skincare brand with Scottish heritage and mature masculine positioning.
              </p>
              <p className="text-base leading-8 text-[#5c5146] italic opacity-90">
                Book a meeting to discuss product lineup, distribution opportunities, retail positioning, and long-term partnership potential in Vietnam and Southeast Asia.
              </p>
              <div className="pt-4">
                <a href="#booking" className="inline-block border border-[#1d1a17] px-10 py-5 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-[#1d1a17] hover:text-white shadow-lg">Book a Meeting</a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            id="booking" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-[#151512] p-4 text-white shadow-2xl md:p-8"
          >
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d9c7a3]">Reservation Channel</p>
                <h3 className="font-serif text-3xl italic">Schedule a Meeting</h3>
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

      <section id="contact" className="mx-auto max-w-4xl px-6 py-28">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6d604d]">Contact</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl italic">Contact Us</h2>
        </div>
        <form className="mt-14 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <input className="border border-[#d8cfc0] bg-white px-5 py-4 text-sm outline-none focus:border-[#1d1a17] transition-colors italic" placeholder="Your Name" />
            <input className="border border-[#d8cfc0] bg-white px-5 py-4 text-sm outline-none focus:border-[#1d1a17] transition-colors italic" placeholder="Your Email" />
          </div>
          <input className="border border-[#d8cfc0] bg-white px-5 py-4 text-sm outline-none focus:border-[#1d1a17] transition-colors italic" placeholder="Company / Buyer Type" />
          <textarea className="min-h-44 border border-[#d8cfc0] bg-white px-5 py-4 text-sm outline-none focus:border-[#1d1a17] transition-colors italic resize-none" placeholder="How can we help you?" />
          <button type="button" className="bg-[#161512] px-8 py-5 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#2d4f3a] shadow-xl">Send Message</button>
        </form>
      </section>

      <footer className="border-t border-[#d8cfc0] px-6 py-12 bg-[#fbf9f4]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 text-sm text-[#62584c] md:flex-row items-start">
          <div className="space-y-4">
            <h3 className="font-serif text-3xl italic text-black tracking-tight">Scott Hamish</h3>
            <p className="max-w-xs italic leading-relaxed opacity-80">Premium Scottish heritage grooming care for the modern gentleman.</p>
          </div>
          <div className="grid grid-cols-2 gap-16 md:text-right">
             <div className="space-y-3">
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1d1a17]">Connect</h4>
               <p className="flex items-center gap-2 md:justify-end opacity-80 hover:opacity-100 transition-all"><Mail size={14} /> partner@scotthamish.com</p>
             </div>
             <div className="space-y-3">
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1d1a17]">Legal</h4>
               <p className="opacity-80">© 2026 Scott Hamish.</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
