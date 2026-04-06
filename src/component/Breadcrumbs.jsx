const Breadcrumbs = () => {
    return (
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            {/* Left Section */}
            <div>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600">

                        {/* Home */}
                        <li className="flex items-center">
                            <a
                                href="#"
                                className="flex items-center gap-1 font-medium hover:text-blue-600 transition"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>

                        {/* Arrow */}
                        <li>
                            <span className="text-gray-400">/</span>
                        </li>

                        {/* Products */}
                        <li>
                            <a
                                href="#"
                                className="font-medium hover:text-blue-600 transition"
                            >
                                Products
                            </a>
                        </li>

                        {/* Arrow */}
                        <li>
                            <span className="text-gray-400">/</span>
                        </li>

                        {/* Current Page */}
                        <li className="font-semibold text-gray-900">
                            All Products
                        </li>
                    </ol>
                </nav>

                {/* Heading */}
                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                    All Products
                </h2>

                {/* Subtext (optional - makes it more attractive) */}
                <p className="text-sm text-gray-500">
                    Browse all available products in this category
                </p>
            </div>

        </div>
    );
};

export default Breadcrumbs;