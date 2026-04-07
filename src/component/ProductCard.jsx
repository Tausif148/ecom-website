import { useDispatch, useSelector } from "react-redux";
import { addToCart, removedToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ data }) => {
    const { id, title, price, discountPercentage, thumbnail, rating } = data;

    const dispatch = useDispatch();
    
    const cartItems = useSelector((state) => state.cartStore.items);
    const isInCart = cartItems.find((item) => item.id === id);

    //  Add to Cart
    const addToCartHandler = () => {
        const cartObj = {
            id,
            title,
            price,
            image: thumbnail,
            qty: 1
        };

        dispatch(addToCart(cartObj));   
    };

    //  Remove from Cart
    const removeCartHandler = () => {
        dispatch(removedToCart(id));
    };

    return (
        <div className="group rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow-lg hover:-translate-y-1 duration-300">

            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden rounded-lg bg-gray-50">
                <img
                    className="mx-auto h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    src={thumbnail}
                    alt="product"
                />

                <span className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                    {discountPercentage}% OFF
                </span>
            </div>

            {/* Content */}
            <div className="pt-4">
                <h3 className="text-sm font-semibold text-gray-900 hover:text-blue-600 line-clamp-2">
                    {title}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1 text-sm text-gray-600">
                    {[...Array(5)].map((_, index) => (
                        <span key={index}>
                            {index < Math.floor(rating) ? "⭐" : "☆"}
                        </span>
                    ))}
                    <span className="text-gray-400">({rating})</span>
                </div>

                {/* Features */}
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">🚚 Fast Delivery</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">💰 Best Price</span>
                </div>

                {/* Price + Button */}
                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <p className="text-lg font-bold text-gray-900">${price}</p>
                        <p className="text-xs text-gray-400 line-through">$2,099</p>
                    </div>

                    {
                        isInCart ? (
                            <button
                                onClick={removeCartHandler}
                                className="rounded-lg border border-red-600 px-4 py-1.5 text-red-600 hover:bg-red-600 hover:text-white transition"
                            >
                                Remove from cart
                            </button>
                        ) : (
                            <button
                                onClick={addToCartHandler}
                                className="rounded-lg border border-green-600 px-4 py-1.5 text-green-600 hover:bg-green-600 hover:text-white transition"
                            >
                                Add to cart
                            </button>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export { ProductCard };