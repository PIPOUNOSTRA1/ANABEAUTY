import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import TrustBand from './components/TrustBand';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Shipping from './components/Shipping';
import Contact from './components/Contact';
import CartDrawer, { CartItem } from './components/CartDrawer';
import Footer from './components/Footer';
import { Product } from './components/Products';

// Toast notification
function Toast({ show, message }: { show: boolean; message: string }) {
  if (!show) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] toast">
      <div className="bg-[#0C1B33] border border-[#C9A84C]/40 rounded-xl px-6 py-3 shadow-xl shadow-[#C9A84C]/20 flex items-center gap-3">
        <span className="text-[#C9A84C] text-xl">✓</span>
        <span className="text-[#F5F0E8] text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

// WhatsApp floating button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/96891234567?text=مرحباً، أريد الاستفسار عن منتجاتكم"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-transform duration-300"
      title="تواصل عبر واتساب"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`✨ تمت إضافة "${product.name}" إلى السلة`);
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQty = (id: number, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-[#080F1E] text-[#F5F0E8]">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <TrustBand />
        <About />
        <Testimonials />
        <Shipping />
        <Contact />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemove}
        onUpdateQty={handleUpdateQty}
      />

      <Toast show={toast.show} message={toast.message} />
      <WhatsAppButton />
    </div>
  );
}
