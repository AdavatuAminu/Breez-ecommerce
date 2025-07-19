import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { cartItems, toggleCart, isCartOpen } = useCart();

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white p-6 text-black h-20">
      <div className="border-b border-gray-300 max-w-6xl mx-auto px-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <img src="/logo.svg" alt="logo" className="h-6 mb-5" />
            <div className="flex gap-6 text-md">
              {['collection', 'men', 'women', 'about', 'contact'].map((route) => (
                <NavLink
                  key={route}
                  to={`/${route}`}
                  className={({ isActive }) =>
                    `${isActive ? 'border-b-4 border-orange-500' : 'border-b-2 border-transparent'} pb-7 hover:border-orange-300 capitalize`
                  }
                >
                  {route}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 mb-5 relative">
            {/* Cart icon */}
            <span onClick={toggleCart} className="cursor-pointer relative">
              <img src="/icon-cart.svg" alt="cart" className="h-5 w-5" />
              {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full">
                  {totalQty}
                </span>
              )}
            </span>

            {/* Cart Modal */}
            {isCartOpen && (
              <div className="absolute top-10 right-0 bg-white shadow-xl p-4 rounded-lg w-80 z-50">
                <h3 className="font-bold border-b pb-2 mb-2">Cart</h3>
                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-500">Your cart is empty.</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <img src={item.image} className="h-12 w-12 rounded" alt="thumb" />
                      <div>
                        <p className="text-sm">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          ${item.price} x {item.quantity}{' '}
                          <span className="font-bold text-black ml-2">
                            ${item.price * item.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Avatar with orange border on hover */}
            <span className="h-[40px] w-[40px] rounded-full border-2 border-transparent hover:border-orange-500 transition duration-200">
              <img src="/image-avatar.png" alt="profile" className="rounded-full" />
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
