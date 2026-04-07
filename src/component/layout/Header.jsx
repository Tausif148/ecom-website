import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { decreament, increament } from "../../redux/counterSlice";

const Header = () => {
    // counter functionality 
    // const count = useSelector((store) => store.countStore.count
    // console.log(store.countStore.count);
    // );
    const dispatch = useDispatch();

    // cart count functionality
    const cartItems = useSelector((state) => state.cartStore.items);
    // console.log(cartItems.length);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <nav className="mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600 cursor-pointer">
                    <NavLink to="/">MyShop</NavLink>
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
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600" : "hover:text-blue-600"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600" : "hover:text-blue-600"
                                }
                            >
                                Shop
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/categories"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600" : "hover:text-blue-600"
                                }
                            >
                                Categories
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600" : "hover:text-blue-600"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Cart practice */}
                    {/* <NavLink to="/cart" className="relative cursor-pointer">
                        Cart - {count}
                    </NavLink> */}

                    {/* <button onClick={() => dispatch(increament(1))} className="rounded-lg border border-blue-600 px-4 py-1.5 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                        Increament +
                    </button>
                    <button onClick={() => dispatch(decreament(1))} className="rounded-lg border border-blue-600 px-4 py-1.5 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                        Decreamnent -
                    </button> */}

                    {/* Cart  */}
                    <NavLink to="/cart" className={({ isActive }) =>
                        isActive ? "text-blue-600" : "hover:text-blue-600"
                    } >
                        Cart - ({cartItems.length})
                    </NavLink>


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