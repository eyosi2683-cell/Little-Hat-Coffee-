import { motion } from 'motion/react';
import { Leaf, Award, Heart, ShieldAlert, BookOpen } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-[#FDFBF7] text-[#1E110A] px-4 md:px-8 relative overflow-hidden">
      {/* Small floating design accents */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-[#C89D7C]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stats & Accents */}
          <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-2 gap-4">
            
            {/* Stat Card 1 */}
            <div className="bg-[#1E110A] text-[#EFE3C3] p-6 rounded-2xl border border-[#3D2516] flex flex-col items-start text-left shadow-lg">
              <span className="text-3xl font-sans font-black text-white">4.9★</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C89D7C] mt-1.5">Average Rating</span>
              <p className="text-[11px] text-gray-400 mt-2 leading-normal">
                Rated by nearly 200 devoted regulars and first-time visitors alike.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#2D1B10]/5 p-6 rounded-2xl border border-gray-200 flex flex-col items-start text-left">
              <span className="text-3xl font-sans font-black text-[#2D1B10]">A Toda Madre</span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-1.5">Roasters</span>
              <p className="text-[11px] text-gray-600 mt-2 leading-normal">
                Every espresso shot starts with beans from this trusted local roaster.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#2D1B10]/5 p-6 rounded-2xl border border-gray-200 flex flex-col items-start text-left">
              <span className="text-3xl font-sans font-black text-[#2D1B10]">Streets Market</span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-1.5">Our Home</span>
              <p className="text-[11px] text-gray-600 mt-2 leading-normal">
                Tucked in the back corner of a neighborhood grocery store on 14th St.
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-[#1E110A] text-[#EFE3C3] p-6 rounded-2xl border border-[#3D2516] flex flex-col items-start text-left shadow-lg">
              <span className="text-3xl font-sans font-black text-white">Local</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C89D7C] mt-1.5">Pastry Vendors</span>
              <p className="text-[11px] text-gray-400 mt-2 leading-normal">
                Our pastry case rotates with treats from DC's best local bakers.
              </p>
            </div>

          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C89D7C] font-semibold flex items-center gap-1.5 mb-2">
              <BookOpen size={13} /> The Little Hat Story
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-[#1E110A] mb-6">
              Big Flavor, Small Space
            </h2>
            <div className="h-1 w-20 bg-[#C89D7C] rounded-full mb-8" />

            <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-sans">
              <p>
                Head to the back of <span className="font-bold text-gray-900">Streets Market</span> on 14th St NW and you'll find <span className="font-bold text-gray-900">Little Hat Coffee</span> — a bar-seating-only coffee spot that's become a Columbia Heights favorite, one cortado at a time.
              </p>

              <p>
                Every drink starts with beans from <span className="font-semibold text-gray-900">A Toda Madre Roasters</span>, pulled into rich, distinctive espresso. Beyond the classics, our menu leans into creative specialty drinks — <span className="font-semibold text-[#C89D7C]">pandan lattes</span>, <span className="font-semibold text-[#C89D7C]">hojicha matcha</span>, and our seasonal <span className="font-semibold text-[#C89D7C]">Orange Blossom Tamarind Fizz</span> — the kind of flavors you won't find at a typical coffee shop.
              </p>

              <p>
                Seating is limited to a handful of bar stools, but that's part of the charm. We're a quick stop for your morning cortado, a chat with a friendly barista, and a fresh pastry from one of our favorite local vendors.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-8 p-5 rounded-2xl bg-[#EFE3C3]/30 border-l-4 border-[#C89D7C] text-left">
              <p className="text-xs italic text-gray-700 font-sans leading-relaxed">
                Small in size, mighty in flavor — that's the Little Hat promise, cup after cup.
              </p>
              <span className="block text-[10px] font-mono uppercase text-gray-500 mt-3 font-bold">
                — The Little Hat Team
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
