import { ArrowRight, Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay scale-110 blur-sm"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/80 via-brand-foundation to-brand-foundation" />

      {/* Navigation */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-10 md:p-14 rounded-[3rem] backdrop-blur-3xl bg-white/5 border border-white/10 mb-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Let's Build Your <span className="text-brand-primary">Next Project</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to bridge the gap between your innovative concept and a market-ready digital product? Our team is here to guide you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-10 rounded-[2.5rem] backdrop-blur-2xl bg-white/5 border border-white/10 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Get in Touch</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-5 group">
                    <div className="w-14 h-14 rounded-2xl backdrop-blur-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">Email</div>
                      <div className="text-white font-medium">partnerships@lithiumlabs.com</div>
                      <div className="text-white/60 text-sm">clintonfreelance380@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="w-14 h-14 rounded-2xl backdrop-blur-2xl bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Phone className="h-6 w-6 text-brand-secondary" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">Phone</div>
                      <div className="text-white font-medium">+254 114597682</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="w-14 h-14 rounded-2xl backdrop-blur-2xl bg-brand-tertiary/10 border border-brand-tertiary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <MapPin className="h-6 w-6 text-brand-tertiary" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">Office</div>
                      <div className="text-white font-medium">AppleWood Adams</div>
                      <div className="text-white/60 text-sm">Nairobi, Kenya</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-white/40 text-xs font-black uppercase tracking-widest mb-6">Social Links</h3>
                  <div className="flex gap-4">
                    {[Github, Linkedin, Twitter].map((Icon, idx) => (
                      <Button
                        key={idx}
                        size="sm"
                        variant="outline"
                        className="w-12 h-12 rounded-xl border-white/10 text-white hover:bg-white/5 bg-transparent p-0 transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="backdrop-blur-2xl bg-brand-primary/5 border-brand-primary/10 rounded-[2.5rem]">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Quick Response Commitment</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-white/60">
                      <Clock className="h-4 w-4 mr-3 text-brand-primary" />
                      <span>General Inquiry: Within 24 hours</span>
                    </div>
                    <div className="flex items-center text-sm text-white/60">
                      <Shield className="h-4 w-4 mr-3 text-brand-secondary" />
                      <span>Security Incident: Within 2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[3rem] shadow-4xl relative overflow-hidden h-full">
                <CardContent className="p-10 md:p-14">
                  <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">Tell Us About Your Project</h2>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-5 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-light"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-5 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-light"
                        placeholder="Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full p-5 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-light"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">Company (Optional)</label>
                      <input
                        type="text"
                        className="w-full p-5 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-light"
                        placeholder="Your Enterprise"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">Project Type</label>
                      <select
                        required
                        className="w-full p-5 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all appearance-none font-light"
                      >
                        <option value="" className="bg-brand-foundation">Select your project category</option>
                        <option value="fintech" className="bg-brand-foundation">FinTech Development</option>
                        <option value="web3" className="bg-brand-foundation">Web3 & Blockchain</option>
                        <option value="enterprise" className="bg-brand-foundation">Enterprise SaaS</option>
                        <option value="consulting" className="bg-brand-foundation">Strategic Consulting</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">Project Description</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Describe your vision, technical requirements, and target outcomes..."
                        className="w-full p-6 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none font-light leading-relaxed"
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 flex items-center space-x-3 ml-1 mb-4">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-5 h-5 rounded-lg border-white/20 bg-white/5 text-brand-primary focus:ring-brand-primary"
                      />
                      <label htmlFor="terms" className="text-white/40 text-sm font-medium">
                        I agree to the <a href="#" className="text-brand-primary hover:underline">Terms of Service</a> and <a href="#" className="text-brand-secondary hover:underline">Privacy Policy</a>
                      </label>
                    </div>

                    <div className="md:col-span-2">
                      <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-8 rounded-[1.5rem] text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl">
                        Send Project Brief <ArrowRight className="ml-3 h-6 w-6" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">Common questions about our partnership process and project delivery.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Institutional-grade builds typically range from 3-12 months. We operate in 2-week agile sprints to ensure constant visibility and iterative feedback.",
                color: "brand-primary"
              },
              {
                question: "Do you provide post-launch optimization?",
                answer: "Excellence doesn't stop at launch. We provide 24/7 security monitoring, performance scaling, and feature iteration as a long-term technology partner.",
                color: "brand-secondary"
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="backdrop-blur-2xl bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 rounded-[2rem] group"
              >
                <CardContent className="p-8">
                  <h3 className={`text-xl font-bold text-white mb-4 group-hover:text-${faq.color} transition-colors`}>{faq.question}</h3>
                  <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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
