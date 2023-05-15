import React from "react";
import styled from "styled-components";
import Img6 from "../../assets/images/plan1.png";
import Slider from "react-slick";
import "../../assets/css/slider.css";

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <TestimonialSection>
            <Section>
                <Heading>Testimonial</Heading>
                <Details>
                    It is long established fact that a reader will be distracted
                    by the readable content of a page when looking at its
                    layout.The point of lorem ipsum
                </Details>
                <div>
                    {" "}
                    <Slider {...settings}>
                        <Single>
                            <Image>
                                <Imgs src={Img6} alt="image6" />
                            </Image>
                            <Right>
                                <SubHeading>Den Mark</SubHeading>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce sit amet nibh ante.
                                    Phasellus scelerisque, ipsum ac volutpat
                                    varius, lectus dui pulvinar lectus, ut
                                    venenatis ipsum massa in lorem
                                </Paragraph>
                            </Right>
                        </Single>
                        <Single>
                            <Image>
                                <Imgs src={Img6} alt="image6" />
                            </Image>
                            <Right>
                                <SubHeading>Den Mark</SubHeading>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce sit amet nibh ante.
                                    Phasellus scelerisque, ipsum ac volutpat
                                    varius, lectus dui pulvinar lectus, ut
                                    venenatis ipsum massa in lorem
                                </Paragraph>
                            </Right>
                        </Single>
                        <Single>
                            <Image>
                                <Imgs src={Img6} alt="image6" />
                            </Image>
                            <Right>
                                <SubHeading>Den Mark</SubHeading>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce sit amet nibh ante.
                                    Phasellus scelerisque, ipsum ac volutpat
                                    varius, lectus dui pulvinar lectus, ut
                                    venenatis ipsum massa in lorem
                                </Paragraph>
                            </Right>
                        </Single>

                        <Single>
                            <Image>
                                <Imgs src={Img6} alt="image6" />
                            </Image>
                            <Right>
                                <SubHeading>Den Mark</SubHeading>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Fusce sit amet nibh ante.
                                    Phasellus scelerisque, ipsum ac volutpat
                                    varius, lectus dui pulvinar lectus, ut
                                    venenatis ipsum massa in lorem
                                </Paragraph>
                            </Right>
                        </Single>
                    </Slider>
                </div>
            </Section>
        </TestimonialSection>
    );
}

const TestimonialSection = styled.div`
    padding: 50px 0;
    height: 90vh;
`;
const Section = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const Heading = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
    color: #59b8b4;
    font-family: -webkit-body;
`;
const Details = styled.p`
    color: #000;
    font-size: 18px;
    width: 60%;
    font-family: -webkit-body;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 40px;
`;

const Single = styled.div`
    width: 100%;
`;
const Image = styled.div`
    width: 25%;
    margin: 0 auto;
`;
const Imgs = styled.img`
    width: 100%;
    display: block;
`;
const Right = styled.div`
    margin-left: 3%;
    width: 70%;
    margin: 0 auto;
`;
const SubHeading = styled.h3`
    font-size: 30px;
    margin-bottom: 2%;
    text-align: center;
    margin-bottom: 40px;
    color: #195454;
    font-family: -webkit-body;
`;
const Paragraph = styled.p`
    font-size: 18px;
    margin-top: 4%;
    color: #6d6d6d;
    line-height: 1.8rem;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    font-family: -webkit-body;
`;
