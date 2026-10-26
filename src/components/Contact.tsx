import { site } from '../config/site'
import SectionIntro from './SectionIntro'
import {
  IconArrowUpRight,
  IconFacebookOriginal,
  IconInstagramOriginal,
  IconGmail,
  IconGoogleMaps,
  IconPhone,
  IconWhatsApp,
} from './Icons'

export default function Contact() {
  const { contact, location } = site

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-tint-rose border-t border-rose-soft py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="Contact"
          title="Let's Create Something Meaningful"
          titleId="contact-title"
          description="Have a project in mind or want to discuss your photography or videography needs? We'd love to hear from you."
        />

        {/* Hairline-divided details. No form — every row is a real, working link. */}
        <div className="reveal mt-14 overflow-hidden border border-line bg-line sm:mt-16">
          <div className="grid gap-px sm:grid-cols-3">
            <div className="bg-cream-deep p-7 sm:p-8">
              <IconGoogleMaps className="h-5 w-5" />
              <p className="mt-5 text-[0.68rem] font-medium uppercase tracking-label text-muted">Location</p>
              <p className="mt-2 text-lg text-ink">{location}</p>
            </div>

            <a
              href={contact.phoneHref}
              className="group bg-cream-deep p-7 transition-colors duration-300 hover:bg-cream sm:p-8"
            >
              <IconPhone className="h-5 w-5 text-green-600" />
              <p className="mt-5 flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-label text-muted">
                Phone
                <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </p>
              <p className="mt-2 text-lg text-ink">{contact.phoneDisplay}</p>
            </a>

            <a
              href={contact.emailHref}
              className="group bg-cream-deep p-7 transition-colors duration-300 hover:bg-cream sm:p-8"
            >
              <IconGmail className="h-5 w-5" />
              <p className="mt-5 flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-label text-muted">
                Email
                <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </p>
              <p className="mt-2 break-all text-lg text-ink">{contact.email}</p>
            </a>
          </div>

          {/* Social profiles. */}
          <div className="mt-px grid gap-px sm:grid-cols-2">
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-deep p-7 transition-colors duration-300 hover:bg-cream sm:p-8"
            >
              <IconFacebookOriginal className="h-5 w-5" />
              <p className="mt-5 flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-label text-muted">
                Facebook
                <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </p>
              <p className="mt-2 break-all text-lg text-ink">{contact.facebookHandle}</p>
            </a>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-deep p-7 transition-colors duration-300 hover:bg-cream sm:p-8"
            >
              <IconInstagramOriginal className="h-5 w-5" />
              <p className="mt-5 flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-label text-muted">
                Instagram
                <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </p>
              <p className="mt-2 break-all text-lg text-ink">{contact.instagramHandle}</p>
            </a>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-[0.75rem] font-medium uppercase tracking-label text-white shadow-lg shadow-green-500/30 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#1eb85a]"
          >
            <IconWhatsApp className="h-4.5 w-4.5" />
            Chat on WhatsApp
          </a>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#25D366] bg-white px-7 py-3.5 text-[0.75rem] font-medium uppercase tracking-label text-[#128C4B] transition-colors duration-300 hover:bg-[#25D366] hover:text-white"
          >
            <IconPhone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
