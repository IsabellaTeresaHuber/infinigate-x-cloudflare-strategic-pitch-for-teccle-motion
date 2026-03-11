import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  Users,
  Rocket,
  CheckCircle2,
  Award
} from 'lucide-react';
import { Navigation } from '@/components/PitchDeck/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SectionHeader } from '@/components/PitchDeck/SectionHeader';
import { FeatureCard } from '@/components/PitchDeck/FeatureCard';
import { ContactForm } from '@/components/PitchDeck/ContactForm';
import { AboutTeccle } from '@/components/PitchDeck/AboutTeccle';
import { MarketTrends } from '@/components/PitchDeck/MarketTrends';
import { OnboardingTimeline } from '@/components/PitchDeck/OnboardingTimeline';
import { AISection } from '@/components/PitchDeck/AISection';
import { CTABanner } from '@/components/PitchDeck/CTABanner';
import { PortfolioShowcase } from '@/components/PitchDeck/PortfolioShowcase';
import { ComparisonTable } from '@/components/PitchDeck/ComparisonTable';
import { PartnerProgram } from '@/components/PitchDeck/PartnerProgram';
import { TeamSection } from '@/components/PitchDeck/TeamSection';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { Badge } from '@/components/ui/badge';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cloudflare/30 scroll-smooth">
      <Navigation />
      <ThemeToggle className="fixed top-20 right-4 md:top-24" />
      <Toaster richColors position="top-center" />
      {/* Hero Section */}
      <section id="hero" className="relative min-h-svh flex items-center justify-center overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 bg-gradient-to-b from-infinigate/5 to-cloudflare/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(243,128,32,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="text-2xl font-black text-infinigate tracking-tighter">INFINIGATE</span>
              <div className="h-6 w-px bg-border/50" />
              <div className="flex items-center gap-2 bg-foreground/5 px-4 py-2 rounded-full border border-border/50">
                <div className="w-5 h-5 rounded-full bg-gradient-brand shadow-sm" />
                <span className="text-xl font-black tracking-tighter">teccle motion</span>
              </div>
              <div className="h-6 w-px bg-border/50" />
              <span className="text-2xl font-black text-cloudflare tracking-tighter">CLOUDFLARE</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-balance">
              Strategic Growth for <br />
              <span className="text-gradient">teccle motion</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground text-pretty font-medium">
              Empowering teccle motion to lead the cybersecurity landscape through the Infinigate x Cloudflare strategic partnership.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-white font-bold h-14 px-8 rounded-xl shadow-glow transition-transform hover:scale-105" asChild>
                <a href="#contact">Join PowerUP & Start Selling AI</a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl border-border/50 hover:bg-accent/50" asChild>
                <a href="#opportunity">Explore the Opportunity</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* About Teccle Section */}
      <AboutTeccle />
      
      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 scroll-mt-24">
        <SectionHeader
          badge="Connectivity Cloud"
          title="The Cloudflare Advantage"
          subtitle="Cloudflare protects and accelerates any Internet-facing application with a global connectivity cloud."
        />
        <PortfolioShowcase />
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Technical & Business Comparison</h3>
          <ComparisonTable />
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-gradient-brand text-white font-bold h-12 rounded-xl" asChild>
              <a href="#contact">Request Technical Deep-Dive</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Market Trends Section */}
      <MarketTrends />

      {/* Why Teccle Motion? */}
      <section id="opportunity" className="bg-secondary/30 border-y border-border/50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <SectionHeader
                align="left"
                title="The Reseller Opportunity"
                subtitle="Transform your business model from transactional hardware to high-margin recursive cloud security."
              />
              <ul className="space-y-4">
                {[
                  "High-margin recurring revenue models.",
                  "Fast implementation (Days vs Weeks).",
                  "Consolidate multiple legacy vendors.",
                  "Zero Trust architecture by default."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-cloudflare w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-brand group"
            >
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white bg-black/10 group-hover:bg-black/0 transition-colors">
                <div className="space-y-6">
                  <TrendingUp className="w-20 h-20 mx-auto opacity-80" />
                  <h3 className="text-3xl font-bold">Accelerate Growth</h3>
                  <p className="text-lg opacity-90 max-w-sm">Move away from low-margin hardware silos towards elite cloud services.</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-24">
            <SectionHeader
              title="PowerUP Partner Program"
              subtitle="Propel teccle motion to new heights with exclusive Infinigate-backed partner enablement."
            />
            <PartnerProgram />
          </div>
        </div>
      </section>
      
      {/* Onboarding Timeline Section */}
      <OnboardingTimeline />

      {/* AI Section */}
      <AISection />
      {/* Infinigate Edge */}
      <section id="edge" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 scroll-mt-24">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge className="mb-4 bg-infinigate text-white border-none py-1 px-4 hover:bg-infinigate">
            <Award className="w-4 h-4 mr-2" /> EMEA Distributor of the Year
          </Badge>
          <SectionHeader
            title="The Infinigate Edge"
            subtitle="We don't just ship boxes. We enable your technical and commercial success."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Rocket}
            title="Technical Enablement"
            description="Deep-dive workshops and pre-sales engineering support from Infinigate experts."
          />
          <FeatureCard
            icon={Users}
            title="Strategic Marketing"
            description="Co-branded campaigns and lead generation support for teccle motion."
          />
          <FeatureCard
            icon={Lock}
            title="Consolidated Billing"
            description="Streamlined procurement and financial services through our partner portal."
          />
        </div>
      </section>
      {/* Team & Partnership Section */}
      <TeamSection />
      {/* CTA Banner Section */}
      <CTABanner />
      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-foreground text-background scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(227,6,19,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Let's move <br />
                <span className="text-cloudflare">teccle motion</span> <br />
                forward.
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-md">
                Schedule a discovery session with the Infinigate Cloudflare team to begin your onboarding journey.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="text-cloudflare" />
                  </div>
                  <span className="text-lg font-medium">Free Partner Onboarding</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="text-cloudflare" />
                  </div>
                  <span className="text-lg font-medium">Marketing Resource Access</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-4xl p-8 sm:p-12 shadow-2xl text-foreground">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <footer className="py-12 border-t border-border/10 text-center text-muted-foreground text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-bold text-infinigate">INFINIGATE</span>
            <span className="text-border">|</span>
            <span className="font-bold text-cloudflare">CLOUDFLARE</span>
          </div>
          <p>© {new Date().getFullYear()} Infinigate Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}