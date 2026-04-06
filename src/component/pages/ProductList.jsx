import Breadcrumbs from "../Breadcrumbs";
import ProductCard from "../ProductCard";

const ProductList = () => {
    return (
        <>
            <section className="bg-white py-10 antialiased md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    {/* Breadcrumbs */}
                    <Breadcrumbs />
                    {/* Product Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductList;