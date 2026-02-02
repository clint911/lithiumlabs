import { ArrowRight, Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Transform Your <span className="text-purple-400">Idea</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to bridge the gap between your innovative concept and a market-ready digital product? Our team is
              here to guide you through every step of the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Email</div>
                    <div className="text-white/70">partnerships@lithiumlabs.com</div>
                    <div className="text-white/70">clintonfreelance380@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Phone</div>
                    <div className="text-white/70">+1 (555) 123-4567</div>
                    <div className="text-white/70">+254 114597682</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Office</div>
                    <div className="text-white/70">AppleWood Adams</div>
                    <div className="text-white/70">Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Response Time</div>
                    <div className="text-white/70">Within 24 hours</div>
                    <div className="text-white/70">Emergency: Within 2 hours</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
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

              <Card className="backdrop-blur-xl bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Quick Facts</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Average Response:</span>
                      <span className="text-white">&lt; 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Project Timeline:</span>
                      <span className="text-white">3-12 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Success Rate:</span>
                      <span className="text-white">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Support:</span>
                      <span className="text-white">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-xl bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Start Your Project</h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Company</label>
                        <input
                          type="text"
                          className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Project Type *</label>
                        <select
                          required
                          className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                          <option value="">Select project type</option>
                          <option value="fintech">FinTech Development</option>
                          <option value="web3">Web Development</option>
                          <option value="mobile">Mobile App Development</option>
                          <option value="web3">Web3 & Blockchain</option>
                          <option value="consulting">Strategic Consulting</option>
                          <option value="audit">Security Audit</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Budget Range</label>
                      <select className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400">
                        <option value="">Select budget range</option>
                        <option value="1k-2k">$1K - $2K</option>
                        <option value="2k-5k">$2K - $5K</option>
                        <option value="5k-9k">$5K - $9K</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k+">$500K+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Project Description *</label>
                      <textarea
                        rows={6}
                        required
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="w-full p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-1 w-4 h-4 text-purple-600 bg-white/10 border-white/20 rounded focus:ring-purple-400"
                      />
                      <label htmlFor="terms" className="text-white/70 text-sm">
                        I agree to the{" "}
                        <a href="#" className="text-purple-300 hover:text-purple-200 underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-purple-300 hover:text-purple-200 underline">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg">
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70">Common questions about our process and services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Our projects typically range from 3-12 months depending on complexity. We use an agile methodology with iterative delivery, so you'll see progress every 2-3 weeks.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes, we offer comprehensive post-launch optimization including 24/7 support, security monitoring, performance optimization, and feature enhancements.",
              },
              {
                question: "How do you ensure regulatory compliance?",
                answer:
                  "We have deep expertise in financial regulations across multiple jurisdictions. Our compliance-first approach ensures all solutions meet stringent regulatory requirements from day one.",
              },
              {
                question: "What makes your approach different?",
                answer:
                  "Our unified 'Idea to Live Product' approach consolidates strategic advisory, development, and optimization under one roof, reducing overhead and accelerating time to market.",
              },
              {
                question: "Do you work with startups or only enterprises?",
                answer:
                  "We work with both startups and enterprises. Our scalable approach allows us to adapt our services to different company sizes and budget requirements.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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
              <p className="mt-1">Your trusted partner for Fintech Integration and software solutions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
