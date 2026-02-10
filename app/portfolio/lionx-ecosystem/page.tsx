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
import Footer from "@/components/footer";
import Link from "next/link";

const project = {
  title: "Lion X Ecosystem",
  category: "Web Development & Blockchain Integration",
  client: "Lion X Ecosystem (lionxeco.net)",
  timeline: "Nov 2022 - Aug 2023",
  duration: "10 months",
  color: "brand-primary",
  image: "/Small-lionx.png",
  liveUrl: "https://capitollion.com/",
  overview:
    "Enterprise-grade Web3 platform with sophisticated API architecture seamlessly connecting React frontend, NestJS backend infrastructure, and blockchain smart contracts. Built comprehensive API integration layer enabling secure blockchain communication, stablecoin support, multi-wallet connectivity, and optimized transaction routing across Base Chain assets.",
  challenge: {
    title: "The Challenge",
    description:
      "Lion X required a sophisticated multi-tiered architecture that could handle direct blockchain interactions for speed while routing sensitive data and complex transactions through a secure backend API layer. Critical challenges included data privacy concerns, redundant blockchain requests degrading performance, high transaction slippage across diverse asset types, and limited wallet compatibility restricting user accessibility.",
    points: [
      "No clear data separation strategy between frontend-blockchain and backend-blockchain communication",
      "Redundant requests and transactions causing 20%+ slower load times",
      "High percentage slippage during in-app swaps across Base Chain gas assets, stablecoins, and platform tokens",
      "Limited wallet support restricting platform accessibility and conversion rates",
      "Complex blockchain operations exposing sensitive transaction data",
      "Suboptimal user experience due to system design inefficiencies",
    ],
  },
  solution: {
    title: "API Architecture & Integration Strategy",
    description:
      "Architected a sophisticated multi-tiered API integration leveraging precise React state management for direct blockchain communication while strategically routing sensitive data and complex transactions through a NestJS backend API layer. This hybrid approach ensured optimal data privacy, streamlined blockchain interactions, and maintained exceptional speed and usability.",
    approach: [
      {
        phase: "Phase 1: Multi-Tiered API Architecture",
        details:
          "Designed and implemented comprehensive API architecture with clear separation of concerns: React frontend with Web3.js for direct smart contract reads/writes requiring real-time responsiveness, while routing sensitive operations (user data, complex transactions, analytics) through secure NestJS REST API layer. Collaborated closely with Solidity and frontend teams to establish optimal data flow patterns.",
      },
      {
        phase: "Phase 2: Data Filtration & Performance Optimization",
        details:
          "Spearheaded architectural design of robust data separation and filtration strategy. Implemented intelligent caching layer in NestJS backend reducing redundant blockchain requests by 35%. Built API middleware for data validation, sanitization, and privacy protection. This initiative resolved critical system design challenges and led to 20% improvement in website load time.",
      },
      {
        phase: "Phase 3: Wallet & Payment Integration",
        details:
          "Orchestrated full platform integration with blockchain, establishing secure API communication channels with smart contracts. Expanded wallet compatibility by integrating TronLink and WalletConnect APIs, allowing users to seamlessly connect preferred wallets. Introduced comprehensive stablecoin support (USDT, USDC, DAI) through custom API endpoints, expanding platform financial utility and user options.",
      },
      {
        phase: "Phase 4: Advanced Path-Finding Algorithm",
        details:
          "Designed, engineered, and deployed sophisticated path-finding algorithm API service to minimize in-app swapping percentage slippage. Algorithm analyzes liquidity pools across Base Chain for gas assets, stablecoins, and custom platform tokens, calculating optimal routing paths. Integrated with DEX aggregator APIs for real-time price discovery, significantly reducing user transaction costs.",
      },
      {
        phase: "Phase 5: UX-Driven System Redesign",
        details:
          "Drove data-driven system redesign initiative conducting comprehensive user experience testing and detailed journey mapping analyses. Leveraged insights to re-architect key API endpoints and frontend components, optimizing data flow and interaction patterns. Significantly elevated product usability, leading to improved accessibility, heightened user retention, increased engagement, and marked increase in overall conversion rate.",
      },
    ],
  },
  technologies: [
    {
      name: "Next.js & React",
      usage:
        "Frontend framework with advanced state management for blockchain interactions",
    },
    {
      name: "NestJS & TypeScript",
      usage: "Enterprise backend API services with dependency injection",
    },
    {
      name: "Solidity",
      usage: "Smart contracts on Base Chain (Ethereum L2)",
    },
    {
      name: "Web3.js & Ethers.js",
      usage: "Blockchain interaction libraries",
    },
    { name: "WalletConnect API", usage: "Multi-wallet connection protocol" },
    { name: "TronLink Integration", usage: "Tron wallet connectivity" },
    {
      name: "PostgreSQL",
      usage: "Primary database for user data and analytics",
    },
    { name: "Redis", usage: "Caching layer for blockchain data" },
  ],
  results: {
    title: "Impact & Results",
    metrics: [
      {
        label: "Load Time Improvement",
        value: "20%",
        description: "faster website performance through API optimization",
      },
      {
        label: "Blockchain Requests",
        value: "35%",
        description: "reduction in redundant transactions",
      },
      {
        label: "Wallet Compatibility",
        value: "3x",
        description:
          "expanded wallet options (MetaMask, WalletConnect, TronLink)",
      },
      {
        label: "Conversion Rate",
        value: "↑ Significant",
        description: "increased through enhanced accessibility",
      },
      {
        label: "Slippage Optimization",
        value: "Minimized",
        description: "across Base Chain gas assets and stablecoins",
      },
      {
        label: "User Engagement",
        value: "↑ Notable",
        description: "improved retention through UX redesign",
      },
    ],
    testimonial: {
      quote:
        "The API architecture and integration work transformed our platform from a simple blockchain interface into a sophisticated financial ecosystem. The multi-tiered approach gave us the perfect balance of security, performance, and user experience.",
      author: "Technical Lead",
      company: "Lion X Ecosystem",
    },
  },
  keyFeatures: [
    "Hybrid API architecture: Direct React-blockchain communication + secure NestJS backend layer",
    "Advanced path-finding algorithm minimizing swap slippage across multiple asset types",
    "Multi-wallet support: MetaMask, WalletConnect, TronLink integration",
    "Comprehensive stablecoin support (USDT, USDC, DAI) with seamless API integration",
    "Intelligent caching layer reducing redundant blockchain requests by 35%",
    "Data-driven UX optimization increasing conversion rates and user retention",
    "Secure API middleware for sensitive transaction routing and data privacy",
    "Real-time blockchain event monitoring and user notification system",
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
      <Footer />
    </div>
  );
}
