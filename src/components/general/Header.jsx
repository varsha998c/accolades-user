import React, { useState } from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { MdRoundaboutRight } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import HamburgerModal from "../modal/HamburgerModal";

function Header() {
    window.addEventListener("scroll", function () {
        var header = document.getElementById("content");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    const [hamburger, setHamburger] = useState(false);
    return (
        <>
            <HamburgerModal hamburger={hamburger} setHamburger={setHamburger} />
            <Components id="content" className="sticky">
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
                        <HamBurger onClick={() => setHamburger(!hamburger)}>
                            <Div className="one"></Div>
                            <Div className="two"></Div>
                            <Div className="three"></Div>
                        </HamBurger>
                    </RightSection>
                </Section>
            </Components>
        </>
    );
}

export default Header;
const HamBurger = styled.div`
    width: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    display: none;
    @media all and (max-width: 768px) {
        display: block;
    }
`;
const Div = styled.div`
    &.one {
        background-color: #0c7470;
        width: 20px;
        height: 2px;
    }
    &.two {
        background-color: #000;
        width: 20px;
        height: 2px;
        margin-top: 5px;
    }
    &.three {
        background-color: #0c7470;
        width: 20px;
        height: 2px;
        margin-top: 5px;
    }
`;
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
    @media all and (max-width: 1080px) {
        width: 40%;
    }
`;
const LogoContainer = styled.div`
    width: 200px;
    cursor: pointer;
    @media all and (max-width: 1080px) {
        width: 160px;
    }
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 360px) {
        width: 130px;
    }
`;
const RightSection = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1080px) {
        width: 60%;
    }
    @media all and (max-width: 768px) {
        justify-content: flex-end;
    }
`;
const NavItem = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        width: 100%;
    }
    @media all and (max-width: 768px) {
        display: none;
    }

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
