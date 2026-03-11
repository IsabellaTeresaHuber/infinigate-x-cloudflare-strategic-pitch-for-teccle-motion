import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, BarChart3, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export function PartnerProgram() {
  const paths = [
    { title: "Resell", desc: "Standard partner path with healthy margins." },
    { title: "Manage", desc: "Build managed services (MSSP) on Cloudflare." },
    { title: "Distribute", desc: "Scale with Infinigate's expert logistics." },
    { title: "Build", desc: "Develop on the Workers serverless platform." }
  ];
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paths.map((path, idx) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="border-none bg-secondary/50 hover:bg-secondary/80 transition-colors">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">{path.title}</h4>
                <p className="text-sm text-muted-foreground">{path.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="bg-foreground text-background rounded-4xl p-8 md:p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Award className="w-48 h-48 rotate-12" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <Badge className="mb-6 bg-infinigate text-white hover:bg-infinigate border-none px-4 py-1">
            Elite Partnership Benefits
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Exclusive DACH MSSP Perks <br />
            <span className="text-cloudflare">EMEA Distributor of the Year</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-cloudflare flex-shrink-0" />
              <div>
                <p className="font-bold">Technical Training</p>
                <p className="text-sm text-muted-foreground">Unlimited access to certification tracks for Teccle motion engineers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BarChart3 className="w-6 h-6 text-cloudflare flex-shrink-0" />
              <div>
                <p className="font-bold">Marketing Dashboards</p>
                <p className="text-sm text-muted-foreground">Real-time lead tracking and co-branded campaign assets.</p>
              </div>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-brand text-white font-bold h-14 px-8 rounded-xl" asChild>
            <a href="#contact">
              Apply for PowerUP Program <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}