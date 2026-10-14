import React, { useState } from 'react';
import { Play, ArrowUpRight, Filter, Info } from 'lucide-react';
import { PortfolioCategory, PortfolioProject } from '../types';
import { portfolioProjects } from '../data/portfolio';

interface PortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');

  const categories: PortfolioCategory[] = [
    'All',
    'Wedding Films',
    'Wedding Photography',
    'Holud & Wedding Events',
    'Bridal Portraits',
    'Outdoor Portrait Films',
    'Commercial & Brand Films',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#101010] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F3F0E9]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                01 / Portfolio Archive
              </span>
              <span className="text-xs font-serif text-[#C6A66B]/60">নির্বাচিত কাজ</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F3F0E9]">
              Selected Works
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            Films and stills directed with an editorial sensibility—preserving cultural rhythm, familial intimacy, and intentional framing.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="py-8 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-[#F3F0E9]/5">
          <div className="flex items-center gap-1.5 pr-3 text-[10px] font-mono text-[#A5A29C]/50 uppercase tracking-cinema">
            <Filter className="w-3 h-3 text-[#C6A66B]" />
            <span>Filter</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs tracking-cinema uppercase whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#C6A66B] text-[#101010] font-medium'
                  : 'text-[#A5A29C] hover:text-[#F3F0E9] hover:bg-[#1A1A1A] border border-transparent hover:border-[#F3F0E9]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout logic for artistic variety
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4';
            const aspectClass = isWide
              ? 'aspect-[16/9] sm:aspect-[2.2/1]'
              : index % 2 === 1
              ? 'aspect-[4/5]'
              : 'aspect-[16/10]';

            return (
              <article
                key={project.id}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between`}
                onClick={() => onSelectProject(project)}
              >
                {/* Media Container */}
                <div
                  className={`relative ${aspectClass} overflow-hidden bg-[#181818] border border-[#F3F0E9]/10 transition-all duration-500 group-hover:border-[#C6A66B]/50`}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.92] group-hover:brightness-100"
                    loading="lazy"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Meta Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-cinema text-[#F3F0E9]/90 z-10">
                    <span className="bg-[#101010]/80 backdrop-blur-sm px-2.5 py-1 border border-[#F3F0E9]/10">
                      {project.category}
                    </span>
                    <span className="bg-[#101010]/80 backdrop-blur-sm px-2 py-1 text-[#C6A66B]">
                      {project.year}
                    </span>
                  </div>

                  {/* Center Play Indicator for Film Projects */}
                  {project.videoEmbedUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#C6A66B] text-[#101010] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Hover Pill */}
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="inline-flex items-center gap-1 text-[10px] tracking-cinema uppercase text-[#101010] bg-[#C6A66B] px-3 py-1 font-medium">
                      <span>View Project</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Editorial Typography & Metadata */}
                <div className="pt-4 pb-2 border-b border-[#F3F0E9]/5 group-hover:border-[#C6A66B]/30 transition-colors">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-tight text-[#F3F0E9] group-hover:text-[#C6A66B] transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.location && (
                      <span className="text-[11px] font-mono text-[#A5A29C]/70 shrink-0">
                        {project.location}
                      </span>
                    )}
                  </div>

                  {project.bengaliTitle && (
                    <p className="font-serif text-xs text-[#C6A66B]/80 mt-1">
                      {project.bengaliTitle}
                    </p>
                  )}

                  <p className="mt-2 text-xs text-[#A5A29C] font-light line-clamp-2 leading-relaxed">
                    {project.synopsis}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Replaceable Demo Media Note (Documented per instructions) */}
        <div className="mt-16 p-4 sm:p-5 bg-[#141414] border border-[#F3F0E9]/10 text-xs text-[#A5A29C] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
          <div>
            <span className="font-mono text-[10px] uppercase tracking-cinema text-[#C6A66B] block mb-0.5">
              Curator Note & Client Privacy
            </span>
            <span>
              The films and imagery presented above are editorial showcase concepts demonstrating DORPON's visual tone and pacing. As an independent studio upholding strict client privacy, public display of private family celebrations is subject to consent. Easily substitute with confirmed client links in <code className="text-[#C6A66B] bg-black/40 px-1 py-0.5">src/data/portfolio.ts</code>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
