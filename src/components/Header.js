import React from 'react';
import styled from 'styled-components';

const Homepage = styled.div`
    width: 1440px;
    height: 1280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--lg-gray);
`;

const HomepageContainer = styled.div`
    width: 800px;
    height: 600px;
    position: relative;
    background-color: #fff;
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;

`;

const HeaderWrap = styled.div`
    position: absolute;
    `;

const BoxHeader = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 3rem;
`;

const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--cyan);
    margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
    font-size: 1.2rem;
    color: var(--bg-yellow);
    margin-bottom: 1rem;
`;

const Span = styled.p`
    font-size: 1.2rem;
    color: var(--gr-blue);
    line-height: 2rem;
`;


const BoxBody = styled.div`
    width: 400px;
    height: 330px;
    position: absolute;
    background-color: var(--cyan);
    grid-area: 2 / 1 ;
`;

const TitleBody = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    margin-top: 3rem;
    padding-left: 3rem;
`;

const PriceBody = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    padding-left: 3rem;
    padding-top: 1rem;
    display: inline-block;
`;

const SectionBody = styled.p`
    font-size: 1.2rem;
    color: var(--lg-gray);
    padding-left: 0.8rem;
    display: inline-block;
`;

const TextBody = styled.p`
    font-size: 1.2rem;
    color: #fff;
    padding-left: 3rem;
    padding-top: 1rem;
`;

const Button = styled.button`
    width: 285px;
    height: 60px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 3rem;
    margin-top: 2.5rem;
    background-color: var(--bg-yellow);
    border: none;
    border-radius: 0.5rem;
    text-align: center;
    text-decoration: none;
`;

export const Header = () => {
    return (
    <Homepage>
        <HomepageContainer>
            <HeaderWrap>
                <BoxHeader>
                        <Title>Join our community</Title>
                        <Subtitle>30-day, hassle-free money back guarantee</Subtitle>
                        <Span>Gain access to our full library of tutorials along with expert code reviews.<br/> 
                        Perfect for any developers who are serious about honing their skills.
                        </Span>
                </BoxHeader>
                    <BoxBody>
                        <TitleBody>Monthly Subscription</TitleBody>
                        <PriceBody>$29</PriceBody>
                        <SectionBody>per mounth</SectionBody>
                        <TextBody>Full access for less than $1 a day</TextBody>
                        <Button>Sign Up</Button>
                    </BoxBody>
            </HeaderWrap>
        </HomepageContainer>
    </Homepage>
    )
}
