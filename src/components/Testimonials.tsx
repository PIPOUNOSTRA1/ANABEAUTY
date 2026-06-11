import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'أم سعود',
    location: 'مسقط، سلطنة عُمان',
    flag: '🇴🇲',
    rating: 5,
    text: 'طلبت مجموعة العطر والكريم وصلت في يومين فقط! التغليف كان فاخر جداً وكأنه هدية من متجر راقي. الرائحة رائعة وتدوم طويل. والله من أحسن ما اشتريت على الإنترنت.',
    product: 'مجموعة العطر والعناية',
    avatar: '👩‍🦳',
    verified: true,
  },
  {
    id: 2,
    name: 'محمد الشامسي',
    location: 'دبي، الإمارات العربية المتحدة',
    flag: '🇦🇪',
    rating: 5,
    text: 'أنا أشتري بخور من سنين بس هذا المستوى ما شفته قبل كذا. العود طبيعي مية بالمية والرائحة تملأ البيت. خدمة العملاء ردوا فوراً على واتساب وحلوا مسألتي. ممتاز.',
    product: 'بخور العود الطبيعي',
    avatar: '👨‍💼',
    verified: true,
  },
  {
    id: 3,
    name: 'نوف الكندري',
    location: 'الكويت',
    flag: '🇰🇼',
    rating: 5,
    text: 'شريت الكريم الذهبي بعد ما شفته في الانستقرام وما ندمت. البشرة حسيت بفرق من أول استخدام. السعر منطقي مقارنة بجودة المنتج. بشوف بشتري الباقة كاملة.',
    product: 'كريم العناية الذهبي',
    avatar: '👩',
    verified: true,
  },
  {
    id: 4,
    name: 'خالد الغامدي',
    location: 'جدة، المملكة العربية السعودية',
    flag: '🇸🇦',
    rating: 5,
    text: 'الشحن وصل بكرة التاني! ما توقعت بهالسرعة. المبخرة صنعة يدوية رقيعة جداً واضح الشغل الحرفي فيها. هديت واحدة لصديقي وانبهر. راح أرجع أطلب أكثر.',
    product: 'مبخرة الفضة العربية',
    avatar: '👨',
    verified: true,
  },
  {
    id: 5,
    name: 'ريم المنصوري',
    location: 'أبوظبي، الإمارات',
    flag: '🇦🇪',
    rating: 5,
    text: 'منتجات حلوة وأصلية. جربت عطر النخبة الملكي وكل مرة أطلع يمدحون الريحة. المتجر محترم ويتكلم عربي وهذا شيء يطمن. سلمت أيدي كل من ساهم.',
    product: 'عطر النخبة الملكي',
    avatar: '👩‍💼',
    verified: true,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#080F1E' }}>
      <div className="absolute inset-0 arabic-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] mb-3">✦ آراء عملاؤنا ✦</p>
          <h2 className="amiri-font text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            هم يقولون عنّا <span className="gold-text">الأفضل</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mb-4" />
          <p className="text-[#F5F0E8]/60">آراء حقيقية من عملاء خليجيين حقيقيين</p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-[#0C1B33]/80 border border-[#C9A84C]/20 rounded-3xl p-8 sm:p-10 relative">
            {/* Quote icon */}
            <div className="text-6xl text-[#C9A84C]/20 amiri-font leading-none mb-4">"</div>

            {/* Stars */}
            <div className="flex mb-4">
              {[1,2,3,4,5].map(s => (
                <span key={s} className="text-[#C9A84C] text-xl">★</span>
              ))}
            </div>

            {/* Text */}
            <p className="text-[#F5F0E8]/90 text-lg leading-relaxed mb-6 amiri-font">
              {testimonials[active].text}
            </p>

            {/* Product tag */}
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#C9A84C] rounded-full"></span>
              <span className="text-[#C9A84C] text-sm">المنتج: {testimonials[active].product}</span>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C9A84C]/15 rounded-full flex items-center justify-center text-2xl border border-[#C9A84C]/30">
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#F5F0E8] font-bold">{testimonials[active].name}</p>
                    {testimonials[active].verified && (
                      <span className="text-[#C9A84C] text-xs border border-[#C9A84C]/40 rounded-full px-2 py-0.5">✓ موثق</span>
                    )}
                  </div>
                  <p className="text-[#F5F0E8]/50 text-sm flex items-center gap-1">
                    <span>{testimonials[active].flag}</span>
                    <span>{testimonials[active].location}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                i === active
                  ? 'bg-[#C9A84C] text-[#080F1E]'
                  : 'bg-[#0C1B33]/80 border border-[#C9A84C]/20 text-[#F5F0E8]/60 hover:border-[#C9A84C]/50'
              }`}
            >
              <span>{t.flag}</span>
              <span className="text-sm font-medium">{t.name}</span>
            </button>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { num: '4.9/5', label: 'متوسط التقييم', icon: '⭐' },
            { num: '+500', label: 'عميل راضٍ', icon: '😊' },
            { num: '98%', label: 'توصيل في الموعد', icon: '🚀' },
            { num: '+1000', label: 'طلب ناجح', icon: '📦' },
          ].map((s) => (
            <div key={s.label} className="text-center bg-[#0C1B33]/60 border border-[#C9A84C]/15 rounded-2xl p-5">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-3xl font-black gold-text amiri-font mb-1">{s.num}</p>
              <p className="text-[#F5F0E8]/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
