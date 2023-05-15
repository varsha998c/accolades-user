import React from "react";
import HomePage from "./HomePage";
import { styled } from "styled-components";
import Testimonials from "./Testimonials";
import Services from "./Services";
import ContactUs from "./ContactUs";

function Home() {
    return (
        <>
            <Container>
                <HomePage />
                <Testimonials />
                <Services />
                <ContactUs />
            </Container>
        </>
    );
}

export default Home;
const Container = styled.div``;
