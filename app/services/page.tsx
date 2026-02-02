import { ArrowRight, Shield, CheckCircle, Cog, TrendingUp, Globe, CreditCard, Monitor, Apple, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function ServicesPage() {
  const serviceCategories = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Institutional Scaling",
      color: "brand-primary",
      description: "We build systems designed for the global market, ensuring sub-millisecond latency and 99.99% uptime for institutional-grade financial traffic.",
      features: ["High-Concurrency Backends", "distributed Ledger Systems", "Automated Performance Triage"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Security & Compliance",
      color: "brand-secondary",
      description: "Deep integration of jurisdictional compliance and security-first protocols. We bake safety into the architectural foundation of every product.",
      features: ["AES-256 Edge Encryption", "SOC2/GDPR Alignment", "Real-time Threat Neutralization"]
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "FinTech Infrastructure",
      color: "brand-tertiary",
      description: "Building the plumbing for modern money. We specialize in complex gateway orchestrations and multi-rail payment integrations.",
      features: ["Multi-Rail Payment API", "Smart Transaction Routing", "Reconciliation Automation"]
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Strategic Advisory",
      color: "brand-primary",
      description: "More than builders; we are strategic partners by translating visionary concepts into technical blueprints that Founders can scale confidently.",
      features: ["Technical Roadmap Design", "Architecture Audit", "Founder-Centric Triage"]
    }
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
      <Navigation />


      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-12 md:p-16 rounded-[4rem] backdrop-blur-3xl bg-white/[0.06] border border-white/10 mb-12 shadow-4xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              End-to-End <span className="text-brand-primary">Capability</span> set
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Strategic technical execution across the entire FinTech lifecycle, from architectural design to institutional scaling.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Pillars */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceCategories.map((service, index) => (
              <Card key={index} className="backdrop-blur-3xl bg-white/[0.05] border-white/10 hover:border-brand-primary/20 transition-all duration-700 rounded-[3.5rem] group shadow-[0_0_40px_rgba(37,99,235,0.03)] hover:shadow-[0_0_60px_rgba(37,99,235,0.08)]">
                <CardContent className="p-12 md:p-16">
                  <div className={`w-20 h-20 rounded-[2rem] bg-${service.color}/10 border border-${service.color}/20 flex items-center justify-center mb-10 transition-transform group-hover:scale-110`}>
                    <div className={`text-${service.color}`}>{service.icon}</div>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-6 tracking-tighter uppercase">{service.title}</h3>
                  <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/50 group/item">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color} mr-4 transition-transform group-hover/item:scale-150`} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{feature}</span>
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
