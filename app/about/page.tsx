import { ArrowRight, Shield, Users, Target, Lightbulb, Globe, TrendingUp, CheckCircle, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay scale-110 blur-sm"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/80 via-brand-foundation to-brand-foundation" />

      {/* Navigation */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-10 md:p-14 rounded-[3rem] backdrop-blur-3xl bg-white/5 border border-white/10 mb-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Your Strategic <span className="text-brand-primary">Technology Partner</span>
            </h1>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
              The foundational partner for modern financial technology. We build the software that moves the world’s money, empowering businesses to navigate the digital economy through engineering secure, compliant, and scalable products.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="backdrop-blur-2xl bg-white/5 border-white/10 rounded-[3rem] group">
              <CardContent className="p-10 md:p-14">
                <div className="flex items-center mb-8">
                  <Target className="h-10 w-10 text-brand-primary mr-4 transition-transform group-hover:scale-110" />
                  <h2 className="text-3xl font-bold text-white tracking-tight">Our Mission</h2>
                </div>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  To deliver high-impact financial systems that drive business value from Day 0 by building reliable, secure, and scalable technology that solves both business problems & users actually love.
                </p>
                <div className="flex items-center text-brand-primary font-medium">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Ensuring products are stable assets, not technical liabilities.
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-2xl bg-white/5 border-white/10 rounded-[3rem] group">
              <CardContent className="p-10 md:p-14">
                <div className="flex items-center mb-8">
                  <Lightbulb className="h-10 w-10 text-brand-secondary mr-4 transition-transform group-hover:scale-110" />
                  <h2 className="text-3xl font-bold text-white tracking-tight">Our Vision</h2>
                </div>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  To establish a new standard for excellence across all domains of software development from traditional web applications to cutting-edge FinTech and blockchain solutions.
                </p>
                <div className="flex items-center text-brand-secondary font-medium">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Transforming complex ideas into market-ready value.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">The Principles That Drive Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Security First",
                color: "brand-primary",
                description: "Robust security protocols and stringent regulatory compliance in every solution we deliver.",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Measurable Value",
                color: "brand-secondary",
                description: "Focus on tangible business outcomes and measurable ROI for every client engagement.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Unified Expertise",
                color: "brand-tertiary",
                description: "Consolidating diverse technical and strategic expertise under one trusted partnership.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Innovation Leadership",
                color: "brand-primary",
                description: "Staying at the forefront of emerging technologies and market trends in FinTech and Web3.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="backdrop-blur-2xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 rounded-[2.5rem] group"
              >
                <CardContent className="p-10">
                  <div className={`text-${value.color} mb-6 flex justify-center transition-transform duration-500 group-hover:scale-110`}>{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Our Unique Market Position</h2>
              <p className="text-xl text-white/60 mb-10 leading-relaxed font-light">
                Positioned as a singular, trusted partner capable of navigating the complexities at the intersection of emerging technologies and traditional finance.
              </p>
              <div className="space-y-8">
                {[
                  {
                    title: "Simplifying Complexity",
                    description: "We simplify the intricate process of technological adoption, making advanced solutions accessible.",
                    color: "brand-primary"
                  },
                  {
                    title: "Accelerated Innovation",
                    description: "Our agile operational model accelerates clients' innovation cycles and market entry timelines.",
                    color: "brand-secondary"
                  },
                  {
                    title: "Regulatory Excellence",
                    description: "Deep expertise in navigating complex regulatory landscapes across multiple jurisdictions.",
                    color: "brand-tertiary"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className={`w-3 h-3 bg-${item.color} rounded-full mt-2.5 shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all group-hover:scale-150`} />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h4>
                      <p className="text-white/50 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-12 rounded-[3rem] backdrop-blur-3xl bg-white/5 border border-white/10 shadow-3xl">
                <div className="text-center mb-10">
                  <div className="text-8xl font-black text-brand-primary mb-2 opacity-80">100%</div>
                  <div className="text-white/60 font-medium tracking-widest uppercase text-sm">Client Success Rate</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-xs text-white/50 mt-1 uppercase tracking-tighter">Products Live</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-bold text-white">0</div>
                    <div className="text-xs text-white/50 mt-1 uppercase tracking-tighter">Incidents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[4rem] p-12 md:p-24 shadow-4xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 blur-[120px] -ml-48 -mb-48" />

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight relative z-10">Partner With Us</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Ready to transform your innovative concept into a market-ready digital product? Let's discuss how we can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-8 rounded-2xl text-xl font-bold transition-all hover:scale-105">
                Start Discovery Call <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-3xl font-bold text-white tracking-tighter">
              Lithium<span className="text-brand-primary">Labs</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/40 text-sm tracking-wide">© {new Date().getFullYear()} Lithium Labs. All rights reserved.</p>
              <p className="mt-2 text-white/20 text-xs font-light">Transforming ideas into trusted digital products.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
