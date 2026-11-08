import { useState } from 'react'
import { IconWhatsApp, IconCheck } from './Icons'

interface BookingStudioProps {
  selectedService: string
  onServiceChange: (service: string) => void
}

export default function BookingStudio({ selectedService, onServiceChange }: BookingStudioProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [message, setMessage] = useState('')
  const [botcheck, setBotcheck] = useState(false)

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const [submittedPhone, setSubmittedPhone] = useState('')
  const [waFollowupUrl, setWaFollowupUrl] = useState('')

  const serviceOptions = [
    'Wedding & Cinematography',
    'Pre / Post Wedding',
    'Birthday & Anniversary',
    'Corporate & Commercial',
    'Portrait & Fashion',
    'Other / Custom Service',
  ]

  const activeService = selectedService || serviceOptions[0]

  const buildWaUrl = (customMsg?: string) => {
    const textMsg =
      `*New Booking Inquiry (Dorpon Website)*\n` +
      `👤 *Name:* ${name || 'Prospective Client'}\n` +
      `📞 *Phone:* ${phone || 'Not specified'}\n` +
      (email ? `✉️ *Email:* ${email}\n` : '') +
      `📸 *Package / Service:* ${activeService}\n` +
      (eventDate ? `📅 *Event Date:* ${eventDate}\n` : '') +
      (message ? `💬 *Notes / Location:* ${message}\n` : '') +
      (customMsg ? `\n${customMsg}` : '')

    return `https://wa.me/8801740744170?text=${encodeURIComponent(textMsg)}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)

    if (botcheck) {
      setIsSuccess(true)
      return
    }

    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()

    if (!trimmedName || !trimmedPhone) {
      setErrorMsg('Please enter your full name and valid phone number.')
      return
    }

    setLoading(true)

    const payload = {
      access_key: 'e7ac1dff-e0f9-44f0-b6a0-c568da4499c4',
      subject: `New Dorpon Shoot Booking: ${trimmedName} (${activeService})`,
      from_name: trimmedName,
      name: trimmedName,
      phone: trimmedPhone,
      email: email.trim() || 'Not provided',
      service: activeService,
      event_date: eventDate || 'Not specified',
      message: message.trim() || 'No additional message',
      botcheck: false,
    }

    try {
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await resp.json()
      if (resp.ok && result && result.success) {
        setSubmittedName(trimmedName)
        setSubmittedPhone(trimmedPhone)
        setWaFollowupUrl(buildWaUrl())
        setIsSuccess(true)
      } else {
        throw new Error('Submission response not ok')
      }
    } catch {
      setErrorMsg(
        'Sorry, could not send request right now. Please check your internet connection, or tap below to message directly on WhatsApp.',
      )
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setName('')
    setPhone('')
    setEmail('')
    setEventDate('')
    setMessage('')
    setErrorMsg(null)
    setIsSuccess(false)
  }

  return (
    <section
      id="booking-studio"
      aria-label="Interactive Booking Studio"
      className="py-16 sm:py-24 relative border-t border-rule bg-paper text-ink overflow-hidden w-full max-w-full"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 max-w-full">
        <div className="relative rounded-card p-6 sm:p-10 lg:p-12 green-glass-panel border border-rule shadow-card overflow-hidden min-w-0">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-2">
              Book Your Session
            </h2>
            <p className="text-sm text-muted">
              Select your service package and share your event details to check date availability.
            </p>
          </div>

          {/* Success State */}
          {isSuccess ? (
            <div className="py-10 px-4 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center mb-5 shadow-lg">
                <IconCheck className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-2">
                Thank You, {submittedName}!
              </h3>
              <p className="text-sm text-muted max-w-md mb-6 leading-relaxed">
                Your booking inquiry has been delivered to Dorpon. We will connect with you at ({submittedPhone}) shortly.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                <a
                  href={waFollowupUrl || 'https://wa.me/8801740744170'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-full bg-accent hover:opacity-90 text-paper font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-opacity shadow-md"
                >
                  <IconWhatsApp className="w-4 h-4 text-paper" />
                  <span>Confirm on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-paper-2 hover:bg-paper-3 text-ink text-xs sm:text-sm font-medium transition-colors cursor-pointer border border-rule"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="checkbox"
                name="botcheck"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {errorMsg && (
                <div className="p-4 rounded-xl bg-error/10 border border-error/30 text-error text-xs sm:text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Service Chips */}
              <div>
                <label className="block text-xs font-semibold text-accent mb-2.5">
                  1. Select Service Package <span className="text-accent">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {serviceOptions.map((opt) => {
                    const isSelected = activeService === opt
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => onServiceChange(opt)}
                        className={`px-3.5 py-3 min-h-[48px] rounded-xl text-left border transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-accent/20 border-accent text-ink shadow-sm ring-1 ring-accent/40'
                            : 'bg-paper-2 border-rule text-ink-2 hover:text-ink hover:bg-paper-3'
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-medium tracking-wide leading-tight">
                          {opt}
                        </span>
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'border-accent bg-accent text-paper'
                              : 'border-muted/40 bg-transparent'
                          }`}
                        >
                          {isSelected && <IconCheck className="w-2.5 h-2.5 text-paper stroke-[3]" />}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Contact Details Fields with Clear Labels & High Contrast */}
              <div>
                <label className="block text-xs font-semibold text-accent mb-2.5">
                  2. Contact Details <span className="text-accent">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-ink-2 mb-1.5">
                      Full Name <span className="font-bangla">(আপনার নাম)</span> <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rajin Ahmed"
                      className="w-full px-4 py-3 rounded-xl bg-paper border border-muted text-ink placeholder-muted text-sm focus-visible:outline-none focus-visible:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-ink-2 mb-1.5">
                      Phone Number <span className="font-bangla">(মোবাইল নম্বর)</span> <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-paper border border-muted text-ink placeholder-muted text-sm focus-visible:outline-none focus-visible:border-accent transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-ink-2 mb-1.5">
                      Email Address <span className="font-bangla">(ইমেইল - Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-paper border border-muted text-ink placeholder-muted text-sm focus-visible:outline-none focus-visible:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-xs font-medium text-ink-2 mb-1.5 flex items-center justify-between">
                      <span>Event Date <span className="font-bangla">(ইভেন্টের তারিখ)</span></span>
                      <span className="text-xs text-accent">Select date</span>
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-paper border border-muted text-ink text-sm focus-visible:outline-none focus-visible:border-accent transition-colors cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-accent mb-1.5">
                  3. Event Location & Notes <span className="font-bangla">(লোকেশন ও বিবরণ)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Event location (Rajbari, Faridpur, Dhaka), timings, or special requests…"
                  className="w-full px-4 py-3 rounded-xl bg-paper border border-muted text-ink placeholder-muted text-sm focus-visible:outline-none focus-visible:border-accent transition-colors"
                />
              </div>

              {/* Dual Action Submit Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="brand-btn w-full sm:flex-1 py-3.5 px-7 rounded-full text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">
                    {loading ? 'Sending…' : 'Send Booking'}
                  </span>
                </button>

                <a
                  href={buildWaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="green-glass-panel hover:bg-paper-3 text-ink w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer border border-rule"
                >
                  <IconWhatsApp className="w-4 h-4 text-accent shrink-0" />
                  <span>WhatsApp Express</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
