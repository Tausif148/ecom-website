import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../../redux/counterSlice";

const Header = () => {
    const count = useSelector((store) => store.countStore.count
        // console.log(store.countStore.count);
    );

    const dispatch = useDispatch();

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <nav className="mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600 cursor-pointer">
                    <Link to="/">MyShop</Link>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 mx-6">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700">
                        Search
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-5">

                    {/* Menu */}
                    <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
                        <li className="hover:text-blue-600 cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">
                            <Link to="/products">Shop</Link>
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">
                            <Link to="/categories">Categories</Link>0
                        </li>
                        <li className="hover:text-blue-600 cursor-pointer">    <Link to="/contact">Contact</Link></li>
                    </ul>

                    {/* Cart practice */}
                    {/* <Link to="/cart" className="relative cursor-pointer">
                        Cart - {count}
                    </Link> */}

                    {/* <button onClick={() => dispatch(increament(1))} className="rounded-lg border border-blue-600 px-4 py-1.5 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                        Increament +
                    </button>
                    <button onClick={() => dispatch(decreament(1))} className="rounded-lg border border-blue-600 px-4 py-1.5 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                        Decreamnent -
                    </button> */}

                    {/* Cart  */}
                    <Link to="/cart" className="relative cursor-pointer">
                        Cart - 0
                    </Link>


                    {/* Login */}
                    <button className="rounded-lg border border-blue-600 px-4 py-1.5 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                        Login
                    </button>

                </div>
            </nav>

            {/* Mobile Search */}
            <div className="px-4 pb-3 md:hidden">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none"
                />
            </div>

        </header>
    );
};

export default Header;