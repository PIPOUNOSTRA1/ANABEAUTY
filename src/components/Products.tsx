import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  tajirUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'عطر النخبة الملكي',
    nameEn: 'Royal Nukhba Oud',
    price: 149,
    oldPrice: 199,
    image: '/images/product1.jpg',
    category: 'عطور',
    rating: 5,
    reviews: 128,
    badge: 'الأكثر مبيعاً',
    description: 'عطر فاخر بعبقة العود الخليجي الأصيل، يجمع بين العود العماني وورد الطائف في مزيج ملكي لا يُقاوَم.',
    tajirUrl: '#',
  },
  {
    id: 2,
    name: 'كريم العناية الذهبي',
    nameEn: 'Golden Care Cream',
    price: 89,
    oldPrice: 120,
    image: '/images/product2.jpg',
    category: 'عناية بالبشرة',
    rating: 5,
    reviews: 94,
    badge: 'جديد',
    description: 'كريم فاخر بمكونات نباتية طبيعية ومستخلصات الذهب لبشرة ناعمة ومشرقة تعكس فخامة الخليج.',
    tajirUrl: '#',
  },
  {
    id: 3,
    name: 'مبخرة الفضة العربية',
    nameEn: 'Silver Arabic Mabkhara',
    price: 199,
    image: '/images/product3.jpg',
    category: 'بخور وعود',
    rating: 4,
    reviews: 67,
    description: 'مبخرة نحاسية منقوشة يدوياً بالزخارف الخليجية التراثية، مثالية لتعطير المنزل وإضفاء الأجواء الأصيلة.',
    tajirUrl: '#',
  },
  {
    id: 4,
    name: 'بخور العود الطبيعي',
    nameEn: 'Natural Oud Bakhoor',
    price: 69,
    oldPrice: 89,
    image: 'https://images.pexels.com/photos/30981935/pexels-photo-30981935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'بخور وعود',
    rating: 5,
    reviews: 156,
    badge: 'عرض خاص',
    description: 'بخور العود الطبيعي المقطر من أجود أنواع عود الكمبودي والهندي، رائحة عميقة تدوم طويلاً.',
    tajirUrl: '#',
  },
  {
    id: 5,
    name: 'سيروم العناية الفاخر',
    nameEn: 'Luxury Skin Serum',
    price: 125,
    image: 'https://images.pexels.com/photos/29611529/pexels-photo-29611529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'عناية بالبشرة',
    rating: 4,
    reviews: 43,
    description: 'سيروم مركز بخلاصة الزعفران الفارسي وزيت الأرقان المغربي لترطيب عميق وشباب دائم للبشرة.',
    tajirUrl: '#',
  },
  {
    id: 6,
    name: 'مجموعة العطر والعناية',
    nameEn: 'Perfume & Care Set',
    price: 299,
    oldPrice: 399,
    image: 'https://images.pexels.com/photos/35806942/pexels-photo-35806942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'مجموعات',
    rating: 5,
    reviews: 212,
    badge: 'الأوفر',
    description: 'مجموعة متكاملة تشمل عطر + كريم + بخور، هدية مثالية بتغليف فاخر مناسبة لكل المناسبات الخليجية.',
    tajirUrl: '#',
  },
];

const categories = ['الكل', 'عطور', 'عناية بالبشرة', 'بخور وعود', 'مجموعات'];

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [addedId, setAddedId] = useState<number | null>(null);

  const filtered = activeCategory === 'الكل'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-0 arabic-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            ✦ تشكيلتنا الحصرية ✦
          </p>
          <h2 className="amiri-font text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            منتجات <span className="gold-text">مختارة بعناية</span>
          </h2>
          <div className="divider-gold w-32 mx-auto mb-6" />
          <p className="text-[#F5F0E8]/60 text-lg max-w-xl mx-auto">
            كل منتج يُعبّر عن أصالة الخليج ويُقدَّم بجودة عالمية لا تُضاهى
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'btn-gold shadow-lg shadow-[#C9A84C]/30'
                  : 'border border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="card-hover bg-[#0C1B33]/80 rounded-2xl overflow-hidden border border-[#C9A84C]/15 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1E] via-transparent to-transparent opacity-60" />

                {/* Badges */}
                {product.badge && (
                  <div className="absolute top-3 right-3 bg-[#C9A84C] text-[#080F1E] text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
                {product.oldPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    خصم {Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </div>
                )}

                {/* Category tag */}
                <div className="absolute bottom-3 right-3 bg-[#0C1B33]/80 backdrop-blur-sm text-[#C9A84C] text-xs font-medium px-3 py-1 rounded-full border border-[#C9A84C]/30">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#F5F0E8] mb-1">{product.name}</h3>
                <p className="text-[#C9A84C]/70 text-xs mb-2">{product.nameEn}</p>
                <p className="text-[#F5F0E8]/60 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className={`text-sm ${s <= product.rating ? 'text-[#C9A84C]' : 'text-[#C9A84C]/20'}`}>★</span>
                    ))}
                  </div>
                  <span className="text-[#F5F0E8]/50 text-xs">({product.reviews} تقييم)</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black gold-text">{product.price}</span>
                      <span className="text-[#C9A84C]/60 text-sm">ريال</span>
                    </div>
                    {product.oldPrice && (
                      <span className="text-[#F5F0E8]/40 text-sm line-through">{product.oldPrice} ريال</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAdd(product)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                        addedId === product.id
                          ? 'bg-green-500 text-white'
                          : 'btn-gold'
                      }`}
                    >
                      {addedId === product.id ? '✓ أُضيف' : 'أضف للسلة'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Tajir */}
        <div className="text-center mt-14">
          <a
            href="https://store.zid.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-gold px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-[#C9A84C]/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            شاهد جميع المنتجات على متجرنا
          </a>
          <p className="text-[#F5F0E8]/40 text-sm mt-3">
            متجرنا الرسمي على منصة تاجر — الدفع الآمن والشحن السريع مضمون
          </p>
        </div>
      </div>
    </section>
  );
}

export type { Product };
