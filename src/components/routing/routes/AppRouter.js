import React from "react";
import Header from "../../general/Header";
import Home from "../../screens/Home";
import { Route, Routes } from "react-router";
import About from "../../screens/About";
import Services from "../../screens/Services";
import ServiceSection from "../../screens/ServiceSection";
import GallerySection from "../../screens/GallerySection";
import Contact from "../../includes/Contact";
import Footer from "../../general/Footer";

function AppRouter() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServiceSection />} />
                <Route path="/gallery" element={<GallerySection />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default AppRouter;
