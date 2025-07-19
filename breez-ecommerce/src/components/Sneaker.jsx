export default function Sneaker() {
    return (
        <div className="flex justify-center items-center min-h-screen gap-35">
            {/* Left side */} 
            <div className="flex flex-col items-center gap-4">     
               {/* Top Image */}      
            <div className="h-[400px] w-[400px]">
                <img src="/image-product-1.jpg" alt="front image" className="rounded-xl"></img>
            </div>
                {/* Buttom Images */} 
            <div className="flex gap-7">
            <div className="h-[80px] w-[80px]">
                <img src="/image-product-1.jpg" alt="highlight-1" className="rounded-xl"></img>
            </div>
            <div className="h-[80px] w-[80px]">
                <img src="/image-product-2.jpg" alt="highlight-1" className="rounded-xl"></img>
            </div>
            <div className="h-[80px] w-[80px]">
                <img src="/image-product-3.jpg" alt="highlight-1" className="rounded-xl"></img>
            </div>
            <div className="h-[80px] w-[80px]">
                <img src="/image-product-4.jpg" alt="highlight-1" className="rounded-xl"></img>
            </div>
            </div>
            </div> 
                {/* Right side */} 
            <div className="flex flex-col items-start gap-4">
                <h1 className="font-bold text-left">SNEAKER COMPANY</h1>
                <h2 className="font-bold text-[50px] text-left leading-none">Fall Limited Edition <br />Sneakers</h2>
                <p className="text-left">This low-profile sneakers are your perfect casual wear <br />
                    companion. Feauturing a durable rubber outer sole, they'll <br />
                    withstand everything the weather can offer.</p>

                <div className="flex gap-4 font-bold text-left ">
                    <h3 className="text-2xl">$125.00</h3>
                    <span className="flex items-center justify-center bg-black px-2 py-1 text-white rounded text-xs">50%</span>
                    </div>
                <span className="font-bold text-left line-through"><h1>$250.00</h1></span>
                {/* cart Counter */} 
                
                {/* Add to cart */} 
                <div className="flex bg-orange-500 justify-center items-center px-10 py-3 gap-5 rounded-xl">
                    <img src="/icon-cart.svg"></img>
                    <span className="font-bold">Add to cart</span>
                </div>
            </div>
        </div>
    );
}