import { ArrowRight, ExternalLink, Calendar, Github, Linkedin, Twitter, CheckCircle, Globe, CreditCard, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function PortfolioPage() {
  const allProjects = [
    {
      title: "LionX Creatives Ecosystem",
      category: "Fintech & Digital Assets",
      client: "LionX Digital Creatives",
      timeline: "2022 - 2023",
      color: "brand-primary",
      slug: "lionx-ecosystem",
      description: "A comprehensive multi-tier financial platform seamlessly bridging decentralized digital assets with enterprise-grade secure backend infrastructure. Built to handle high-volume transactions while maintaining regulatory compliance.",
      challenge: "The platform faced critical system bottlenecks with transaction slippage exceeding 15% during peak loads. Additional concerns around data privacy compliance and secure asset custody required immediate architectural overhaul.",
      solution: "Engineered a Security-First microservices architecture with custom data-filtering middleware, implementing zero-knowledge proof systems for enhanced privacy. Deployed distributed caching layers reducing slippage to <2% and achieved SOC2 compliance.",
      impact: "300% improvement in transaction throughput, 87% reduction in slippage, achieving 99.9% uptime",
      technologies: ["React", "Node.js", "Solidity", "Redis", "PostgreSQL", "AWS"],
      image: "/Small-lionx.png",
      liveUrl: "https://lionx.africa",
    },
    {
      title: "Hifadhi Cloud System",
      category: "Infrastructure & Security",
      client: "Hifadhi Cloud Services",
      timeline: "2023",
      color: "brand-tertiary",
      slug: "hifadhi-cloud",
      description: "Enterprise-grade secure cloud storage system specifically architected for sensitive financial data with jurisdictional compliance across multiple African markets. Provides bank-level security with consumer-friendly accessibility.",
      challenge: "Managing distributed data nodes across 12 African countries while maintaining sub-millisecond encryption/decryption cycles. Required compliance with varying data sovereignty laws while ensuring 99.99% availability.",
      solution: "Implemented AES-256 edge encryption model with automated node redundancy and intelligent geo-routing. Built custom compliance engine that automatically applies jurisdiction-specific rules. Deployed Kubernetes orchestration for zero-downtime updates.",
      impact: "Processing 2M+ transactions daily across 12 countries, 99.99% uptime, zero security breaches",
      technologies: ["Golang", "AWS", "Docker", "Terraform", "Kubernetes", "Redis"],
      image: "/hifadhi-mascot.jpg",
      liveUrl: "https://hifadhi.cloud",
    },
    {
      title: "Media Agency Automation Platform",
      category: "Marketing Automation",
      client: "Global Media Group",
      timeline: "2023 - 2024",
      color: "brand-primary",
      slug: "media-agency",
      description: "Intelligent automated ad-buy orchestration platform with real-time bidding analytics and predictive budget optimization. Revolutionizes how media agencies manage multi-million dollar advertising campaigns across digital channels.",
      challenge: "Manual campaign optimization was leading to high Cost Per Acquisition (CPA) averaging $127 and inefficient budget allocation wasting 34% of ad spend. Needed real-time decision making across 15+ advertising platforms simultaneously.",
      solution: "Developed proprietary predictive ML model for dynamic budget weighting based on historical performance data. Implemented automated API triggers for real-time bid adjustments. Created unified dashboard aggregating data from all major ad platforms.",
      impact: "Reduced CPA from $127 to $64 (50% improvement), eliminated 34% budget waste, 5x faster campaign setup",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "TensorFlow", "Redis"],
      image: "/media-agency.jpg",
      liveUrl: "",
    },
    {
      title: "Ushahidi Crisis Response Hub",
      category: "Social Impact Technology",
      client: "Ushahidi Network",
      timeline: "2023",
      color: "brand-secondary",
      slug: "ushahidi-hub",
      description: "High-performance crisis response platform enabling real-time data ingestion, verification, and mapping during humanitarian emergencies. Processes millions of user-submitted reports to coordinate relief efforts globally.",
      challenge: "System faced critical stability issues during peak traffic spikes—experiencing 10-minute downtimes during global emergencies when every second counts. Database queries were timing out under load, causing data loss.",
      solution: "Implemented horizontal scaling with auto-scaling hooks responding to traffic in real-time. Optimized database query patterns and deployed Redis caching layer. Migrated to event-driven architecture with message queues preventing data loss.",
      impact: "Zero downtime during subsequent emergencies, 10x query performance improvement, processing 50K+ reports/hour",
      technologies: ["PHP", "Next.js", "Redis", "ElasticSearch", "PostgreSQL", "AWS"],
      image: "/glass-facade-8016589.jpg",
      liveUrl: "https://ushahidi.com",
    },
    {
      title: "Alliance Payment Gateway",
      category: "Payments Infrastructure",
      client: "Alliance E-Commerce",
      timeline: "2024",
      color: "brand-tertiary",
      slug: "alliance-gateway",
      description: "Omnichannel payment gateway unifying local mobile money services with global card networks. Enables merchants to accept payments from 95% of consumers in East Africa while maintaining PCI-DSS compliance.",
      challenge: "Transaction success rates were below 73% across diverse regional payment rails due to intermittent provider downtime and inconsistent API behavior. Merchants were losing 27% of potential revenue at checkout.",
      solution: "Built intelligent smart routing engine that dynamically switches between payment gateways based on real-time success rates, provider status, and transaction characteristics. Implemented retry logic with exponential backoff and automatic failover.",
      impact: "Success rate improved from 73% to 94%, reduced transaction time by 40%, recovered $2M+ in previously failed transactions",
      technologies: ["Node.js", "Stripe API", "M-Pesa API", "Go", "PostgreSQL", "Redis"],
      image: "/alliance-mascot.jpg",
      liveUrl: "",
    },
    {
      title: "FinTech Ledger Gateway",
      category: "Institutional Finance",
      client: "Strategic Banking Partner",
      timeline: "2024",
      color: "brand-primary",
      slug: "fintech-gateway",
      description: "Mission-critical zero-latency ledger management and reconciliation system designed for large-scale banking operations. Processes millions of transactions daily with atomic consistency across distributed systems.",
      challenge: "Maintaining data integrity and consistency across millions of concurrent ledger entries in a distributed environment spanning 5 data centers. Previous system had 0.03% error rate costing $5M annually in reconciliation overhead.",
      solution: "Implemented atomic transaction processing using distributed consensus algorithms. Built real-time audit trail generation system with cryptographic verification. deployed event sourcing pattern ensuring perfect transaction history reconstruction.",
      impact: "99.9999% transaction accuracy (6-sigma), reduced reconciliation costs by $4.7M annually, processing 15M+ transactions daily",
      technologies: ["Rust", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "gRPC"],
      image: "/glass-facade-8016589.jpg",
      liveUrl: "",
    }
  ]

  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden text-white font-sans">
      <Navigation />

      {/* Background Image with Natural Tone */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.4] scale-105"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/20 via-brand-foundation/60 to-brand-foundation" />

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-12 md:p-16 rounded-[4rem] backdrop-blur-3xl bg-white/[0.06] border border-white/10 mb-12 shadow-4xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              Verified <span className="text-brand-primary">Transformations</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              The complete operational portfolio of **Lithium Labs**. Strategic execution across the entire FinTech lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allProjects.map((project, index) => (
              <Card key={index} className="backdrop-blur-3xl bg-white/[0.04] border-white/10 hover:border-brand-primary/20 transition-all duration-700 overflow-hidden rounded-[3.5rem] group flex flex-col shadow-[0_0_40px_rgba(37,99,235,0.03)] hover:shadow-[0_0_60px_rgba(37,99,235,0.08)]">
                <div className="relative h-64 overflow-hidden border-b border-white/10">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation to-transparent opacity-70" />
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className={`bg-${project.color}/10 text-${project.color} border-none px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest`}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    <span>{project.client}</span>
                    <span>{project.timeline}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase leading-none">{project.title}</h3>
                  <p className="text-white/60 mb-8 text-sm leading-relaxed font-light flex-grow line-clamp-3">{project.description}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className={`h-4 w-4 text-${project.color} mr-3 mt-0.5 flex-shrink-0 opacity-80`} />
                      <p className="text-white/50 text-xs leading-relaxed line-clamp-2"><span className="font-black uppercase tracking-tighter mr-2 text-white/70">Impact:</span>{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-[8px] font-black bg-white/5 text-white/50 rounded-lg uppercase tracking-widest">{tech}</span>
                    ))}
                  </div>

                  <Link href={`/portfolio/${project.slug}`}>
                    <Button className={`w-full bg-${project.color} hover:bg-${project.color}/90 text-white py-6 rounded-2xl text-sm font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl uppercase tracking-widest`}>
                      View Case Study <ArrowRight className="ml-3 h-4 w-4" />
                    </Button>
                  </Link>
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
            <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">Ready to build your institutional legacy?</p>
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
          <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Lithium Labs Consortium</div>
        </div>
      </footer>
    </div>
  )
}
