import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

function ContactLegalForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [place, setPlace] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const [isError, setError] = useState(false);

    //to handle name change
    const onNameChange = (event) => {
        let value = event.target.value;
        value = value.replace(/[^A-Za-z, " "]/gi, "");
        setName(value);
    };

    //to handle phone number change events
    const onPhoneChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setPhone(e.target.value);
        }
        return phone;
    };

    const onEmailChange = (e) => {
        let str = e.target.value;
        setMail(e.target.value);

        if (
            /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(str) &&
            str.includes(".com")
        ) {
            setErrorMsg("");
        } else {
            setErrorMsg("Enter a valid email");
        }
    };

    const onPlaceChange = (e) => {
        setPlace(e.target.value);
    };

    return (
        <>
            <Container id="legal">
                <Pink></Pink>
                <div className="wrapper">
                    <BottomSection>
                        <LeftCover>
                            <Head>
                                <Title>Contact Details</Title>
                                <Description>
                                    Fill up the form and our team will get back
                                    to you with in 24 hours.
                                </Description>
                            </Head>

                            <Bottom>
                                <Details>
                                    No.32/3071 – B | First Floor | Anjiparambil
                                    Building | Ponnurunni | NH Bypass | Vyttila
                                    | Kochi – 682 019
                                </Details>
                                <PhoneNumber>
                                    <AiOutlinePhone />
                                    <Number href="tel:+91 0000 000 000">
                                        +91 0000 000 000
                                    </Number>
                                </PhoneNumber>
                                <Gmail>
                                    <AiOutlineMail />
                                    <Mail href="mailto:abc@sample.com">
                                        abc@sample.com
                                    </Mail>
                                </Gmail>
                                <LineDiv></LineDiv>
                                <SocialMedia>
                                    <SocMediaDiv
                                        href="https://www.facebook.com/AccoladesMedia/"
                                        target="_blank"
                                    >
                                        <CiFacebook />
                                    </SocMediaDiv>
                                    <SocMediaDiv
                                        href="https://www.facebook.com/AccoladesMedia/"
                                        target="_blank"
                                    >
                                        <AiFillTwitterCircle />
                                    </SocMediaDiv>
                                    <SocMediaDiv
                                        href="https://www.facebook.com/AccoladesMedia/"
                                        target="_blank"
                                    >
                                        <AiOutlineInstagram />
                                    </SocMediaDiv>
                                    <SocMediaDiv
                                        href="https://www.facebook.com/AccoladesMedia/"
                                        target="_blank"
                                    >
                                        <CiLinkedin />
                                    </SocMediaDiv>
                                </SocialMedia>
                            </Bottom>
                        </LeftCover>
                        <RightCover>
                            <FormTitle>Fill your details</FormTitle>
                            <FormCover>
                                <LeftSection>
                                    <InputCover>
                                        <Label htmlFor="name">Name*</Label>
                                        <InputSection>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Enter your name"
                                                onChange={onNameChange}
                                                value={name}
                                            />
                                            {isError && name.length === 0 ? (
                                                <ErrorMsg>
                                                    This field is required
                                                </ErrorMsg>
                                            ) : null}
                                        </InputSection>
                                    </InputCover>
                                    <InputCover>
                                        <Label htmlFor="phone">
                                            Phone Number*
                                        </Label>
                                        <InputSection type="number">
                                            <Country>
                                                <img
                                                    src={require("../../assets/images/flag.png")}
                                                    alt="flag"
                                                />
                                            </Country>
                                            <CountryCode>+91</CountryCode>
                                            <input
                                                type="phone"
                                                id="phone"
                                                placeholder="Enter your number"
                                                onChange={onPhoneChange}
                                                value={phone}
                                            />
                                        </InputSection>
                                    </InputCover>
                                    <InputCover style={{ marginBottom: 0 }}>
                                        <Label htmlFor="place">Place*</Label>
                                        <InputSection>
                                            <input
                                                type="text"
                                                id="place"
                                                placeholder="Enter your place"
                                                value={place}
                                                onChange={onPlaceChange}
                                            />
                                            {isError && place.length === 0 ? (
                                                <ErrorMsg>
                                                    This field is required
                                                </ErrorMsg>
                                            ) : null}
                                        </InputSection>
                                    </InputCover>
                                    <InputCover>
                                        <Label htmlFor="email">Email</Label>
                                        <InputSection>
                                            <input
                                                type="text"
                                                id="email"
                                                placeholder="Enter your mail address"
                                                value={mail}
                                                onChange={onEmailChange}
                                            />
                                        </InputSection>
                                    </InputCover>
                                </LeftSection>

                                <Button>Submit</Button>
                            </FormCover>
                        </RightCover>
                    </BottomSection>
                </div>
            </Container>
        </>
    );
}

export default ContactLegalForm;

const Container = styled.div`
    position: relative;
    background-color: #e2efef;
    padding: 180px 0 50px 0;
    height: 100vh;
`;
const Pink = styled.div`
    position: absolute;
    width: 510px;
    height: 510px;
    left: 394px;
    top: 34px;
    background: #62dfe1;
    opacity: 0.56;
    filter: blur(200px);
`;
const BottomSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    justify-content: space-between;
`;
const LeftCover = styled.div`
    width: 45%;
`;
const Head = styled.div``;
const Title = styled.h3`
    font-size: 36px;
    width: 60%;
    color: #59b8b4;
    font-family: -webkit-body;
    margin-bottom: 20px;
`;

const Description = styled.p`
    color: #061514;
    font-family: -webkit-body;
    font-size: 18px;
    max-width: 70%;
    margin-bottom: 20px;
    position: relative;
`;

const Bottom = styled.div``;
const Details = styled.p`
    font-family: -webkit-body;
    color: #056469;
    font-size: 16px;
    max-width: 400px;
    line-height: 1.5rem;
    margin-bottom: 30px;
`;
const PhoneNumber = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #056469;
`;

const Number = styled.a`
    font-family: -webkit-body;
    color: #056469;
    font-size: 18px;
    cursor: pointer;
    max-width: 70%;
    margin-left: 10px;
`;
const Gmail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    color: #056469;
`;
const Mail = styled.a`
    font-family: -webkit-body;
    color: #056469;
    font-size: 18px;
    cursor: pointer;
    max-width: 70%;
    margin-left: 10px;
`;
const LineDiv = styled.div`
    width: 190px;
    border: 1px solid #056469;
    margin-bottom: 20px;
`;
const SocialMedia = styled.div`
    display: flex;
`;
const SocMediaDiv = styled.a`
    margin-right: 10px;
    min-width: 50px;
    color: #056469;
    font-size: 30px;
    &:hover {
        color: #07cfee;
    }
`;

const RightCover = styled.div`
    width: 51%;
    max-width: 1100px;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
`;

const LeftSection = styled.div`
    padding: 0 0 0 0;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 11px;
    display: grid;
`;

const FormTitle = styled.h3`
    font-size: 26px;
    color: #013c3c;
    font-family: "gordita_regular";
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #0000001a;
`;
const Label = styled.label`
    font-size: 15px;
    color: #7b7b7b;
    font-family: "gordita_regular";
`;
const InputCover = styled.div`
    margin-bottom: 20px;
`;
const InputSection = styled.span`
    display: ${({ type }) => (type === "number" ? "flex" : "block")};
    align-items: center;
    flex: 1;
    height: 50px;
    width: 100%;
    border: 1px solid #d0d0d0;
    border-radius: 6px;
    margin-top: 5px;
    /* overflow: hidden; */

    position: relative;

    &.color {
        border: 1px solid #0fa76f;
    }

    input {
        flex: 1;
        height: 100%;
        width: 100%;
        font-size: 14px;
        padding: 0 14px;
        color: #000;
        border-radius: 6px;
        overflow-y: scroll;
        font-family: "gordita_regular";
        ::placeholder {
            color: #7b7b7b;
        }
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;
const FormCover = styled.div`
    display: grid;
`;

const Country = styled.span`
    display: block;
    /* width: 30px; */
    cursor: pointer;
    padding-left: 7px;
    margin-right: 5px;
    img {
        width: 25px;
        height: 25px;
        display: block;
        object-fit: cover;
        border-radius: 50%;
    }
`;
const CountryCode = styled.p`
    font-family: gordita_regular;
    font-size: 14px;
`;

const Button = styled.span`
    display: block;
    height: 55px;
    background-image: linear-gradient(to right, #0fa76f 0.21%, #0f9ea7 101.05%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "gordita_medium";
    border-radius: 6px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        background-image: linear-gradient(
            92.17deg,
            #0f9ea7 0.21%,
            #0fa76f 101.05%
        );
    }
`;
const Startup = styled.span`
    cursor: pointer;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 249, 235, 0.9);
    border: 1px solid #e0e0e0;
    color: rgba(74, 74, 74, 0.9);

    font-family: "gordita_medium";
    border-radius: 6px;
    font-size: 15px;
    position: relative;
    &.selected {
        background-image: linear-gradient(
            92.17deg,
            #0f9ea7 0.21%,
            #0fa76f 101.05%
        ) !important;
        color: #fff !important;
    }
    &:hover {
        background-image: linear-gradient(
            92.17deg,
            #0f9ea7 0.21%,
            #0fa76f 101.05%
        );
        color: #fff;
    }
`;

const ErrorMsg = styled.p`
    position: absolute;
    font-size: 12px;
    color: #c23232;
    left: 0;
    bottom: -21px;
`;
