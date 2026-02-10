export default function Footer() {
  return (
    <footer className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-4xl font-black text-white tracking-tighter uppercase">
          Lithium<span className="text-brand-primary">Labs</span>
        </div>
        <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
          © {new Date().getFullYear()} Lithium Labs Consortium
        </div>
      </div>
    </footer>
  );
}
