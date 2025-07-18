export default function Sneaker() {
    return (
        <div className="flex flex-col items-start gap-4">
            <span className="font-bold text-left"><h1>SNEAKER COMPANY</h1></span>
            <span className="font-bold text-[50px] text-left leading-none"><p>Fall Limited Edition <br />Sneakers</p></span>
            <span className="text-left"><p>This low-profile sneakers are your perfect casual wear <br />
            companion. Feauturing a durable rubber outer sole, they'll <br />
            withstand everything the weather can offer.</p></span>
            <span className="flex gap-4 font-bold text-left ">
                <h1 className="text-xl">$125.00</h1>
                <h2 className="flex items-center justify-center bg-black px-3 text-white rounded text-sm">50%</h2></span>
            <span className="font-bold text-left line-through"><h1>$250.00</h1></span>
        </div>
    );
}