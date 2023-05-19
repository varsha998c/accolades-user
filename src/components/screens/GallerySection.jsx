import React, { useState } from "react";
import { styled } from "styled-components";

function GallerySection() {
    const [data, setData] = useState([
        {
            id: 1,
            image: require("../../assets/images/images.jpg"),
        },
        {
            id: 2,
            image: "https://accoladesmedia.co.in/wp-content/uploads/2020/03/ADS.png",
        },
        {
            id: 3,
            image: "https://accoladesmedia.co.in/wp-content/uploads/english-cafe-creative.png",
        },
        {
            id: 4,
            image: "https://accoladesmedia.co.in/wp-content/uploads/schalewood-creative.png",
        },
        {
            id: 5,
            image: require("../../assets/images/images.jpg"),
        },
        {
            id: 6,
            image: require("../../assets/images/images.jpg"),
        },
        {
            id: 7,
            image: "https://accoladesmedia.co.in/wp-content/uploads/poster-01.png",
        },
        {
            id: 8,
            image: require("../../assets/images/images.jpg"),
        },
        {
            id: 9,
            image: "https://accoladesmedia.co.in/wp-content/uploads/poster-01.png",
        },
    ]);
    return (
        <>
            <Container>
                <Pink></Pink>
                <Section className="wrapper">
                    <Work>Gallery</Work>
                    <Div
                        style={{
                            display: "grid",
                            gap: "30px",

                            justifyContent: "space-between",
                            alignContent: "center",
                            alignItems: "center",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            marginTop: "30px",
                        }}
                    >
                        {data.map((item) => (
                            <Contents>
                                <ImgsContainer>
                                    <img src={item.image} alt="" />
                                </ImgsContainer>
                            </Contents>
                        ))}
                    </Div>
                </Section>
            </Container>
        </>
    );
}

export default GallerySection;
const Container = styled.div`
    padding: 120px 0 40px;
    background: #edeae7;

    @media all and (max-width: 768px) {
        padding-top: 60px;
    }
`;
const Pink = styled.div`
    position: absolute;
    width: 510px;
    height: 510px;
    left: 394px;
    top: 34px;
    background: #d87512;
    opacity: 0.56;
    filter: blur(200px);
    @media all and (max-width: 980px) {
        width: 379px;
    }
    @media all and (max-width: 768px) {
        left: 267px;
    }
    @media all and (max-width: 640px) {
        left: 106px;
    }
    @media all and (max-width: 480px) {
        left: -13px;
    }
    @media all and (max-width: 360px) {
        width: 335px;
    }
`;
const Section = styled.div``;
const Contents = styled.div`
    border-radius: 8px;
    border: 2px solid #ccc;
    padding: 20px;
    height: 240px;
`;
const Work = styled.div`
    font-size: 32px;
    margin-top: 60px;
    font-family: gordita_medium;
    color: #d87512;
    text-align: center;
`;
const Div = styled.div`
    @media all and (max-width: 768px) {
        grid-template-columns: 1fr 1fr !important;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: 1fr !important;
    }
`;
const ImgsContainer = styled.div`
    height: 200px;
    img {
        width: 100%;
        height: 100%;
        display: block;
    }
`;
