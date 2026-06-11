import { Product } from './Products';

interface CartItem extends Product {
  qty: number;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
}

export default function CartDrawer({ open, onClose, items, onRemove, onUpdateQty }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-96 bg-[#0C1B33] z-50 shadow-2xl transition-transform duration-500 flex flex-col ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#C9A84C]/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C9A84C]/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h2 className="text-[#F5F0E8] font-bold">سلة المشتريات</h2>
              <p className="text-[#C9A84C]/60 text-xs">{items.length} منتج</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#C9A84C]/10 text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-[#F5F0E8]/60 text-lg font-medium mb-2">سلتك فارغة</p>
              <p className="text-[#F5F0E8]/40 text-sm">أضف منتجات لتبدأ التسوق</p>
              <button
                onClick={onClose}
                className="mt-6 btn-gold px-6 py-2.5 rounded-full font-semibold text-sm"
              >
                تسوق الآن
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-[#080F1E]/60 border border-[#C9A84C]/15 rounded-xl p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[#F5F0E8] font-medium text-sm truncate">{item.name}</p>
                  <p className="text-[#C9A84C] font-bold">{item.price} ريال</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => item.qty > 1 ? onUpdateQty(item.id, item.qty - 1) : onRemove(item.id)}
                      className="w-6 h-6 bg-[#C9A84C]/15 rounded text-[#C9A84C] text-sm font-bold hover:bg-[#C9A84C]/30 transition-colors flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-[#F5F0E8] text-sm font-bold w-4 text-center">{item.qty}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 bg-[#C9A84C]/15 rounded text-[#C9A84C] text-sm font-bold hover:bg-[#C9A84C]/30 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-400/60 hover:text-red-400 transition-colors p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#C9A84C]/20 p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#F5F0E8]/60 text-sm">المجموع الفرعي</span>
              <span className="text-[#F5F0E8] font-bold">{total} ريال</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#F5F0E8]/60 text-sm">الشحن</span>
              <span className="text-green-400 text-sm font-semibold">
                {total >= 50 ? 'مجاني 🎁' : '5 ريال'}
              </span>
            </div>
            {total < 50 && (
              <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-lg p-2 mb-4 text-center">
                <p className="text-[#C9A84C] text-xs">
                  أضف <strong>{50 - total} ريال</strong> للحصول على شحن مجاني!
                </p>
              </div>
            )}
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#C9A84C]/15">
              <span className="text-[#F5F0E8] font-bold text-lg">الإجمالي</span>
              <span className="text-2xl font-black gold-text">{total + (total >= 50 ? 0 : 5)} ريال</span>
            </div>
            <a
              href="https://store.zid.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full block text-center py-3.5 rounded-xl font-bold shadow-lg"
            >
              إتمام الشراء عبر المتجر 🛍️
            </a>
            <p className="text-[#F5F0E8]/30 text-xs text-center mt-2">
              ستُحوَّل إلى متجرنا الرسمي على منصة تاجر
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export type { CartItem };
