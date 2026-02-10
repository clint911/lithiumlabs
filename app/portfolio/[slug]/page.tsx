import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";

const projectData: Record<string, any> = {
  "lionx-ecosystem": {
    title: "LionX Creatives Ecosystem",
    category: "Fintech & Digital Assets",
    client: "LionX Digital Creatives",
    timeline: "2022 - 2023",
    duration: "14 months",
    color: "brand-primary",
    image: "/Small-lionx.png",
    liveUrl: "https://lionx.africa",
    overview:
      "A comprehensive multi-tier financial platform seamlessly bridging decentralized digital assets with enterprise-grade secure backend infrastructure. Built to handle high-volume transactions while maintaining regulatory compliance across multiple African jurisdictions.",
    challenge: {
      title: "The Challenge",
      description:
        "LionX faced critical system bottlenecks that threatened their growth trajectory. Transaction slippage was exceeding 15% during peak loads, leading to significant user dissatisfaction and revenue loss. The existing architecture couldn't handle concurrent users efficiently, and data privacy compliance requirements weren't baked into the system design.",
      points: [
        "Transaction slippage >15% during peak loads causing ~$500K monthly losses",
        "System architecture couldn't scale beyond 1,000 concurrent users",
        "Data privacy compliance gaps across 8 African jurisdictions",
        "No proper audit trail for financial transactions",
        "Smart contract vulnerabilities exposing user assets",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We completely re-architected the platform using a Security-First microservices approach, implementing zero-knowledge proof systems for enhanced privacy while maintaining auditability.",
      approach: [
        {
          phase: "Phase 1: Architecture Redesign",
          details:
            "Migrated from monolithic to microservices architecture, implementing event-driven communication patterns with Apache Kafka for real-time transaction processing.",
        },
        {
          phase: "Phase 2: Security Implementation",
          details:
            "Built custom data-filtering middleware with zero-knowledge proofs, enabling transaction validation without exposing sensitive user data. Achieved SOC2 Type II compliance.",
        },
        {
          phase: "Phase 3: Performance Optimization",
          details:
            "Deployed distributed Redis caching layers reducing database queries by 87%. Implemented horizontal auto-scaling achieving 99.9% uptime even during traffic spikes.",
        },
        {
          phase: "Phase 4: Smart Contract Security",
          details:
            "Conducted comprehensive smart contract audits, implementing multi-signature wallets and time-locked transactions for enhanced security. No vulnerabilities in production since deployment.",
        },
      ],
    },
    technologies: [
      {
        name: "React & TypeScript",
        usage: "Frontend application with type safety",
      },
      { name: "Node.js & Express", usage: "Backend API services" },
      { name: "Solidity", usage: "Smart contracts on Ethereum" },
      { name: "Redis", usage: "Distributed caching layer" },
      { name: "PostgreSQL", usage: "Primary database with read replicas" },
      { name: "AWS", usage: "Cloud infrastructure (ECS, RDS, ElastiCache)" },
      { name: "Kafka", usage: "Event streaming and message queue" },
      {
        name: "Docker & Kubernetes",
        usage: "Containerization and orchestration",
      },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "Transaction Throughput",
          value: "300%",
          description: "improvement in transactions per second",
        },
        {
          label: "Slippage Reduction",
          value: "87%",
          description: "from 15.3% to 2% average slippage",
        },
        {
          label: "System Uptime",
          value: "99.9%",
          description: "maintained since deployment",
        },
        {
          label: "User Growth",
          value: "450%",
          description: "increase in active users",
        },
        {
          label: "Revenue Impact",
          value: "$2.3M",
          description: "additional annual revenue captured",
        },
        {
          label: "Response Time",
          value: "78%",
          description: "faster API response times",
        },
      ],
      testimonial: {
        quote:
          "Lithium Labs didn't just build us a platform—they built us a competitive advantage. The system handles our growth seamlessly while giving our users the security they demand.",
        author: "Founder & CEO",
        company: "LionX Digital Creatives",
      },
    },
    keyFeatures: [
      "Multi-signature wallet system with time-locked transactions",
      "Real-time transaction monitoring and fraud detection",
      "Automated compliance reporting for 8+ jurisdictions",
      "Zero-knowledge proof system for privacy-preserving verification",
      "Horizontal auto-scaling handling 10,000+ concurrent users",
      "Comprehensive audit trail with cryptographic verification",
    ],
  },
  "hifadhi-cloud": {
    title: "Hifadhi Cloud System",
    category: "Infrastructure & Security",
    client: "Hifadhi Cloud Services",
    timeline: "2023",
    duration: "9 months",
    color: "brand-tertiary",
    image: "/hifadhi-mascot.jpg",
    liveUrl: "https://hifadhi.cloud",
    overview:
      "Enterprise-grade secure cloud storage system specifically architected for sensitive financial data with jurisdictional compliance across multiple African markets. Provides bank-level security with consumer-friendly accessibility, serving financial institutions, fintechs, and enterprises.",
    challenge: {
      title: "The Challenge",
      description:
        "Hifadhi needed to build a storage system that could compete with global players while respecting African data sovereignty laws. The technical challenge was maintaining microsecond-level encryption/decryption performance across geographically distributed nodes.",
      points: [
        "Managing distributed nodes across 12 African countries with varying regulations",
        "Maintaining sub-millisecond encryption/decryption cycles at scale",
        "99.99% availability SLA with automatic failover",
        "Data sovereignty compliance across multiple jurisdictions",
        "Cost-effective storage while maintaining enterprise security",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Built a geo-distributed storage system with intelligent routing, edge encryption, and automated compliance engines that adapt to jurisdiction-specific requirements.",
      approach: [
        {
          phase: "Phase 1: Infrastructure Architecture",
          details:
            "Designed multi-region storage architecture on AWS with automated geo-replication. Implemented Kubernetes orchestration for zero-downtime deployments and auto-scaling.",
        },
        {
          phase: "Phase 2: Security Implementation",
          details:
            "Deployed AES-256 edge encryption with hardware security modules (HSM). Every file encrypted before leaving user's device. Implemented sharding across nodes for enhanced security.",
        },
        {
          phase: "Phase 3: Compliance Engine",
          details:
            "Built custom compliance engine that automatically applies jurisdiction-specific rules based on data location and user origin. Supports GDPR, POPIA, and 10+ African data protection laws.",
        },
        {
          phase: "Phase 4: Performance Optimization",
          details:
            "Optimized encryption algorithms achieving <800μs encryption time. Implemented intelligent caching and CDN distribution reducing access latency by 73%.",
        },
      ],
    },
    technologies: [
      { name: "Golang", usage: "High-performance backend services" },
      { name: "AWS S3 & Glacier", usage: "Multi-tier storage system" },
      { name: "Docker & Kubernetes", usage: "Container orchestration" },
      { name: "Terraform", usage: "Infrastructure as Code" },
      { name: "Redis", usage: "Distributed caching layer" },
      { name: "PostgreSQL", usage: "Metadata and access control" },
      { name: "Vault", usage: "Secrets management" },
      { name: "CloudFront", usage: "Global CDN for fast access" },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "Daily Transactions",
          value: "2M+",
          description: "files processed daily",
        },
        {
          label: "Countries Served",
          value: "12",
          description: "across Africa",
        },
        {
          label: "System Uptime",
          value: "99.99%",
          description: "since launch",
        },
        {
          label: "Security Breaches",
          value: "0",
          description: "zero incidents to date",
        },
        {
          label: "Encryption Speed",
          value: "<800μs",
          description: "average encryption time",
        },
        {
          label: "Storage Cost",
          value: "42%",
          description: "reduction vs competitors",
        },
      ],
      testimonial: {
        quote:
          "Lithium Labs understood the unique challenges of African data infrastructure. They delivered a system that's both world-class in security and locally optimized for our markets.",
        author: "CTO",
        company: "Hifadhi Cloud Services",
      },
    },
    keyFeatures: [
      "AES-256 edge encryption with HSM support",
      "Automated geo-replication across 12 countries",
      "Jurisdiction-aware compliance engine",
      "Zero-knowledge architecture - we can't access user data",
      "Intelligent file versioning and recovery",
      "Enterprise access controls with audit logging",
    ],
  },
  "media-agency": {
    title: "Media Agency Automation Platform",
    category: "Marketing Automation",
    client: "Global Media Group",
    timeline: "2023 - 2024",
    duration: "11 months",
    color: "brand-primary",
    image: "/media-agency.jpg",
    liveUrl: "",
    overview:
      "Intelligent automated ad-buy orchestration platform with real-time bidding analytics and predictive budget optimization. Revolutionizes how media agencies manage multi-million dollar advertising campaigns across 15+ digital channels simultaneously.",
    challenge: {
      title: "The Challenge",
      description:
        "The agency was managing $50M+ in annual ad spend manually, leading to significant inefficiencies and missed opportunities. Campaign optimization required days of analyst time, and budget allocation decisions were based on lagging indicators.",
      points: [
        "Manual campaign management across 15+ advertising platforms",
        "Average CPA of $127 - 40% above industry benchmarks",
        "34% of ad spend wasted on underperforming campaigns",
        "3-5 day lag between campaign launch and optimization",
        "No unified view of cross-platform performance",
        "Human error in bid adjustments costing ~$1.7M annually",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Developed an AI-powered platform that automates campaign management, bid optimization, and budget allocation in real-time, with predictive analytics forecasting campaign performance.",
      approach: [
        {
          phase: "Phase 1: Platform Integration",
          details:
            "Built unified API integration layer connecting to 15+ ad platforms (Google Ads, Facebook, TikTok, LinkedIn, etc.). Real-time data synchronization every 15 minutes.",
        },
        {
          phase: "Phase 2: ML Model Development",
          details:
            "Trained proprietary ML models on 3 years of historical campaign data. Models predict optimal bid strategies, budget allocation, and campaign performance with 89% accuracy.",
        },
        {
          phase: "Phase 3: Automation Engine",
          details:
            "Implemented automated bid adjustment engine that responds to performance signals in real-time. Rule-based and ML-driven optimization working in tandem.",
        },
        {
          phase: "Phase 4: Analytics Dashboard",
          details:
            "Created unified dashboard aggregating cross-platform performance. Custom reporting, anomaly detection, and predictive forecasting built-in.",
        },
      ],
    },
    technologies: [
      { name: "Python & FastAPI", usage: "Backend services and ML serving" },
      { name: "React & TypeScript", usage: "Frontend dashboard" },
      { name: "PostgreSQL", usage: "Campaign data warehouse" },
      { name: "TensorFlow", usage: "Machine learning models" },
      { name: "Redis", usage: "Real-time caching" },
      { name: "Apache Airflow", usage: "Data pipeline orchestration" },
      { name: "AWS", usage: "Infrastructure (ECS, RDS, S3)" },
      { name: "Celery", usage: "Distributed task queue" },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "CPA Reduction",
          value: "50%",
          description: "from $127 to $64 average CPA",
        },
        {
          label: "Budget Efficiency",
          value: "34%",
          description: "waste eliminated, $17M recovered",
        },
        {
          label: "Setup Speed",
          value: "5x",
          description: "faster campaign setup and launch",
        },
        {
          label: "Annual Savings",
          value: "$8.3M",
          description: "in operational costs and improved performance",
        },
        {
          label: "Platforms Unified",
          value: "15+",
          description: "advertising platforms integrated",
        },
        {
          label: "Response Time",
          value: "<15min",
          description: "from signal to optimization action",
        },
      ],
      testimonial: {
        quote:
          "This platform transformed our entire operation. What used to take a team of 8 analysts now runs automatically with better results. It's like having the world's best media buyer working 24/7.",
        author: "VP of Digital Operations",
        company: "Global Media Group",
      },
    },
    keyFeatures: [
      "AI-powered predictive budget allocation",
      "Real-time cross-platform bid optimization",
      "Automated A/B testing and creative rotation",
      "Anomaly detection alerting underperforming campaigns",
      "Custom attribution modeling",
      "Unified reporting across all platforms",
    ],
  },
  "ushahidi-hub": {
    title: "Ushahidi Crisis Response Hub",
    category: "Social Impact Technology",
    client: "Ushahidi Network",
    timeline: "2023",
    duration: "7 months",
    color: "brand-secondary",
    image: "/glass-facade-8016589.jpg",
    liveUrl: "https://ushahidi.com",
    overview:
      "High-performance crisis response platform enabling real-time data ingestion, verification, and mapping during humanitarian emergencies. Used globally by UN agencies, NGOs, and governments to coordinate relief efforts, processing millions of user-submitted reports annually.",
    challenge: {
      title: "The Challenge",
      description:
        "During critical humanitarian emergencies, the existing platform experienced frequent downtimes when demand surged. System instability during these peak moments meant delayed response times when every second counts.",
      points: [
        "10-minute downtimes during traffic spikes (5,000+ reports/minute)",
        "Database query timeouts under load causing data loss",
        "Single-point-of-failure architecture",
        "Limited geographic redundancy despite global usage",
        "Search functionality degrading during high-load periods",
        "Manual scaling requiring DevOps intervention",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Re-architected the platform with horizontal scaling, event-driven architecture, and intelligent caching to handle massive traffic spikes automatically while preventing data loss.",
      approach: [
        {
          phase: "Phase 1: Architecture Modernization",
          details:
            "Migrated to event-driven microservices architecture. Implemented message queues (RabbitMQ) ensuring zero data loss even during system stress. Separated read and write workloads.",
        },
        {
          phase: "Phase 2: Database Optimization",
          details:
            "Optimized PostgreSQL queries reducing average query time by 78%. Implemented read replicas and connection pooling. Added ElasticSearch for fast full-text search at scale.",
        },
        {
          phase: "Phase 3: Caching Strategy",
          details:
            "Deployed multi-layer Redis caching strategy caching frequently accessed data and pre-computed aggregations. Reduced database load by 83%.",
        },
        {
          phase: "Phase 4: Auto-Scaling",
          details:
            "Implemented Kubernetes horizontal pod autoscaling responding to CPU and custom metrics. System now scales automatically from 5 to 50 pods based on real-time demand.",
        },
      ],
    },
    technologies: [
      { name: "PHP & Laravel", usage: "Core application framework" },
      { name: "Next.js", usage: "Modern frontend interface" },
      { name: "Redis", usage: "Multi-layer caching" },
      { name: "ElasticSearch", usage: "Fast full-text search" },
      { name: "PostgreSQL", usage: "Primary database with replicas" },
      { name: "AWS", usage: "Cloud infrastructure" },
      { name: "Kubernetes", usage: "Container orchestration" },
      { name: "RabbitMQ", usage: "Message queue for reliability" },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "System Uptime",
          value: "100%",
          description: "during subsequent major emergencies",
        },
        {
          label: "Query Performance",
          value: "10x",
          description: "faster database queries",
        },
        {
          label: "Processing Capacity",
          value: "50K+",
          description: "reports processed per hour",
        },
        {
          label: "Cost Optimization",
          value: "43%",
          description: "reduction in infrastructure costs",
        },
        {
          label: "Geographic Coverage",
          value: "Global",
          description: "multi-region deployment",
        },
        {
          label: "Data Loss",
          value: "0",
          description: "zero reports lost since deployment",
        },
      ],
      testimonial: {
        quote:
          "During our most recent crisis deployment, the system handled 10x our normal load without breaking a sweat. Lithium Labs' work directly contributed to faster emergency response and lives saved.",
        author: "Technical Director",
        company: "Ushahidi Network",
      },
    },
    keyFeatures: [
      "Automatic horizontal scaling based on demand",
      "Event-driven architecture preventing data loss",
      "Multi-region deployment for global resilience",
      "Real-time mapping and geospatial analysis",
      "AI-powered report verification and deduplication",
      "Mobile-first interface for field reporters",
    ],
  },
  "alliance-gateway": {
    title: "Alliance Payment Gateway",
    category: "Payments Infrastructure",
    client: "Alliance E-Commerce",
    timeline: "2024",
    duration: "8 months",
    color: "brand-tertiary",
    image: "/alliance-mascot.jpg",
    liveUrl: "",
    overview:
      "Omnichannel payment gateway unifying local mobile money services with global card networks. Enables merchants to accept payments from 95% of consumers in East Africa while maintaining PCI-DSS compliance and providing unified settlement.",
    challenge: {
      title: "The Challenge",
      description:
        "Alliance was losing significant revenue at checkout due to poor transaction success rates. Different payment providers had varying API behaviors, downtime patterns, and success rates - but merchants had no intelligent way to route transactions.",
      points: [
        "73% average transaction success rate (27% failures at checkout)",
        "No automatic failover when payment providers experienced downtime",
        "Manual reconciliation taking 40+ hours per week",
        "Inconsistent API behavior across 8 payment providers",
        "$2M+ in annual abandoned transactionslost revenue",
        "No unified reporting or analytics",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Built an intelligent payment orchestration platform with smart routing that automatically selects optimal payment providers based on real-time success rates, cost, and provider status.",
      approach: [
        {
          phase: "Phase 1: Provider Integration",
          details:
            "Created unified abstraction layer integrating 8 payment providers (M-Pesa, Airtel Money, Stripe, Flutterwave, Paystack, etc.). Normalized disparate APIs into consistent interface.",
        },
        {
          phase: "Phase 2: Smart Routing Engine",
          details:
            "Developed intelligent routing engine analyzing real-time success rates, historical performance, transaction characteristics, and provider health to select optimal provider for each transaction.",
        },
        {
          phase: "Phase 3: Reliability Features",
          details:
            "Implemented automatic retry logic with exponential backoff, intelligent failover to backup providers, and circuit breakers preventing cascading failures.",
        },
        {
          phase: "Phase 4: Reconciliation Automation",
          details:
            "Built automated reconciliation system matching transactions across providers, flagging discrepancies, and generating settlement reports. Reduced manual work from 40 hours to <2 hours per week.",
        },
      ],
    },
    technologies: [
      { name: "Node.js & NestJS", usage: "High-performance backend services" },
      { name: "Go", usage: "Payment processing engine" },
      { name: "PostgreSQL", usage: "Transaction ledger" },
      { name: "Redis", usage: "Real-time provider health tracking" },
      { name: "Kafka", usage: "Event streaming" },
      { name: "React", usage: "Merchant dashboard" },
      { name: "AWS", usage: "Infrastructure (ECS, RDS)" },
      { name: "Grafana", usage: "Real-time monitoring" },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "Success Rate",
          value: "94%",
          description: "up from 73% - 21% improvement",
        },
        {
          label: "Transaction Speed",
          value: "40%",
          description: "faster processing time",
        },
        {
          label: "Revenue Recovered",
          value: "$2M+",
          description: "from previously failed transactions",
        },
        {
          label: "Reconciliation Time",
          value: "95%",
          description: "reduction in manual effort",
        },
        {
          label: "Provider Downtime",
          value: "0%",
          description: "impact on merchants via auto-failover",
        },
        {
          label: "Cost Per Transaction",
          value: "18%",
          description: "reduction via smart routing",
        },
      ],
      testimonial: {
        quote:
          "Alliance Gateway solved problems we didn't even know we had. The smart routing alone recovered millions in revenue, and the unified dashboard finally gave us visibility into our payment operations.",
        author: "Head of Payments",
        company: "Alliance E-Commerce",
      },
    },
    keyFeatures: [
      "Real-time smart routing based on success rates",
      "Automatic failover and retry logic",
      "Unified API for all payment methods",
      "PCI-DSS Level 1 compliant",
      "Automated reconciliation and settlement",
      "Webhook management and notification system",
    ],
  },
  "fintech-gateway": {
    title: "FinTech Ledger Gateway",
    category: "Institutional Finance",
    client: "Strategic Banking Partner",
    timeline: "2024",
    duration: "12 months",
    color: "brand-primary",
    image: "/glass-facade-8016589.jpg",
    liveUrl: "",
    overview:
      "Mission-critical zero-latency ledger management and reconciliation system designed for large-scale banking operations. Processes millions of transactions daily with atomic consistency across distributed systems, serving as the backbone for institutional financial operations.",
    challenge: {
      title: "The Challenge",
      description:
        "The bank needed to replace a legacy system that was causing significant reconciliation issues and couldn't scale to meet growing transaction volumes. Data consistency across distributed data centers was proving nearly impossible.",
      points: [
        "0.03% error rate across 13M daily transactions (~$5M annual reconciliation overhead)",
        "3-hour reconciliation window required nightly",
        "Cannot scale beyond 8M transactions per day",
        "Legacy system couldn't guarantee atomic operations",
        "Manual intervention required for 300+ edge cases monthly",
        "Distributed across 5 data centers with consistency challenges",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Built a distributed ledger system using event sourcing and CQRS patterns, ensuring atomic transactions with cryptographic verification and perfect audit trails.",
      approach: [
        {
          phase: "Phase 1: Architecture Design",
          details:
            "Designed distributed system using event sourcing pattern - every transaction stored as immutable event. Implemented CQRS separating write and read models for optimal performance.",
        },
        {
          phase: "Phase 2: Atomic Transaction Processing",
          details:
            "Built atomic transaction processing engine using distributed consensus algorithms (Raft). Ensures either all operations complete or none do - no partial states possible.",
        },
        {
          phase: "Phase 3: Cryptographic Audit Trail",
          details:
            "Every transaction cryptographically signed and linked to previous transactions (blockchain-inspired). Enables perfect transaction history reconstruction and tamper detection.",
        },
        {
          phase: "Phase 4: Real-Time Reconciliation",
          details:
            "Eliminated batch reconciliation with continuous real-time verification. Built automated anomaly detection flagging discrepancies within seconds of occurrence.",
        },
      ],
    },
    technologies: [
      { name: "Rust", usage: "Ultra-high performance core engine" },
      { name: "PostgreSQL", usage: "Event store with TimescaleDB" },
      { name: "Apache Kafka", usage: "Event streaming backbone" },
      { name: "Docker & Kubernetes", usage: "Container orchestration" },
      { name: "gRPC", usage: "High-performance RPC" },
      { name: "Redis", usage: "Read model caching" },
      { name: "Grafana & Prometheus", usage: "Monitoring and alerting" },
      { name: "Vault", usage: "Secrets and key management" },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "Transaction Accuracy",
          value: "99.9999%",
          description: "six-sigma quality level",
        },
        {
          label: "Cost Savings",
          value: "$4.7M",
          description: "annual reconciliation cost reduction",
        },
        {
          label: "Daily Transaction Volume",
          value: "15M+",
          description: "with room to scale further",
        },
        {
          label: "Reconciliation Time",
          value: "Real-time",
          description: "eliminated 3-hour batch window",
        },
        {
          label: "Manual Intervention",
          value: "97%",
          description: "reduction in required manual fixes",
        },
        {
          label: "System Latency",
          value: "<50ms",
          description: "p99 transaction processing time",
        },
      ],
      testimonial: {
        quote:
          "This system is the backbone of our entire operation now. The combination of performance, reliability, and perfect audit trails has exceeded every expectation. It's transformed from a pain point to a competitive advantage.",
        author: "Chief Technology Officer",
        company: "Strategic Banking Partner",
      },
    },
    keyFeatures: [
      "Atomic transaction processing with distributed consensus",
      "Cryptographic audit trail with tamper detection",
      "Real-time reconciliation eliminating batch windows",
      "Event sourcing enabling perfect history reconstruction",
      "Multi-data-center deployment with strong consistency",
      "Horizontal scaling handling 50M+ transactions/day",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug: slug,
  }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectData[params.slug];

  if (!project) {
    notFound();
  }

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
      <section className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="secondary"
                className={`bg-${project.color}/10 text-${project.color} border-none px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8`}
              >
                {project.category}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-8 mb-10 text-white/50 text-sm font-black uppercase tracking-widest">
                <div>
                  <Calendar className="h-4 w-4 inline mr-2" />
                  {project.timeline}
                </div>
                <div>
                  <TrendingUp className="h-4 w-4 inline mr-2" />
                  {project.duration}
                </div>
              </div>
              <p className="text-xl text-white/70 leading-relaxed font-light mb-12">
                {project.overview}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`bg-${project.color} hover:bg-${project.color}/90 text-white px-10 py-6 rounded-2xl text-lg font-black uppercase tracking-widest shadow-2xl`}
                  >
                    Visit Live Site <ExternalLink className="ml-3 h-5 w-5" />
                  </Button>
                </a>
              )}
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-4xl">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-transparent to-transparent" />
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
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                    {phase.phase}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">
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
          <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.technologies.map((tech: any, idx: number) => (
              <Card
                key={idx}
                className="backdrop-blur-3xl bg-white/[0.05] border-white/10 rounded-[2rem] group hover:bg-white/[0.08] transition-all duration-500"
              >
                <CardContent className="p-8">
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tighter">
                    {tech.name}
                  </h3>
                  <p className="text-white/50 text-sm font-light">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
              {project.results.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
            {project.results.metrics.map((metric: any, idx: number) => (
              <Card
                key={idx}
                className="backdrop-blur-3xl bg-white/[0.04] border-white/10 rounded-[2.5rem] text-center group hover:bg-white/[0.06] transition-all duration-500 shadow-[0_0_40px_rgba(37,99,235,0.03)]"
              >
                <CardContent className="p-10">
                  <div
                    className={`text-5xl font-black text-${project.color} mb-4`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-white font-black uppercase text-sm tracking-widest mb-2">
                    {metric.label}
                  </div>
                  <div className="text-white/50 text-xs font-light">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial */}
          <Card className="backdrop-blur-3xl bg-white/[0.03] border-white/10 rounded-[3.5rem] shadow-4xl">
            <CardContent className="p-12 md:p-16 text-center">
              <p className="text-2xl text-white/80 mb-8 leading-relaxed font-light italic">
                "{project.results.testimonial.quote}"
              </p>
              <div className="text-white/50 font-black uppercase text-sm tracking-widest">
                {project.results.testimonial.author} —{" "}
                {project.results.testimonial.company}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase text-center">
            Key Features Delivered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-2xl p-6"
              >
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
