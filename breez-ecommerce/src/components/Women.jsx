import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Women() {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const product = {
            title: "Fall Limited Edition Sneakers",
            price: 125.00,
            quantity: count,
            image: "/image-product-1.jpg",
        };
        if (count > 0) {
            addToCart(product);
            setCount(0); // Reset count
        }
    };
    const [count, setCount] = useState(0);
    const [mainImage, setMainImage] = useState("/image-product-1.jpg");
    const [selectedIndex, setSelectedIndex] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

    const imageThumbnails = [
        "/image-product-1.jpg",
        "/image-product-2.jpg",
        "/image-product-3.jpg",
        "/image-product-4.jpg"
    ];

    return (
        <div className="flex justify-center items-center min-h-screen gap-35">
            {/* Left side */}
            <div className="flex flex-col items-center gap-4">
                {/* Top Image */}
                <div className="h-[400px] w-[400px]">
                    <img src={mainImage} alt="main display" className="rounded-xl w-full h-full object-cover" />
                </div>

                {/* Bottom Images */}
                <div className="flex gap-7">
                    {imageThumbnails.map((img, index) => (
                        <div
                            key={index}
                            className={`relative h-[80px] w-[80px] rounded-xl cursor-pointer overflow-hidden 
        ${selectedIndex === index ? 'border-2 border-orange-500' : 'border-2 border-transparent'}`}
                            onClick={() => {
                                setMainImage(img);
                                setSelectedIndex(index);
                            }}
                        >
                            <img
                                src={img}
                                alt={`thumb-${index}`}
                                className="rounded-xl w-full h-full object-cover"
                            />

                            {/* Gray hover overlay */}
                            {selectedIndex !== index && (
                                <div className="absolute inset-0 hover:bg-gray-300/50 transition duration-200 rounded-xl" />
                            )}
                        </div>
                    ))}
                </div>

            </div>

            {/* Right side */}
            <div className="flex flex-col items-start gap-4">
                <h1 className="font-bold text-left">SNEAKER COMPANY</h1>
                <h2 className="font-bold text-[50px] text-left leading-none">Fall Limited Edition <br />Sneakers</h2>
                <p className="text-left">This low-profile sneakers are your perfect casual wear <br />
                    companion. Featuring a durable rubber outer sole, they'll <br />
                    withstand everything the weather can offer.</p>

                <div className="flex gap-4 font-bold text-left ">
                    <h3 className="text-2xl">$125.00</h3>
                    <span className="flex items-center justify-center bg-black px-2 py-1 text-white rounded text-xs">50%</span>
                </div>
                <span className="font-bold text-left line-through"><h1>$250.00</h1></span>

                <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 w-full md:w-40">
              <button onClick={() => setCount(count > 0 ? count - 1 : 0)} className="font-bold text-lg text-orange-500">-</button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)} className="font-bold text-lg text-orange-500">+</button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex bg-orange-500 hover:bg-orange-200 justify-center items-center px-10 py-3 gap-5 rounded-xl text-white font-bold w-full md:w-auto"
            >
              <img src="/icon-cart.svg" alt="cart" />
              <span className='text-black'>Add to cart</span>
            </button>
          </div>
            </div>
        </div>
    );
}
