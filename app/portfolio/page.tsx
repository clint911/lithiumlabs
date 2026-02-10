import {
  ArrowRight,
  ExternalLink,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  Globe,
  CreditCard,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

export default function PortfolioPage() {
  const allProjects = [
    {
      title: "Lion X Ecosystem",
      category: "Web Development & Blockchain Integration",
      client: "Lion X Ecosystem",
      timeline: "Nov 2022 - Aug 2023",
      color: "brand-primary",
      slug: "lionx-ecosystem",
      description:
        "Digital creatives platform revolutionizing how creators earn and get rewarded in the modern era. Connects artists, content creators, and innovators with blockchain-powered incentives, stablecoin payments, and seamless wallet integration for instant rewards.",
      challenge:
        "Critical system design challenges around data privacy, redundant blockchain transactions, and transaction slippage across multiple asset types. Required sophisticated API layer to separate sensitive operations while maintaining direct blockchain communication for real-time interactions.",
      solution:
        "Architected multi-tiered API integration with strategic data routing—React state management for direct blockchain communication, NestJS backend for sensitive data filtration. Implemented advanced path-finding algorithm minimizing swap slippage, expanded wallet compatibility, and comprehensive stablecoin support through robust API integrations.",
      impact:
        "Plugged in API layer to blockchain enabling secure, real-time transactions for digital creatives. Enhanced platform accessibility with multi-wallet support and optimized reward distribution across Base Chain.",
      technologies: [
        "Next.js",
        "NestJS",
        "Solidity",
        "React",
        "TypeScript",
        "Ethers.js",
      ],
      image: "/Small-lionx.png",
      liveUrl: "https://lionxeco.net/",
    },
    {
      title: "Expendi Savings Application",
      category: "Financial Technology",
      client: "Hifadhi Financial Services",
      timeline: "2023",
      color: "brand-tertiary",
      slug: "expendi-savings",
      description:
        "Savings platform helping Africans securely save money and build wealth across 12 countries. Users can deposit, track their savings, and access their money anytime with bank-level security and full regulatory compliance.",
      challenge:
        "Managing distributed data nodes across 12 African countries while maintaining sub-millisecond encryption/decryption cycles. Required compliance with varying data sovereignty laws while ensuring 99.99% availability.",
      solution:
        "Implemented AES-256 edge encryption model with automated node redundancy and intelligent geo-routing. Built custom compliance engine that automatically applies jurisdiction-specific rules. Deployed Kubernetes orchestration for zero-downtime updates.",
      impact:
        "Implemented DeFi-based yield generated savings for in-app savings platform. Processing 2M+ transactions daily across 12 countries with 99.99% uptime and zero security breaches.",
      technologies: [
        "NextJs",
        "Hono & GraphQL",
        "AWS",
        "Docker",
        "Terraform",
        "Kubernetes",
        "Redis",
      ],
      image: "/expendi-mascot.jpg",
      liveUrl: "https://hifadhi.cloud",
    },
    {
      title: "Media Agency Automation Platform",
      category: "Marketing Automation",
      client: "Global Media Group",
      timeline: "2023 - 2024",
      color: "brand-primary",
      slug: "media-agency",
      description:
        "Content writing agency platform leveraging modern localized design approach for global brands. Combines AI automation (Clawdbot) for research and analysis with human creativity for review and content creation, ensuring culturally relevant messaging.",
      challenge:
        "Manual campaign optimization was leading to high Cost Per Acquisition (CPA) averaging $127 and inefficient budget allocation wasting 34% of ad spend. Needed real-time decision making across 15+ advertising platforms simultaneously.",
      solution:
        "Developed proprietary predictive ML model for dynamic budget weighting based on historical performance data. Implemented automated API triggers for real-time bid adjustments. Created unified dashboard aggregating data from all major ad platforms.",
      impact:
        "Localized design system and content approach significantly reducing client churn. Improved user retention and cultural relevance across diverse markets.",
      technologies: [
        "NextJs",
        "Express",
        "React",
        "PostgreSQL",
        "LangChain",
        "Redis",
      ],
      image: "/media-agency.jpg",
      liveUrl: "https://ccmedia.vercel.app",
    },
    {
      title: "Ushahidi Crisis Response Hub",
      category: "Social Impact Technology",
      client: "Ushahidi Network",
      timeline: "2023",
      color: "brand-secondary",
      slug: "ushahidi-hub",
      description:
        "Citizen journalism platform empowering communities to report and verify crisis news in real-time. Enables verified news sources to coordinate crisis response efforts, connecting aid organizations with ground-truth information during emergencies.",
      challenge:
        "System faced critical stability issues during peak traffic spikes—experiencing 10-minute downtimes during global emergencies when every second counts. Database queries were timing out under load, causing data loss.",
      solution:
        "Implemented horizontal scaling with auto-scaling hooks responding to traffic in real-time. Optimized database query patterns and deployed Redis caching layer. Migrated to event-driven architecture with message queues preventing data loss.",
      impact:
        "Implemented verifiable crisis news source with zero downtime during emergencies. Processing 50K+ citizen reports/hour with 10x query performance improvement for rapid crisis response.",
      technologies: [
        "Next.js",
        "Solidity",
        "Redis",
        "ElasticSearch",
        "PostgreSQL",
        "AWS",
      ],
      image: "/ushahidi-mascot.jpg",
      liveUrl: "https://ushahidi.com",
    },
    {
      title: "Alliance Platform",
      category: "Human Resource Management",
      client: "Lithium Labs Internal",
      timeline: "2024",
      color: "brand-tertiary",
      slug: "alliance-platform",
      description:
        "Internal HR management platform bridging local African talent with global remote opportunities. Streamlines subcontracting specialized tasks within the labs, connecting skilled professionals with projects that match their expertise.",
      challenge:
        "Transaction success rates were below 73% across diverse regional payment rails due to intermittent provider downtime and inconsistent API behavior. Merchants were losing 27% of potential revenue at checkout.",
      solution:
        "Built intelligent smart routing engine that dynamically switches between payment gateways based on real-time success rates, provider status, and transaction characteristics. Implemented retry logic with exponential backoff and automatic failover.",
      impact:
        "Successfully matched local talent with international remote opportunities. Streamlined internal task allocation and improved project delivery efficiency across distributed teams.",
      technologies: [
        "SpringBoot",
        "NextJs",
        "Stripe API",
        "M-Pesa API",
        "PostgreSQL",
        "Redis",
      ],
      image: "/alliance-mascot.jpg",
      liveUrl: "",
    },
    {
      title: "Savannah ETF Trading System",
      category: "Institutional Finance",
      client: "Strategic Investment Partner",
      timeline: "2024",
      color: "brand-primary",
      slug: "savannah-etf-trading-system",
      description:
        "ETF trading platform helping investors gain exposure to diverse sectors without manual Excel analysis. Automatically sources, risk-grades, and recommends ETFs across various sectors, simplifying portfolio diversification.",
      challenge:
        "Maintaining data integrity and consistency across millions of concurrent ledger entries in a distributed environment spanning 5 data centers. Previous system had 0.03% error rate costing $5M annually in reconciliation overhead.",
      solution:
        "Implemented atomic transaction processing using distributed consensus algorithms. Built real-time audit trail generation system with cryptographic verification. deployed event sourcing pattern ensuring perfect transaction history reconstruction.",
      impact:
        "Eliminated costly reconciliation errors saving $4.7M annually. Developed auto risk-grading ETF algorithm sourcing and analyzing 15M+ data points daily for smarter investment decisions.",
      technologies: [
        "NestJs",
        "NextJs",
        "PostgreSQL",
        "Kafka",
        "Docker",
        "Kubernetes",
        "gRPC",
      ],
      image: "/savannah-mascot.jpg",
      liveUrl: "savannahetfs.fund",
    },
  ];

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
              Verified{" "}
              <span className="text-brand-primary">Transformations</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              The complete operational portfolio of **Lithium Labs**. Strategic
              execution across the entire FinTech lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allProjects.map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-3xl bg-white/[0.04] border-white/10 hover:border-brand-primary/20 transition-all duration-700 overflow-hidden rounded-[3.5rem] group flex flex-col shadow-[0_0_40px_rgba(37,99,235,0.03)] hover:shadow-[0_0_60px_rgba(37,99,235,0.08)]"
              >
                <div className="relative h-64 overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation to-transparent opacity-70" />
                  <div className="absolute top-6 left-6">
                    <Badge
                      variant="secondary"
                      className={`bg-${project.color}/10 text-${project.color} border-none px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    <span>{project.client}</span>
                    <span>{project.timeline}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-8 text-sm leading-relaxed font-light flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle
                        className={`h-4 w-4 text-${project.color} mr-3 mt-0.5 flex-shrink-0 opacity-80`}
                      />
                      <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                        <span className="font-black uppercase tracking-tighter mr-2 text-white/70">
                          Impact:
                        </span>
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-[8px] font-black bg-white/5 text-white/50 rounded-lg uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={`/portfolio/${project.slug}`}>
                    <Button
                      className={`w-full bg-${project.color} hover:bg-${project.color}/90 text-white py-6 rounded-2xl text-sm font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl uppercase tracking-widest`}
                    >
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
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">
              Your Success Starts Here
            </h2>
            <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
              Ready to build your institutional legacy?
            </p>
            <Link href="/contact">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-12 py-8 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl">
                Connect With Strategists
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
