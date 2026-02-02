import { ArrowRight, ExternalLink, Github, Star, TrendingUp, Shield, Users, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming <span className="text-purple-400">Ideas</span> into
              <br />
              Market-Ready <span className="text-blue-400">Products</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Explore our portfolio of successful FinTech and Web3 solutions that bridge the gap between innovative
              concepts and tangible, market-ready digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "5+", label: "Products Launched", icon: <TrendingUp className="h-6 w-6" /> },
              { number: "100%", label: "Success Rate", icon: <Award className="h-6 w-6" /> },
              { number: "$2.5B+", label: "Transaction Volume", icon: <Shield className="h-6 w-6" /> },
              { number: "5+", label: "Countries Served", icon: <Users className="h-6 w-6" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <div className="text-purple-400 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-white/70">
              Deep dives into our most impactful projects and the measurable business value delivered
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "LionX Creatives Ecosystem",
                category: "Fintech & Digital Asset Engineering",
                client: "US-Based Digital Creatives Art Community",
                timeline: "8 months(2022)",
                description:
                  "Architected and deployed a multi-tier financial platform that bridges the gap between decentralized assets and traditional secure backend infrastructure, focusing on transaction precision and data privacy.",
                challenge:
                  "The client faced critical system bottlenecks, including high transaction slippage, redundant data requests, and privacy concerns when routing sensitive financial data directly to the ledger.",
                solution:
                  "engineered a 'Security-First' architecture using a custom Express.js middleware layer to filter sensitive data. I also designed a proprietary path-finding algorithm to minimize transaction slippage and integrated multi-wallet support for seamless user onboarding.",
                results: [
                  "20% Improvement in system load times through optimized data filtration strategies.",
                  "Significant reduction in transaction costs via a custom-engineered slippage-minimization algorithm.",
                  "Increased user conversion rates by expanding secure wallet interoperability (Wallet Connect/Tron-Link).",
                  "Enhanced data privacy by strategically decoupling sensitive user data from public ledger interactions.",
                ],
                technologies: ["React", "Express.js", "Node.js", "Solidity", "TypeScript", "AWS", "Redis"],
                image: "/Small-lionx.png",
                preview: "https://lionxeco.net/",
              },
              {
                title: "Decentralized Reporting & Verification System",
                category: "Civic-Tech & Governance Systems",
                client: "Ushahidi (Regional Civic-Tech Initiative)",
                timeline: "9 months(2022-2023)",
                description:
                  "Engineered a decentralized platform for authenticating citizen-led reports, utilizing a community-driven curation model and blockchain-backed time-locking mechanisms to ensure information credibility.",
                challenge:
                  "The primary hurdle was the high cost and slow speed of manual verification. Traditional methods couldn't scale with the volume of reports, leading to potential misinformation and a lack of accountability.",
                solution:
                  "Designed a tiered validation system where regional peer-voting is enforced by time-locked smart contracts. High-consensus reports are automatically escalated to community-elected regional validators, creating a scalable, automated trust hierarchy.",
                results: [
                  "Implemented a decentralized verification workflow that reduced reporting-to-validation latency by 70%.",
                  "Introduced a tamper-proof audit trail for all public reports using blockchain-based data anchoring.",
                  "Engineered a time-locked voting system to prevent sybil attacks and ensure genuine community engagement.",
                  "Successfully scaled regional validation across multiple geographic zones with automated escalation triggers.",
                ],
                technologies: ["React Native", "Tailwindcss", "Solidity", "NodeJs/Typescript", "IPFS", "Foundry", "PostgreSQL"],
                image: "/taarifu-profile.jpg",
                preview: "https://taarifu.vercel.app/"
              },
              {
                title: "Alliance: Internal Hiring & Middleware Platform",
                category: "Enterprise SaaS & Human Capital Systems",
                client: "Internal Agency Infrastructure",
                timeline: "9 months(2024-2025)",
                description:
                  "Architected a custom-built, role-based talent orchestration platform designed to streamline the subcontracting lifecycle, from guest onboarding to verified institutional-grade talent management.",
                challenge:
                  "Scaling an agency requires a secure way to manage diverse talent tiers (Guests, Talents, Firms) while protecting sensitive project data and ensuring that only verified engineers can access high-stakes repositories.",
                solution:
                  "Developed a session-less, JWT-authenticated architecture with a 4-tier Role-Based Access Control (RBAC) system. Built an automated, gamified 'Profile Upgrade' workflow that transitions users from public guests to vetted talent via rigorous data validation and secure identity mapping.",
                results: [
                  "Engineered a zero-trust security model with resource-level access control for sensitive API endpoints.",
                  "Automated the vetting workflow, reducing talent onboarding time by 65% through self-service profile completion.",
                  "Integrated a unified 'Firm Portal' allowing subcontracting partners to manage listings and review applications in a secure silo.",
                  "Implemented a healthy, scalable backend architecture with 99.9% uptime and structured error-tracking for high-reliability operations.",
                ],
                technologies: ["Spring Boot", "Java", "PostgreSQL", "JWT / OAuth2", "React", "Docker", "Coolify"],
                image: "/alliance-mascot.jpg",
                preview: "https://alliance.xyz"
              },
              {
                title: "Hifadhi: Decentralized Social Savings & Yield Engine",
                category: "Systems Architecture & Smart Contract Engineering",
                client: "Regional Fintech Initiative (Celo Ecosystem)",
                timeline: "6 months(2025)",
                description:
                  "Architected the backend financial logic and automated yield-generation systems for a decentralized 'Chama' platform, enabling community-led savings with inflation-hedging stablecoin integration.",
                challenge:
                  "Transitioning the traditional African social savings model to the blockchain required solving for high gas costs, low-data accessibility (Minipay integration), and complex fund-lifecycle management without compromising security..",
                solution:
                  "Served as the Lead System Analyst and Backend Engineer to design the automated fund-routing architecture. I developed the smart contract logic for cyclical payouts and yield-bearing account structures, while ensuring the backend could handle real-time contribution tracking in low-bandwidth environments.",
                results: [
                  "Successfully architected a seamless 'Cyclical Payout' engine using time-locked smart contracts for automated fund distribution.",
                  "Engineered a low-data backend sync strategy specifically for Opera Mini (MiniPay) compatibility, expanding accessibility to rural users.",
                  "Integrated cUSD stablecoin logic to provide an inflation-proof savings environment for regional users.",
                  "Optimized yield-generation workflows, allowing community pools to earn passive interest on stagnant deposits via DeFi protocol integrations.",
                ],
                technologies: ["Solidity", "Foundry", "NodeJs", "Minipay SDK", "Thirdweb", "PostgreSQL", "Gelato", "Docker"],
                image: "/hifadhi-mascot.jpg",
                preview: "https://hifadhi.xyz"
              },
              {
                title: "Taarifu: A Modern Kenyan Media & Civic Platform",
                category: "Digital Experience & Content Infrastructure",
                client: "Taarifu Creative Studio",
                timeline: "6 months(2025-present)",
                description:
                  "Architected a high-performance media portal that merges vibrant Kenyan cultural narratives with deep-tech editorial content and an interactive constitutional education engine.",
                challenge:
                  "Nairobi’s digital audience demands 'instant-load' experiences across varying network speeds. The challenge was to serve high-resolution aesthetics and complex data without compromising mobile performance.",
                solution:
                  "Engineered a 'Bento-style' modular UI for high-speed content consumption. I developed a custom CMS architecture to handle diverse content types—from viral 'Meme Bento' micro-content to long-form technical deep dives—and integrated an annotated 'Constitution Engine' for civic engagement.",
                results: [
                  "Successfully launched a unified platform serving 5M+ public views through optimized asset delivery and edge caching.",
                  "Engineered a mobile-first interactive guide, making 264 constitutional articles accessible and searchable in low-data environments.",
                  "Reduced content-to-consumer latency by 50% using a server-side rendered (SSR) architecture for rich-media editorial pieces.",
                  "Developed a multi-tenant Agency Portal to bridge the gap between creative storytelling and full-stack technical execution.",
                ],
                technologies: ["NextJs", "Tailwind Css", "Supabase", "Framer-motion", "Prisma", "PostgreSQL"],
                image: "/media-agency.jpg",
                preview: "https://taarifu.xyz"
              },
              {
                title: "TM: Oracle-Settled Prediction Ecosystem",
                category: "Fintech",
                client: "Strategic Venture (Regional Market Rollout)",
                timeline: "12 months(2025-present)",
                description:
                  "Engineering a high-integrity prediction market platform designed to redirect retail speculative capital into transparent, locally relevant financial instruments via gasless blockchain infrastructure.",
                challenge:
                  "Kenyan retail investors face high on-chain costs and opaque settlement processes. The challenge was to build a low-friction, gasless experience that handles complex market resolutions (Sports, Policy, Commodities) with sub-second API latency.",
                solution:
                  "Architected a 'Gasless' trading environment using Account Abstraction and Pragma Oracles for automated settlement. Built a hybrid infrastructure leveraging Next.js and Supabase for real-time responsiveness, integrated with an AMM (LMSR) engine and M-Pesa liquidity rails for seamless local onboarding.",
                results: [
                  "Designed for scale with a targeted P95 API latency of <200ms and transaction processing under 3 seconds.",
                  "Engineered a multi-chain optionality framework (Base/Celo) to ensure low-cost execution for high-frequency retail trades.",
                  "Integrated automated KYC/AML workflows and audit trails to ensure institutional-grade regulatory compliance.",
                  "Developed a modular 'Oracle-driven' resolution engine to eliminate human bias in market settlements.",
                ],
                technologies: ["NextJs", "Prisma", "PostgreSQL", "Tailwind CSS", "Privy", "Base", "Foundry", "Java", "Springboot", "Solidity"],
                image: "/tm.jpg",
                preview: "https://tmarkets.xyz"
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-white/60 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.timeline}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-purple-300 mb-4">{project.client}</p>
                      <p className="text-white/70 mb-6">{project.description}</p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-white/70 text-sm">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-white/70 text-sm">{project.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-white/80 text-sm">
                              <Star className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                          View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-r-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-r-lg"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">More Success Stories</h2>
            <p className="text-xl text-white/70">
              Additional projects showcasing our expertise across FinTech and Web3 domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                category: "Full-Stack",
                description: "Complete e-commerce solution with Spring Boot backend and Next.js storefront.",
                metrics: "1k+ products, 99.9% uptime",
                technologies: ["Spring Boot", "Next.js", "MySQL", "Redis"],
              },
              {
                title: "Learning Management System",
                category: "Web Development",
                description:
                  "Educational platform built with Remix featuring real-time collaboration and progress tracking.",
                metrics: "50K+ students, 95% satisfaction",
                technologies: ["Remix", "FastAPI", "PostgreSQL", "WebRTC"],
              },
              {
                title: "Healthcare Management API",
                category: "Backend",
                description: "HIPAA-compliant backend system for patient data management and appointment scheduling.",
                metrics: "HIPAA certified, 24/7 uptime",
                technologies: ["Spring Boot", "MySQL", "Docker", "AWS"],
              },
              {
                title: "Social Media Analytics",
                category: "Full-Stack",
                description: "Real-time social media monitoring and analytics platform with custom dashboard.",
                metrics: "10M+ posts analyzed daily",
                technologies: ["FastAPI", "React", "MongoDB", "Kafka"],
              },
              {
                title: "Payment Gateway Integration",
                category: "FinTech",
                description: "Multi-currency payment processing with fraud detection and risk management.",
                metrics: "99.99% uptime, <0.1% fraud rate",
                technologies: ["Node.js", "Stripe", "MongoDB", "Docker"],
              },
              {
                title: "DAO Governance Platform",
                category: "Web3",
                description: "Decentralized governance system with voting mechanisms and treasury management.",
                metrics: "100+ DAOs, $500M+ governed",
                technologies: ["Solidity", "Next.js", "The Graph", "IPFS"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4"></div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{project.description}</p>
                  <div className="text-purple-300 text-sm font-medium mb-4">{project.metrics}</div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how we can transform your innovative concept into the next market-ready success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Request Detailed Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">
              FinTech<span className="text-purple-400">Labs</span>
            </div>
            <div className="text-white/70 text-center md:text-right">
              <p>© {new Date().getFullYear()} Lithium Labs. All rights reserved.</p>
              <p className="mt-1">Transforming ideas into trusted digital products.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
