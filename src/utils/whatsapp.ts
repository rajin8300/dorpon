/**
 * Helper to build sanitized, properly encoded WhatsApp URLs
 */
export function buildWhatsAppLink(phoneNumber: string, message: string): string {
  // Clean phone number: remove non-numeric except leading '+'
  const cleanedPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanedPhone}?text=${encodedText}`;
}

export function buildMailtoLink(
  email: string,
  subject: string,
  body: string
): string {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}
