import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', country: '', message: '' });
  const [sent, setSent] = useState(false);

  const countries = ['سلطنة عُمان', 'الإمارات العربية المتحدة', 'المملكة العربية السعودية', 'الكويت', 'البحرين', 'قطر', 'أخرى'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', country: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📱',
      title: 'واتساب',
      value: '+968 9XXX XXXX',
      desc: 'تواصل معنا الآن، نرد فوراً',
      color: 'bg-green-500/10 border-green-500/30',
      textColor: 'text-green-400',
    },
    {
      icon: '📧',
      title: 'البريد الإلكتروني',
      value: 'info@nukhba.store',
      desc: 'نرد خلال 24 ساعة',
      color: 'bg-blue-500/10 border-blue-500/30',
      textColor: 'text-blue-400',
    },
    {
      icon: '📸',
      title: 'إنستاقرام',
      value: '@nukhbat_alkhaleej',
      desc: 'تابعنا لآخر العروض',
      color: 'bg-pink-500/10 border-pink-500/30',
      textColor: 'text-pink-400',
    },
    {
      icon: '🏪',
      title: 'المتجر الإلكتروني',
      value: 'store.tajir.sa',
      desc: 'طلب مباشر وآمن',
      color: 'bg-[#C9A84C]/10 border-[#C9A84C]/30',
      textColor: 'text-[#C9A84C]',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#080F1E' }}>
      <div className="absolute inset-0 arabic-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-[#C9A84C]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] mb-3">✦ تواصل معنا ✦</p>
          <h2 className="amiri-font text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            نحن هنا <span className="gold-text">لخدمتك</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mb-4" />
          <p className="text-[#F5F0E8]/60 text-lg">فريق الدعم جاهز للإجابة على كل استفساراتك</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact methods */}
          <div>
            <h3 className="text-[#F5F0E8] font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#C9A84C]/20 rounded-lg flex items-center justify-center text-[#C9A84C]">📡</span>
              قنوات التواصل
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className={`${method.color} border rounded-2xl p-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
                >
                  <div className="text-2xl mb-2">{method.icon}</div>
                  <p className="font-bold text-[#F5F0E8] text-sm mb-0.5">{method.title}</p>
                  <p className={`${method.textColor} font-bold text-sm mb-1`}>{method.value}</p>
                  <p className="text-[#F5F0E8]/40 text-xs">{method.desc}</p>
                </div>
              ))}
            </div>

            {/* Working hours */}
            <div className="bg-[#0C1B33]/80 border border-[#C9A84C]/15 rounded-2xl p-6">
              <h4 className="text-[#C9A84C] font-bold mb-4 flex items-center gap-2">
                <span>🕐</span> أوقات الدعم
              </h4>
              <div className="space-y-3">
                {[
                  { days: 'الأحد – الخميس', hours: '8 صباحاً – 10 مساءً' },
                  { days: 'الجمعة – السبت', hours: '10 صباحاً – 8 مساءً' },
                  { days: 'الدعم الطارئ', hours: '24/7 عبر واتساب' },
                ].map((item) => (
                  <div key={item.days} className="flex justify-between items-center border-b border-[#C9A84C]/10 pb-2 last:border-0 last:pb-0">
                    <span className="text-[#F5F0E8]/60 text-sm">{item.days}</span>
                    <span className="text-[#C9A84C] text-sm font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-[#F5F0E8] font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#C9A84C]/20 rounded-lg flex items-center justify-center text-[#C9A84C]">✉️</span>
              أرسل لنا رسالة
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C9A84C] text-sm font-medium mb-2">الاسم الكريم</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="اسمك الكريم"
                    className="w-full bg-[#0C1B33] border border-[#C9A84C]/25 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[#C9A84C] text-sm font-medium mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+968 9XXX XXXX"
                    className="w-full bg-[#0C1B33] border border-[#C9A84C]/25 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#C9A84C] text-sm font-medium mb-2">دولتك</label>
                <select
                  required
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full bg-[#0C1B33] border border-[#C9A84C]/25 rounded-xl px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C] transition-colors text-sm"
                >
                  <option value="">اختر دولتك</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#C9A84C] text-sm font-medium mb-2">رسالتك أو استفسارك</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="اكتب سؤالك أو استفسارك هنا..."
                  className="w-full bg-[#0C1B33] border border-[#C9A84C]/25 rounded-xl px-4 py-3 text-[#F5F0E8] placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm resize-none"
                />
              </div>

              {sent && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <p className="text-green-400 font-bold">✅ تم إرسال رسالتك! سنرد عليك قريباً</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-gold py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#C9A84C]/30"
              >
                إرسال الرسالة 📨
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
