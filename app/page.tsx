import { ArrowRight, Shield, Zap, CheckCircle, Globe, CreditCard, TrendingUp, Cog, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden text-white font-sans">
      {/* Background Image with Natural Tone ("The Feeling") */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.45] scale-105"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/0 via-brand-foundation/60 to-brand-foundation" />

      {/* Navigation */}
      <Navigation />


      {/* Hero Section - Balanced Typography */}
      <section className="relative z-10 pt-56 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-6 sm:p-8 md:p-12 lg:p-16 rounded-[4rem] backdrop-blur-3xl bg-white/[0.05] border border-white/10 mb-8 shadow-4xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              From <span className="text-brand-primary">Idea</span> to
              <br />
              <span className="text-brand-secondary">Live Product</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto mb-10 sm:mb-14 leading-relaxed font-light">
              We empower visionary founders by transforming complex <span className="text-white font-bold opacity-90">Ideas</span>  into secure, market-ready digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 rounded-2xl text-base sm:text-lg md:text-xl font-black transition-all hover:scale-105 shadow-2xl shadow-brand-primary/30 uppercase tracking-widest">
                  Initiate Build <ArrowRight className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 text-white/70 hover:text-white hover:bg-white/5 bg-transparent px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 rounded-2xl text-base sm:text-lg md:text-xl font-black transition-all uppercase tracking-widest"
                >
                  Our Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview (Subsection) */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-none">The Lithium <br /><span className="text-brand-primary">Edge</span></h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                Lithium Labs was founded to bridge the critical gap between visionary concepts and production-grade digital assets.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Security-First Architectural Design",
                  "Institutional-Grade Implementation",
                  "Founder-Centric Strategic Synergy"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-white/90 group">
                    <CheckCircle className="h-5 w-5 text-brand-primary mr-4 transition-transform group-hover:scale-110" />
                    <span className="text-lg font-bold tracking-tight uppercase tracking-widest text-sm opacity-100">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button variant="outline" className="border-white/10 text-white/70 hover:text-white px-8 py-6 rounded-xl font-black uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.05)]">
                  Read Full Story
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-white/10 shadow-4xl group">
              <div className="absolute inset-0 bg-brand-foundation/40 mix-blend-multiply transition-opacity group-hover:opacity-20" />
              <div className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 font-black tracking-[1em] uppercase text-2xl -rotate-12 select-none">Institutional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview (Subsection) */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Engineering <span className="text-brand-primary">Pillars</span></h2>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Strategic technical execution across the entire Software development lifecycle, from architectural design to institutional scaling.
              </p>
            </div>
            <Link href="/services">
              <Button variant="link" className="text-brand-primary text-sm font-black p-0 flex items-center group uppercase tracking-widest">
                Full Service Inventory <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="h-10 w-10" />, title: "Web Design", color: "brand-primary", description: "Modern frameworks for market-ready web applications." },
              { icon: <CreditCard className="h-10 w-10" />, title: "Cross platform Development", color: "brand-secondary", description: "Android & Ios apps using React Native." },
              { icon: <TrendingUp className="h-10 w-10" />, title: "System Design", color: "brand-tertiary", description: "Scalable institutional architectures." },
              { icon: <Cog className="h-10 w-10" />, title: "API Development", color: "brand-primary", description: "Secure & Scalable platform APIS" },
            ].map((service, index) => (
              <Card key={index} className="backdrop-blur-3xl bg-white/[0.05] border-white/10 hover:border-brand-primary/20 transition-all duration-500 rounded-[2.5rem] group shadow-[0_0_30px_rgba(37,99,235,0.03)] hover:shadow-[0_0_50px_rgba(37,99,235,0.08)]">
                <CardContent className="p-10">
                  <div className={`text-${service.color} mb-8 transition-transform group-hover:scale-110`}>{service.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{service.title}</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview (Subsection) */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Verified <span className="text-brand-secondary">Builds</span></h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light mb-12">
              Showcasing selected deployments for institutional partners and visionary startups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {[
              {
                title: "LionX Ecosystem",
                client: "LionX Digital Creatives",
                color: "brand-primary",
                description: "Digital Creatives platform using modern incentives & rewarding mechanisms. ",
              },
              {
                title: "Expendi Savings App",
                client: "Expendi Labs",
                color: "brand-tertiary",
                description: "Savings platform leveraging DeFi yields to help Africans earn competitive returns on their savings. Cross-border savings solution with bank-level security, abstracting blockchain complexity while providing users with traditional banking simplicity combined with modern financial returns.",
              }
            ].map((project, index) => (
              <Card key={index} className="backdrop-blur-3xl bg-white/[0.04] border-white/10 hover:border-white/20 transition-all duration-700 rounded-[3rem] group shadow-[0_0_40px_rgba(255,100,255,0.02)] hover:shadow-[0_0_60px_rgba(255,100,255,0.05)]">
                <CardContent className="p-12">
                  <Badge variant="secondary" className={`bg-${project.color}/10 text-${project.color} border-none px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-8`}>
                    Institutional Build
                  </Badge>
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">{project.title}</h3>
                  <p className="text-white/70 mb-10 text-lg leading-relaxed font-light">{project.description}</p>
                  <Link href="/portfolio">
                    <Button variant="outline" className="border-white/10 text-white/70 hover:text-white px-8 py-5 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                      Audit Result
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button className="bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 px-12 py-8 rounded-2xl font-black uppercase text-sm tracking-widest shadow-2xl">
                Complete Portfolio <ExternalLink className="ml-4 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-3xl bg-brand-foundation/60 border border-white/10 rounded-[4rem] p-8 sm:p-12 md:p-16 lg:p-24 shadow-4xl relative overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.05)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] -mr-48 -mt-48" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tighter uppercase leading-none">The Future Is Built Now</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to transform your vision into a benchmark digital asset?
            </p>
            <Link href="/contact">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl text-base sm:text-lg md:text-xl font-black uppercase tracking-widest shadow-2xl">
                Initiate Build
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-4xl font-black text-white tracking-tighter uppercase">
              Lithium<span className="text-brand-primary">Labs</span>
            </div>
            <div className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Lithium Labs Consortium</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
