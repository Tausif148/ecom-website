const ProductCard = () => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow-lg hover:-translate-y-1 duration-300">

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden rounded-lg bg-gray-50">
        <img
          className="mx-auto h-full object-contain transition-transform duration-300 group-hover:scale-110"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
          alt="product"
        />

        {/* Discount Badge */}
        {/* <span className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
          35% OFF
        </span> */}
      </div>

      {/* Content */}
      <div className="pt-4">

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
          Apple iMac 27" Retina Display M3 Max
        </h3>

        {/* Rating */}
        {/* <div className="mt-2 flex items-center gap-1 text-sm text-gray-600">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-400">(455)</span>
        </div> */}

        {/* Features */}
        {/* <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded">🚚 Fast Delivery</span>
          <span className="bg-gray-100 px-2 py-1 rounded">💰 Best Price</span>
        </div> */}

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between">

          {/* Price */}
          <div>
            <p className="text-lg font-bold text-gray-900">$1,699</p>
            <p className="text-xs text-gray-400 line-through">$2,099</p>
          </div>

          {/* Button */}
          <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
            Add to cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;