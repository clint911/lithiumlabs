import { ArrowRight, Shield, Zap, Users, CheckCircle, Star, Github, Linkedin, Twitter, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/50 via-brand-foundation to-brand-foundation" />

      {/* Navigation */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-8 md:p-12 rounded-[2.5rem] backdrop-blur-2xl bg-white/5 border border-white/10 mb-8 shadow-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                From <span className="text-brand-primary">Idea</span> to
                <br />
                <span className="text-brand-secondary">Live Product</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                We transform innovative FinTech and Web3 concepts into secure, compliant, and scalable digital products
                that users trust and love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-6 rounded-xl text-lg transition-all hover:scale-105 active:scale-95">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent px-8 py-6 rounded-xl text-lg transition-all"
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
                className="text-center p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Specialized in cutting-edge financial technology and blockchain solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "FinTech Development",
                color: "text-brand-primary",
                description:
                  "Secure payment systems, digital banking, and financial platforms built with compliance in mind.",
                features: ["Payment Processing", "Digital Wallets", "Banking APIs", "Compliance Tools"],
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Web3 & Blockchain",
                color: "text-brand-secondary",
                description:
                  "Decentralized applications, smart contracts, and blockchain integrations for the future of finance.",
                features: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "DAO Development"],
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Full-Stack Web Development",
                color: "text-brand-primary",
                description: "Modern web applications using Next.js, Remix, Spring Boot, and FastAPI technologies.",
                features: ["Next.js & Remix Apps", "Spring Boot APIs", "FastAPI Backends", "Mobile APIs"],
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "UI/UX Design",
                color: "text-brand-tertiary",
                description: "User-centered design that builds trust and simplifies complex interactions.",
                features: ["User Research", "Prototyping", "Accessibility", "Mobile-First Design"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-2xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group rounded-[2rem]"
              >
                <CardContent className="p-10">
                  <div className={`${service.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/80 group-hover:text-white transition-colors">
                        <CheckCircle className={`h-4 w-4 ${service.color} mr-3`} />
                        <span className="text-sm font-medium">{feature}</span>
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
      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Why Choose Lithium Labs?</h2>
              <p className="text-xl text-white/60 mb-10 leading-relaxed">
                We don't just build products – we craft experiences that bridge the gap between complex financial
                technology and user-friendly interfaces.
              </p>
              <div className="space-y-8">
                {[
                  {
                    title: "Security First",
                    color: "bg-brand-primary",
                    description: "Every line of code is written with security and compliance at its core.",
                  },
                  {
                    title: "Proven Track Record",
                    color: "bg-brand-secondary",
                    description: "Successfully launched 50+ FinTech and Web3 products with zero security incidents.",
                  },
                  {
                    title: "End-to-End Service",
                    color: "bg-brand-tertiary",
                    description: "From initial concept to post-launch support, we're with you every step of the way.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className={`w-3 h-3 ${item.color} rounded-full mt-2.5 shadow-[0_0_10px_rgba(37,99,235,0.5)]`} />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h4>
                      <p className="text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-12 rounded-[3rem] backdrop-blur-3xl bg-white/5 border border-white/10 shadow-3xl">
                <div className="text-center mb-10">
                  <div className="text-8xl font-black text-brand-primary mb-2 opacity-80">5</div>
                  <div className="text-white/60 font-medium tracking-widest uppercase text-sm">Years of Excellence</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-xs text-white/50 mt-1 uppercase tracking-tighter">On-Time</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-xs text-white/50 mt-1 uppercase tracking-tighter">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Recent Projects</h2>
            <p className="text-xl text-white/60">Transforming ideas into successful digital products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "DeFi Trading Platform",
                category: "Web3",
                color: "brand-secondary",
                description: "A decentralized trading platform with advanced analytics and portfolio management.",
                tags: ["React", "Web3.js", "Solidity"],
              },
              {
                title: "Digital Banking App",
                category: "FinTech",
                color: "brand-primary",
                description: "Mobile-first banking solution with AI-powered financial insights.",
                tags: ["React Native", "Node.js", "AI/ML"],
              },
              {
                title: "NFT Marketplace",
                category: "Web3",
                color: "brand-secondary",
                description: "Full-featured NFT marketplace with creator tools and royalty management.",
                tags: ["Next.js", "IPFS", "Smart Contracts"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-2xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden rounded-[2.5rem] group"
              >
                <CardContent className="p-0">
                  <div className={`h-56 bg-gradient-to-br from-${project.color}/20 to-brand-foundation relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation to-transparent opacity-60" />
                  </div>
                  <div className="p-10 relative">
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="secondary" className={`bg-${project.color}/20 text-${project.color} border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider`}>
                        {project.category}
                      </Badge>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-brand-tertiary text-brand-tertiary opacity-80" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-white/60 mb-8 leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1.5 text-xs bg-white/5 text-white/50 rounded-lg hover:bg-white/10 transition-colors">
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
      <section id="contact" className="relative z-10 py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Start?</h2>
            <p className="text-xl text-white/60 font-light">Let's discuss how we can bring your FinTech or Web3 idea to life</p>
          </div>

          <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[4rem] p-10 md:p-20 shadow-4xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 blur-[100px] -ml-32 -mb-32" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <div className="text-white/40 mb-1 text-sm font-medium tracking-widest uppercase">Email</div>
                    <div className="text-2xl text-white group-hover:text-brand-primary transition-colors">hello@lithiumlabs.com</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-white/40 mb-1 text-sm font-medium tracking-widest uppercase">Phone</div>
                    <div className="text-2xl text-white group-hover:text-brand-primary transition-colors">+1 (555) 123-4567</div>
                  </div>
                  <div>
                    <div className="text-white/40 mb-1 text-sm font-medium tracking-widest uppercase">Response Time</div>
                    <div className="text-xl text-white/80 italic font-light">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex space-x-5 mt-12">
                  {[Github, Linkedin, Twitter].map((Icon, idx) => (
                    <Button
                      key={idx}
                      size="sm"
                      variant="outline"
                      className="w-12 h-12 rounded-2xl border-white/10 text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white/[0.08] transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white/[0.08] transition-all"
                  />
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white/[0.08] transition-all resize-none"
                  ></textarea>
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-8 rounded-2xl text-xl font-bold shadow-xl shadow-brand-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Send Message <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </form>
              </div>
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
