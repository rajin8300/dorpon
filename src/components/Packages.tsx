import { useState } from 'react'
import { livePackagesData, type LivePackageItem } from '../data/packagesData'
import { useSite } from '../context/SiteContext'
import { translations } from '../data/translations'
import { IconWhatsApp, IconCheck, IconRing } from './Icons'

interface PackagesProps {
  onSelectPackage?: (serviceValue: string) => void
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  const { lang } = useSite()
  const t = translations[lang]
  const [activeCategory, setActiveCategory] = useState<'wedding' | 'outdoor'>('wedding')

  const filteredPackages = livePackagesData.filter((pkg) => pkg.category === activeCategory)

  const handleBookOnWhatsApp = (pkg: LivePackageItem) => {
    const textToSend = lang === 'bn' ? pkg.waTextBn : pkg.waText
    const waUrl = `https://wa.me/8801740744170?text=${encodeURIComponent(textToSend)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCustomFormSelect = (pkg: LivePackageItem) => {
    if (onSelectPackage) {
      const mappedService =
        lang === 'bn'
          ? (pkg.category === 'wedding'
              ? 'ওয়েডিং ফটোগ্রাফি ও সিনেমাটোগ্রাফি'
              : 'আউটডোর ও পোর্ট্রেট সেশন')
          : (pkg.category === 'wedding'
              ? 'Wedding & Cinematography'
              : 'Portrait & Fashion')
      onSelectPackage(mappedService)
    }
  }

  return (
    <section
      id="packages"
      aria-label="Packages and Pricing"
      className="py-16 sm:py-24 relative border-t border-rule bg-paper text-ink overflow-hidden w-full max-w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-w-0 max-w-full">
        {/* Section Header: Direct Headline, No AI Pill Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 min-w-0">
          <div className="min-w-0">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight">
              {t.packages.title}
            </h2>
          </div>

          {/* Category Toggle Tabs */}
          <div className="inline-flex items-center p-1.5 rounded-2xl green-glass-panel border border-rule self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveCategory('wedding')}
              className={`px-4 sm:px-5 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
                activeCategory === 'wedding'
                  ? 'bg-ink text-paper shadow-md font-bold'
                  : 'text-muted hover:text-ink hover:bg-paper-3'
              }`}
            >
              <IconRing className="w-4 h-4" />
              <span>{t.packages.tabWedding}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                  activeCategory === 'wedding' ? 'bg-paper text-ink' : 'bg-paper-3 text-ink-2'
                }`}
              >
                {lang === 'bn' ? '৪' : '4'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('outdoor')}
              className={`px-4 sm:px-5 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
                activeCategory === 'outdoor'
                  ? 'bg-ink text-paper shadow-md font-bold'
                  : 'text-muted hover:text-ink hover:bg-paper-3'
              }`}
            >
              <span>{t.packages.tabOutdoor}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                  activeCategory === 'outdoor' ? 'bg-paper text-ink' : 'bg-paper-3 text-ink-2'
                }`}
              >
                {lang === 'bn' ? '৩' : '3'}
              </span>
            </button>
          </div>
        </div>

        {/* Compact Package Grid */}
        <div
          className={`grid gap-4 sm:gap-6 min-w-0 ${
            activeCategory === 'wedding'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto'
          }`}
        >
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.popular
            const title = lang === 'bn' ? pkg.titleBn : pkg.titleEn
            const badge = lang === 'bn' ? (pkg.badgeBn || pkg.badge) : pkg.badge
            const priceFormatted = lang === 'bn' ? pkg.priceFormattedBn : pkg.priceFormatted
            const unit = lang === 'bn' ? pkg.unitBn : pkg.unit
            const coverage = lang === 'bn' ? pkg.coverageBn : pkg.coverage
            const team = lang === 'bn' ? pkg.teamBn : pkg.team
            const features = lang === 'bn' ? pkg.featuresBn : pkg.features

            return (
              <div
                key={pkg.id}
                className={`relative rounded-card p-5 sm:p-6 flex flex-col justify-between transition-colors min-w-0 w-full group ${
                  isPopular
                    ? 'bg-paper-3 border-2 border-accent shadow-card'
                    : 'bg-paper-2 border border-rule hover:border-accent/40'
                }`}
              >
                <div>
                  {/* Title & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors leading-tight">
                      {title}
                    </h3>
                    {badge && (
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border shrink-0 ${
                          isPopular
                            ? 'bg-accent text-accent-ink border-accent font-bold'
                            : 'bg-paper text-accent border-accent/40'
                        }`}
                      >
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Price & Meta Box */}
                  <div className="p-3.5 rounded-xl bg-paper border border-rule mb-5">
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="font-display text-2xl sm:text-3xl font-bold text-ink">
                        {priceFormatted}
                      </span>
                      <span className="text-xs text-accent font-medium">
                        {unit}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-muted">
                      <span>{lang === 'bn' ? 'সময়কাল: ' : 'Duration: '}{coverage}</span>
                      <span>{lang === 'bn' ? 'টিম: ' : 'Team: '}{team}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6">
                    {features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-ink-2 leading-relaxed">
                        <IconCheck className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions: Book on WhatsApp & Form Fill */}
                <div className="pt-4 border-t border-rule flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => handleBookOnWhatsApp(pkg)}
                    className={`w-full py-3.5 min-h-[44px] px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm ${
                      isPopular
                        ? 'bg-accent text-accent-ink font-bold'
                        : 'brand-btn'
                    }`}
                  >
                    <IconWhatsApp className="w-4 h-4 shrink-0" />
                    <span>{t.packages.bookWa}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCustomFormSelect(pkg)}
                    className="w-full py-2.5 min-h-[44px] px-4 rounded-full text-xs font-medium text-muted hover:text-ink hover:bg-paper-3 border border-transparent hover:border-rule transition-colors flex items-center justify-center cursor-pointer"
                  >
                    {t.packages.selectBtn}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
