import { ArrowRight, Shield, CheckCircle, Cog, TrendingUp, Lock, Globe, Code, Database, CreditCard, Monitor, Apple, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay scale-110 blur-sm"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/70 via-brand-foundation to-brand-foundation" />

      {/* Navigation */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-10 md:p-14 rounded-[3rem] backdrop-blur-3xl bg-white/5 border border-white/10 mb-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              End-to-End <span className="text-brand-primary">Idea to Live Product</span> Solutions
            </h1>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
              We transform your core ideas into secure, battle-tested products that are ready to handle the intricate demands of the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Core Service Categories */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Our Unified Service Portfolio</h2>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              Three pillars of excellence that transform complex ideas into user friendly, reliable, secure, and market-ready products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Full-Stack Development",
                color: "text-brand-primary",
                description: "Complete application development using modern frameworks and proven architectures",
                services: [
                  "Next.js & Remix web Applications",
                  "Cross platform mobile Development",
                  "Spring Boot Backend Systems",
                  "FastAPI & NestJs/NodeJs APIs",
                  "Database Design & Architecture",
                  "Cloud Deployment & DevOps",
                ],
              },
              {
                icon: <CreditCard className="h-10 w-10" />,
                title: "Payment Gateway Integration",
                color: "text-brand-secondary",
                description: "Integrating payment gateways for secure and seamless transactions",
                services: [
                  "Stripe & Paypal for Global Payments",
                  "Mpesa & Flutterwave for African Payments",
                  "Bitcoin & Stable Coin Integration",
                  "Subscription & Billing",
                  "QR Code, NFC & Biometric Payments",
                  "Agentic & Multi-Channel Payments",
                ],
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "System Analysis & Design",
                color: "text-brand-tertiary",
                description: "Aligning business objectives with robust engineering.",
                services: [
                  "System Modernization & Automation Strategy",
                  "Regulatory & Security Compliance Planning",
                  "Architectual Design & Technology Stack Selection",
                  "Operational Worflow & Process Automation",
                  "Technical Risk Assessment & Mitigation",
                  "Scalability Roadmap & Integration Planning",
                ],
              },
              {
                icon: <Cog className="h-10 w-10" />,
                title: "Post-Launch Optimization",
                color: "text-brand-primary",
                description: "Continuous improvement and scaling to deliver measurable business value",
                services: [
                  "Rigorous QA & Regression Testing",
                  "Proactive Performance & Uptime Monitoring",
                  "Continuous Security Audits & Compliance Patches",
                  "Iterative Feature Development & Enhancements",
                  "System Hardening & Scalability Engineering",
                  "User Experience Optimization",
                  "SLA-Driven Support & System Maintenance",
                ],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="backdrop-blur-2xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 rounded-[2.5rem] group"
              >
                <CardContent className="p-10">
                  <div className={`${category.color} mb-8 transition-transform duration-500 group-hover:scale-110`}>{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{category.title}</h3>
                  <p className="text-white/60 mb-8 text-sm leading-relaxed">{category.description}</p>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-white/70 group-hover:text-white transition-colors">
                        <CheckCircle className={`h-4 w-4 ${category.color} mr-3 flex-shrink-0 opacity-80`} />
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Core Product Expertise</h2>
            <p className="text-xl text-white/50">Targeted Solutions to power the digital economy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: <Monitor className="h-8 w-8" />,
                title: "Digital Banking & Core Integrations",
                description: "Building the infrastructure that powers modern internet banking experiences.",
                features: [
                  "Core Banking System (CBS) Integrations",
                  "Mobile Money & Payment Gateway Syncing (M-Pesa, Pesalink, Flutterwave)",
                  "API Layer Development for Third-party Access",
                  "Ledger Management & Reconciliation Systems",
                  "Regulatory Compliance Framework",
                ],
                badge: "Digital Banking",
                color: "brand-primary"
              },
              {
                icon: <Apple className="h-8 w-8" />,
                title: "FinTech Applications Development",
                description: "Developing scalable platforms for lending, savings, and investment.",
                features: [
                  "Micro-investment & WealthTech Platforms",
                  "InsurTech Policy Management & Claims Processing",
                  "Robo-Advisory Systems",
                  "Multi-currency Wallets & Currency Exchange",
                  "Digital Lending & Automated Appraisal Engines",
                  "Savings & Investment Platforms",
                ],
                badge: "FinTech Applications",
                color: "brand-secondary"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Enterprise Web & Digital Commerce",
                description: "Applying institutional-grade engineering to high-growth e-commerce, healthtech, and modern business systems.",
                features: [
                  "Single & Multi-tenant E-commerce platforms",
                  "Healthtech & Telemedicine Systems",
                  "Logistics & Supply Chain Management Systems",
                  "Custom Digital Commerce Solutions",
                ],
                badge: "Enterprise Web",
                color: "brand-tertiary"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "QA, Security & Compliance",
                description: "Robust security protocols and stringent regulatory compliance across all solutions",
                features: [
                  "Unit, Integration & E2E Testing & QA",
                  "Automated KYC/AML Onboarding Flows",
                  "Regulatory Compliance (CBK, Data Protection Act, GDPR Compliance)",
                  "Threat Modeling, Security Audits & Penetration Testing",
                ],
                badge: "QA & Security",
                color: "brand-primary"
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-2xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 rounded-[3rem] group"
              >
                <CardContent className="p-10 md:p-14">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`text-${service.color}`}>{service.icon}</div>
                    <Badge variant="secondary" className={`bg-brand-foundation/40 text-${service.color} border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest`}>
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 font-semibold">{service.title}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed">{service.description}</p>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/80 group-hover:text-white transition-colors">
                        <div className={`w-2 h-2 bg-${service.color} rounded-full mr-4 opacity-80`} />
                        <span className="text-sm font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Our Agile Delivery Process</h2>
            <p className="text-xl text-white/50">Accelerating innovation cycles through institutional-grade engineering</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your business objectives and technical requirements.",
                color: "brand-primary"
              },
              {
                step: "02",
                title: "Architecture",
                description: "Designing scalable, secure, and compliant system frameworks.",
                color: "brand-secondary"
              },
              {
                step: "03",
                title: "Development",
                description: "Sprints-based implementation with continuous integration.",
                color: "brand-tertiary"
              },
              {
                step: "04",
                title: "Launch",
                description: "Secure deployment and ongoing performance optimization.",
                color: "brand-primary"
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group p-8 rounded-[2rem] hover:bg-white/5 transition-all">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${phase.color}/10 border border-${phase.color}/20 flex items-center justify-center transition-transform group-hover:rotate-12`}>
                  <span className={`text-${phase.color} font-bold text-xl`}>{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{phase.description}</p>
              </div>
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

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight relative z-10">Ready to Start?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Let's discuss how our unified approach can accelerate your journey from concept to market-ready product.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-8 rounded-2xl text-xl font-bold transition-all hover:scale-105">
                Contact Us <ArrowRight className="ml-2 h-6 w-6" />
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
