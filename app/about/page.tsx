import { ArrowRight, Shield, Users, Target, Lightbulb, CheckCircle, Github, Linkedin, Twitter, Calendar, TrendingUp, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function AboutPage() {
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
          <div className="inline-block p-6 sm:p-8 md:p-12 lg:p-16 rounded-[4rem] backdrop-blur-3xl bg-white/[0.06] border border-white/10 mb-12 shadow-4xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              Your strategic <span className="text-brand-primary">technology</span> and software solutions partner.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Lithium Labs serves as the foundational partner for modern financial technology. We build the infrastructure that moves the world’s money, empowering businesses to navigate the digital economy through engineering secure, compliant, or scalable products.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="backdrop-blur-2xl bg-white/[0.05] border-white/10 rounded-[3.5rem] group shadow-[0_0_40px_rgba(37,99,235,0.03)] hover:shadow-[0_0_60px_rgba(37,99,235,0.08)]">
              <CardContent className="p-12 md:p-16">
                <div className="flex items-center mb-10">
                  <Target className="h-10 w-10 text-brand-primary mr-6 transition-transform group-hover:scale-110" />
                  <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Our Mission</h2>
                </div>
                <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                  To deliver high-impact financial systems that drive business value from Day 0 by building reliable, secure, and scalable technology that solves both business problems and creates user experiences we are proud of.
                </p>
                <div className="flex items-center text-brand-primary font-black uppercase text-xs tracking-widest">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  Assets over liabilities.
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-2xl bg-white/[0.05] border-white/10 rounded-[3.5rem] group shadow-[0_0_40px_rgba(255,100,255,0.02)] hover:shadow-[0_0_60px_rgba(255,100,255,0.05)]">
              <CardContent className="p-12 md:p-16">
                <div className="flex items-center mb-10">
                  <Lightbulb className="h-10 w-10 text-brand-secondary mr-6 transition-transform group-hover:scale-110" />
                  <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Our Vision</h2>
                </div>
                <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                  To establish a new standard for excellence across all domains of software development - from traditional web applications to cutting-edge FinTech and blockchain solutions.
                </p>
                <div className="flex items-center text-brand-secondary font-black uppercase text-xs tracking-widest">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  Market-ready Value.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-20 tracking-tighter uppercase">Foundational Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="h-8 w-8" />, title: "Security First", color: "brand-primary", description: "Robust protocols and stringent compliance in every solution." },
              { icon: <TrendingUp className="h-8 w-8" />, title: "Measured Value", color: "brand-secondary", description: "Focus on tangible business outcomes and measurable ROI." },
              { icon: <Users className="h-8 w-8" />, title: "Unified Expertise", color: "brand-tertiary", description: "Technical and strategic expertise under one trusted partnership." },
              { icon: <Globe className="h-8 w-8" />, title: "Lead Innovation", color: "brand-primary", description: "Forefront of emerging technologies in FinTech and Web3." },
            ].map((value, index) => (
              <Card key={index} className="backdrop-blur-3xl bg-white/[0.04] border-white/10 hover:bg-white/10 transition-all duration-500 rounded-[3rem] group shadow-[0_0_20px_rgba(37,99,235,0.02)] hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]">
                <CardContent className="p-12">
                  <div className={`text-${value.color} mb-8 flex justify-center transition-transform duration-500 group-hover:scale-110`}>{value.icon}</div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{value.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed font-light uppercase tracking-widest leading-loose">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[4rem] p-8 sm:p-12 md:p-16 lg:p-24 shadow-4xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] -mr-48 -mt-48" />
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 sm:mb-8 tracking-tighter uppercase">Partner With Us</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to transform your innovative concept into a market-ready digital product?
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl text-base sm:text-lg md:text-xl font-black uppercase tracking-widest shadow-2xl">
                Start Discovery <ArrowRight className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6" />
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
