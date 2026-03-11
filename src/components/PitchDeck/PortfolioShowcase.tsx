import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cloud, BarChart3, Database } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
interface PortfolioItem {
  icon: typeof Shield;
  title: string;
  description: string;
  replacement: string;
  stats: { label: string; value: string; percent: number }[];
  legacyDisplacement: string;
}
const portfolioItems: PortfolioItem[] = [
  {
    icon: Shield,
    title: "Zero Trust (ZTNA)",
    description: "Secure, identity-based access for every user. Eliminates the risks of traditional perimeter security.",
    replacement: "Replaces Sophos VPN",
    legacyDisplacement: "Sophos / Fortinet VPN",
    stats: [
      { label: "Connection Speed", value: "+40%", percent: 40 },
      { label: "Security Posture", value: "100%", percent: 100 }
    ]
  },
  {
    icon: Cloud,
    title: "Connectivity Cloud",
    description: "A unified platform connecting multi-cloud and hybrid environments without hardware bottlenecks.",
    replacement: "Replaces Pure Storage dependency",
    legacyDisplacement: "Pure / Legacy Hardware",
    stats: [
      { label: "Egress Costs", value: "Zero", percent: 90 },
      { label: "Latency Red.", value: "-60ms", percent: 75 }
    ]
  },
  {
    icon: Zap,
    title: "WAF & Bot Defense",
    description: "Protection at the edge against zero-day vulnerabilities and massive DDoS attacks.",
    replacement: "Next-Gen App Security",
    legacyDisplacement: "Legacy F5 / Barracuda",
    stats: [
      { label: "Threat Intel", value: "100T+", percent: 95 },
      { label: "Uptime", value: "99.99%", percent: 99 }
    ]
  },
  {
    icon: Database,
    title: "Workers AI & R2",
    description: "Serverless execution and zero-egress storage for the next generation of AI applications.",
    replacement: "The AI Frontier",
    legacyDisplacement: "AWS / Azure Data Taxes",
    stats: [
      { label: "Scale Speed", value: "Instant", percent: 100 },
      { label: "Cost Savings", value: "60%", percent: 60 }
    ]
  }
];
export function PortfolioShowcase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {portfolioItems.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative p-8 rounded-4xl border border-border/50 bg-card hover:border-cloudflare/50 transition-all duration-300 shadow-soft"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="p-4 rounded-2xl bg-gradient-brand text-white shadow-glow">
              <item.icon className="w-8 h-8" />
            </div>
            <div className="text-right">
              <Badge variant="outline" className="border-cloudflare/30 text-cloudflare bg-cloudflare/5 mb-2 block w-fit ml-auto">
                {item.replacement}
              </Badge>
              <div className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Displaces: {item.legacyDisplacement}</div>
            </div>
          </div>
          <h3 className="text-2xl font-black mb-4 group-hover:text-cloudflare transition-colors">{item.title}</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
            {item.description}
          </p>
          <div className="space-y-6">
            {item.stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                  <span className="text-sm font-black text-foreground">{stat.value}</span>
                </div>
                <Progress value={stat.percent} className="h-1.5 bg-secondary" />
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-2 text-xs font-bold text-cloudflare uppercase tracking-tighter">
            <BarChart3 className="w-4 h-4" /> Cloudflare Global: 300+ PoPs | 100+ Tbps Capacity
          </div>
          <div className="absolute inset-0 rounded-4xl bg-gradient-brand opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}