export default function TrustBand() {
  const countries = [
    { flag: '🇴🇲', name: 'سلطنة عُمان' },
    { flag: '🇦🇪', name: 'الإمارات العربية' },
    { flag: '🇸🇦', name: 'المملكة العربية السعودية' },
    { flag: '🇰🇼', name: 'الكويت' },
    { flag: '🇧🇭', name: 'البحرين' },
    { flag: '🇶🇦', name: 'قطر' },
  ];

  const guarantees = [
    {
      icon: '🔒',
      title: 'دفع آمن 100%',
      desc: 'بطاقة بنكية، تحويل، أو نقداً عند الاستلام',
    },
    {
      icon: '📦',
      title: 'تغليف فاخر',
      desc: 'كل طلب يُعبَّأ بعناية ويُرسل بحزمة هدايا أنيقة',
    },
    {
      icon: '✅',
      title: 'أصالة مضمونة',
      desc: 'جميع منتجاتنا أصلية 100% ومرخصة',
    },
    {
      icon: '📞',
      title: 'دعم على مدار الساعة',
      desc: 'فريقنا جاهز للرد عبر واتساب والهاتف',
    },
    {
      icon: '🔄',
      title: 'إرجاع مجاني',
      desc: 'ضمان الاسترجاع خلال 14 يوماً بدون شروط',
    },
    {
      icon: '⚡',
      title: 'توصيل سريع',
      desc: 'خلال 2-5 أيام عمل لجميع دول الخليج',
    },
  ];

  return (
    <section className="py-20 bg-[#0C1B33] relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#C9A84C]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Countries we serve */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] mb-3">✦ نوصل إليك في ✦</p>
          <h2 className="amiri-font text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-6">
            نخدم جميع دول <span className="gold-text">الخليج العربي</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mb-10" />

          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 bg-[#080F1E]/60 border border-[#C9A84C]/20 rounded-xl px-5 py-3 hover:border-[#C9A84C]/60 transition-all duration-300 hover:bg-[#C9A84C]/5 group"
              >
                <span className="text-2xl">{c.flag}</span>
                <span className="text-[#F5F0E8]/80 text-sm font-medium group-hover:text-[#C9A84C] transition-colors">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="flex items-start gap-4 bg-[#080F1E]/60 border border-[#C9A84C]/15 rounded-2xl p-5 hover:border-[#C9A84C]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                {g.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#F5F0E8] mb-1">{g.title}</h3>
                <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tajir Platform Badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#080F1E] border border-[#C9A84C]/30 rounded-2xl px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center text-xl">🏪</div>
              <div className="text-right sm:text-right">
                <p className="text-[#F5F0E8] font-bold">متجرنا الرسمي على منصة تاجر</p>
                <p className="text-[#F5F0E8]/50 text-sm">بوابة دفع مرخصة ومؤمنة بالكامل</p>
              </div>
            </div>
            <div className="h-px sm:h-10 w-full sm:w-px bg-[#C9A84C]/20" />
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-[#C9A84C] font-bold text-lg">VISA / MC</p>
                <p className="text-[#F5F0E8]/40 text-xs">بطاقات بنكية</p>
              </div>
              <div className="text-center">
                <p className="text-[#C9A84C] font-bold text-lg">مدى</p>
                <p className="text-[#F5F0E8]/40 text-xs">البطاقة المحلية</p>
              </div>
              <div className="text-center">
                <p className="text-[#C9A84C] font-bold text-lg">💵 COD</p>
                <p className="text-[#F5F0E8]/40 text-xs">عند الاستلام</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
