import { useState } from 'react'
import { site } from '../config/site'
import {
  IconPhone,
  IconWhatsApp,
  IconGmail,
  IconFacebookOriginal,
  IconInstagramOriginal,
  IconMapPin,
  IconArrowUpRight,
  IconCopy,
  IconCheck,
} from './Icons'

interface ContactBentoProps {
  onBookClick: () => void
}

export default function ContactBento({ onBookClick: _onBookClick }: ContactBentoProps) {
  const { contact } = site
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(contact.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section
      id="contact"
      aria-label="Direct Contact Bento"
      className="py-16 sm:py-24 relative border-t border-rule bg-paper text-ink overflow-hidden w-full max-w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-w-0 max-w-full">
        {/* Section Header: Direct & Confident */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight mb-2">
            Let’s Connect & Collaborate
          </h2>
          <p className="font-bangla text-sm sm:text-base text-muted leading-relaxed">
            আমরা সর্বদা আপনার বিশেষ দিনের রূপরেখা শুনতে প্রস্তুত। সরাসরি কল, হোয়াটসঅ্যাপ অথবা ইমেইলে যোগাযোগ করুন।
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Tile 1: One-Tap Direct Call */}
          <a
            href={contact.phoneHref}
            className="group rounded-card p-6 green-card shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-medium text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span>Available</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-ink group-hover:text-accent transition-colors mb-1">
                {contact.phoneDisplay}
              </h3>
              <p className="text-xs text-muted font-medium">
                Direct Phone Call
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted group-hover:text-ink">
              <span>Tap to call directly</span>
              <IconArrowUpRight className="w-4 h-4 text-accent" />
            </div>
          </a>

          {/* Tile 2: Instant WhatsApp Concierge */}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-card p-6 bg-paper-3 border border-accent/40 hover:border-accent transition-colors shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/40 text-accent flex items-center justify-center">
                  <IconWhatsApp className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-accent/20 text-xs font-bold text-accent">
                  Fast Response
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink group-hover:text-accent transition-colors mb-1">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-muted font-medium">
                WhatsApp Concierge
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-rule flex items-center justify-between text-xs text-ink-2 group-hover:text-ink">
              <span>Discuss packages, dates & rates</span>
              <IconArrowUpRight className="w-4 h-4 text-accent" />
            </div>
          </a>

          {/* Tile 3: Email Card with Copy Toast */}
          <div className="group rounded-card p-6 green-card shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-paper border border-rule text-ink flex items-center justify-center">
                  <IconGmail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-2 min-h-[44px] rounded-full bg-paper hover:bg-paper-3 text-xs text-ink-2 transition-colors flex items-center gap-1.5 cursor-pointer border border-rule"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <IconCheck className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent">Copied!</span>
                    </>
                  ) : (
                    <>
                      <IconCopy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-ink hover:text-accent transition-colors break-all mb-1">
                <a href={contact.emailHref}>
                  {contact.email}
                </a>
              </h3>
              <p className="text-xs text-muted font-medium">
                Official Inquiries
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted">
              <a href={contact.emailHref} className="hover:text-ink">
                Click to send email
              </a>
              <IconArrowUpRight className="w-4 h-4 text-accent" />
            </div>
          </div>

          {/* Tile 4: Facebook Page */}
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-card p-6 green-card shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-paper border border-rule flex items-center justify-center text-accent">
                  <IconFacebookOriginal className="w-5 h-5" />
                </div>
                <span className="text-xs text-muted">Facebook Page</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors mb-1">
                {contact.facebookHandle}
              </h3>
              <p className="text-xs text-muted font-medium">
                Official Page
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted group-hover:text-ink">
              <span>View stories and recent reels</span>
              <IconArrowUpRight className="w-4 h-4 text-accent" />
            </div>
          </a>

          {/* Tile 5: Instagram Feed */}
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-card p-6 green-card shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-paper border border-rule flex items-center justify-center text-accent">
                  <IconInstagramOriginal className="w-5 h-5" />
                </div>
                <span className="text-xs text-muted">Instagram Feed</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors mb-1">
                {contact.instagramHandle}
              </h3>
              <p className="text-xs text-muted font-medium">
                Visual Stories
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-rule flex items-center justify-between text-xs text-muted group-hover:text-ink">
              <span>Follow for bridal portraits</span>
              <IconArrowUpRight className="w-4 h-4 text-accent" />
            </div>
          </a>

          {/* Tile 6: Service Area Route */}
          <div className="rounded-card p-6 green-card shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-paper border border-rule text-xs text-accent">
                  Service Area
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-ink font-bangla mb-1">
                রাজবাড়ী, ফরিদপুর ও ঢাকা
              </h3>
              <p className="text-xs text-muted font-medium">
                Active Travel Route
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-rule text-xs text-muted">
              <p className="font-bangla leading-relaxed">ক্লায়েন্টের সুবিধার্থে আমরা নির্ধারিত ভেন্যুতে সরাসরি পৌঁছাই।</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
