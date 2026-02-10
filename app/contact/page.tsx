import { ArrowRight, Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Shield, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden text-white font-sans">
      {/* Background Image with Natural Tone */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.45] scale-105"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/20 via-brand-foundation/60 to-brand-foundation" />

      {/* Navigation */}
      <Navigation />


      {/* Hero Section - Balanced Typography */}
      <section className="relative z-10 pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-12 md:p-16 rounded-[4rem] backdrop-blur-3xl bg-white/[0.06] border border-white/10 mb-12 shadow-4xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              Initiate <span className="text-brand-primary">Strategic</span> Build
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to transform your vision into a benchmark digital product? Our strategists are standing by for institutional-grade triage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-10">
              <div className="p-12 rounded-[3.5rem] backdrop-blur-3xl bg-white/[0.05] border border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.03)] hover:shadow-[0_0_50px_rgba(37,99,235,0.08)] transition-all">
                <h2 className="text-3xl font-black text-white mb-12 tracking-tighter uppercase">Global Nodes</h2>

                <div className="space-y-12">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 rounded-2xl backdrop-blur-3xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Inquiries</div>
                      <div className="text-white font-black text-lg uppercase tracking-tighter">partnerships@lithiumlabs.com</div>
                      <div className="text-white/60 text-xs font-light mt-1 tracking-wide">clintonfreelance380@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 rounded-2xl backdrop-blur-3xl bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Phone className="h-6 w-6 text-brand-secondary" />
                    </div>
                    <div>
                      <div className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Operations</div>
                      <div className="text-white font-black text-lg tracking-widest uppercase">+254 114597682</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 rounded-2xl backdrop-blur-3xl bg-brand-tertiary/10 border border-brand-tertiary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <MapPin className="h-6 w-6 text-brand-tertiary" />
                    </div>
                    <div>
                      <div className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Hub</div>
                      <div className="text-white font-black text-lg uppercase tracking-tighter">AppleWood Adams</div>
                      <div className="text-white/60 text-xs font-light mt-1 tracking-wide uppercase">Nairobi, Kenya</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-white/5">
                  <div className="flex gap-4">
                    {[Github, Linkedin, Twitter].map((Icon, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="w-12 h-12 rounded-xl border-white/10 text-white/50 hover:text-white hover:bg-white/5 bg-transparent p-0 transition-all"
                      >
                        <Icon className="h-5 w-5" />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="backdrop-blur-3xl bg-brand-primary/5 border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.03)] group transition-all">
                <CardContent className="p-12 relative">
                  <h3 className="text-xl font-black text-white mb-6 tracking-tighter uppercase relative z-10">Uptime Assurance</h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center text-xs text-white/50 font-black uppercase tracking-[0.1em]">
                      <Clock className="h-4 w-4 mr-4 text-brand-primary" />
                      Inquiry: <span className="text-white ml-2">24h Response</span>
                    </div>
                    <div className="flex items-center text-xs text-white/50 font-black uppercase tracking-[0.1em]">
                      <Shield className="h-4 w-4 mr-4 text-brand-secondary" />
                      Security: <span className="text-white ml-2">2h Triage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-3xl bg-white/[0.04] border border-white/10 rounded-[4rem] shadow-5xl relative overflow-hidden h-full shadow-[0_0_50px_rgba(255,255,255,0.02)]">
                <CardContent className="p-12 md:p-16">
                  <h2 className="text-4xl font-black text-white mb-10 tracking-tighter uppercase">Technical Brief</h2>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] ml-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-6 rounded-2xl backdrop-blur-3xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all font-light text-lg"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] ml-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-6 rounded-2xl backdrop-blur-3xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all font-light text-lg"
                        placeholder="Doe"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] ml-2">Institutional Email</label>
                      <input
                        type="email"
                        required
                        className="w-full p-6 rounded-2xl backdrop-blur-3xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all font-light text-lg"
                        placeholder="scout@enterprise.com"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] ml-2">Build Domain</label>
                      <select
                        required
                        className="w-full p-6 rounded-2xl backdrop-blur-3xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all appearance-none font-light text-lg"
                      >
                        <option value="" className="bg-brand-foundation">Select Domain</option>
                         <option value="web" className="bg-brand-foundation">Web Design</option>
                          <option value="mobile" className="bg-brand-foundation">Mobile APP Development</option>
                           <option value="api" className="bg-brand-foundation">API Development</option>
                        <option value="fintech" className="bg-brand-foundation">FinTech Infrastructure</option>
                         <option value="payments" className="bg-brand-foundation">Payment Integration</option>
                        <option value="web3" className="bg-brand-foundation">Web3 & Assets</option>
                        <option value="enterprise" className="bg-brand-foundation">Institutional SaaS</option>
                         <option value="ai" className="bg-brand-foundation">AI & Machine Learning Integration</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] ml-2">Strategic Vision</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Outline technical depth and target outcomes..."
                        className="w-full p-8 rounded-[2.5rem] backdrop-blur-3xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 transition-all resize-none font-light leading-relaxed text-lg"
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 mt-6">
                      <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-10 rounded-[2rem] text-2xl font-black transition-all hover:scale-[1.01] active:scale-95 shadow-2xl shadow-brand-primary/30 uppercase tracking-widest">
                        Initiate Build <ArrowRight className="ml-4 h-8 w-8" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-4xl font-black text-white tracking-tighter uppercase">
            Lithium<span className="text-brand-primary">Labs</span>
          </div>
          <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} Lithium Labs Consortium</div>
        </div>
      </footer>
    </div>
  )
}
