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
import { notFound } from "next/navigation";

const projectData: Record<string, any> = {
  "lionx-ecosystem": {
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
  },
  "expendi-savings": {
    title: "Expendi Savings Application",
    category: "Financial Technology",
    client: "Hifadhi Financial Services",
    timeline: "2023",
    duration: "9 months",
    color: "brand-tertiary",
    image: "/expendi-mascot.jpg",
    liveUrl: "https://hifadhi.cloud",
    overview:
      "Savings platform helping Africans securely save money and build wealth across 12 countries. Users can deposit, track their savings, and access their money anytime with bank-level security and full regulatory compliance. Pioneered DeFi-based yield generation for in-app savings, enabling users to earn returns while maintaining security.",
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
      { name: "Golang", usage: "High-performance backend services" },
      { name: "AWS S3 & Glacier", usage: "Multi-tier storage system" },
      { name: "Solidity", usage: "DeFi yield smart contracts" },
      { name: "Docker & Kubernetes", usage: "Container orchestration" },
      { name: "Terraform", usage: "Infrastructure as Code" },
      { name: "Redis", usage: "Distributed caching layer" },
      { name: "PostgreSQL", usage: "User data and transaction records" },
      { name: "Web3.js", usage: "DeFi protocol integration" },
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
  },
  "media-agency": {
    title: "Media Agency Content Platform",
    category: "Marketing Automation",
    client: "Global Media Group",
    timeline: "2023 - 2024",
    duration: "11 months",
    color: "brand-primary",
    image: "/media-agency.jpg",
    liveUrl: "",
    overview:
      "Content writing agency platform leveraging modern localized design approach for global brands. Combines AI automation (Clawdbot) for research and analysis with human creativity for review and content creation, ensuring culturally relevant messaging that resonates with diverse audiences.",
    challenge: {
      title: "The Challenge",
      description:
        "Global brands struggled creating culturally relevant content for diverse markets. Generic, one-size-fits-all messaging led to high client churn and poor user retention. The agency needed a scalable way to produce localized content while maintaining quality and speed.",
      points: [
        "High client churn due to culturally irrelevant content",
        "Manual content creation couldn't scale across multiple markets",
        "No systematic approach to localized design and messaging",
        "Quality inconsistencies across different content creators",
        "Slow turnaround times from research to final content",
        "Lack of data-driven insights for content optimization",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Developed a hybrid platform combining AI automation (Clawdbot) for research and market analysis with human creativity for content creation and review. Built localized design systems ensuring cultural relevance while maintaining brand consistency.",
      approach: [
        {
          phase: "Phase 1: AI Research Engine",
          details:
            "Integrated Clawdbot AI for automated market research, trend analysis, and content ideation. AI handles data gathering, competitor analysis, and audience insights, freeing humans to focus on creativity.",
        },
        {
          phase: "Phase 2: Localized Design System",
          details:
            "Built comprehensive design system with culturally-specific components, color palettes, typography, and imagery for each target market. Ensures content resonates locally while maintaining global brand identity.",
        },
        {
          phase: "Phase 3: Human-AI Workflow",
          details:
            "Established efficient workflow where AI generates research and drafts, humans review, refine, and inject creativity. Quality control process ensures cultural appropriateness and brand alignment.",
        },
        {
          phase: "Phase 4: Performance Analytics",
          details:
            "Created analytics dashboard tracking content performance across markets. Feedback loop continuously improves AI recommendations and human creative direction based on what resonates with each audience.",
        },
      ],
    },
    technologies: [
      { name: "Python & FastAPI", usage: "Backend services and AI integration" },
      { name: "Clawdbot AI", usage: "Research and analysis automation" },
      { name: "React & TypeScript", usage: "Content management dashboard" },
      { name: "PostgreSQL", usage: "Content database and versioning" },
      { name: "OpenAI API", usage: "AI-powered content assistance" },
      { name: "Redis", usage: "Real-time collaboration caching" },
      { name: "AWS", usage: "Infrastructure and CDN" },
      { name: "Figma API", usage: "Design system integration" },
  ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "Client Churn",
          value: "Reduced",
          description: "significantly improved retention",
        },
        {
          label: "User Engagement",
          value: "↑ Notable",
          description: "improved across all markets",
        },
        {
          label: "Cultural Relevance",
          value: "5x",
          description: "faster campaign setup and launch",
        },
        {
          label: "Annual Savings",
          value: "$8.3M",
          description: "in operational costs and improved performance",
        },
        {
          value: "Localized",
          description: "design system for each market",
        },
        {
          label: "Production Speed",
          value: "3x Faster",
          description: "AI-assisted research and drafting",
        },
        {
          label: "Content Quality",
          value: "Consistent",
          description: "human review ensures excellence",
        },
        {
          label: "Markets Served",
          value: "Multiple",
          description: "culturally-relevant content at scale",
        },
      ],
      testimonial: {
        quote:
          "The localized design approach and AI-human workflow revolutionized how we create content. Our clients love the cultural relevance, and we've seen dramatic improvements in user retention.",
        author: "Creative Director",
        company: "Global Media Group",
      },
    },
    keyFeatures: [
      "Clawdbot AI for automated research and market analysis",
      "Human-AI hybrid workflow balancing automation with creativity",
      "Localized design system ensuring cultural relevance",
      "Real-time collaboration tools for distributed teams",
      "Performance analytics tracking content effectiveness",
      "Quality control process with human review",
    ],
  },
  "ushahidi-hub" {
    title: "Ushahidi Crisis Response Hub",
    category: "Social Impact Technology",
    client: "Ushahidi Network",
    timeline: "2023",
    duration: "7 months",
    color: "brand-secondary",
    image: "/ushahidi-mascot.jpg",
    liveUrl: "https://ushahidi.com",
    overview:
      "Citizen journalism platform empowering communities to report and verify crisis news in real-time. Enables verified news sources to coordinate crisis response efforts, connecting aid organizations, governments, and NGOs with ground-truth information during emergencies to save lives.",
    challenge: {
      title: "The Challenge",
      description:
        "During critical humanitarian emergencies, the platform needed to handle massive influxes of citizen reports while maintaining credibility through verification. System instability during peak moments and lack of verification workflows meant delayed crisis response when every second counts.",
      points: [
        "10-minute downtimes during traffic spikes when citizen reports flood in (5,000+ reports/minute)",
        "No systematic verification workflow for citizen-submitted reports",
        "Database query timeouts under load causing critical report loss",
        "Difficulty distinguishing verified news from unverified citizen reports",
        "Limited geographic redundancy despite global crisis coverage",
        "Manual scaling requiring DevOps intervention during emergencies",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Re-architected the platform with horizontal scaling, verification workflows, and event-driven architecture to handle massive citizen report influxes while implementing credibility systems for verified news sources.",
      approach: [
        {
          phase: "Phase 1: Verification System",
          details:
            "Built comprehensive verification workflow enabling trusted sources (journalists, aid workers, verified organizations) to validate citizen reports. Implemented credibility scoring and source verification to distinguish verified news from unverified reports.",
        },
        {
          phase: "Phase 2: Architecture Modernization",
          details:
            "Migrated to event-driven microservices architecture. Implemented message queues (RabbitMQ) ensuring zero report loss even during massive citizen journalism surges. Separated read and write workloads for optimal performance.",
        },
        {
          phase: "Phase 3: Database & Search Optimization",
          details:
            "Optimized PostgreSQL queries reducing average query time by 78%. Implemented read replicas and connection pooling. Added ElasticSearch for fast full-text search enabling rapid crisis report discovery.",
        },
        {
          phase: "Phase 4: Auto-Scaling",
          details:
            "Implemented Kubernetes horizontal pod autoscaling responding to CPU and custom metrics. System now scales automatically from 5 to 50 pods based on real-time citizen reporting demand during crises.",
        },
      ],
    },
    technologies: [
      { name: "PHP & Laravel", usage: "Core application framework" },
      { name: "Next.js", usage: "Modern citizen journalism interface" },
      { name: "Redis", usage: "Multi-layer caching for verified reports" },
      { name: "ElasticSearch", usage: "Fast crisis report search" },
      { name: "PostgreSQL", usage: "Primary database with replicas" },
      { name: "AWS", usage: "Cloud infrastructure" },
      { name: "Kubernetes", usage: "Auto-scaling orchestration" },
      { name: "RabbitMQ", usage: "Message queue ensuring report reliability" },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "Verified News",
          value: "Implemented",
          description: "verifiable crisis news source system",
        },
        {
          label: "System Uptime",
          value: "100%",
          description: "during subsequent major emergencies",
        },
        {
          label: "Citizen Reports",
          value: "50K+",
          description: "processed per hour",
        },
        {
          label: "Query Performance",
          value: "10x",
          description: "faster crisis report search",
        },
        {
          label: "Report Loss",
          value: "0",
          description: "zero citizen reports lost",
        },
        {
          label: "Geographic Coverage",
          value: "Global",
          description: "multi-region citizen journalism",
        },
      ],
      testimonial: {
        quote:
          "The verification system transformed how we handle citizen reports during crises. We can now distinguish verified news from unverified reports, enabling faster, more accurate emergency response.",
        author: "Technical Director",
        company: "Ushahidi Network",
      },
    },
    keyFeatures: [
      "Citizen journalism platform with verification workflows",
      "Trusted source credibility scoring and validation",
      "Automatic horizontal scaling during crisis influxes",
      "Event-driven architecture preventing report loss",
      "Real-time mapping and geospatial crisis visualization",
      "Multi-region deployment for global resilience",
    ],
  },
  "alliance-platform": {
    title: "Alliance HR Management Platform",
    category: "Human Resource Management",
    client: "Lithium Labs Internal",
    timeline: "2024",
    duration: "8 months",
    color: "brand-tertiary",
    image: "/alliance-mascot.jpg",
    liveUrl: "",
    overview:
      "Internal HR management platform bridging local African talent with global remote opportunities. Streamlines subcontracting specialized tasks within Lithium Labs, matching skilled professionals with projects that align with their expertise for efficient distributed team operations.",
    challenge: {
      title: "The Challenge",
      description:
        "Lithium Labs faced challenges efficiently matching internal projects with specialized talent across Africa while managing remote work logistics. Finding the right skills for specific tasks, coordinating across time zones, and tracking project deliverables became increasingly complex as the team grew.",
      points: [
        "Difficulty matching specialized skills with specific project needs",
        "Manual task allocation consuming significant management time",
        "Limited visibility into available talent and their expertise",
        "Challenges coordinating distributed teams across multiple time zones",
        "No systematic way to track project progress and deliverables",
        "Missed opportunities to connect local talent with international projects",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Built an intelligent HR management platform with skill matching algorithms, project tracking, and collaboration tools designed specifically for distributed teams bridging African talent with global opportunities.",
      approach: [
        {
          phase: "Phase 1: Talent Profile System",
          details:
            "Created comprehensive talent profile system capturing skills, expertise, availability, and preferences. Built search and filtering capabilities enabling quick identification of specialized professionals for specific project needs.",
        },
        {
          phase: "Phase 2: Smart Matching Engine",
          details:
            "Developed intelligent matching algorithm analyzing project requirements, professional skills, past performance, and availability to recommend optimal talent-project pairings. Automated task allocation reducing manual coordination time.",
        },
        {
          phase: "Phase 3: Project Management Tools",
          details:
            "Implemented project tracking dashboard with milestone monitoring, deliverable management, and real-time progress updates. Time zone coordination features and asynchronous collaboration tools supporting distributed teams.",
        },
        {
          phase: "Phase 4: Opportunity Bridge",
          details:
            "Built connection system linking local African professionals with international remote opportunities. Enabled seamless onboarding, contract management, and payment processing for cross-border engagements.",
        },
      ],
    },
    technologies: [
      { name: "Node.js & NestJS", usage: "Backend API services" },
      { name: "React & TypeScript", usage: "HR management dashboard" },
      { name: "PostgreSQL", usage: "User profiles and project data" },
      { name: "Redis", usage: "Real-time availability tracking" },
      { name: "AWS", usage: "Infrastructure and file storage" },
      { name: "Stripe", usage: "Payment processing for international work" },
      { name: "Socket.io", usage: "Real-time collaboration" },
      { name: "Slack API", usage: "Team communication integration" },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "Talent Matching",
          value: "Streamlined",
          description: "efficient skill-project pairing",
        },
        {
          label: "Allocation Time",
          value: "Reduced",
          description: "faster task assignment",
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
          label: "Global Reach",
          value: "International",
          description: "local talent with abroad opportunities",
        },
        {
          label: "Team Efficiency",
          value: "Improved",
          description: "streamlined project delivery",
        },
        {
          label: "Project Tracking",
          value: "Real-time",
          description: "visibility into all deliverables",
        },
      ],
      testimonial: {
        quote:
          "The Alliance Platform revolutionized how we manage our distributed team. We can now easily match the right talent with each project and seamlessly connect our African professionals with international clients.",
        author: "Operations Director",
        company: "Lithium Labs",
      },
    },
    keyFeatures: [
      "Intelligent skill-project matching algorithm",
      "Comprehensive talent profile and expertise tracking",
      "Real-time project management and milestone tracking",
      "Time zone coordination for distributed teams",
      "International opportunity bridge for local talent",
      "Integrated payment processing for cross-border work",
    ],
  },
  "savannah-etff-trading-system": {
    title: "Savannah ETF Trading System",
    category: "Institutional Finance",
    client: "Strategic Investment Partner",
    timeline: "2024",
    duration: "12 months",
    color: "brand-primary",
    image: "/savannah-mascot.jpg",
    liveUrl: "https://savannahetfs.fund",
    overview:
      "ETF trading platform helping investors gain diversified exposure to various sectors without manual Excel analysis. Automatically sources, risk-grades, and recommends ETFs across sectors, simplifying portfolio management and investment decision-making through data-driven algorithms.",
    challenge: {
      title: "The Challenge",
      description:
        "Investors spent countless hours manually analyzing ETFs in Excel spreadsheets, struggling to compare risk profiles and sector exposures. Reconciliation errors in manual tracking systems were costing clients millions while investment decisions lacked data-driven insights.",
      points: [
        "Manual Excel-based ETF analysis consuming hours of research time per investment decision",
        "0.03% error rate across transaction reconciliation costing $5M annually",
        "No systematic risk grading methodology for comparing ETFs",
        "Difficulty sourcing and tracking 15M+ ETF data points",
        "Inconsistent portfolio diversification across client accounts",
        "Lack of automated alerts for risk threshold breaches",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "Built an intelligent ETF trading platform with automated sourcing, risk-grading algorithms, and data-driven recommendations. Eliminated manual Excel analysis by processing 15M+ data points daily, providing investors with instant, accurate insights.",
      approach: [
        {
          phase: "Phase 1: Data Aggregation Engine",
          details:
            "Built comprehensive data aggregation system sourcing ETF information from multiple financial data providers. Real-time processing of 15M+ data points daily including pricing, holdings, performance metrics, and sector exposures.",
        },
        {
          phase: "Phase 2: Risk-Grading Algorithm",
          details:
            "Developed proprietary risk-grading algorithm analyzing volatility, correlation, sector concentration, and liquidity metrics. Automated classification system providing instant risk scores (1-10) for each ETF enabling quick comparison and decision-making.",
        },
        {
          phase: "Phase 3: Reconciliation Automation",
          details:
            "Implemented atomic transaction processing with distributed consensus algorithms eliminating manual reconciliation errors. Built real-time audit trail with cryptographic verification saving $4.7M annually in reconciliation overhead.",
        },
        {
          phase: "Phase 4: Investment Dashboard",
          details:
            "Created intuitive investment dashboard with portfolio visualization, sector exposure analysis, and automated rebalancing recommendations. Replaced Excel spreadsheets with real-time analytics and data-driven insights.",
        },
      ],
    },
    technologies: [
      { name: "Rust", usage: "Ultra-high performance trading engine" },
      { name: "Python", usage: "Risk-grading algorithms and ML models" },
      { name: "PostgreSQL", usage: "ETF data warehouse with TimescaleDB" },
      { name: "Apache Kafka", usage: "Real-time data streaming" },
      { name: "React & TypeScript", usage: "Investment dashboard" },
      { name: "Redis", usage: "Real-time pricing cache" },
      { name: "Docker & Kubernetes", usage: "Container orchestration" },
      { name: "Financial Data APIs", usage: "ETF data sourcing" },
      { name: "Grafana", usage: "Performance monitoring" },
    ],
    results: {
      title: "Impact & Results",
      metrics: [
        {
          label: "Reconciliation Errors",
          value: "Eliminated",
          description: "$4.7M annual cost savings",
        },
        {
          label: "ETF Data Points",
          value: "15M+",
          description: "processed daily via automation",
        },
        {
          label: "Analysis Time",
          value: "Instant",
          description: "eliminated manual Excel work",
        },
        {
          label: "Risk Grading",
          value: "Automated",
          description: "algorithm-driven ETF scoring",
        },
        {
          label: "Transaction Accuracy",
          value: "99.9999%",
          description: "six-sigma quality level",
        },
        {
          label: "Investment Insights",
          value: "Real-time",
          description: "data-driven decisions",
        },
      ],
      testimonial: {
        quote:
          "Savannah ETF transformed our investment process. What used to take hours in Excel now happens instantly with better accuracy. The automated risk grading and ETF sourcing have revolutionized how we evaluate opportunities.",
        author: "Chief Investment Officer",
        company: "Strategic Investment Partner",
      },
    },
    keyFeatures: [
      "Automated ETF sourcing processing 15M+ data points daily",
      "Proprietary risk-grading algorithm (1-10 scoring)",
      "Real-time portfolio visualization and analytics",
      "Eliminated manual Excel analysis and reconciliation errors",
      "Sector exposure analysis and diversification recommendations",
      "Automated transaction processing with cryptographic audit trails",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug: slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

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
