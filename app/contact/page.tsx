import { ArrowRight, Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Shield, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-foundation relative overflow-hidden text-white">
      {/* Background Image with Institutional Presence ("The Feeling") */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.7] mix-blend-overlay scale-110"
        style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-brand-foundation/5 via-brand-foundation/40 to-brand-foundation" />

      {/* Navigation */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-56 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-14 md:p-20 rounded-[5rem] backdrop-blur-3xl bg-white/[0.08] border border-white/10 mb-12 shadow-4xl animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.8]">
              Let's Build <span className="text-brand-primary bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Together</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/40 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to transform your institutional vision into a benchmark digital product? Our strategists are standing by.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-12">
              <div className="p-14 rounded-[4rem] backdrop-blur-3xl bg-white/[0.06] border border-white/10 shadow-2xl">
                <h2 className="text-4xl font-black text-white mb-14 tracking-tighter uppercase">Scout Lithium</h2>

                <div className="space-y-12">
                  <div className="flex items-start space-x-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] backdrop-blur-3xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Mail className="h-8 w-8 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Strategic Inquiries</div>
                      <div className="text-white font-black text-xl uppercase tracking-tighter">partnerships@lithiumlabs.com</div>
                      <div className="text-white/40 text-sm font-light mt-1 tracking-wide">clintonfreelance380@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] backdrop-blur-3xl bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <Phone className="h-8 w-8 text-brand-secondary" />
                    </div>
                    <div>
                      <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Institutional Support</div>
                      <div className="text-white font-black text-xl tracking-widest uppercase">+254 114597682</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] backdrop-blur-3xl bg-brand-tertiary/10 border border-brand-tertiary/20 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <MapPin className="h-8 w-8 text-brand-tertiary" />
                    </div>
                    <div>
                      <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Physical Nodes</div>
                      <div className="text-white font-black text-xl uppercase tracking-tighter">AppleWood Adams</div>
                      <div className="text-white/40 text-sm font-light mt-1 tracking-wide">Nairobi, Kenya</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-white/5">
                  <h3 className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Social Ecosystem</h3>
                  <div className="flex gap-6">
                    {[Github, Linkedin, Twitter].map((Icon, idx) => (
                      <Button
                        key={idx}
                        size="sm"
                        variant="outline"
                        className="w-16 h-16 rounded-[1.25rem] border-white/10 text-white hover:bg-brand-primary hover:border-brand-primary/0 bg-transparent p-0 transition-all duration-500"
                      >
                        <Icon className="h-7 w-7" />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="backdrop-blur-3xl bg-brand-primary/10 border-brand-primary/20 rounded-[4rem] overflow-hidden shadow-2xl">
                <CardContent className="p-14 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/30 blur-3xl -mr-20 -mt-20" />
                  <h3 className="text-2xl font-black text-white mb-8 tracking-tighter uppercase relative z-10">Uptime Assurance</h3>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center text-sm text-white/40 font-light">
                      <Clock className="h-5 w-5 mr-5 text-brand-primary" />
                      <span className="uppercase tracking-[0.1em]">Inquiry: <span className="text-white font-black ml-2 underline decoration-brand-primary/50">24h Response</span></span>
                    </div>
                    <div className="flex items-center text-sm text-white/40 font-light">
                      <Shield className="h-5 w-5 mr-5 text-brand-secondary" />
                      <span className="uppercase tracking-[0.1em]">Emergency: <span className="text-white font-black ml-2 underline decoration-brand-secondary/50">2h Triage</span></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-3xl bg-white/[0.05] border border-white/10 rounded-[5rem] shadow-5xl relative overflow-hidden h-full">
                <CardContent className="p-16 md:p-24">
                  <h2 className="text-5xl font-black text-white mb-12 tracking-tighter uppercase">Initiate Your Build</h2>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-8 rounded-3xl backdrop-blur-3xl bg-white/[0.05] border border-white/10 text-white placeholder-white/10 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-light text-lg"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-8 rounded-3xl backdrop-blur-3xl bg-white/[0.05] border border-white/10 text-white placeholder-white/10 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-light text-lg"
                        placeholder="Doe"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Institutional Email</label>
                      <input
                        type="email"
                        required
                        className="w-full p-8 rounded-3xl backdrop-blur-3xl bg-white/[0.05] border border-white/10 text-white placeholder-white/10 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-light text-lg"
                        placeholder="scout@enterprise.com"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Company Name</label>
                      <input
                        type="text"
                        className="w-full p-8 rounded-3xl backdrop-blur-3xl bg-white/[0.05] border border-white/10 text-white placeholder-white/10 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-light text-lg"
                        placeholder="Entity Group"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Build Domain</label>
                      <select
                        required
                        className="w-full p-8 rounded-3xl backdrop-blur-3xl bg-white/[0.05] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all appearance-none font-light text-lg"
                      >
                        <option value="" className="bg-brand-foundation">Select your target domain</option>
                        <option value="fintech" className="bg-brand-foundation tracking-widest uppercase text-xs">FinTech Infrastructure</option>
                        <option value="web3" className="bg-brand-foundation tracking-widest uppercase text-xs">Web3 & Decentralization</option>
                        <option value="enterprise" className="bg-brand-foundation tracking-widest uppercase text-xs">Institutional SaaS</option>
                        <option value="consulting" className="bg-brand-foundation tracking-widest uppercase text-xs">Strategic Advisory</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] ml-2">Strategic Vision</label>
                      <textarea
                        rows={6}
                        required
                        placeholder="Outline your vision, technical depth, and measured outcomes..."
                        className="w-full p-10 rounded-[3rem] backdrop-blur-3xl bg-white/[0.05] border border-white/10 text-white placeholder-white/10 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none font-light leading-relaxed text-xl"
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 flex items-center space-x-6 ml-4 mt-4">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-8 h-8 rounded-xl border-white/10 bg-white/5 text-brand-primary focus:ring-brand-primary"
                      />
                      <label htmlFor="terms" className="text-white/20 text-xs font-bold leading-relaxed uppercase tracking-tighter">
                        I authorize the secure triage of this brief under the <a href="#" className="text-brand-primary hover:underline">Compliance Framework</a>.
                      </label>
                    </div>

                    <div className="md:col-span-2 mt-8">
                      <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-12 rounded-[2.5rem] text-4xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-4xl shadow-brand-primary/40 uppercase tracking-tighter">
                        Initiate Build <ArrowRight className="ml-6 h-12 w-12" />
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
      <footer className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10 bg-brand-foundation/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="text-6xl font-black text-white tracking-tighter uppercase transition-colors hover:text-brand-primary cursor-default">
              Lithium<span className="text-brand-primary">Labs</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.6em] mb-4">© {new Date().getFullYear()} Lithium Labs Consortium</p>
              <p className="mt-4 text-white/10 text-[9px] font-black uppercase tracking-widest leading-loose">Automating the Future of Financial Freedom through Verified Infrastructure.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
