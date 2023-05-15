import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { MdRoundaboutRight } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";

function Header() {
    return (
        <>
            <Components>
                <Section className="wrapper">
                    <LeftSection>
                        <a href="https://accoladesmedia.co.in">
                            <LogoContainer>
                                <img
                                    src={require("../../assets/images/logo.png")}
                                    alt="logo"
                                />
                            </LogoContainer>
                        </a>
                    </LeftSection>
                    <RightSection>
                        <NavItem>
                            <a href="/">
                                <FiHome />
                                <Item>home</Item>
                            </a>
                            <a href="/about">
                                <MdRoundaboutRight />
                                <Item>about</Item>
                            </a>
                            <a href="/services">
                                <MdOutlineMiscellaneousServices />
                                <Item>services</Item>
                            </a>
                            <a href="/gallery">
                                <RiGalleryLine />
                                <Item>gallery</Item>
                            </a>
                            <a href="/contact">
                                <MdContactPhone />
                                <Item>contact</Item>
                            </a>
                        </NavItem>
                    </RightSection>
                </Section>
            </Components>
        </>
    );
}

export default Header;
const Components = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    background: rgb(255, 255, 255);
    z-index: 999;
    height: 90px;
`;
const Section = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;
const LeftSection = styled.div`
    width: 50%;
`;
const LogoContainer = styled.div`
    width: 200px;
    cursor: pointer;
    img {
        width: 100%;
        display: block;
    }
`;
const RightSection = styled.div`
    width: 50%;
`;
const NavItem = styled.div`
    widows: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: #0c7470;
        display: flex;
        align-items: center;
        &:hover {
            color: #000;
        }
    }
`;
const Item = styled.div`
    text-transform: uppercase;
    color: #0c7470;
    font-size: 14px;
    margin-left: 5px;
    &:hover {
        color: #000;
    }
`;
