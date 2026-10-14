import React, { useState } from 'react';
import { Camera, Aperture, Sliders, SunMedium, Layers } from 'lucide-react';
import { equipmentData } from '../data/equipment';

export const EquipmentCraft: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Camera Body', 'Lenses', 'Stabilization', 'Lighting'];

  const filteredEquipment =
    activeCategory === 'All'
      ? equipmentData
      : equipmentData.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Camera Body':
        return <Camera className="w-4 h-4 text-[#C6A66B]" />;
      case 'Lenses':
        return <Aperture className="w-4 h-4 text-[#C6A66B]" />;
      case 'Stabilization':
        return <Sliders className="w-4 h-4 text-[#C6A66B]" />;
      case 'Lighting':
        return <SunMedium className="w-4 h-4 text-[#C6A66B]" />;
      default:
        return <Layers className="w-4 h-4 text-[#C6A66B]" />;
    }
  };

  return (
    <section id="equipment" className="py-24 sm:py-32 bg-[#0E0E0E] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-[#F3F0E9]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                04 / Optical & Mechanical Rig
              </span>
              <span className="text-xs font-serif text-[#C6A66B]/60">ক্যামেরা ও লেন্স</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F3F0E9]">
              The Tools Behind The Frames
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            An intentional, agile cinematography kit. Rather than overwhelming weddings with heavy production rigs, every lens and stabilizer is selected for discretion, speed, and luminous low-light rendering.
          </p>
        </div>

        {/* Focal Length Philosophy Guide */}
        <div className="mt-12 p-6 sm:p-8 bg-[#141414] border border-[#F3F0E9]/10">
          <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B] block mb-2">
            The Philosophy of Focal Lengths in Bengali Weddings
          </span>
          <p className="text-sm sm:text-base text-[#F3F0E9]/90 font-light leading-relaxed max-w-4xl">
            Bangladeshi weddings oscillate between high-energy collective euphoria (Gaye Holud dance circles) and intensely intimate, quiet moments (the father's blessing, the bride adjusting her veil). Choosing the correct prime lens transforms chaotic wedding spaces into cinematic poetry:
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-4 border-t border-[#F3F0E9]/5">
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-sm text-[#C6A66B] block font-semibold">16mm f/1.4</span>
              <span className="text-[11px] text-[#F3F0E9] block font-medium mt-1">Wide Environment</span>
              <span className="text-[10px] text-[#A5A29C] block mt-0.5 font-light">Stage grandeur & Holud celebrations</span>
            </div>
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-sm text-[#C6A66B] block font-semibold">30mm f/1.4</span>
              <span className="text-[11px] text-[#F3F0E9] block font-medium mt-1">Human Perspective</span>
              <span className="text-[10px] text-[#A5A29C] block mt-0.5 font-light">Natural candid storytelling</span>
            </div>
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-sm text-[#C6A66B] block font-semibold">50mm f/1.8</span>
              <span className="text-[11px] text-[#F3F0E9] block font-medium mt-1">Ceremonial Focus</span>
              <span className="text-[10px] text-[#A5A29C] block mt-0.5 font-light">Mala badal & ring exchange</span>
            </div>
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-sm text-[#C6A66B] block font-semibold">75mm f/1.2</span>
              <span className="text-[11px] text-[#F3F0E9] block font-medium mt-1">Dreamy Bridal Bokeh</span>
              <span className="text-[10px] text-[#A5A29C] block mt-0.5 font-light">Jamdani details & soft eye contact</span>
            </div>
            <div className="p-3 bg-[#181818] border border-[#F3F0E9]/5">
              <span className="font-mono text-sm text-[#C6A66B] block font-semibold">85mm f/1.4</span>
              <span className="text-[11px] text-[#F3F0E9] block font-medium mt-1">Discreet Distance</span>
              <span className="text-[10px] text-[#A5A29C] block mt-0.5 font-light">Unposed raw emotions from afar</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs tracking-cinema uppercase whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#C6A66B] text-[#101010] font-medium'
                  : 'text-[#A5A29C] hover:text-[#F3F0E9] hover:bg-[#1A1A1A] border border-transparent hover:border-[#F3F0E9]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="bg-[#141414] border border-[#F3F0E9]/10 p-6 flex flex-col justify-between hover:border-[#C6A66B]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C]/80 pb-3 border-b border-[#F3F0E9]/5">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                  {item.apertureOrFeature && (
                    <span className="text-[#C6A66B]">{item.apertureOrFeature}</span>
                  )}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0E9] mt-4">
                  {item.name}
                </h3>

                <p className="font-mono text-xs text-[#C6A66B] mt-1">
                  {item.focalLengthOrSpec}
                </p>

                <div className="mt-4 pt-4 border-t border-[#F3F0E9]/5">
                  <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] block mb-1">
                    Artistic Role
                  </span>
                  <p className="text-xs text-[#F3F0E9] font-medium">
                    {item.artisticRole}
                  </p>
                </div>

                <div className="mt-3">
                  <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] block mb-1">
                    Practical Purpose
                  </span>
                  <p className="text-xs text-[#A5A29C] font-light leading-relaxed">
                    {item.practicalPurpose}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F3F0E9]/5 flex items-center justify-between text-[10px] font-mono text-[#A5A29C]/60">
                <span>Active Production Unit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
