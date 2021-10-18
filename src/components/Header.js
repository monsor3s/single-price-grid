import React from 'react';
import styled from 'styled-components';

const Homepage = styled.div`
    width: 1440px;
    height: 1280px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomepageContainer = styled.div`
    width: 800px;
    height: 600px;
    position: absolute;
    background-color: var(--lg-gray);
    border-radius: 0.5rem;
    display: flex;

`;

const HeaderWrap = styled.div`
    display: flex;
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
    width: 50%;
    height: 50%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--cyan);

`;

const TitleBody = styled.div`

`;
const PriceBody = styled.p`

`;

const SectionBody = styled.p`

`;

const TextBody = styled.p`

`;

const Button = styled.button`

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
