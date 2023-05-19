import React from "react";
import { styled } from "styled-components";
import { FiHome } from "react-icons/fi";
import { MdRoundaboutRight } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";

function HamburgerModal({ hamburger, setHamburger }) {
    return (
        <>
            {hamburger && (
                <Container>
                    <Section className="wrapper">
                        <RightSection>
                            <NavItem>
                                <a href="">
                                    <ImgContainer
                                        onClick={() => setHamburger(!hamburger)}
                                    >
                                        <img
                                            src={
                                                require("../../assets/images/cancel.svg")
                                                    .default
                                            }
                                            alt="close"
                                        />
                                    </ImgContainer>
                                </a>
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
                </Container>
            )}
        </>
    );
}

export default HamburgerModal;
const Container = styled.div`
    width: 200px;
    height: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    background-color: #1d9f9a;
    overflow-x: hidden;
    transition: 0.9s;
    padding: 20px;
    transition: ease-in;
`;

const Section = styled.div``;
const RightSection = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const NavItem = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
        text-transform: uppercase;
        display: flex;
        color: #fff;
        &:hover {
            color: #000;
        }
    }
`;
const ImgContainer = styled.div`
    cursor: pointer;
    width: 40px;
    background-color: #fff;
    img {
        width: 100%;
        display: block;
    }
`;
const Item = styled.div`
    margin-left: 5px;
`;
