import React from 'react';
import { motion } from 'framer-motion';
import { Users2, Handshake } from 'lucide-react';
export function TeamSection() {
  const teams = [
    {
      name: "Teccle Motion Team",
      caption: "Your Teccle Motion experts, ready to deploy Cloudflare wins.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200", // Representative modern office group
      icon: Users2,
      overlay: "from-cloudflare/40 to-transparent",
      alt: "Teccle Motion engineers collaborating in a modern office near a Christmas tree"
    },
    {
      name: "Infinigate Team",
      caption: "Infinigate partnership team – EMEA Distributor of the Year, powering your success.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200", // Professional group shaking hands/celebrating
      icon: Handshake,
      overlay: "from-infinigate/40 to-transparent",
      alt: "Infinigate professional team shaking hands and celebrating success"
    }
  ];
  return (
    <section id="teams" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          Our Teams & <span className="text-gradient">Partnership</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Combining Teccle Motion's engineering excellence with Infinigate's award-winning distribution power.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {teams.map((team, idx) => (
          <motion.div
            key={team.name}
            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-4xl shadow-2xl">
              {/* Image with hover zoom */}
              <img
                src={team.image}
                alt={team.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Brand Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${team.overlay} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white">
                    <team.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {team.name}
                  </h3>
                </div>
                <p className="text-lg text-white font-medium leading-snug text-pretty drop-shadow-md">
                  {team.caption}
                </p>
              </div>
            </div>
            {/* Subtle decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-brand opacity-10 rounded-full blur-3xl -z-10 group-hover:opacity-20 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}