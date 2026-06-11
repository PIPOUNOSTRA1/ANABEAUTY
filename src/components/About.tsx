export default function About() {
  const values = [
    {
      icon: '🌿',
      title: 'مكونات طبيعية',
      desc: 'نختار أجود المكونات الطبيعية من أنحاء العالم العربي والإسلامي',
    },
    {
      icon: '🏆',
      title: 'جودة معيارية',
      desc: 'منتجاتنا تجتاز أعلى معايير الجودة والسلامة المعتمدة خليجياً',
    },
    {
      icon: '❤️',
      title: 'بتوقيع خليجي',
      desc: 'هويتنا مستوحاة من تراث الخليج العريق وثقافته الأصيلة',
    },
    {
      icon: '🤝',
      title: 'خدمة شخصية',
      desc: 'كل عميل يحظى باهتمام شخصي من فريق متخصص يتكلم العربية',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #080F1E 0%, #0C1B33 50%, #080F1E 100%)' }} />
      <div className="absolute inset-0 arabic-pattern opacity-20" />

      {/* Gold blur orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#C9A84C]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-[#C9A84C]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl shadow-[#C9A84C]/10">
                <img
                  src="/images/about-bg.jpg"
                  alt="هوية نخبة الخليج"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1E]/60 via-transparent to-transparent" />
              </div>

              {/* Overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-[#0C1B33] border border-[#C9A84C]/30 rounded-2xl p-5 shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center text-xl">🌙</div>
                  <div>
                    <p className="text-[#F5F0E8] font-bold text-sm">منذ 2020</p>
                    <p className="text-[#C9A84C]/70 text-xs">نخدم الخليج بفخر</p>
                  </div>
                </div>
                <div className="divider-gold mb-2" />
                <p className="text-[#F5F0E8]/60 text-xs leading-relaxed">
                  رحلة بدأت بحلم خليجي — نقديم أفضل منتجات العطور والعناية لكل بيت خليجي
                </p>
              </div>

              {/* Badge top left */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#C9A84C]/10 border border-[#C9A84C]/40 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#C9A84C] font-black text-xl leading-none amiri-font">٥</p>
                  <p className="text-[#C9A84C]/70 text-xs">سنوات</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] mb-3">✦ قصتنا ✦</p>
            <h2 className="amiri-font text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
              نحن <span className="gold-text">نخبة الخليج</span>
              <br />
              وهذه قصتنا
            </h2>
            <div className="divider-gold w-24 mb-6" />

            <p className="text-[#F5F0E8]/70 text-lg leading-relaxed mb-6">
              وُلدت <strong className="text-[#C9A84C]">نخبة الخليج</strong> من شغف حقيقي بتراث الخليج العربي وثقافته الراقية.
              آمنّا أن كل إنسان خليجي يستحق منتجات فاخرة تعكس هويته وتُعبّر عن ذوقه الرفيع.
            </p>
            <p className="text-[#F5F0E8]/70 text-lg leading-relaxed mb-8">
              نختار كل منتج بعناية فائقة، ونضمن أصالته وجودته قبل أن يصل إلى يديك.
              من مسقط إلى دبي، ومن الرياض إلى الكويت — نحن معك في كل خطوة.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#080F1E]/60 border border-[#C9A84C]/15 rounded-xl p-4 hover:border-[#C9A84C]/40 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h4 className="text-[#C9A84C] font-bold text-sm mb-1">{v.title}</h4>
                  <p className="text-[#F5F0E8]/50 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#products"
              className="inline-flex items-center gap-2 btn-gold px-8 py-3.5 rounded-full font-bold shadow-lg shadow-[#C9A84C]/30"
            >
              <span>اكتشف منتجاتنا</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
