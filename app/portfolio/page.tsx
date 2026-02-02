import { ArrowRight, ExternalLink, Calendar, Github, Linkedin, Twitter, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function PortfolioPage() {
  const featuredProjects = [
    {
      title: "LionX Creatives Ecosystem",
      category: "Fintech & Digital Assets",
      client: "LionX Digital Creatives",
      timeline: "2022",
      color: "brand-primary",
      description: "Multi-tier financial platform bridging decentralized assets and secure backend infrastructure.",
      challenge: "Critical system bottlenecks, including high transaction slippage and data privacy concerns.",
      solution: "Engineered a Security-First architecture with custom data-filtering middleware.",
      technologies: ["React", "Node.js", "Solidity", "Redis"],
      image: "/Small-lionx.png",
    },
    {
      title: "Hifadhi Cloud System",
      category: "Infrastructure & Security",
      client: "Hifadhi Cloud Services",
      timeline: "2023",
      color: "brand-tertiary",
      description: "A secure, scalable cloud storage system tailored for sensitive financial data.",
      challenge: "Managing distributed data nodes while maintaining sub-millisecond encryption cycles.",
      solution: "AES-256 edge encryption model with automated node redundancy.",
      technologies: ["Golang", "AWS", "Docker", "Terraform"],
      image: "/hifadhi-mascot.jpg",
    },
    {
      title: "Media Agency Ecosystem",
      category: "Automation",
      client: "Global Media Group",
      timeline: "2023-2024",
      color: "brand-primary",
      description: "Automated ad-buy orchestration platform with real-time bidding analytics.",
      challenge: "Manual campaign optimization leading to high CPA and inefficient budget allocation.",
      solution: "Predictive ML model for budget weighting and automated API triggers.",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL"],
      image: "/media-agency.jpg",
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
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-12 md:p-16 rounded-[4rem] backdrop-blur-3xl bg-white/[0.06] border border-white/10 mb-12 shadow-4xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              Verified <span className="text-brand-primary bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Transformations</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-4xl mx-auto leading-relaxed font-light">
              Strategic technical execution across the entire FinTech and Web3 lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="backdrop-blur-3xl bg-white/[0.04] border-white/10 hover:border-brand-primary/20 transition-all duration-700 overflow-hidden rounded-[3.5rem] group">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-12 md:p-16">
                      <div className="flex items-center justify-between mb-10">
                        <Badge variant="secondary" className={`bg-${project.color}/10 text-${project.color} border-none px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest`}>
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-white/20 text-xs font-black uppercase">
                          <Calendar className="h-4 w-4 mr-3" />
                          {project.timeline}
                        </div>
                      </div>
                      <h3 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase">{project.title}</h3>
                      <p className={`text-${project.color}/80 font-black mb-8 text-lg uppercase tracking-widest`}>{project.client}</p>
                      <p className="text-white/40 mb-12 text-xl leading-relaxed font-light">{project.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                        <div>
                          <h4 className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-4">Challenge</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-4">Solution</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-12">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-4 py-2 text-[9px] font-black bg-white/5 text-white/30 rounded-lg uppercase tracking-widest">{tech}</span>
                        ))}
                      </div>

                      <Button className={`bg-${project.color} hover:bg-${project.color}/90 text-white px-10 py-7 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-xl`}>
                        Audit Case <ExternalLink className="ml-3 h-5 w-5" />
                      </Button>
                    </div>
                    <div className="relative min-h-[500px] overflow-hidden">
                      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-l from-brand-foundation/0 via-brand-foundation/40 to-brand-foundation" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="relative z-10 py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[4rem] p-16 md:p-24 shadow-4xl relative overflow-hidden">
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">Your Success Starts Here</h2>
            <p className="text-xl text-white/40 mb-12 font-light leading-relaxed">Ready to build your institutional legacy?</p>
            <Link href="/contact">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-12 py-8 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl">
                Connect With Strategists
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
