import Breadcrumbs from "../Breadcrumbs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/productCardSlice";
import { ProductCard } from "../ProductCard";

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    const productsSelector = useSelector((state) => state.productCardStore.products);
    // console.log("Products Selector:", productsSelector);

    return (
        <>
            <section className="bg-white py-10 antialiased md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    {/* Breadcrumbs */}
                    <Breadcrumbs />
                    {/* Product Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            productsSelector.map((product) => (
                                <ProductCard key={product.id} data={product} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductList;




