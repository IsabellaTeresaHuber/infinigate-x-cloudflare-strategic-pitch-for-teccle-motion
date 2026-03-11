import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cloud } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
interface PortfolioItem {
  icon: typeof Shield;
  title: string;
  description: string;
  replacement: string;
  benefits: string[];
}
const portfolioItems: PortfolioItem[] = [
  {
    icon: Shield,
    title: "Zero Trust (ZTNA)",
    description: "Secure, identity-based access for every user, device, and application. No more backhauling traffic.",
    replacement: "Replaces Legacy VPN",
    benefits: ["Identity-aware access", "Device posture checks", "Eliminate lateral movement"]
  },
  {
    icon: Zap,
    title: "WAF & Bot Management",
    description: "Protection at the edge against sophisticated automated attacks and zero-day vulnerabilities.",
    replacement: "Next-Gen App Security",
    benefits: ["Shared threat intelligence", "Advanced ML protection", "Zero-latency security"]
  },
  {
    icon: Cloud,
    title: "Connectivity Cloud",
    description: "A unified platform to connect and secure your multi-cloud and hybrid environments.",
    replacement: "Unified Fabric",
    benefits: ["Consolidated management", "Cloud-native architecture", "Silo-free networking"]
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "The world's fastest network, spanning 300+ cities to bring security and speed to the user.",
    replacement: "Global Performance",
    benefits: ["Sub-50ms latency globally", "Localized data handling", "Scalable DDoS protection"]
  }
];
export function PortfolioShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {portfolioItems.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative p-8 rounded-3xl border border-border/50 bg-card hover:border-cloudflare/50 transition-all duration-300 shadow-soft"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="p-3 rounded-2xl bg-gradient-brand text-white shadow-glow">
              <item.icon className="w-6 h-6" />
            </div>
            <Badge variant="outline" className="border-cloudflare/30 text-cloudflare bg-cloudflare/5">
              {item.replacement}
            </Badge>
          </div>
          <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {item.description}
          </p>
          <ul className="space-y-3">
            {item.benefits.map((benefit, bIdx) => (
              <li key={bIdx} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-cloudflare flex-shrink-0" />
                <span className="text-pretty">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}