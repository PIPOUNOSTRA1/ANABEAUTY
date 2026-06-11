export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060C19] border-t border-[#C9A84C]/20 relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern opacity-10" />

      {/* Newsletter band */}
      <div className="relative z-10 bg-[#C9A84C]/8 border-b border-[#C9A84C]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="amiri-font text-2xl font-bold text-[#F5F0E8] mb-1">
                اشترك في قائمتنا البريدية
              </h3>
              <p className="text-[#F5F0E8]/60 text-sm">احصل على أفضل العروض قبل الجميع</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 sm:w-64 bg-[#0C1B33] border border-[#C9A84C]/25 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#C9A84C] text-sm"
                dir="ltr"
              />
              <button className="btn-gold px-5 py-3 rounded-xl font-bold text-sm whitespace-nowrap">
                اشترك ✓
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-[#080F1E] text-2xl font-black shadow-lg">
                ن
              </div>
              <div>
                <p className="gold-text font-black text-2xl amiri-font">نخبة الخليج</p>
                <p className="text-[#C9A84C]/50 text-xs tracking-widest">NUKHBAT AL KHALEEJ</p>
              </div>
            </div>
            <p className="text-[#F5F0E8]/50 text-sm leading-relaxed mb-6 max-w-xs">
              متجر فاخر متخصص في عطور ومنتجات العناية الخليجية الأصيلة. نلتزم بتقديم أجود المنتجات وأرقى الخدمات لكل عائلة خليجية.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'إنستاقرام', icon: '📸', href: '#' },
                { label: 'تيك توك', icon: '🎵', href: '#' },
                { label: 'واتساب', icon: '💬', href: '#' },
                { label: 'تويتر X', icon: '𝕏', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-xl flex items-center justify-center hover:bg-[#C9A84C]/25 hover:border-[#C9A84C]/50 transition-all duration-300 text-lg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#C9A84C] font-bold mb-4 text-sm tracking-wide">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { label: 'الرئيسية', href: '#home' },
                { label: 'منتجاتنا', href: '#products' },
                { label: 'من نحن', href: '#about' },
                { label: 'الشحن والتوصيل', href: '#shipping' },
                { label: 'تواصل معنا', href: '#contact' },
                { label: 'المتجر على تاجر', href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#F5F0E8]/50 hover:text-[#C9A84C] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C9A84C]/30 rounded-full group-hover:bg-[#C9A84C] transition-colors"></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-[#C9A84C] font-bold mb-4 text-sm tracking-wide">سياسات المتجر</h4>
            <ul className="space-y-3">
              {[
                'سياسة الخصوصية',
                'شروط الاستخدام',
                'سياسة الإرجاع والاستبدال',
                'سياسة الشحن',
                'الأسئلة الشائعة',
              ].map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="text-[#F5F0E8]/50 hover:text-[#C9A84C] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C9A84C]/30 rounded-full group-hover:bg-[#C9A84C] transition-colors"></span>
                    {p}
                  </a>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#F5F0E8]/40">
                <span className="text-green-400">🔒</span>
                <span>متجر مرخص وآمن</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#F5F0E8]/40">
                <span className="text-[#C9A84C]">✓</span>
                <span>منتجات أصلية مضمونة 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F0E8]/30 text-xs text-center sm:text-right">
            © {currentYear} نخبة الخليج. جميع الحقوق محفوظة. مدعوم بمنصة تاجر.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#F5F0E8]/30 text-xs">وسائل الدفع:</span>
            <div className="flex gap-2">
              {['VISA', 'MC', 'مدى', 'COD'].map((p) => (
                <span key={p} className="bg-[#0C1B33] border border-[#C9A84C]/20 text-[#F5F0E8]/40 text-xs px-2 py-1 rounded">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
