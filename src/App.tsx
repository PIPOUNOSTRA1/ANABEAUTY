import { useState, useEffect, useRef } from "react";

/* ---------------- Helpers ---------------- */
const scrollToOrder = () => {
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------- Top Announcement Bar ---------------- */
function TopBar() {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-700 text-white text-center text-xs sm:text-sm py-2 px-3 font-semibold">
      🔥 عرض اليوم فقط: خصم 50% + توصيل مجاني لكل سلطنة عمان 🇴🇲 + الدفع عند الاستلام
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center text-white font-extrabold">Y</div>
          <div className="leading-tight">
            <div className="font-extrabold text-purple-800 text-sm sm:text-base">Yes! Finishing Touch</div>
            <div className="text-[10px] sm:text-xs text-gray-500">إزالة الشعر بدون ألم</div>
          </div>
        </div>
        <button
          onClick={scrollToOrder}
          className="hidden sm:inline-flex bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          اطلبي الآن
        </button>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-purple-50 via-white to-fuchsia-50">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-fuchsia-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 sm:py-16 grid lg:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="text-center lg:text-right order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            ⭐ الأكثر مبيعاً في سلطنة عمان 2026
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
            ودّعي ألم إزالة الشعر <br />
            <span className="bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
              بشرة ناعمة كالحرير في دقائق
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            جهاز <strong>Yes! Finishing Touch</strong> الأصلي — تقنية الاستشعار الذكي لإزالة الشعر <strong>بدون ألم، بدون حروق، وبدون احمرار</strong>. آمن لجميع مناطق الجسم والوجه.
          </p>

          {/* Quick benefits */}
          <ul className="mt-6 grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
            {[
              { icon: "✨", t: "بدون ألم نهائياً" },
              { icon: "⚡", t: "نتيجة فورية" },
              { icon: "🔋", t: "قابل للشحن USB" },
              { icon: "💧", t: "آمن وقابل للغسل" },
            ].map((b) => (
              <li key={b.t} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-purple-100">
                <span className="text-lg">{b.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{b.t}</span>
              </li>
            ))}
          </ul>

          {/* CTA + Price */}
          <div className="mt-7 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToOrder}
              className="animate-pulse-ring w-full sm:w-auto bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-extrabold text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 transition"
            >
              اطلبي الآن — الدفع عند الاستلام 📦
            </button>
            <div className="text-center sm:text-right">
              <div className="text-sm text-gray-500 line-through">19.900 ر.ع</div>
              <div className="text-2xl font-black text-purple-700">9.900 ر.ع فقط</div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap gap-4 items-center justify-center lg:justify-start text-xs sm:text-sm text-gray-600">
            <span className="flex items-center gap-1">🚚 توصيل مجاني</span>
            <span className="flex items-center gap-1">💵 الدفع عند الاستلام</span>
            <span className="flex items-center gap-1">🔄 استبدال مجاني</span>
            <span className="flex items-center gap-1">🛡️ منتج أصلي</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-fuchsia-300/30 rounded-full blur-3xl" />
          <img
            src="/images/product-main.png"
            alt="جهاز إزالة الشعر Yes Finishing Touch"
            className="relative w-72 sm:w-96 lg:w-[28rem] animate-float drop-shadow-2xl"
          />
          <div className="absolute top-4 right-4 sm:right-8 bg-red-500 text-white font-black text-sm sm:text-base rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg rotate-12">
            -50%
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Marquee Trust ---------------- */
function TrustMarquee() {
  const items = [
    "✅ +12,000 عميلة سعيدة في عمان",
    "⭐ تقييم 4.9/5",
    "🚚 توصيل خلال 24-48 ساعة",
    "💵 الدفع عند الاستلام في كل الولايات",
    "🛡️ منتج أصلي مضمون",
    "🔄 استبدال خلال 7 أيام",
  ];
  return (
    <div className="bg-purple-900 text-white py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-6 text-sm font-semibold">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Problems Section ---------------- */
function Problems() {
  const problems = [
    {
      icon: "😖",
      title: "ألم الحلاوة والشمع",
      desc: "كل شهر معاناة، صراخ ودموع... وفي النهاية شعر ينمو مرة أخرى بسرعة!",
    },
    {
      icon: "🩸",
      title: "جروح وحروق الشفرة",
      desc: "الشفرة العادية تسبب جروح، حروق، احمرار، وشعر تحت الجلد المزعج.",
    },
    {
      icon: "💸",
      title: "تكلفة الليزر الباهظة",
      desc: "جلسات الليزر في المراكز تكلف مئات الريالات، وتحتاج لمواعيد متعددة.",
    },
    {
      icon: "⏰",
      title: "ضياع الوقت والإحراج",
      desc: "ساعات في صالونات التجميل، ومواعيد مع نساء غريبات... كل شهر!",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-red-100 text-red-700 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            هل تعانين من هذه المشاكل؟
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            توقفي عن المعاناة المتكررة!
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            كل امرأة تستحق بشرة ناعمة بدون ألم ولا تكلفة عالية. إليك المشاكل التي يعاني منها 9 من كل 10 نساء:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-100 rounded-2xl p-5 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-extrabold text-gray-900 mb-1">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center">
                ✕
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Solution Section ---------------- */
function Solution() {
  return (
    <section className="py-14 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            ✨ الحل السحري
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            جهاز <span className="text-purple-700">Yes! Finishing Touch</span> هو الحل
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            تقنية ثورية تعتمد على الاستشعار الذكي لإزالة الشعر بلطف، دون أي ألم أو تهيج. آمن للوجه، الإبط، الذراعين، الساقين، والمناطق الحساسة.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="/images/product-usage.png"
              alt="استخدام الجهاز"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border-2 border-purple-200">
              <div className="text-3xl font-black text-purple-700">100%</div>
              <div className="text-xs font-bold text-gray-600">بدون ألم</div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: "🌸", t: "تقنية الاستشعار الذكي", d: "يكتشف الشعر تلقائياً ويزيله بلطف من الجذور دون أي ألم." },
              { icon: "💎", t: "آمن لجميع أنواع البشرة", d: "حتى البشرة الحساسة جداً والمناطق الحرجة (الوجه، البكيني، الإبط)." },
              { icon: "⚡", t: "نتائج فورية تدوم لأسابيع", d: "بشرة ناعمة من أول استخدام، ونتائج تدوم حتى 4 أسابيع." },
              { icon: "🔋", t: "قابل للشحن — استخدام لاسلكي", d: "بطارية تدوم طويلاً، شحن USB سريع، استخدمي الجهاز في أي مكان." },
              { icon: "💧", t: "سهل التنظيف وقابل للغسل", d: "رؤوس قابلة للإزالة والغسل تحت الماء — نظافة وصحة دائمة." },
            ].map((b, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm border border-purple-100 hover:shadow-md transition">
                <div className="text-3xl flex-shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-extrabold text-gray-900">{b.t}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{b.d}</p>
                </div>
              </div>
            ))}

            <button
              onClick={scrollToOrder}
              className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-extrabold text-lg py-4 rounded-full shadow-xl hover:scale-[1.02] transition"
            >
              نعم! أريد بشرة ناعمة بدون ألم 💜
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Before / After ---------------- */
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            🔍 شاهدي الفرق بنفسك
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            النتيجة قبل وبعد الاستخدام
          </h2>
          <p className="mt-3 text-gray-600">حركي الشريط يميناً ويساراً لمشاهدة الفرق المذهل على البشرة</p>
        </div>

        <div className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-200 select-none">
          <div className="relative aspect-square bg-gray-100">
            {/* Before image (full) */}
            <img
              src="/images/before.png"
              alt="قبل استخدام الجهاز"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-red-600 text-white font-black px-4 py-1.5 rounded-full text-sm shadow-lg">
              قبل 😣
            </div>

            {/* After image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              <img
                src="/images/after.png"
                alt="بعد استخدام الجهاز"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white font-black px-4 py-1.5 rounded-full text-sm shadow-lg">
                ✨ بعد
              </div>
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-purple-700 font-black border-2 border-purple-500">
                ⇔
              </div>
            </div>

            {/* Range input */}
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="مقارنة قبل وبعد"
            />
          </div>
        </div>

        {/* Results stats */}
        <div className="mt-8 grid grid-cols-3 gap-3 max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-4 border border-purple-100">
            <div className="text-3xl font-black text-purple-700">98%</div>
            <div className="text-xs sm:text-sm text-gray-600 font-bold mt-1">بشرة أنعم</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-4 border border-purple-100">
            <div className="text-3xl font-black text-purple-700">0%</div>
            <div className="text-xs sm:text-sm text-gray-600 font-bold mt-1">ألم أو تهيج</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-4 border border-purple-100">
            <div className="text-3xl font-black text-purple-700">4أسابيع</div>
            <div className="text-xs sm:text-sm text-gray-600 font-bold mt-1">نتيجة تدوم</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- What's in the Box ---------------- */
function WhatsInBox() {
  return (
    <section className="py-14 bg-gradient-to-bl from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            📦 ماذا ستحصلين عليه؟
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            مكونات العلبة الكاملة
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <img src="/images/product-parts.png" alt="مكونات الجهاز" className="w-full rounded-2xl" />
          <div className="grid grid-cols-2 gap-3">
            {[
              { i: "🪒", t: "جهاز إزالة الشعر الرئيسي", b: true },
              { i: "🔧", t: "رأس قاطع مقوس (Arc)" },
              { i: "✂️", t: "رأس قاطع مستقيم (Straight)" },
              { i: "🖌️", t: "فرشاة تنظيف" },
              { i: "🔌", t: "كابل شحن USB" },
              { i: "📖", t: "دليل الاستخدام بالعربي" },
            ].map((it, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border-2 ${
                  it.b ? "bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white border-purple-700" : "bg-white border-purple-100"
                }`}
              >
                <div className="text-3xl mb-2">{it.i}</div>
                <div className={`text-sm font-extrabold ${it.b ? "text-white" : "text-gray-800"}`}>{it.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    {
      name: "فاطمة الكندية",
      city: "مسقط",
      stars: 5,
      text: "والله جربت كل شي قبل... شفرات، حلاوة، شمع. هذا الجهاز غير حياتي! بدون ألم نهائياً، وبشرتي صارت ناعمة جداً. أنصح كل بنت فيه!",
      avatar: "https://images.pexels.com/photos/4633866/pexels-photo-4633866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200",
    },
    {
      name: "مريم البلوشية",
      city: "صلالة",
      stars: 5,
      text: "وصلني خلال يومين بس من الطلب. جودة ممتازة وفعلاً ما يألم أبداً. استخدمته للوجه والإبط والساقين، النتيجة رائعة 💜",
      avatar: "https://images.pexels.com/photos/36569997/pexels-photo-36569997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200",
    },
    {
      name: "زينب الحسنية",
      city: "صحار",
      stars: 5,
      text: "أحسن استثمار سويته! بدل ما أصرف 30 ريال كل شهر على الحلاوة، الجهاز عمره طويل واستخدامه سهل. شكراً لكم!",
      avatar: "https://images.pexels.com/photos/33280336/pexels-photo-33280336.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200",
    },
    {
      name: "نورة العامرية",
      city: "نزوى",
      stars: 5,
      text: "كنت متخوفة في البداية بس لما جربته انبهرت! آمن وسريع، وحتى المناطق الحساسة بدون أي تهيج. منتج أصلي 100%.",
      avatar: "https://images.pexels.com/photos/18999509/pexels-photo-18999509.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200",
    },
    {
      name: "هدى الزدجالية",
      city: "البريمي",
      stars: 5,
      text: "الدفع عند الاستلام شي ريحني وايد، فحصت المنتج قبل ما أدفع. الجودة فوق التوقعات والتوصيل كان سريع جداً.",
      avatar: "https://images.pexels.com/photos/32433231/pexels-photo-32433231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200",
    },
    {
      name: "أمل الرواحية",
      city: "صور",
      stars: 5,
      text: "بناتي الصغار حتى يستخدمنه بكل أمان! ما فيه شفرات حادة، فقط يمر على الشعر وينزيل. منتج عبقري!",
      avatar: "https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            💬 +12,000 عميلة سعيدة
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            ماذا تقول عميلاتنا في عُمان؟
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex text-yellow-400 text-2xl">★★★★★</div>
            <span className="font-bold text-gray-700">4.9/5</span>
            <span className="text-sm text-gray-500">(2,847 تقييم)</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-200 shadow-sm flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-extrabold text-gray-900 text-sm sm:text-base truncate">{r.name}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">📍 {r.city}</div>
                </div>
                <span className="mr-auto bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">✓ موثّق</span>
              </div>
              <div className="text-yellow-400 mb-2 text-lg">{"★".repeat(r.stars)}</div>
              <p className="text-sm text-gray-700 leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Countdown Timer ---------------- */
function useCountdown(initialSeconds: number) {
  const [s, setS] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return { h, m, s: sec };
}

function CountdownBanner() {
  const { h, m, s } = useCountdown(3 * 3600 + 47 * 60);
  return (
    <section className="py-10 bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-sm sm:text-base font-bold opacity-90">⏰ العرض ينتهي خلال:</div>
        <div className="mt-3 flex items-center justify-center gap-2 sm:gap-4">
          {[
            { v: h, l: "ساعة" },
            { v: m, l: "دقيقة" },
            { v: s, l: "ثانية" },
          ].map((t, i) => (
            <div key={i} className="bg-white/20 backdrop-blur rounded-xl px-4 sm:px-6 py-3 min-w-[70px] sm:min-w-[90px]">
              <div className="text-3xl sm:text-4xl font-black tabular-nums">{t.v}</div>
              <div className="text-xs opacity-80">{t.l}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm sm:text-base">⚠️ الكميات محدودة — بقي عدد قليل في المخزن!</p>
      </div>
    </section>
  );
}

/* ---------------- Order Form ---------------- */
const omanCities = [
  "مسقط", "صلالة", "صحار", "نزوى", "صور", "البريمي", "عبري", "بهلاء",
  "الرستاق", "السيب", "بركاء", "إبراء", "خصب", "مصيرة", "أخرى",
];

function OrderForm() {
  const [qty, setQty] = useState(2); // الخيار الأكثر طلباً افتراضياً
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", notes: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  const prices = {
    1: { price: 9.9, old: 19.9, label: "جهاز واحد", save: 10, qtyText: "1 قطعة" },
    2: { price: 17.9, old: 39.8, label: "جهازان (هدية لصديقتك)", save: 21.9, badge: "الأكثر طلباً", qtyText: "2 قطعة" },
    3: { price: 24.9, old: 59.7, label: "3 أجهزة (عرض العائلة)", save: 34.8, badge: "أوفر صفقة", qtyText: "3 قطع" },
  } as const;

  const selected = prices[qty as 1 | 2 | 3];
  const delivery = 0;
  const total = selected.price + delivery;

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\s|-|\+/g, "");
    return /^(968)?[279]\d{7}$/.test(cleaned);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [k: string]: string } = {};
    if (!form.name || form.name.trim().length < 3) newErrors.name = "الرجاء إدخال اسمك الكامل";
    if (!form.phone) newErrors.phone = "رقم الهاتف مطلوب";
    else if (!validatePhone(form.phone)) newErrors.phone = "رقم هاتف عماني غير صحيح (يبدأ بـ 9 أو 7 أو 2)";
    if (!form.city) newErrors.city = "الرجاء اختيار الولاية";
    if (!form.address || form.address.trim().length < 5) newErrors.address = "الرجاء كتابة العنوان التفصيلي";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
    setTimeout(() => {
      document.getElementById("thanks")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section id="order" className="py-14 bg-gradient-to-br from-purple-100 via-fuchsia-50 to-purple-100 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-fuchsia-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-green-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3 animate-pulse">
            🎁 احجزي الآن قبل نفاد الكمية
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            اطلبي الآن — الدفع عند الاستلام 🇴🇲
          </h2>
          <p className="mt-2 text-gray-600">املئي النموذج وسيتواصل معك مندوبنا خلال دقائق لتأكيد الطلب</p>
        </div>

        {submitted ? (
          <div id="thanks" className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-green-200 text-center animate-slide-up">
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <div className="text-6xl">✅</div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-green-700 mb-3">تم استلام طلبك بنجاح!</h3>
            <p className="text-gray-700 mb-2 text-lg">شكراً لك يا <strong className="text-purple-700">{form.name}</strong> 💜</p>
            <p className="text-gray-600 mb-6">سيتواصل معك مندوبنا على رقم <strong dir="ltr" className="text-purple-700">{form.phone}</strong> خلال 30 دقيقة لتأكيد الطلب وتحديد موعد التوصيل.</p>

            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-5 inline-block mb-6">
              <div className="text-sm text-gray-600 mb-1">رقم طلبك</div>
              <div className="text-3xl font-black text-purple-700">#OM-{Math.floor(Math.random() * 90000 + 10000)}</div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-right">
              <div className="bg-purple-50 rounded-xl p-3">
                <div className="text-xs text-gray-500">المنتج</div>
                <div className="font-bold text-sm text-gray-800">{selected.qtyText}</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-3">
                <div className="text-xs text-gray-500">المجموع</div>
                <div className="font-bold text-sm text-purple-700">{total.toFixed(2)} ر.ع</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-3">
                <div className="text-xs text-gray-500">الدفع</div>
                <div className="font-bold text-sm text-green-700">عند الاستلام 💵</div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">💡 احتفظي برقم طلبك للمتابعة. شكراً لثقتك بنا!</div>
          </div>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} className="bg-white rounded-3xl shadow-2xl border-2 border-purple-200 overflow-hidden">

            {/* Step 1: Quantity */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-purple-50 to-white border-b border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-purple-600 text-white font-black flex items-center justify-center">1</div>
                <div className="font-extrabold text-gray-900 text-base sm:text-lg">اختاري العرض المناسب لك</div>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {([1, 2, 3] as const).map((n) => {
                  const p = prices[n];
                  const isSel = qty === n;
                  return (
                    <button
                      type="button"
                      key={n}
                      onClick={() => setQty(n)}
                      className={`relative text-right rounded-2xl p-4 border-2 transition ${
                        isSel
                          ? "border-purple-600 bg-gradient-to-br from-purple-50 to-fuchsia-50 shadow-lg scale-[1.02]"
                          : "border-gray-200 bg-white hover:border-purple-300"
                      }`}
                    >
                      {"badge" in p && p.badge && (
                        <span className="absolute -top-2 right-3 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                          {p.badge}
                        </span>
                      )}
                      <div className="flex items-center justify-between">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${isSel ? "border-purple-600 bg-purple-600" : "border-gray-300"}`}>
                          {isSel && <span className="text-white text-xs">✓</span>}
                        </div>
                        <div className="font-bold text-sm">{p.label}</div>
                      </div>
                      <div className="mt-2 flex items-baseline gap-2 justify-end">
                        <span className="text-xs text-gray-400 line-through">{p.old} ر.ع</span>
                        <span className="text-xl font-black text-purple-700">{p.price} ر.ع</span>
                      </div>
                      <div className="text-xs text-green-600 font-bold mt-1 text-left">وفّري {p.save} ر.ع</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Customer info */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-purple-600 text-white font-black flex items-center justify-center">2</div>
                <div className="font-extrabold text-gray-900 text-base sm:text-lg">معلومات التوصيل</div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-1 block">👤 الاسم الكامل <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                    placeholder="مثال: فاطمة محمد"
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-purple-500"}`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1 font-bold">⚠️ {errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-1 block">📱 رقم الهاتف (واتساب) <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    dir="ltr"
                    value={form.phone}
                    onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                    placeholder="9XXX XXXX"
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition text-right ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-purple-500"}`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1 font-bold">⚠️ {errors.phone}</p>}
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-1 block">📍 الولاية / المدينة <span className="text-red-500">*</span></label>
                  <select
                    value={form.city}
                    onChange={(e) => { setForm({ ...form, city: e.target.value }); setErrors({ ...errors, city: "" }); }}
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition bg-white ${errors.city ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-purple-500"}`}
                  >
                    <option value="">-- اختاري ولايتك --</option>
                    {omanCities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.city && <p className="text-xs text-red-600 mt-1 font-bold">⚠️ {errors.city}</p>}
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-1 block">🏠 العنوان التفصيلي <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => { setForm({ ...form, address: e.target.value }); setErrors({ ...errors, address: "" }); }}
                    placeholder="الحي / الشارع / رقم المنزل"
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition ${errors.address ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-purple-500"}`}
                  />
                  {errors.address && <p className="text-xs text-red-600 mt-1 font-bold">⚠️ {errors.address}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-bold text-gray-700 mb-1 block">📝 ملاحظات (اختياري)</label>
                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="أي ملاحظات للمندوب (وقت الاتصال المفضل، علامة مميزة...)"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method - COD */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-t border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-green-600 text-white font-black flex items-center justify-center">3</div>
                <div className="font-extrabold text-gray-900 text-base sm:text-lg">طريقة الدفع</div>
              </div>

              <div className="bg-white border-2 border-green-500 rounded-2xl p-4 shadow-sm relative">
                <div className="absolute -top-2 right-4 bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                  ✓ الطريقة الوحيدة المتاحة
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
                    💵
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-gray-900 text-base">الدفع عند الاستلام (COD)</div>
                    <div className="text-sm text-gray-600 mt-1 leading-relaxed">
                      ادفعي نقداً للمندوب عند استلام طلبك في باب منزلك. لا حاجة للبطاقة البنكية ولا تحويلات مسبقة.
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full">✓ آمن 100%</span>
                      <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full">✓ افحصي قبل الدفع</span>
                      <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full">✓ بدون رسوم إضافية</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white">
              <div className="font-extrabold mb-3 flex items-center gap-2 text-lg">
                <span>📋</span> ملخص الطلب
              </div>
              <div className="space-y-2 text-sm bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="flex justify-between">
                  <span>المنتج</span>
                  <span className="font-bold">{selected.label}</span>
                </div>
                <div className="flex justify-between">
                  <span>الكمية</span>
                  <span className="font-bold">{selected.qtyText}</span>
                </div>
                <div className="flex justify-between">
                  <span>السعر</span>
                  <span className="font-bold">{selected.price} ر.ع</span>
                </div>
                <div className="flex justify-between text-green-200">
                  <span>التوفير</span>
                  <span className="font-bold">- {selected.save} ر.ع</span>
                </div>
                <div className="flex justify-between">
                  <span>التوصيل 🚚</span>
                  <span className="font-bold text-green-200">مجاني</span>
                </div>
                <div className="flex justify-between">
                  <span>طريقة الدفع</span>
                  <span className="font-bold">💵 عند الاستلام</span>
                </div>
                <div className="border-t border-white/30 pt-3 mt-2 flex justify-between text-2xl font-black">
                  <span>الإجمالي</span>
                  <span>{total.toFixed(2)} ر.ع</span>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full bg-white text-purple-700 font-black text-base sm:text-lg py-4 rounded-full shadow-xl hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >
                ✅ تأكيد الطلب — الدفع عند الاستلام
              </button>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] sm:text-xs">
                <div className="bg-white/10 rounded-lg py-2 px-1">
                  <div className="text-base mb-0.5">🔒</div>
                  <div className="font-bold">معلوماتك آمنة</div>
                </div>
                <div className="bg-white/10 rounded-lg py-2 px-1">
                  <div className="text-base mb-0.5">📞</div>
                  <div className="font-bold">تأكيد بالاتصال</div>
                </div>
                <div className="bg-white/10 rounded-lg py-2 px-1">
                  <div className="text-base mb-0.5">🚚</div>
                  <div className="font-bold">توصيل 24-48 ساعة</div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    {
      q: "هل الجهاز فعلاً بدون ألم؟",
      a: "نعم 100%! يعتمد الجهاز على تقنية الاستشعار الذكي التي تزيل الشعر بلطف من سطح البشرة دون أي شد أو ألم. مناسب حتى للبشرة الحساسة جداً.",
    },
    {
      q: "هل يمكن استخدامه للوجه والمناطق الحساسة؟",
      a: "نعم، الجهاز آمن تماماً لجميع مناطق الجسم: الوجه، الإبط، الذراعين، الساقين، وحتى منطقة البكيني.",
    },
    {
      q: "كم تستغرق مدة التوصيل في سلطنة عمان؟",
      a: "نقوم بالتوصيل لجميع ولايات سلطنة عمان خلال 24 إلى 48 ساعة فقط من تأكيد الطلب، والتوصيل مجاني تماماً.",
    },
    {
      q: "كيف يمكنني الدفع؟",
      a: "الدفع عند الاستلام (Cash on Delivery) فقط — لا تدفعي شيئاً مقدماً. ستفحصين المنتج أولاً ثم تدفعين للمندوب.",
    },
    {
      q: "هل المنتج أصلي؟ وهل يوجد ضمان؟",
      a: "نعم، المنتج أصلي 100% مع ضمان جودة، وإمكانية الاستبدال خلال 7 أيام في حال وجود أي عيب مصنعي.",
    },
    {
      q: "كم تدوم بطارية الجهاز؟",
      a: "بطارية قابلة للشحن عبر USB، تدوم حتى 60 دقيقة من الاستخدام المتواصل بعد شحن كامل (حوالي ساعتين).",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
            ❓ أسئلة شائعة
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
            كل ما تريدين معرفته
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="border-2 border-purple-100 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-right hover:bg-purple-50 transition"
              >
                <span className="font-extrabold text-gray-900 text-sm sm:text-base">{it.q}</span>
                <span className={`text-purple-600 text-2xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-purple-100 pt-3">
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Guarantee ---------------- */
function Guarantee() {
  return (
    <section className="py-14 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-purple-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-6xl mb-4">🛡️</div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3">ضمان رضا 100% أو نسترجع المبلغ</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
          نحن واثقون من جودة منتجنا. إذا لم تكوني راضية تماماً، يمكنك استرجاع المنتج خلال 7 أيام واستعادة أموالك بالكامل — دون أي أسئلة.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { i: "✅", t: "منتج أصلي" },
            { i: "🚚", t: "توصيل مجاني" },
            { i: "💵", t: "دفع عند الاستلام" },
          ].map((b, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-4">
              <div className="text-3xl mb-1">{b.i}</div>
              <div className="font-bold">{b.t}</div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollToOrder}
          className="mt-8 bg-white text-purple-700 font-black text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 transition"
        >
          اطلبي بثقة الآن 💜
        </button>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center text-white font-extrabold">Y</div>
          <div className="font-extrabold text-white">Yes! Finishing Touch — Oman</div>
        </div>
        <p className="text-sm">📞 خدمة العملاء: <span dir="ltr">+968 9000 0000</span></p>
        <p className="text-sm mt-1">📧 support@yes-oman.com</p>
        <div className="mt-4 text-xs text-gray-500">© 2026 جميع الحقوق محفوظة — سلطنة عمان 🇴🇲</div>
      </div>
    </footer>
  );
}

/* ---------------- Sticky Mobile CTA ---------------- */
function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-purple-200 shadow-2xl p-3 lg:hidden">
      <button
        onClick={scrollToOrder}
        className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-black text-base py-3.5 rounded-full shadow-lg"
      >
        🛒 اطلبي الآن — 9.900 ر.ع فقط
      </button>
    </div>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Problems />
      <Solution />
      <BeforeAfter />
      <WhatsInBox />
      <Testimonials />
      <CountdownBanner />
      <OrderForm />
      <Guarantee />
      <FAQ />
      <Footer />
      <StickyCTA />
      <div className="h-20 lg:hidden" />
    </div>
  );
}
