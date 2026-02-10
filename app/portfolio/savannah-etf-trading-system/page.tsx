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
