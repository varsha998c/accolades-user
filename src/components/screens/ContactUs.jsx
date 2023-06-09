import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function ContactUs() {
    return (
        <>
            <Container>
                <Pink></Pink>
                <Section className="wrapper">
                    <Div>
                        <Left>
                            <Title>Revealing our Strategic Proficiency</Title>
                            <Description>
                                We tenderly place our whole soul to comfortably
                                accommodate our clients in their advertising
                                needs. As a top-notch digital marketing company
                                in kerala and mumbai, we meticulously maintain
                                unique business acumen. We carefully look at
                                your iconic brand, apprehend your core audience
                                and adequately prepare a tailor-made plan to
                                subtly shift the trajectory of your brand
                                towards more economic prosperity. We act
                                appropriately to your exact requirements and add
                                top-rated techniques to accomplish precisely
                                your marketing objectives. And it’s our assured
                                confidence that we will instantly make you
                                comfortable with our working exposure and
                                satisfactory result.
                            </Description>
                            <Button to="/contact">Contact Us</Button>
                        </Left>
                        <Right>
                            <ImgContainer>
                                <img
                                    src={require("../../assets/images/child.png")}
                                    alt="image"
                                />
                            </ImgContainer>
                        </Right>
                    </Div>
                </Section>
            </Container>
        </>
    );
}

export default ContactUs;
const Container = styled.div`
    padding: 50px 0;
    background: #f4f2f2;
    position: relative;
`;
const Pink = styled.div`
    position: absolute;
    width: 510px;
    height: 510px;
    left: 394px;
    top: 34px;
    background: #c471ed;
    opacity: 0.56;
    filter: blur(200px);
    @media all and (max-width: 980px) {
        width: 375px;
    }
    @media all and (max-width: 768px) {
        left: 268px;
        top: 69px;
    }
    @media all and (max-width: 640px) {
        left: 45px;
        height: 395px;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Section = styled.div`
    display: flex;
    flex-direction: column;
`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Title = styled.h3`
    font-size: 36px;
    width: 60%;
    color: #59b8b4;
    font-family: -webkit-body;
    margin-bottom: 20px;
    @media all and (max-width: 1280px) {
        width: 80%;
    }
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
    @media all and (max-width: 360px) {
        font-size: 25px;
    }
`;
const Description = styled.p`
    width: 80%;
    font-size: 18px;
    color: #111b1a;
    margin-bottom: 40px;
    font-family: -webkit-body;
    @media all and (max-width: 1280px) {
        width: 90%;
    }
    @media all and (max-width: 480px) {
        font-size: 16px;
        width: 100%;
    }
`;
const Button = styled(Link)`
    padding: 10px 20px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
    background-color: #9048d4;
    &:hover {
        background-color: #af8ad2;
    }
`;
const Right = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const ImgContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
