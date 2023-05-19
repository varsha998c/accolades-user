import React, { useState } from "react";
import { styled } from "styled-components";
import Enquiry from "../modal/Enquiry";

function ServiceSection() {
    const [modal, setModal] = useState(false);
    console.log(modal, "modal");
    const [data, setData] = useState([
        {
            id: 1,
            image: require("../../assets/images/images.jpg"),
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 2,
            image: require("../../assets/images/images.jpg"),
            title: "Web Development",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 3,
            image: require("../../assets/images/images.jpg"),
            title: "Graphic Designing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
    ]);
    return (
        <>
            <Enquiry modal={modal} setModal={setModal} />
            <Container id="service">
                <Pink></Pink>
                <Section className="wrapper">
                    <Work>Services</Work>
                    <Div
                        className="service"
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
                                <Title>{item.title}</Title>
                                <Paragraph>{item.description}</Paragraph>
                                <Button
                                    onClick={() => {
                                        setModal(!modal);
                                    }}
                                >
                                    Enquiry
                                </Button>
                            </Contents>
                        ))}
                    </Div>
                </Section>
            </Container>
        </>
    );
}

export default ServiceSection;
const Div = styled.div`
    @media all and (max-width: 980px) {
        grid-template-columns: 1fr 1fr !important;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: 1fr !important;
    }
`;
const Container = styled.div`
    padding: 120px 0 40px;
    background: #edeae7;
    @media all and (max-width: 640px) {
        padding-top: 70px;
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
const Button = styled.button`
    width: 170px;
    height: 45px;
    border-radius: 8px;
    font-size: 18px;
    background-color: #aac541;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    cursor: pointer;
    &:hover {
        background: #bdaa32;
    }
`;
const Contents = styled.div`
    border-radius: 8px;
    border: 2px solid #ccc;
    padding: 20px;
`;

const Work = styled.h2`
    font-size: 32px;
    margin-top: 60px;
    font-family: -webkit-body;
    color: #d87512;
    text-align: center;
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
`;
const ImgsContainer = styled.div``;
const Title = styled.h3`
    margin-top: 10px;
    font-size: 27px;
    font-family: -webkit-body;
    margin-bottom: 20px;
    color: #b38436;
    @media all and (max-width: 640px) {
        font-size: 23px;
    }
    @media all and (max-width: 480px) {
        font-size: 20px;
    }
`;
const Paragraph = styled.p`
    font-size: 18px;
    font-family: -webkit-body;
    @media all and (max-width: 640px) {
        font-size: 16px;
    }
`;
