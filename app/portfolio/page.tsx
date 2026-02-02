import { ArrowRight, ExternalLink, Github, Star, TrendingUp, Shield, Users, Calendar, Award, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function PortfolioPage() {
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
              Transforming <span className="text-brand-primary">Ideas</span> into
              <br />
              Market-Ready <span className="text-brand-secondary">Products</span>
            </h1>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
              Explore our portfolio of successful FinTech and Web3 solutions that bridge the gap between innovative concepts and tangible digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "5+", label: "Products Launched", icon: <TrendingUp className="h-6 w-6" />, color: "brand-primary" },
              { number: "100%", label: "Success Rate", icon: <Award className="h-6 w-6" />, color: "brand-secondary" },
              { number: "$2.5B+", label: "Transaction Volume", icon: <Shield className="h-6 w-6" />, color: "brand-tertiary" },
              { number: "5+", label: "Countries Served", icon: <Users className="h-6 w-6" />, color: "brand-primary" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-[2rem] backdrop-blur-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className={`text-${stat.color} mb-4 flex justify-center transition-transform group-hover:scale-110`}>{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/40 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Featured Case Studies</h2>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              Deep dives into our most impactful projects and the measurable business value delivered
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                title: "LionX Creatives Ecosystem",
                category: "Fintech & Digital Assets",
                client: "LionX Digital Creatives",
                timeline: "2022",
                color: "brand-primary",
                description:
                  "Architected and deployed a multi-tier financial platform that bridges the gap between decentralized assets and traditional secure backend infrastructure.",
                challenge:
                  "Critical system bottlenecks, including high transaction slippage and data privacy concerns when routing sensitive financial data to the ledger.",
                solution:
                  "Engineered a Security-First architecture with custom data-filtering middleware and a proprietary path-finding algorithm to minimize slippage.",
                results: [
                  "20% Improvement in load times",
                  "Reduced transaction costs",
                  "Seamless wallet interoperability",
                  "Enhanced user data privacy",
                ],
                technologies: ["React", "Node.js", "Solidity", "Redis"],
                image: "/Small-lionx.png",
                preview: "https://lionxeco.net/",
              },
              {
                title: "Decentralized Verification System",
                category: "Civic-Tech & Governance",
                client: "Ushahidi Initiative",
                timeline: "2022-2023",
                color: "brand-secondary",
                description:
                  "Engineered a decentralized platform for authenticating citizen-led reports, utilizing blockchain-backed time-locking mechanisms.",
                challenge:
                  "High cost and slow speed of manual verification leading to potential misinformation and lack of accountability.",
                solution:
                  "Designed a tiered validation system where regional peer-voting is enforced by time-locked smart contracts.",
                results: [
                  "70% Latency reduction",
                  "Tamper-proof audit trail",
                  "Sybil attack prevention",
                  "Scalable trust hierarchy",
                ],
                technologies: ["React Native", "Solidity", "IPFS", "PostgreSQL"],
                image: "/taarifu-profile.jpg",
                preview: "https://taarifu.vercel.app/"
              },
              {
                title: "Alliance Talent Gateway",
                category: "Enterprise SaaS",
                client: "Institutional Partner",
                timeline: "2024-2025",
                color: "brand-tertiary",
                description:
                  "Architected a custom role-based talent orchestration platform designed to streamline the subcontracting lifecycle.",
                challenge:
                  "Managing diverse talent tiers while protecting sensitive project data and ensuring verified engineer access.",
                solution:
                  "Developed a JWT-authenticated architecture with a 4-tier Role-Based Access Control (RBAC) system.",
                results: [
                  "Zero-trust security model",
                  "65% Faster onboarding",
                  "Unified Firm Portal",
                  "99.9% Backend uptime",
                ],
                technologies: ["Spring Boot", "Java", "PostgreSQL", "OAuth2"],
                image: "/alliance-mascot.jpg",
                preview: "https://alliance.xyz"
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-3xl bg-white/5 border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-[3rem] group"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-10 md:p-14">
                      <div className="flex items-center justify-between mb-8">
                        <Badge variant="secondary" className={`bg-${project.color}/10 text-${project.color} border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest`}>
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-white/30 text-sm font-medium">
                          <Calendar className={`h-4 w-4 mr-2 text-${project.color}`} />
                          {project.timeline}
                        </div>
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                      <p className={`text-${project.color}/80 font-bold mb-6 text-lg`}>{project.client}</p>
                      <p className="text-white/60 mb-10 leading-relaxed text-lg font-light">{project.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                        <div>
                          <h4 className="text-sm font-black text-white/40 uppercase tracking-tighter mb-4">The Challenge</h4>
                          <p className="text-white/70 text-sm leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-white/40 uppercase tracking-tighter mb-4">The Solution</h4>
                          <p className="text-white/70 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      <div className="mb-10">
                        <h4 className="text-sm font-black text-white/40 uppercase tracking-tighter mb-6">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1.5 text-xs bg-white/5 text-white/50 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button className={`bg-${project.color} hover:bg-${project.color}/90 text-white px-8 py-6 rounded-xl text-lg font-bold transition-all hover:scale-105`}>
                          View Details <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/10 text-white hover:bg-white/5 bg-transparent px-8 py-6 rounded-xl"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="relative min-h-[400px]">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-brand-foundation/0 via-brand-foundation/40 to-brand-foundation" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[4rem] p-12 md:p-24 shadow-4xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 blur-[120px] -ml-48 -mb-48" />

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight relative z-10">Ready for Your Success Story?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Let's discuss how we can transform your innovative concept into the next market-ready digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-8 rounded-2xl text-xl font-bold transition-all hover:scale-105">
                Contact Our Team <ArrowRight className="ml-2 h-6 w-6" />
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
