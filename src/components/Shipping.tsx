export default function Shipping() {
  const steps = [
    {
      num: '١',
      icon: '🛒',
      title: 'اختر منتجك',
      desc: 'تصفح تشكيلتنا واختر ما يناسبك من عطور ومنتجات عناية فاخرة',
    },
    {
      num: '٢',
      icon: '📝',
      title: 'سجل طلبك',
      desc: 'أدخل بيانات التوصيل وطريقة الدفع المناسبة لك بكل سهولة وأمان',
    },
    {
      num: '٣',
      icon: '📦',
      title: 'نُعبّئ بفخامة',
      desc: 'طلبك يُجهَّز ويُعبَّأ في تغليف فاخر يليق بأهل الخليج',
    },
    {
      num: '٤',
      icon: '🚀',
      title: 'يصل إلى بابك',
      desc: 'خلال 2-5 أيام عمل إلى باب منزلك في جميع دول الخليج',
    },
  ];

  const shippingRates = [
    { country: '🇴🇲 عُمان', time: '2-3 أيام', free: 'مجاني فوق 50 ريال', cost: '5 ريال' },
    { country: '🇦🇪 الإمارات', time: '2-3 أيام', free: 'مجاني فوق 50 درهم', cost: '15 درهم' },
    { country: '🇸🇦 السعودية', time: '3-5 أيام', free: 'مجاني فوق 100 ريال', cost: '20 ريال' },
    { country: '🇰🇼 الكويت', time: '3-5 أيام', free: 'مجاني فوق 15 دينار', cost: '3 دينار' },
    { country: '🇧🇭 البحرين', time: '3-5 أيام', free: 'مجاني فوق 10 دينار', cost: '3 دينار' },
    { country: '🇶🇦 قطر', time: '3-5 أيام', free: 'مجاني فوق 50 ريال', cost: '15 ريال' },
  ];

  return (
    <section id="shipping" className="py-24 bg-[#0C1B33] relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-[#C9A84C]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] mb-3">✦ الشحن والتوصيل ✦</p>
          <h2 className="amiri-font text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            نوصلك <span className="gold-text">أينما كنت</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mb-4" />
          <p className="text-[#F5F0E8]/60 text-lg max-w-xl mx-auto">
            شحن موثوق وسريع لجميع دول الخليج العربي مع إمكانية التتبع الفوري
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="bg-[#080F1E]/70 border border-[#C9A84C]/15 rounded-2xl p-6 text-center hover:border-[#C9A84C]/40 transition-all duration-300 h-full">
                <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center text-[#080F1E] font-black text-xl amiri-font mx-auto mb-4 shadow-lg shadow-[#C9A84C]/30">
                  {step.num}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-bold text-[#F5F0E8] mb-2">{step.title}</h3>
                <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-3 w-6 h-px bg-[#C9A84C]/40 z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Shipping Table */}
        <div className="bg-[#080F1E]/70 border border-[#C9A84C]/20 rounded-3xl overflow-hidden">
          <div className="px-6 py-5 border-b border-[#C9A84C]/15">
            <h3 className="text-[#F5F0E8] font-bold text-xl flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              رسوم الشحن حسب الدولة
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#C9A84C]/10">
                  <th className="text-right px-6 py-4 text-[#C9A84C] text-sm font-semibold">الدولة</th>
                  <th className="text-right px-6 py-4 text-[#C9A84C] text-sm font-semibold">وقت التوصيل</th>
                  <th className="text-right px-6 py-4 text-[#C9A84C] text-sm font-semibold">شحن مجاني</th>
                  <th className="text-right px-6 py-4 text-[#C9A84C] text-sm font-semibold">رسوم الشحن</th>
                </tr>
              </thead>
              <tbody>
                {shippingRates.map((rate, i) => (
                  <tr
                    key={rate.country}
                    className={`border-b border-[#C9A84C]/5 hover:bg-[#C9A84C]/3 transition-colors ${
                      i % 2 === 0 ? '' : 'bg-[#0C1B33]/30'
                    }`}
                  >
                    <td className="px-6 py-4 text-[#F5F0E8] font-medium">{rate.country}</td>
                    <td className="px-6 py-4 text-[#F5F0E8]/70 text-sm">{rate.time}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full">
                        ✓ {rate.free}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#C9A84C] font-bold">{rate.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 flex items-start gap-3 bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-xl p-4">
          <span className="text-xl">ℹ️</span>
          <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">
            جميع أوقات التوصيل تقريبية وقد تتأثر بالأعياد والعطلات الرسمية. نلتزم بإرسال رقم التتبع فور شحن الطلب. للاستفسار الفوري تواصل معنا عبر واتساب.
          </p>
        </div>
      </div>
    </section>
  );
}
