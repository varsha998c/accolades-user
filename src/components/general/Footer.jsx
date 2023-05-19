import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
    return (
        <BackgroundWrap>
            <Pink></Pink>
            <Container className="wrapper">
                <TopSection>
                    <SubBox>
                        <MainBox>
                            <Details>
                                <LogoContainer to="/">
                                    <img
                                        src={require("../../assets/images/logo.png")}
                                        alt="logo"
                                    />
                                </LogoContainer>
                                <Address>
                                    No.32/3071 – B | First Floor | Anjiparambil
                                    Building | Ponnurunni | NH Bypass | Vyttila
                                    | Kochi – 682 019
                                </Address>
                            </Details>
                        </MainBox>

                        <ContactSection>
                            <Title>Contact</Title>
                            <Phone href="tel:+91 0000 000 000">
                                +91 0000 000 000
                            </Phone>
                            <Mail href="mailto:abc@sample.com">
                                abc@sample.com
                            </Mail>
                        </ContactSection>
                    </SubBox>
                </TopSection>
                <BottonSection>
                    <Left>
                        Copyright 2023 | All Rights Reserved | Powered by
                        Accolades Media
                    </Left>
                    <SocialMedia>
                        <a
                            href="https://www.facebook.com/AccoladesMedia/"
                            target="_blank"
                        >
                            <Media>
                                <Icon
                                    src={
                                        require("../../assets/images/insta.svg")
                                            .default
                                    }
                                    alt="Instagram"
                                />
                            </Media>
                        </a>
                        <a
                            href="https://www.facebook.com/AccoladesMedia/"
                            target="_blank"
                        >
                            <Media>
                                <Icon
                                    src={
                                        require("../../assets/images/fb.svg")
                                            .default
                                    }
                                    alt="facebook"
                                />
                            </Media>
                        </a>
                        <a
                            href="https://www.facebook.com/AccoladesMedia/"
                            target="_blank"
                        >
                            <Media>
                                <Icon
                                    src={
                                        require("../../assets/images/twitter.svg")
                                            .default
                                    }
                                    alt="Twitter"
                                />
                            </Media>
                        </a>
                        <a
                            href="https://www.facebook.com/AccoladesMedia/"
                            target="_blank"
                        >
                            <Media>
                                <Icon
                                    src={
                                        require("../../assets/images/linkedin.svg")
                                            .default
                                    }
                                    alt="LinkedIn"
                                />
                            </Media>
                        </a>
                        <a
                            href="https://www.facebook.com/AccoladesMedia/"
                            target="_blank"
                        >
                            <Media className="media">
                                <Icon
                                    src={
                                        require("../../assets/images/youtube.svg")
                                            .default
                                    }
                                    alt="Youtube"
                                />
                            </Media>
                        </a>
                    </SocialMedia>
                </BottonSection>
            </Container>
        </BackgroundWrap>
    );
}

export default Footer;

const BackgroundWrap = styled.div`
    position: relative;
    background-color: #2a2a2a;
`;
const Container = styled.div`
    padding: 60px 0;
    box-sizing: border-box;
    padding-bottom: 20px;
`;
const Pink = styled.div`
    position: absolute;
    width: 510px;
    height: 214px;
    left: 394px;
    top: 60px;
    background: #62dfe1;
    opacity: 0.56;
    filter: blur(200px);
    @media all and (max-width: 980px) {
        width: 375px;
    }
    @media all and (max-width: 768px) {
        left: 266px;
    }
    @media all and (max-width: 640px) {
        left: 62px;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const TopSection = styled.div``;
const MainBox = styled.div``;
const SubBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Details = styled.div``;
const LogoContainer = styled(Link)`
    display: block;
    width: 170px;
    cursor: pointer;
    @media all and (max-width: 480px) {
        width: 150px;
    }
`;

const Address = styled.p`
    margin-top: 20px;
    font-size: 16px;
    font-family: -webkit-body;
    max-width: 400px;
    line-height: 1.5rem;
    color: #fff;
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    color: #fff;
    font-family: -webkit-body;
    @media all and (max-width: 480px) {
        font-size: 16px;
    }
    @media all and (max-width: 360px) {
        margin-top: 40px;
    }
`;

const ContactSection = styled.div``;
const Phone = styled.a`
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
    color: #fff;
    width: 100%;
    font-family: -webkit-body;
    cursor: pointer;
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
const Mail = styled.a`
    font-size: 18px;
    color: #fff;
    width: 100%;
    font-family: -webkit-body;
    cursor: pointer;
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
const SocialMedia = styled.ul`
    display: flex;
    align-items: center;
`;
const Media = styled.li`
    height: 30px;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    &:last-child {
        margin-right: 0;
    }
    &.media {
    }
`;
const Icon = styled.img`
    display: block;
`;
const BottonSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-family: -webkit-body;
    padding: 40px 0 20px;
    box-sizing: border-box;
    @media all and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const Left = styled.span`
    display: block;
    color: #fff;
    font-size: 16px;
    font-family: -webkit-body;
    @media all and (max-width: 640px) {
        text-align: center;
        margin-top: 40px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
