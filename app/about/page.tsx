import { ArrowRight, Shield, Users, Target, Lightbulb, Globe, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Your strategic Business Technology <span className="text-purple-400">Partner</span>
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                The Foundational Partner for Modern Financial Technology, from mission critical banking integrations to agile fintech platforms, we build the software that moves the world’s money, empowering businesses to navigate the evolving digital economy through engineering secure, compliant, and scalable products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="backdrop-blur-xl bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-purple-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-xl text-white/70 mb-8">
                  To deliver high-impact financial systems that drive business value from Day 0 by building reliable, secure, and scalable technology that solves both business problems & users actually love. We ensure that every product we build a net positive stable asset, not a technical liability.
                </p>
                <p className="text-white/70">
                  Our commitment extends beyond technological implementation we empower businesses to confidently
                  navigate the digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-blue-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-xl text-white/70 mb-8">
                  To establish a new standard for excellence across all domains of software development from traditional
                  web applications to cutting-edge FinTech and blockchain solutions by consolidating diverse expertise,  process Automations & AI solutions
                  under one roof.
                </p>
                <p className="text-white/70">
                  We aim to transform complex ideas into secure, scalable, and market-ready products that deliver
                  measurable business value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Drives Us</h2>
            <p className="text-xl text-white/70">
              The principles that guide our approach to transforming innovative concepts into market reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Security First",
                description:
                  "Robust security protocols and stringent regulatory compliance in every solution we deliver.",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Measurable Value",
                description: "Focus on tangible business outcomes and measurable ROI for every client engagement.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Unified Expertise",
                description: "Consolidating diverse technical and strategic expertise under one trusted partnership.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Innovation Leadership",
                description: "Staying at the forefront of emerging technologies and market trends in FinTech and Web3.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="text-purple-400 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Market Position */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Unique Market Position</h2>
              <p className="text-xl text-white/70 mb-8">
                Positioned as a singular, trusted partner capable of navigating the complexities at the intersection of
                emerging technologies and traditional finance.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Simplifying Complexity",
                    description:
                      "We simplify the intricate process of technological adoption, making advanced solutions accessible and actionable.",
                  },
                  {
                    title: "Accelerated Innovation",
                    description:
                      "Our agile operational model accelerates clients' innovation cycles and market entry timelines.",
                  },
                  {
                    title: "Comprehensive Coverage",
                    description:
                      "End-to-end solutions spanning strategic advisory, development, and post-launch optimization.",
                  },
                  {
                    title: "Regulatory Excellence",
                    description:
                      "Deep expertise in navigating complex regulatory landscapes across multiple jurisdictions.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-white/70 mb-6">Client Success Rate</div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-white/70 mb-6">Products Launched</div>
                  <div className="text-4xl font-bold text-green-400 mb-2">0</div>
                  <div className="text-white/70">Security Incidents</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-white/70">Support</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-sm text-white/70">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Operational Excellence</h2>
            <p className="text-xl text-white/70">
              Designed for agility and iterative delivery in the rapidly evolving digital economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Agile Methodology",
                description: "Iterative development cycles that adapt to changing requirements and market conditions",
                features: [
                  "Sprint-based delivery",
                  "Continuous integration",
                  "Regular client feedback",
                  "Rapid prototyping",
                ],
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous testing and validation processes ensuring robust, secure, and compliant solutions",
                features: ["Automated testing", "Security audits", "Compliance validation", "Performance optimization"],
              },
              {
                title: "Scalable Architecture",
                description: "Future-proof solutions designed to grow with your business and adapt to new technologies",
                features: [
                  "Microservices design",
                  "Cloud-native deployment",
                  "API-first approach",
                  "Modular components",
                ],
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 mb-6">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/80">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-xl text-white/70 mb-8">
              Ready to transform your innovative concept into a market-ready digital product? Let's discuss how our
              unified approach can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Schedule Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Download Our Capabilities Deck
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
              <p>© 2024 FinTechLabs. All rights reserved.</p>
              <p className="mt-1">Transforming ideas into trusted digital products.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
