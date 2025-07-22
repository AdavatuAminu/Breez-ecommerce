import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

function Header() {
    const { cartItems, toggleCart, isCartOpen } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const menuLinks = ['collections', 'men', 'women', 'about', 'contact'];

    const Navigation = () => (
        <nav className="flex justify-between items-center w-full">
            {/* Left Section */}
            <div className="flex items-center gap-4 md:gap-2 md:ml-0 ml-[-1rem]">
                {/* Menu Icon for Mobile */}
                <img
                    src="/icon-menu.svg"
                    alt="menu"
                    className="h-4 md:hidden cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(true)}
                />
                <img src="/logo.svg" alt="logo" className="h-6" />

                {/* Desktop NavLinks */}
                <div className="hidden md:flex gap-6 text-md ml-8">
                    {menuLinks.map((route) => (
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

            {/* Right Section */}
            <div className="flex items-center gap-6 md:gap-8 md:mr-0 mr-[-0.5rem] relative">
                <span onClick={toggleCart} className="cursor-pointer relative">
                    <img src="/icon-cart.svg" alt="cart" className="h-5 w-5" />
                    {totalQty > 0 && (
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full">
                            {totalQty}
                        </span>
                    )}
                </span>

                <span className="h-[40px] w-[40px] rounded-full border-2 border-transparent hover:border-orange-500 transition duration-200">
                    <img src="/image-avatar.png" alt="profile" className="rounded-full" />
                </span>

                {isCartOpen && (
                    <div className="absolute top-10 right-0 bg-white shadow-xl p-4 rounded-lg w-80 z-50 h-50">
                        <h3 className="font-bold border-b pb-2 mb-2 pr-55">Cart</h3>
                        {cartItems.length === 0 ? (
                            <div className="flex justify-center items-center h-[150px]">
                                <p className="text-sm text-gray-500">Your cart is empty.</p>
                            </div>
                        ) : (
                            cartItems.map((item, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <img src={item.image} className="h-12 w-12 rounded" alt="thumb" />
                                    <div className="text-left">
                                        <p className="text-sm">{item.title}</p>
                                        <p className="text-sm text-gray-500">
                                            ${item.price} x {item.quantity}{' '}
                                            <span className="font-bold text-black ml-2">
                                                ${item.price * item.quantity}
                                            </span>
                                        </p>
                                    </div>
                                    <div><img src='/icon-delete.svg' alt='delete' /></div>
                                </div>
                            ))
                        )}
                        {cartItems.length > 0 && (
                            <button className="bg-orange-500 p-3 rounded-xl font-bold justify-center items-center mt-5 w-full">
                                Checkout
                            </button>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );

    const MobileMenu = () => (
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-6 pr-30">
                <button className="mb-6 pr-25" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                </button>
                <ul className="flex flex-col gap-6 font-bold text-lg text-left">
                    {menuLinks.map((route) => (
                        <li key={route}>
                            <NavLink
                                to={`/${route}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="capitalize hover:text-orange-500"
                            >
                                {route}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white p-6 text-black h-20">
            {/* Mobile View */}
            <div className="md:hidden px-4">
                <Navigation />
                <MobileMenu />
            </div>

            {/* Desktop View */}
            <div className="hidden md:block border-b border-gray-300 max-w-6xl mx-auto px-6">
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
