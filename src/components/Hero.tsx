import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const features = [
    { icon: '🛡️', text: 'منتجات أصلية 100%' },
    { icon: '🚚', text: 'شحن لكل الخليج' },
    { icon: '💳', text: 'دفع عند الاستلام' },
    { icon: '↩️', text: 'إرجاع مجاني 14 يوم' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #080F1E 0%, #0C1B33 50%, #080F1E 100%)',
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Arabic pattern overlay */}
      <div className="absolute inset-0 arabic-pattern opacity-40" />

      {/* Gold orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#C9A84C]/8 rounded-full blur-3xl" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#C9A84C]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse"></span>
              <span className="text-[#C9A84C] text-sm font-medium">الوجهة الأولى للفخامة الخليجية</span>
            </div>

            {/* Headline */}
            <h1 className="amiri-font text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-[#F5F0E8]">أناقة</span>
              <br />
              <span className="shimmer-text">الخليج</span>
              <br />
              <span className="text-[#F5F0E8]">بين يديك</span>
            </h1>

            <p className="text-[#F5F0E8]/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              اكتشف تشكيلتنا الحصرية من العطور الفاخرة ومنتجات العناية المميزة،
              <span className="text-[#C9A84C] font-semibold"> مُصممة لتعكس روح الخليج الأصيلة.</span>
              &nbsp;نوصل إليك في عُمان، الإمارات، السعودية، الكويت، البحرين وقطر.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#products"
                className="btn-gold px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-[#C9A84C]/30"
              >
                تسوق المنتجات ✨
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded-full text-lg font-medium border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
              >
                اعرف أكثر
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { num: '+500', label: 'عميل سعيد' },
                { num: '+50', label: 'منتج فاخر' },
                { num: '6', label: 'دول خليجية' },
                { num: '٪98', label: 'رضا العملاء' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black gold-text amiri-font">{stat.num}</p>
                  <p className="text-[#F5F0E8]/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative mx-auto max-w-sm">
              {/* Main product image */}
              <div className="relative z-10 float-animation">
                <div className="border-gold-glow rounded-3xl overflow-hidden bg-[#0C1B33]/80 backdrop-blur-sm p-6">
                  <img
                    src="/images/product1.jpg"
                    alt="عطر فاخر"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  {/* Product badge */}
                  <div className="absolute top-10 left-10 bg-[#C9A84C] text-[#080F1E] text-xs font-bold px-3 py-1.5 rounded-full">
                    الأكثر مبيعاً
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-8 bg-[#0C1B33] border border-[#C9A84C]/30 rounded-2xl p-4 shadow-xl z-20 min-w-36">
                <p className="text-xs text-[#C9A84C] mb-1">⭐ تقييم العملاء</p>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-[#C9A84C] text-lg">★</span>)}
                </div>
                <p className="text-white text-sm font-bold mt-1">4.9 / 5</p>
              </div>

              <div className="absolute -bottom-4 -left-8 bg-[#0C1B33] border border-[#C9A84C]/30 rounded-2xl p-4 shadow-xl z-20">
                <p className="text-xs text-[#F5F0E8]/60 mb-1">🚀 تم التوصيل اليوم</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 space-x-reverse">
                    {['👩', '👨', '🧑'].map((emoji, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-sm">
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <p className="text-[#C9A84C] text-sm font-bold">+24 طلب</p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#C9A84C]/5 rounded-3xl blur-2xl scale-110 -z-10" />
            </div>
          </div>
        </div>

        {/* Feature strips */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.text}
              className="flex items-center gap-3 bg-[#0C1B33]/60 border border-[#C9A84C]/20 rounded-xl px-4 py-3 backdrop-blur-sm hover:border-[#C9A84C]/50 transition-all duration-300"
            >
              <span className="text-2xl">{f.icon}</span>
              <span className="text-[#F5F0E8]/80 text-sm font-medium">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
