import React from 'react';
import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { X, ShieldCheck } from 'lucide-react';
const comparisons = [
  {
    feature: "Deployment Speed",
    legacy: "Weeks (Hardware setup/Shipping)",
    cloudflare: "Days (Cloud-native activation)",
    isAdvantage: true
  },
  {
    feature: "Security Model",
    legacy: "Perimeter-based (Castle & Moat)",
    cloudflare: "Zero Trust (Global Identity)",
    isAdvantage: true
  },
  {
    feature: "Management",
    legacy: "Siloed (Different UIs for VPN/WAF)",
    cloudflare: "Unified Connectivity Cloud",
    isAdvantage: true
  },
  {
    feature: "Architecture",
    legacy: "Hardware-bound & Rigid",
    cloudflare: "300+ City Edge Network",
    isAdvantage: true
  },
  {
    feature: "Business Model",
    legacy: "Low-margin Transactional",
    cloudflare: "High-margin Recurring Revenue",
    isAdvantage: true
  }
];
export function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-border/50 bg-card overflow-hidden shadow-2xl"
    >
      <Table>
        <TableHeader className="bg-secondary/50">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-1/3 py-6 px-6 font-bold text-foreground">Strategic Pivot</TableHead>
            <TableHead className="w-1/3 py-6 px-6 font-bold text-muted-foreground">Legacy Infrastructure</TableHead>
            <TableHead className="w-1/3 py-6 px-6 font-bold text-cloudflare">Cloudflare Advantage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisons.map((item, idx) => (
            <TableRow key={idx} className="group transition-colors border-b last:border-0">
              <TableCell className="py-6 px-6 font-semibold">{item.feature}</TableCell>
              <TableCell className="py-6 px-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" /> 
                  <span className="text-sm md:text-base">{item.legacy}</span>
                </div>
              </TableCell>
              <TableCell className="py-6 px-6 bg-cloudflare/5 font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cloudflare flex-shrink-0" />
                  <span className="text-sm md:text-base">{item.cloudflare}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}