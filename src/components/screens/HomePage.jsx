import React from "react";
import { styled } from "styled-components";

function HomePage() {
    return (
        <Container>
            <Section className="wrapper">
                <LeftSection>
                    <Heading>
                        marketing insights & campaign worthy of your time and
                        attention
                    </Heading>
                    <Paragraph>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nam scelerisque lacus porta efficitur maximus.
                        Duis auctor varius metus eu pharetra. Orci varius
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Vivamus ut turpis ac quam
                        hendrerit aliquet sed eu neque. Phasellus nunc urna."
                    </Paragraph>
                </LeftSection>
                <RightSection>
                    <ImgContainer>
                        <img
                            src={require("../../assets/images/marketing.jpg")}
                            alt="marketing"
                        />
                    </ImgContainer>
                </RightSection>
            </Section>
        </Container>
    );
}

export default HomePage;
const Container = styled.div`
    padding: 120px 0 50px 0;
    height: 80vh;
    background-color: #146a6e0f;
    @media all and (max-width: 980px) {
        height: fit-content;
    }
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const LeftSection = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Heading = styled.h1`
    font-size: 45px;
    text-transform: uppercase;
    font-family: -webkit-body;
    color: #1d9f9a;
    width: 570px;
    margin-top: 90px;
    @media all and (max-width: 1280px) {
        font-size: 34px;
        margin-top: 0;
        width: 457px;
    }
    @media all and (max-width: 1080px) {
        width: 428px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
    @media all and (max-width: 360px) {
        font-size: 25px;
    }
`;
const Paragraph = styled.p`
    margin-top: 30px;
    width: 66%;
    font-size: 18px;
    color: #0c7470;
    font-family: -webkit-body;
    @media all and (max-width: 1280px) {
        width: 90%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;
const RightSection = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const ImgContainer = styled.div`
    width: 100%;
    @media all and (max-width: 980px) {
        margin-top: 30px;
    }
    img {
        width: 100%;
        display: block;
    }
`;
