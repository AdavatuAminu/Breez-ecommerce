import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Women() {
    const { addToCart } = useCart();
    const [count, setCount] = useState(0);
    const [mainImage, setMainImage] = useState("/image-product-1.jpg");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
    );

    // Track viewport width to gate popup behavior
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const handler = (e) => setIsDesktop(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const imageThumbnails = [
        "/image-product-1.jpg",
        "/image-product-2.jpg",
        "/image-product-3.jpg",
        "/image-product-4.jpg"
    ];

    const handleAddToCart = () => {
        const product = {
            title: "Fall Limited Edition Sneakers",
            price: 125.00,
            quantity: count,
            image: "/image-product-1.jpg",
        };
        if (count > 0) {
            addToCart(product);
            setCount(0);
        }
    };

    const handleNext = () => {
        const nextIndex = (selectedIndex + 1) % imageThumbnails.length;
        setMainImage(imageThumbnails[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (selectedIndex - 1 + imageThumbnails.length) % imageThumbnails.length;
        setMainImage(imageThumbnails[prevIndex]);
        setSelectedIndex(prevIndex);
    };

    return (
        <div className="flex md:flex-row flex-col md:items-start md:gap-30 gap-6 pt-6 md:mt-20 w-full">
            {/* Left side */}
            <div className="flex flex-col items-center gap-4">
                {/* Top Image */}
               <div
                    className={`relative w-screen max-w-none md:w-[400px] md:h-[400px] ${isDesktop ? 'cursor-pointer' : 'cursor-default'}`}
                    onClick={isDesktop ? () => setIsPopupOpen(true) : undefined}
                >
                    <img
                        src={mainImage}
                        alt="main display"
                        className="rounded-xl w-full h-full object-cover"
                        draggable={false}
                    />

                    {/* Mobile-only nav arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow md:hidden"
                        aria-label="Previous image"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 stroke-current text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow md:hidden"
                        aria-label="Next image"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 stroke-current text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Bottom Thumbnails */}
                <div className="hidden md:flex gap-7">
                    {imageThumbnails.map((img, index) => (
                        <div
                            key={index}
                            className={`relative h-[70px] w-[70px] rounded-xl cursor-pointer overflow-hidden ${selectedIndex === index ? 'border-2 border-orange-500' : 'border-2 border-transparent'
                                }`}
                            onClick={() => {
                                setMainImage(img);
                                setSelectedIndex(index);
                            }}
                        >
                            <img src={img} alt={`thumb-${index}`} className="rounded-xl w-full h-full object-cover" />
                            <div
                                className={`absolute inset-0 rounded-xl transition duration-200 ${selectedIndex === index ? 'bg-gray-300/50' : 'hover:bg-gray-300/50'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-start gap-4">
                <h1 className="font-bold text-left">SNEAKER COMPANY</h1>
                <h2 className="font-bold text-[50px] text-left leading-none">
                    Fall Limited Edition <br />Sneakers
                </h2>
                <p className="text-left">
                    This low-profile sneakers are your perfect casual wear <br />
                    companion. Featuring a durable rubber outer sole, they'll <br />
                    withstand everything the weather can offer.
                </p>

                {/* Responsive Pricing Row */}
                <div className="w-full flex flex-col md:items-start gap-2 md:gap-0 md:block">
                    {/* Mobile: flex row */}
                    <div className="flex md:hidden items-center justify-between w-full">
                        {/* Left: $125 and 50% */}
                        <div className="flex items-center gap-4">
                            <p className="text-2xl font-bold text-black">$125.00</p>
                            <span className="bg-black text-white font-semibold px-2 py-1 rounded-md text-sm">
                                50%
                            </span>
                        </div>
                        {/* Right: Original price */}
                        <p className="text-gray-400 line-through font-medium text-sm">$250.00</p>
                    </div>

                    {/* Desktop: stacked layout */}
                    <div className="hidden md:flex flex-col gap-2 text-left">
                        <div className="flex items-center gap-4">
                            <p className="text-2xl font-bold text-black">$125.00</p>
                            <span className="bg-black text-white font-semibold px-2 py-1 rounded-md text-sm">
                                50%
                            </span>
                        </div>
                        <p className="text-gray-400 line-through font-medium text-sm">$250.00</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center items-center mt-4">
                    {/* Quantity Counter */}
                    <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 w-full max-w-xs md:w-40">
                        <button
                            onClick={() => setCount(count > 0 ? count - 1 : 0)}
                            className="font-bold text-lg text-orange-500"
                        >
                            -
                        </button>
                        <span>{count}</span>
                        <button
                            onClick={() => setCount(count + 1)}
                            className="font-bold text-lg text-orange-500"
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="flex bg-orange-500 hover:bg-orange-200 justify-center items-center px-10 py-3 gap-5 rounded-xl text-white font-bold w-full max-w-xs md:w-auto"
                    >
                        <img src="/icon-cart.svg" alt="cart" />
                        <span className="text-black">Add to cart</span>
                    </button>
                </div>

            </div>

            {/* Desktop-only Lightbox Popup */}
            {isDesktop && isPopupOpen && (
                <div className="fixed inset-0 z-50 bg-stone-800/70 flex justify-center items-center">
                    <div className="relative rounded-xl p-4">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute top-[-30px] right-[15px] text-orange-500 hover:text-black text-4xl"
                        >
                            ×
                        </button>

                        {/* Main popup image */}
                        <div className="w-[400px] h-[400px] relative">
                            <img src={mainImage} alt="popup" className="w-full h-full rounded-xl object-cover" />
                            <button
                                onClick={handlePrev}
                                className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow group"
                                aria-label="Previous image (lightbox)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 stroke-current text-gray-500 group-hover:text-orange-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow group"
                                aria-label="Next image (lightbox)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 stroke-current text-gray-500 group-hover:text-orange-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Thumbnails below */}
                        <div className="flex justify-center gap-6 mt-4">
                            {imageThumbnails.map((img, index) => (
                                <div
                                    key={index}
                                    className={`relative h-[70px] w-[70px] rounded-xl cursor-pointer overflow-hidden ${selectedIndex === index ? 'border-2 border-orange-500' : 'border-2 border-transparent'
                                        }`}
                                    onClick={() => {
                                        setMainImage(img);
                                        setSelectedIndex(index);
                                    }}
                                >
                                    <img src={img} alt={`thumb-${index}`} className="rounded-xl w-full h-full object-cover" />
                                    <div
                                        className={`absolute inset-0 rounded-xl transition duration-200 ${selectedIndex === index ? 'bg-gray-300/50' : 'hover:bg-gray-300/50'
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
