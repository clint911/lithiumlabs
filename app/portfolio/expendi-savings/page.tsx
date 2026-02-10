import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Link from "next/link";

const project = {
  title: "Expendi Savings Platform",
  category: "FinTech & DeFi",
  client: "Hifadhi Financial Services",
  timeline: "2023 - 2024",
  duration: "14 months",
  color: "brand-secondary",
  image: "/expendi-mascot.jpg",
  liveUrl: "https://expendi.com",
  overview:
    "Savings platform leveraging DeFi yields to help Africans earn competitive returns on their savings. Cross-border savings solution with bank-level security, abstracting blockchain complexity while providing users with traditional banking simplicity combined with modern financial returns.",
  challenge: {
    title: "The Challenge",
    description:
      "African savers needed a simple, secure way to save money across borders while earning competitive returns. Traditional banks offered minimal interest, and cross-border savings were complex. The platform needed to handle distributed data across 12 countries while providing DeFi yields without exposing users to cryptocurrency complexity.",
    points: [
      "Managing distributed data nodes across 12 African countries with varying regulations",
      "Maintaining sub-millisecond encryption/decryption cycles at scale for instant access",
      "99.99% availability SLA for users' financial data",
      "Implementing DeFi yield generation while abstracting blockchain complexity from users",
      "Data sovereignty compliance across multiple jurisdictions",
      "Cost-effective storage while maintaining enterprise security",
    ],
  },
  solution: {
    title: "Our Solution",
    description:
      "Built a geo-distributed savings platform with DeFi yield integration, edge encryption, and automated compliance engines. Users enjoy traditional banking simplicity with DeFi returns, all while maintaining bank-level security.",
    approach: [
      {
        phase: "Phase 1: Infrastructure Architecture",
        details:
          "Designed multi-region storage architecture on AWS with automated geo-replication. Implemented Kubernetes orchestration for zero-downtime deployments and auto-scaling across 12 African countries.",
      },
      {
        phase: "Phase 2: Security Implementation",
        details:
          "Deployed AES-256 edge encryption with hardware security modules (HSM). Every transaction encrypted before leaving user's device. Implemented sharding across nodes for enhanced security and data protection.",
      },
      {
        phase: "Phase 3: DeFi Integration",
        details:
          "Integrated DeFi yield generation protocols while abstracting complexity from users. Built smart contract interfaces enabling users to earn competitive returns on savings without understanding blockchain mechanics. Automated yield distribution and compounding.",
      },
      {
        phase: "Phase 4: Compliance Engine",
        details:
          "Built custom compliance engine that automatically applies jurisdiction-specific rules based on data location and user origin. Supports GDPR, POPIA, and 10+ African data protection laws ensuring full regulatory compliance.",
      },
    ],
  },
  technologies: [
    { name: "Express/GraphQL", usage: "High-performance backend services" },
    { name: "AWS S3 & Glacier", usage: "Multi-tier storage system" },
    { name: "Solidity", usage: "DeFi yield smart contracts" },
    { name: "Docker & Kubernetes", usage: "Container orchestration" },
    { name: "Terraform", usage: "Infrastructure as Code" },
    { name: "Redis", usage: "Distributed caching layer" },
    { name: "PostgreSQL", usage: "User data and transaction records" },
    { name: "Ethers.js", usage: "DeFi protocol integration" },
  ],
  results: {
    title: "Impact & Results",
    metrics: [
      {
        label: "Daily Transactions",
        value: "2M+",
        description: "savings transactions processed daily",
      },
      {
        label: "Countries Served",
        value: "12",
        description: "across Africa with full compliance",
      },
      {
        label: "System Uptime",
        value: "99.99%",
        description: "since launch",
      },
      {
        label: "DeFi Yields",
        value: "Active",
        description: "yield generation for in-app savings",
      },
      {
        label: "Security Breaches",
        value: "0",
        description: "zero incidents to date",
      },
      {
        label: "User Savings",
        value: "Protected",
        description: "with bank-level security",
      },
    ],
    testimonial: {
      quote:
        "Lithium Labs built us a platform that makes saving money simple and rewarding for everyday Africans. Our users love earning yields without the complexity of crypto.",
      author: "CEO",
      company: "Hifadhi Financial Services",
    },
  },
  keyFeatures: [
    "DeFi-based yield generation for in-app savings",
    "AES-256 edge encryption with HSM support",
    "Automated geo-replication across 12 African countries",
    "Jurisdiction-aware compliance engine for data sovereignty",
    "User-friendly interface abstracting blockchain complexity",
    "Real-time transaction processing with 99.99% uptime",
  ],
};

export default function CaseStudyPage() {
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

      {/* Back Button */}
      <section className="relative z-10 pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="border-white/10 text-white/70 hover:text-white px-6 py-4 rounded-xl font-black uppercase text-xs tracking-widest"
            >
              <ArrowLeft className="mr-3 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="secondary"
                className={`bg-${project.color}/10 text-${project.color} border-none px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6`}
              >
                {project.category}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
                {project.title}
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed font-light">
                {project.overview}
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-2">
                    Client
                  </p>
                  <p className="text-white font-bold">{project.client}</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-2">
                    Timeline
                  </p>
                  <p className="text-white font-bold">{project.timeline}</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-2">
                    Duration
                  </p>
                  <p className="text-white font-bold">{project.duration}</p>
                </div>
              </div>
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank">
                  <Button
                    className={`bg-${project.color} hover:bg-${project.color}/90 text-white px-8 py-6 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl`}
                  >
                    View Live Site <ExternalLink className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-tertiary/20 rounded-[4rem] blur-3xl" />
              <div className="relative rounded-[4rem] overflow-hidden border border-white/10 backdrop-blur-xl bg-white/[0.02] shadow-4xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <Card className="backdrop-blur-3xl bg-white/[0.04] border-white/10 rounded-[3.5rem] shadow-[0_0_40px_rgba(37,99,235,0.03)]">
            <CardContent className="p-12 md:p-16">
              <div className="flex items-center mb-8">
                <Target className={`h-10 w-10 text-${project.color} mr-6`} />
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase">
                  {project.challenge.title}
                </h2>
              </div>
              <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                {project.challenge.description}
              </p>
              <div className="space-y-4">
                {project.challenge.points.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start">
                    <div
                      className={`w-2 h-2 rounded-full bg-${project.color} mr-4 mt-2 flex-shrink-0`}
                    />
                    <p className="text-white/60 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
              {project.solution.title}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              {project.solution.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.solution.approach.map((phase: any, idx: number) => (
              <Card
                key={idx}
                className="backdrop-blur-3xl bg-white/[0.04] border-white/10 hover:border-brand-primary/20 transition-all duration-700 rounded-[3rem] group shadow-[0_0_40px_rgba(37,99,235,0.03)] hover:shadow-[0_0_60px_rgba(37,99,235,0.08)]"
              >
                <CardContent className="p-10">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-${project.color}/10 border border-${project.color}/20 flex items-center justify-center mr-4 transition-transform group-hover:scale-110`}
                    >
                      <span
                        className={`text-${project.color} font-black text-xl`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase">
                      {phase.phase}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {phase.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tighter uppercase text-center">
            Technologies Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.technologies.map((tech: any, idx: number) => (
              <Card
                key={idx}
                className="backdrop-blur-3xl bg-white/[0.04] border-white/10 rounded-[2rem] hover:border-brand-primary/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter">
                    {tech.name}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {tech.usage}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter uppercase text-center">
            {project.results.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {project.results.metrics.map((metric: any, idx: number) => (
              <Card
                key={idx}
                className="backdrop-blur-3xl bg-white/[0.04] border-white/10 rounded-[3rem] shadow-[0_0_40px_rgba(37,99,235,0.03)]"
              >
                <CardContent className="p-10 text-center">
                  <div
                    className={`text-5xl font-black text-${project.color} mb-4`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm font-black text-white/90 mb-2 uppercase tracking-widest">
                    {metric.label}
                  </div>
                  <div className="text-white/50 text-xs leading-relaxed">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="backdrop-blur-3xl bg-white/[0.04] border-white/10 rounded-[4rem] shadow-[0_0_40px_rgba(37,99,235,0.03)]">
            <CardContent className="p-12 md:p-16">
              <div className="flex items-start mb-8">
                <div className="text-6xl text-brand-primary mr-6">"</div>
                <div>
                  <p className="text-2xl text-white/90 mb-6 leading-relaxed font-light italic">
                    {project.results.testimonial.quote}
                  </p>
                  <div>
                    <p className="text-white font-black uppercase tracking-wider text-sm">
                      {project.results.testimonial.author}
                    </p>
                    <p className="text-white/50 text-sm">
                      {project.results.testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tighter uppercase text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-start">
                <CheckCircle
                  className={`h-6 w-6 text-${project.color} mr-4 mt-1 flex-shrink-0`}
                />
                <p className="text-white/70 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[4rem] p-16 md:p-24 shadow-4xl">
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
              Ready to Build Something Similar?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Let's discuss how we can bring the same level of excellence to
              your project.
            </p>
            <Link href="/contact">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-12 py-8 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl">
                Start Your Project <ArrowRight className="ml-4 h-6 w-6" />
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
          <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Lithium Labs Consortium
          </div>
        </div>
      </footer>
    </div>
  );
}
