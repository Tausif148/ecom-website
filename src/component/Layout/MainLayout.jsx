import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "../Home";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Home />
            <Footer />
        </>
    )
}

export default MainLayout;