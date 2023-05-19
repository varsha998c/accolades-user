import React from "react";
import { styled } from "styled-components";

function Services() {
    return (
        <>
            <Container>
                <Heading>services</Heading>
                <Section className="wrapper">
                    <Div>
                        <ImgContainer>
                            <img
                                src={require("../../assets/images/digital (1).png")}
                                alt="image"
                            />
                        </ImgContainer>
                        <Title>Digital marketing</Title>
                        <Description>
                            Get ROI through digital marketing services, drive
                            successful online marketing campaigns with our
                            digital marketing services.
                        </Description>
                    </Div>
                    <Div>
                        <ImgContainer>
                            <img
                                src={require("../../assets/images/digital (1).png")}
                                alt="image"
                            />
                        </ImgContainer>
                        <Title>Digital marketing</Title>
                        <Description>
                            Get ROI through digital marketing services, drive
                            successful online marketing campaigns with our
                            digital marketing services.
                        </Description>
                        <Button href="/services">More</Button>
                    </Div>
                    <Div>
                        <ImgContainer>
                            <img
                                src={require("../../assets/images/digital (1).png")}
                                alt="image"
                            />
                        </ImgContainer>
                        <Title>Digital marketing</Title>
                        <Description>
                            Get ROI through digital marketing services, drive
                            successful online marketing campaigns with our
                            digital marketing services.
                        </Description>
                    </Div>
                </Section>
            </Container>
        </>
    );
}

export default Services;
const Container = styled.div`
    padding: 50px 0;
    background-color: aliceblue;
    height: 80vh;
    @media all and (max-width: 980px) {
        height: auto;
    }
`;
const Heading = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
    color: #59b8b4;
    font-family: -webkit-body;
    text-transform: capitalize;
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 980px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
`;
const Div = styled.div`
    width: 30%;
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 10px;
    height: 370px;
    &:hover {
        background-color: #ddd;
    }
    @media all and (max-width: 1280px) {
        height: 408px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
        margin-bottom: 30px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;
const ImgContainer = styled.div`
    width: 190px;
    margin: 0 auto;
    img {
        width: 100%;
        display: block;
    }
`;
const Title = styled.h4`
    text-align: center;
    font-size: 20px;
    color: #05dbe8;
    font-family: -webkit-body;
    margin-bottom: 20px;
`;
const Description = styled.p`
    text-align: center;
    font-size: 15px;
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
const Button = styled.a`
    width: 80px;
    height: 30px;
    color: #000;
    background-color: antiquewhite;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        color: antiquewhite;
        background-color: #000;
        border-radius: 5px;
    }
`;
