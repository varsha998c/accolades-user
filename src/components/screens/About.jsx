import React, { useState } from "react";
import { styled } from "styled-components";

function About() {
    const [data, setData] = useState([
        {
            id: 1,
            image: require("../../assets/images/images.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 2,
            image: require("../../assets/images/images.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 3,
            image: require("../../assets/images/images.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 4,
            image: require("../../assets/images/images.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 5,
            image: require("../../assets/images/images.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 6,
            image: require("../../assets/images/images.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
    ]);
    return (
        <>
            <Container>
                <Pink></Pink>
                <Section className="wrapper">
                    <AboutContainer>
                        <Content
                            className="card"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "50%",
                            }}
                        >
                            <Heading>About Us</Heading>
                            <Description>
                                The ultimatum of our successful company is to
                                adequately provide our prospective clients with
                                the required service that they promptly demand
                                from us. To procure the desired result we
                                earnestly strive with all our collaborative
                                effort. It’s our genuine commitment and ultimate
                                responsibility to amend the success rate for all
                                our specific clients.
                            </Description>
                        </Content>
                        <ImgContainer>
                            <img
                                src={require("../../assets/images/download.jpg")}
                                alt="image"
                            />
                        </ImgContainer>
                    </AboutContainer>
                    <Work>Our Works</Work>
                    <Div
                        className="card"
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
                            </Contents>
                        ))}
                    </Div>
                </Section>
            </Container>
        </>
    );
}

export default About;
const Div = styled.div`
    @media all and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr !important;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: 1fr !important;
    }
`;
const Container = styled.div`
    padding: 120px 0 40px;
    background: #edeae7;
`;
const Pink = styled.div`
    position: absolute;
    width: 510px;
    height: 510px;
    left: 394px;
    top: 34px;
    background: #d88f46;
    opacity: 0.56;
    filter: blur(200px);
    @media all and (max-width: 1080px) {
        left: 261px;
    }
    @media all and (max-width: 769px) {
        left: 131px;
    }
    @media all and (max-width: 640px) {
        left: -110px;
    }
    @media all and (max-width: 480px) {
        width: 475px;
        height: 380px;
    }
    @media all and (max-width: 360px) {
        width: 435px;
    }
`;
const Section = styled.div``;
const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media all and (max-width: 1080px) {
        flex-direction: column;
    }
`;
const Content = styled.div`
    @media all and (max-width: 980px) {
        width: 100% !important;
    }
`;
const Heading = styled.h1`
    color: #ee960a;
    font-family: -webkit-body;
    font-size: 46px;
    margin-bottom: 30px;
    @media all and (max-width: 640px) {
        font-size: 40px;
    }
    @media all and (max-width: 480px) {
        font-size: 36px;
    }
`;
const Description = styled.p`
    width: 90%;
    font-size: 20px;
    color: #000;
    font-family: -webkit-body;
    line-height: 1.6rem;
    @media all and (max-width: 1080px) {
        width: 100%;
    }
    @media all and (max-width: 640px) {
        font-size: 16px;
    }
`;
const Contents = styled.div`
    border-radius: 8px;
    border: 2px solid #ccc;
    padding: 20px;
    cursor: pointer;
`;
const ImgContainer = styled.div`
    width: 500px;
    &:hover {
        transform: translate(10px, 30px);
    }
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 640px) {
        width: 458px;
    }
    @media all and (max-width: 480px) {
        width: 300px;
    }
`;
const Work = styled.div`
    font-size: 36px;
    margin-top: 60px;
    font-family: -webkit-body;
    color: #0ad99e;
    text-align: center;
    @media all and (max-width: 480px) {
        font-size: 30px;
    }
`;
const ImgsContainer = styled.div`
    &:hover {
        opacity: 0.9;
    }
`;
const Title = styled.h3`
    margin-top: 10px;
    font-size: 27px;
    font-family: -webkit-body;
    margin-bottom: 20px;
    color: #b38214;
    @media all and (max-width: 480px) {
        font-size: 24px;
    }
`;
const Paragraph = styled.p`
    font-size: 18px;
    font-family: -webkit-body;
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
