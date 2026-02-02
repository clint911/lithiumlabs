import { ArrowRight, Shield, CheckCircle, Cog, TrendingUp, Globe, CreditCard, Monitor, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function ServicesPage() {
  const serviceCategories = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Full-Stack Development",
      color: "text-brand-primary",
      description: "Complete application development using modern frameworks and institutional architectures.",
      services: [
        "Next.js & React Web Assets",
        "Cross platform Mobile Dev",
        "Spring Boot Core Systems",
        "FastAPI & Node.js APIs",
        "Cloud Ops & Automation",
      ],
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Payments Ecosystem",
      color: "text-brand-secondary",
      description: "Integrating payment gateways for secure, global and local transactions.",
      services: [
        "Stripe & PayPal Hooks",
        "M-Pesa & Flutterwave Sync",
        "Crypto & Stablecoin Rails",
        "Subscription & Tiers",
        "Fraud Guard & Recs",
      ],
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "System Design",
      color: "text-brand-tertiary",
      description: "Aligning institutional objectives with high-performance engineering.",
      services: [
        "Automation Strategy",
        "Regulatory Logic",
        "Architecture Audit",
        "Stack Modernization",
        "Risk Mitigation",
      ],
    },
    {
      icon: <Cog className="h-10 w-10" />,
      title: "Post-Launch Alpha",
      color: "text-brand-primary",
      description: "Continuous improvement and scaling to deliver verified business value.",
      services: [
        "Uptime Monitoring",
        "Security Hardening",
        "Feature Iteration",
        "UX Optimization",
        "SLA Maintenance",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden text-white font-sans">
      {/* Background Image with Natural Tone */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.4] scale-105"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/20 via-brand-foundation/60 to-brand-foundation" />

      {/* Navigation */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-12 md:p-16 rounded-[4rem] backdrop-blur-3xl bg-white/[0.06] border border-white/10 mb-12 shadow-4xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              End-to-End <span className="text-brand-primary bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Capability</span> set
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-4xl mx-auto leading-relaxed font-light">
              We transform your core ideas into secure, battle-tested products that are ready to handle the intricate demands of the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="backdrop-blur-3xl bg-white/[0.05] border-white/10 hover:border-brand-primary/20 transition-all duration-500 rounded-[3rem] group">
                <CardContent className="p-12">
                  <div className={`${category.color} mb-10 transition-transform group-hover:scale-110`}>{category.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">{category.title}</h3>
                  <p className="text-white/40 mb-10 text-xs font-light uppercase tracking-widest leading-loose">{category.description}</p>
                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-white/30 text-[10px] font-black uppercase tracking-widest group-hover:text-white/60 transition-colors">
                        <CheckCircle className={`h-3 w-3 ${category.color} mr-4 opacity-50`} />
                        {service}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Delivery Framework</h2>
            <p className="text-lg text-white/30 font-light max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">Scaling innovation cycles through institutional-grade engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Discovery", color: "brand-primary" },
              { step: "02", title: "Architecture", color: "brand-secondary" },
              { step: "03", title: "Development", color: "brand-tertiary" },
              { step: "04", title: "Scaling", color: "brand-primary" },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-8 rounded-[1.5rem] bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all group-hover:bg-${phase.color}/10 group-hover:border-${phase.color}/20 group-hover:scale-110`}>
                  <span className={`text-${phase.color} font-black text-2xl`}>{phase.step}</span>
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{phase.title}</h3>
                <div className="h-0.5 w-8 bg-white/10 mx-auto group-hover:w-16 transition-all group-hover:bg-brand-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[4rem] p-16 md:p-24 shadow-4xl relative overflow-hidden">
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">Ready to Build?</h2>
            <p className="text-xl text-white/40 mb-12 font-light leading-relaxed">
              Let's discuss how our unified approach can accelerate your concept to market.
            </p>
            <Link href="/contact">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-12 py-8 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl">
                Contact Us <ArrowRight className="ml-4 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-4xl font-black text-white tracking-tighter uppercase">
            Lithium<span className="text-brand-primary">Labs</span>
          </div>
          <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Lithium Labs Consortium</div>
        </div>
      </footer>
    </div>
  )
}
