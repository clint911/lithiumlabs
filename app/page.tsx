import { ArrowRight, Shield, Zap, Users, CheckCircle, Star, Github, Linkedin, Twitter, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                From <span className="text-purple-400">Idea</span> to
                <br />
                <span className="text-blue-400">Live Product</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                We transform innovative FinTech and Web3 concepts into secure, compliant, and scalable digital products
                that users trust and love.
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
                  View Our Work
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Specialized in cutting-edge financial technology and blockchain solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "FinTech Development",
                description:
                  "Secure payment systems, digital banking, and financial platforms built with compliance in mind.",
                features: ["Payment Processing", "Digital Wallets", "Banking APIs", "Compliance Tools"],
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Web3 & Blockchain",
                description:
                  "Decentralized applications, smart contracts, and blockchain integrations for the future of finance.",
                features: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "DAO Development"],
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Full-Stack Web Development",
                description: "Modern web applications using Next.js, Remix, Spring Boot, and FastAPI technologies.",
                features: ["Next.js & Remix Apps", "Spring Boot APIs", "FastAPI Backends", "Mobile APIs"],
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "UI/UX Design",
                description: "User-centered design that builds trust and simplifies complex interactions.",
                features: ["User Research", "Prototyping", "Accessibility", "Mobile-First Design"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-purple-400 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/80">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Lithium Labs?</h2>
              <p className="text-xl text-white/70 mb-8">
                We don't just build products – we craft experiences that bridge the gap between complex financial
                technology and user-friendly interfaces.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Security First",
                    description: "Every line of code is written with security and compliance at its core.",
                  },
                  {
                    title: "Proven Track Record",
                    description: "Successfully launched 50+ FinTech and Web3 products with zero security incidents.",
                  },
                  {
                    title: "End-to-End Service",
                    description: "From initial concept to post-launch support, we're with you every step of the way.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-purple-400 mb-2">5</div>
                  <div className="text-white/70">Years of Excellence</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-white/70">On-Time Delivery</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-white/70">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recent Projects</h2>
            <p className="text-xl text-white/70">Transforming ideas into successful digital products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DeFi Trading Platform",
                category: "Web3",
                description: "A decentralized trading platform with advanced analytics and portfolio management.",
                tags: ["React", "Web3.js", "Solidity"],
              },
              {
                title: "Digital Banking App",
                category: "FinTech",
                description: "Mobile-first banking solution with AI-powered financial insights.",
                tags: ["React Native", "Node.js", "AI/ML"],
              },
              {
                title: "NFT Marketplace",
                category: "Web3",
                description: "Full-featured NFT marketplace with creator tools and royalty management.",
                tags: ["Next.js", "IPFS", "Smart Contracts"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-t-lg"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/70">Let's discuss how we can bring your FinTech or Web3 idea to life</p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white/70 mb-1">Email</div>
                    <div className="text-white">hello@lithiumlabs.com</div>
                  </div>
                  <div>
                    <div className="text-white/70 mb-1">Phone</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                  <div>
                    <div className="text-white/70 mb-1">Response Time</div>
                    <div className="text-white">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
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
              <p>© 2024 Lithium Labs. All rights reserved.</p>
              <p className="mt-1">Transforming ideas into trusted digital products.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
