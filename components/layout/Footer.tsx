import Link from 'next/link'
import Image from 'next/image'
import { getPageContent } from '@/lib/content'
import {
  IconBrandInstagram,
  IconMail,
  IconMapPin,
  IconArrowUpRight,
  IconLeaf,
} from '@tabler/icons-react'

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Our Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog & Updates' },
  { href: '/contact', label: 'Contact' },
]

const programLinks = [
  { href: '/programs#afforestation', label: 'Afforestation' },
  { href: '/programs#education', label: 'Education & Infrastructure' },
  { href: '/programs#environmental-action', label: 'Environmental Action' },
]

export async function Footer() {
  const page = await getPageContent()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest text-white/90 relative overflow-hidden">
      {/* Top accent bar with warm gradient */}
      <div className="h-1 bg-gradient-to-r from-leaf via-gold to-fern" />

      {/* Decorative warm glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/3 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-14 pb-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <Image
                src="/images/logo/logo.webp"
                alt="Vanashree Logo"
                width={32}
                height={32}
                className="rounded-full ring-1 ring-white/10 group-hover:ring-gold/30 transition-all duration-300"
              />
              <span className="text-white font-bold text-xl tracking-wide">Vanashree</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {page.footerTagline}
            </p>
            <a
              href={page.footerInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm transition-colors duration-300"
            >
              <IconBrandInstagram size={18} />
              @vanashree_ngo
              <IconArrowUpRight size={13} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <IconArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <IconArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              Reach Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <IconMapPin size={16} className="text-gold" />
                </div>
                <span>{page.footerAddress}</span>
              </li>
              {page.footerEmail && (
                <li className="flex items-center gap-3 text-sm text-white/50">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <IconMail size={16} className="text-gold" />
                  </div>
                  <a
                    href={`mailto:${page.footerEmail}`}
                    className="hover:text-white transition-colors"
                  >
                    {page.footerEmail}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p className="flex items-center gap-1">
            &copy; {currentYear} Vanashree Gramvikas Pratishthan. Made with
            <IconLeaf size={12} className="text-gold/60" />
            in Maharashtra.
          </p>
          <p>{page.footerRegistration}</p>
        </div>
      </div>
    </footer>
  )
}
