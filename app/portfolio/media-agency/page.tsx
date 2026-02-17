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
  title: "Media Agency Content Platform",
  category: "Marketing Automation",
  client: "Global Media Group",
  timeline: "2025 - 2026",
  duration: "2025 - present",
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
    {
      name: "NestJs & LangChain",
      usage: "Backend services and AI integration",
    },
    { name: "Clawdbot AI", usage: "Research and analysis automation" },
    { name: "React & TypeScript", usage: "Content management dashboard" },
    { name: "PostgreSQL & Chromadb", usage: "Content database and versioning" },
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
        label: "Design System",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl text-base sm:text-lg md:text-xl font-black uppercase tracking-widest shadow-2xl">
                Start Your Project <ArrowRight className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6" />
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
