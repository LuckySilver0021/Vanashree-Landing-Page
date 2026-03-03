import type { Metadata } from 'next'
import { getPageContent } from '@/lib/content'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/motion/FadeIn'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  IconMapPin,
  IconMail,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconArrowUpRight,
  IconLeaf,
  IconArrowRight,
  IconUsers,
} from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Vanashree Gramvikas Pratishthan. Volunteer, partner, or learn more about our work in rural Maharashtra.',
}

export default async function ContactPage() {
  const page = await getPageContent()

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Create Change Together"
        description="Reach out to volunteer, partner, or learn more about our work"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* ─── Contact info ─── */}
            <FadeIn direction="left">
              <div>
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
                <h2 className="text-2xl md:text-3xl font-bold text-forest leading-snug mb-6">
                  We&apos;d love to hear from you
                </h2>
                <p className="text-stone text-base leading-relaxed mb-10">
                  Whether you want to volunteer, partner with us on a project,
                  or just learn more about our work — we&apos;re here to connect.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <IconMapPin size={22} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-forest font-semibold text-sm mb-1">Address</h3>
                      <p className="text-stone text-sm leading-relaxed">{page.footerAddress}</p>
                    </div>
                  </div>

                  {page.footerEmail && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-leaf/10 flex items-center justify-center shrink-0">
                        <IconMail size={22} className="text-leaf" />
                      </div>
                      <div>
                        <h3 className="text-forest font-semibold text-sm mb-1">Email</h3>
                        <a
                          href={`mailto:${page.footerEmail}`}
                          className="text-leaf hover:text-canopy text-sm transition-colors"
                        >
                          {page.footerEmail}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                      <IconBrandInstagram size={22} className="text-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-forest font-semibold text-sm mb-1">Instagram</h3>
                      <a
                        href={page.footerInstagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-terracotta hover:text-gold text-sm transition-colors flex items-center gap-1"
                      >
                        @vanashree_ngo
                        <IconArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {page.footerWhatsapp && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                        <IconBrandWhatsapp size={22} className="text-[#25D366]" />
                      </div>
                      <div>
                        <h3 className="text-forest font-semibold text-sm mb-1">WhatsApp</h3>
                        <a
                          href={`https://wa.me/${page.footerWhatsapp}?text=Hi%20Vanashree%20team%2C%20I%20would%20like%20to%20connect%20with%20you.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:text-green-600 text-sm transition-colors flex items-center gap-1 font-medium"
                        >
                          Chat on WhatsApp
                          <IconArrowUpRight size={13} />
                        </a>
                        <p className="text-pebble text-xs mt-0.5">{page.footerPhone}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* ─── Ways to help section ─── */}
            <FadeIn direction="right">
              <div className="space-y-5">
                <div className="relative bg-gradient-to-br from-petal to-cream rounded-2xl p-7 border border-moss/15 group hover:shadow-lg transition-all duration-500">
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-leaf to-fern rounded-b" />
                  <div className="w-12 h-12 rounded-xl bg-leaf/10 flex items-center justify-center mb-4">
                    <IconLeaf size={22} className="text-leaf" />
                  </div>
                  <h3 className="text-forest font-bold text-lg mb-2">Volunteer</h3>
                  <p className="text-stone text-sm leading-relaxed mb-4">
                    Join our plantation drives, teach at community schools, or help
                    with cleanup campaigns. Every helping hand matters.
                  </p>
                  <a
                    href={`mailto:${page.footerEmail}?subject=Volunteering Inquiry`}
                    className="text-leaf hover:text-canopy text-sm font-semibold flex items-center gap-1 transition-colors"
                  >
                    Email to Volunteer <IconArrowRight size={14} />
                  </a>
                </div>

                <div className="relative bg-gradient-to-br from-sand to-petal rounded-2xl p-7 border border-gold/15 group hover:shadow-lg transition-all duration-500">
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-gold to-amber rounded-b" />
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <IconUsers size={22} className="text-gold" />
                  </div>
                  <h3 className="text-forest font-bold text-lg mb-2">Partner With Us</h3>
                  <p className="text-stone text-sm leading-relaxed mb-4">
                    We welcome partnerships with schools, gram panchayats, and organizations
                    working towards rural development and environmental conservation.
                  </p>
                  <a
                    href={`mailto:${page.footerEmail}?subject=Partnership Inquiry`}
                    className="text-gold hover:text-amber text-sm font-semibold flex items-center gap-1 transition-colors"
                  >
                    Discuss Partnership <IconArrowRight size={14} />
                  </a>
                </div>

                <div className="relative bg-white rounded-2xl p-7 border border-terracotta/15 group hover:shadow-lg transition-all duration-500">
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-terracotta to-gold rounded-b" />
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mb-4">
                    <IconBrandInstagram size={22} className="text-terracotta" />
                  </div>
                  <h3 className="text-forest font-bold text-lg mb-2">Spread the Word</h3>
                  <p className="text-stone text-sm leading-relaxed mb-4">
                    Follow us on Instagram and share our stories. Community awareness
                    is the first step to community action.
                  </p>
                  <a
                    href={page.footerInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta hover:text-gold text-sm font-semibold flex items-center gap-1 transition-colors"
                  >
                    Follow @vanashree_ngo <IconArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


    </>
  )
}
