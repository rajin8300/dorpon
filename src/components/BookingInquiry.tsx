import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppLink, buildMailtoLink } from '../utils/whatsapp';

interface BookingInquiryProps {
  initialService?: string;
  initialPackage?: string;
}

export const BookingInquiry: React.FC<BookingInquiryProps> = ({
  initialService = '',
  initialPackage = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding & Reception',
    eventDate: '',
    location: 'Dhaka',
    services: initialService ? [initialService] : ['Wedding Cinematography'],
    notes: initialPackage ? `Inquiring about package: ${initialPackage}` : '',
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [dispatchStatus, setDispatchStatus] = useState<{
    type: 'whatsapp' | 'email';
    url: string;
    message: string;
  } | null>(null);

  const eventTypes = [
    'Wedding & Reception',
    'Gaye Holud & Wedding (2-Day)',
    'Gaye Holud Celebration',
    'Bridal Portrait Session',
    'Outdoor Couple Portrait Cinema',
    'Commercial / Brand Production',
    'Private Cultural Event',
    'Other Custom Celebration',
  ];

  const serviceOptions = [
    'Wedding Cinematography',
    'Wedding Photography',
    'Holud & Event Films',
    'Cinematic Wedding Trailers',
    'Bridal Portrait Films',
    'Outdoor Portrait Cinematography',
    'Commercial Brand Production',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.');
      return false;
    }
    if (!formData.phone.trim()) {
      setValidationError('Please enter your Phone or WhatsApp number.');
      return false;
    }
    if (formData.services.length === 0) {
      setValidationError('Please select at least one service.');
      return false;
    }
    setValidationError(null);
    return true;
  };

  const generateMessageText = (): string => {
    const servicesList = formData.services.join(', ');
    return `*DORPON Inquiry*
----------------------------
• Client Name: ${formData.name.trim()}
• Contact: ${formData.phone.trim()}
• Event Type: ${formData.eventType}
• Event Date: ${formData.eventDate ? formData.eventDate : 'To be confirmed'}
• Location: ${formData.location}
• Required Services: ${servicesList}
• Additional Notes: ${formData.notes.trim() || 'None provided'}
----------------------------
Sent from dorponcinema.com inquiry portal`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = generateMessageText();
    const url = buildWhatsAppLink(siteConfig.contact.whatsappNumber, message);

    setDispatchStatus({
      type: 'whatsapp',
      url,
      message: 'Inquiry details formatted. Redirecting to WhatsApp...',
    });

    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = generateMessageText();
    const subject = `DORPON Inquiry — ${formData.name.trim()} (${formData.eventType})`;
    const url = buildMailtoLink(siteConfig.contact.email, subject, message);

    setDispatchStatus({
      type: 'email',
      url,
      message: 'Inquiry details formatted. Opening your default mail client...',
    });

    window.location.href = url;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#101010] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-[#F3F0E9]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-cinema text-[#C6A66B]">
                07 / Dialogue & Booking
              </span>
              <span className="text-xs font-serif text-[#C6A66B]/60">তারিখ সংরক্ষণ ও অনুসন্ধান</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#F3F0E9]">
              Let's Begin The Conversation
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#A5A29C] font-light leading-relaxed">
            {siteConfig.contact.availabilityNotice}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Studio Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#141414] border border-[#F3F0E9]/10 p-6 sm:p-8 space-y-6">
              <h3 className="font-serif text-2xl text-[#F3F0E9]">
                Studio Channels
              </h3>
              <p className="text-xs text-[#A5A29C] font-light leading-relaxed">
                We prioritize WhatsApp messages for swift timeline consultations and quote breakdowns.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={buildWhatsAppLink(
                    siteConfig.contact.whatsappNumber,
                    'Hello DORPON, I would like to inquire about wedding film coverage.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#181818] border border-[#F3F0E9]/5 hover:border-[#C6A66B]/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-[#C6A66B]" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] block">
                        Direct WhatsApp
                      </span>
                      <span className="text-xs text-[#F3F0E9] group-hover:text-[#C6A66B] transition-colors">
                        {siteConfig.contact.whatsappDisplay}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A5A29C] group-hover:text-[#C6A66B]" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center justify-between p-3.5 bg-[#181818] border border-[#F3F0E9]/5 hover:border-[#C6A66B]/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C6A66B]" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] block">
                        Electronic Mail
                      </span>
                      <span className="text-xs text-[#F3F0E9] group-hover:text-[#C6A66B] transition-colors">
                        {siteConfig.contact.emailDisplay}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A5A29C] group-hover:text-[#C6A66B]" />
                </a>

                {/* Direct Telephone */}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-between p-3.5 bg-[#181818] border border-[#F3F0E9]/5 hover:border-[#C6A66B]/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C6A66B]" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] block">
                        Telephone
                      </span>
                      <span className="text-xs text-[#F3F0E9] group-hover:text-[#C6A66B] transition-colors">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A5A29C] group-hover:text-[#C6A66B]" />
                </a>
              </div>

              {/* Geographic Coverage Notice */}
              <div className="pt-4 border-t border-[#F3F0E9]/10">
                <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] block mb-1">
                  Base & Travel Coverage
                </span>
                <p className="text-xs text-[#F3F0E9]/90 font-light">
                  {siteConfig.contact.businessLocation}
                </p>
              </div>

              {/* Verified Digital Profiles */}
              <div className="pt-4 border-t border-[#F3F0E9]/10">
                <span className="text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] block mb-2">
                  Creator & Brand Profiles
                </span>
                <div className="flex flex-col gap-2 text-xs">
                  {siteConfig.founder.portfolioUrl && (
                    <a
                      href={siteConfig.founder.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C6A66B] hover:underline flex items-center justify-between"
                    >
                      <span>Creator Website: rajinmd.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {siteConfig.founder.facebookProfileUrl && (
                    <a
                      href={siteConfig.founder.facebookProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A5A29C] hover:text-[#F3F0E9] flex items-center justify-between"
                    >
                      <span>Facebook Profile: facebook.com/rajin830</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {siteConfig.contact.brandInstagramUrl && (
                    <a
                      href={siteConfig.contact.brandInstagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A5A29C] hover:text-[#F3F0E9] flex items-center justify-between"
                    >
                      <span>Studio Instagram: @dorponcinema</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Functional Inquiry Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#F3F0E9]/10 p-6 sm:p-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0E9] mb-2">
              Event Inquiry & Availability Check
            </h3>
            <p className="text-xs text-[#A5A29C] font-light mb-8">
              Fill in your celebration details. This form directly generates an organized WhatsApp message or email inquiry without storing private data on third-party tracking servers.
            </p>

            {validationError && (
              <div className="mb-6 p-4 bg-red-950/40 border border-red-500/30 flex items-center gap-3 text-red-200 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{validationError}</span>
              </div>
            )}

            {dispatchStatus && (
              <div className="mb-6 p-4 bg-[#C6A66B]/10 border border-[#C6A66B]/40 text-[#F3F0E9] text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#C6A66B]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="font-medium">{dispatchStatus.message}</span>
                </div>
                <p className="text-[11px] text-[#A5A29C]">
                  If your browser blocked the popup, please{' '}
                  <a
                    href={dispatchStatus.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C6A66B] underline font-medium"
                  >
                    click here to open manually
                  </a>
                  .
                </p>
              </div>
            )}

            <form className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Sadia Rahman"
                    className="w-full bg-[#181818] border border-[#F3F0E9]/10 px-4 py-3 text-xs text-[#F3F0E9] focus:border-[#C6A66B] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 1XXXXXXXXX"
                    className="w-full bg-[#181818] border border-[#F3F0E9]/10 px-4 py-3 text-xs text-[#F3F0E9] focus:border-[#C6A66B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] mb-2">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#181818] border border-[#F3F0E9]/10 px-4 py-3 text-xs text-[#F3F0E9] focus:border-[#C6A66B] focus:outline-none transition-colors"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#181818] text-[#F3F0E9]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] mb-2">
                    Tentative Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#181818] border border-[#F3F0E9]/10 px-4 py-3 text-xs text-[#F3F0E9] focus:border-[#C6A66B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] mb-2">
                  Event Venue / City Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Gulshan, Dhaka / Chittagong Club"
                  className="w-full bg-[#181818] border border-[#F3F0E9]/10 px-4 py-3 text-xs text-[#F3F0E9] focus:border-[#C6A66B] focus:outline-none transition-colors"
                />
              </div>

              {/* Required Services Checkboxes */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] mb-3">
                  Services of Interest *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceOptions.map((service) => {
                    const isChecked = formData.services.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => handleServiceToggle(service)}
                        className={`flex items-center gap-2.5 p-2.5 text-left border text-xs transition-colors ${
                          isChecked
                            ? 'bg-[#C6A66B]/15 border-[#C6A66B] text-[#F3F0E9]'
                            : 'bg-[#181818] border-[#F3F0E9]/5 text-[#A5A29C] hover:border-[#F3F0E9]/20'
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'border-[#C6A66B] bg-[#C6A66B] text-[#101010]'
                              : 'border-[#F3F0E9]/20'
                          }`}
                        >
                          {isChecked && <span className="text-[10px] font-bold">✓</span>}
                        </div>
                        <span className="leading-tight">{service}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-cinema text-[#A5A29C] mb-2">
                  Additional Details / Visual Tone Preferences
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about the atmosphere, number of guests, or package preferences..."
                  className="w-full bg-[#181818] border border-[#F3F0E9]/10 px-4 py-3 text-xs text-[#F3F0E9] focus:border-[#C6A66B] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submission Buttons */}
              <div className="pt-4 border-t border-[#F3F0E9]/10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 py-3.5 px-6 bg-[#C6A66B] hover:bg-[#DBC392] text-[#101010] text-xs font-medium tracking-cinema uppercase flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#C6A66B]/10"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (Instant)</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="py-3.5 px-6 border border-[#F3F0E9]/20 hover:border-[#C6A66B] text-[#F3F0E9] hover:text-[#C6A66B] text-xs font-medium tracking-cinema uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email Draft</span>
                </button>
              </div>

              <p className="text-[11px] text-[#A5A29C]/70 text-center italic">
                * Clicking WhatsApp or Email compiles your inquiry and opens the corresponding app directly on your phone or computer.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
