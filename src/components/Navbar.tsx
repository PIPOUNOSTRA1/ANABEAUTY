import { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'منتجاتنا', href: '#products' },
    { label: 'من نحن', href: '#about' },
    { label: 'الشحن والتوصيل', href: '#shipping' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080F1E]/95 backdrop-blur-md shadow-lg shadow-[#C9A84C]/10 border-b border-[#C9A84C]/20'
          : 'bg-transparent'
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-[#C9A84C] text-[#080F1E] text-center py-2 text-sm font-bold">
        🎁 شحن مجاني لجميع دول الخليج على الطلبات فوق 50 ريال &nbsp;|&nbsp; الدفع عند الاستلام متاح ✓
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col items-center group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-[#080F1E] text-xl font-black shadow-lg">
                ن
              </div>
              <div>
                <p className="gold-text font-black text-xl leading-none amiri-font">نخبة الخليج</p>
                <p className="text-[#C9A84C]/60 text-xs leading-none tracking-widest">NUKHBAT AL KHALEEJ</p>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F5F0E8]/80 hover:text-[#C9A84C] transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button
              onClick={onCartOpen}
              className="relative p-2.5 rounded-full border border-[#C9A84C]/30 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -left-1 w-5 h-5 bg-[#C9A84C] text-[#080F1E] text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Shop Now CTA */}
            <a
              href="https://store.zid.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block btn-gold px-5 py-2.5 rounded-full text-sm font-bold"
            >
              تسوق الآن
            </a>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 text-[#C9A84C]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0C1B33]/95 backdrop-blur-md border-t border-[#C9A84C]/20 py-4 rounded-b-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-[#F5F0E8]/80 hover:text-[#C9A84C] hover:bg-[#C9A84C]/5 transition-colors duration-200 font-medium border-b border-[#C9A84C]/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-3">
              <a
                href="https://store.zid.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full block text-center px-5 py-3 rounded-full text-sm font-bold"
              >
                تسوق الآن على تاجر
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
