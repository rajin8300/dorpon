import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { ShowreelModal } from './components/ShowreelModal';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { PackageCalculator } from './components/PackageCalculator';
import { EquipmentCraft } from './components/EquipmentCraft';
import { About } from './components/About';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { BookingInquiry } from './components/BookingInquiry';
import { Footer } from './components/Footer';
import { PortfolioProject } from './types';
import { siteConfig } from './data/siteConfig';
import { buildWhatsAppLink } from './utils/whatsapp';
import { MessageSquare } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedPackage, setPreselectedPackage] = useState<string>('');

  const handleOpenProject = (project: PortfolioProject) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const handleCloseProject = () => {
    setProjectModalOpen(false);
  };

  const handleExploreWork = () => {
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayShowreel = () => {
    setShowreelOpen(true);
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setPreselectedService(serviceName);
    handleContact();
  };

  const handleSelectPackageForInquiry = (packageName: string) => {
    setPreselectedPackage(packageName);
    handleContact();
  };

  const handleCalculatorProposal = (summaryDetails: string) => {
    setPreselectedPackage(summaryDetails);
    handleContact();
  };

  const floatingWhatsAppUrl = buildWhatsAppLink(
    siteConfig.contact.whatsappNumber,
    'Hello DORPON, I would like to check wedding film and photography availability.'
  );

  return (
    <div className="min-h-screen bg-[#101010] text-[#F3F0E9] selection:bg-[#C6A66B]/30 selection:text-[#F3F0E9]">
      {/* Navigation */}
      <Navbar onOpenBooking={handleContact} />

      {/* Main Content Sections */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onExploreWork={handleExploreWork}
          onContact={handleContact}
          onPlayFeaturedFilm={handlePlayShowreel}
        />

        {/* Selected Works (Portfolio) */}
        <Portfolio onSelectProject={handleOpenProject} />

        {/* Disciplines & Services */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Investment Packages */}
        <Packages onSelectPackageForForm={handleSelectPackageForInquiry} />

        {/* Interactive Custom Plan Estimator */}
        <PackageCalculator onOpenBookingWithDetails={handleCalculatorProposal} />

        {/* The Tools Behind The Frames (Equipment) */}
        <EquipmentCraft />

        {/* Ethos & Founder (About) */}
        <About />

        {/* 4-Step Creative Process */}
        <Process />

        {/* Frequently Asked Inquiries */}
        <FAQ />

        {/* Dialogue & Booking Form */}
        <BookingInquiry
          initialService={preselectedService}
          initialPackage={preselectedPackage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={projectModalOpen}
        onClose={handleCloseProject}
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenBooking={handleContact}
      />

      {/* Dedicated Cinematic Showreel Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onOpenBooking={handleContact}
      />

      {/* Floating Discreet WhatsApp Contact Trigger */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-30">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#101010]/95 hover:bg-[#C6A66B] text-[#C6A66B] hover:text-[#101010] border border-[#C6A66B]/50 hover:border-[#C6A66B] shadow-2xl backdrop-blur-md transition-all duration-300"
          aria-label="Direct WhatsApp Chat with DORPON Studio"
        >
          <div className="w-2 h-2 rounded-full bg-[#C6A66B] group-hover:bg-[#101010] animate-pulse" />
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="text-[11px] font-medium tracking-cinema uppercase hidden sm:inline">
            WhatsApp Studio
          </span>
        </a>
      </aside>
    </div>
  );
};
export default App;
