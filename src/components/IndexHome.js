import React from 'react';
import styled from 'styled-components';

const Homepage = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--lg-gray);
`;

const HomepageContainer = styled.div`
    width: 800px;
    height: 600px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr); 
    grid-template-areas: 
        'boxheader boxheader'
        'boxbody boxfooter';

    @media only screen and (max-width: 768px) {
        width: 340px;
        height: 700px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas: 
        'boxheader'
        'boxbody'
        'boxfooter';
    }
`;

const BoxHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    padding: 55px;
    grid-area: boxheader;

    @media only screen and (max-width: 768px) {
        padding: 25px;
        justify-content: center;
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: var(--cyan);
    margin-bottom: 3rem;

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    color: var(--bg-yellow);
    margin-bottom: 2rem;

    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;

const Span = styled.p`
    font-size: 2rem;
    color: var(--gr-blue);
    line-height: 3rem;

    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }
`;


const BoxBody = styled.div`
    width: 400px;
    height: 330px;
    padding: 25px;
    position: absolute;
    display: inline-block;
    background-color: var(--cyan);
    grid-area: boxbody;

    @media only screen and (max-width: 768px) {
        padding: 0px;

    }
`;

const TitleBody = styled.div`
    font-size: 1.7rem;
    font-weight: 400;
    color: #fff;
    margin-top: 3rem;
    padding-left: 3rem;
`;

const PriceBody = styled.p`
    font-size: 3.5rem;
    font-weight: 700;
    color: #fff;
    padding-left: 3rem;
    padding-top: 1rem;
    display: inline-block;
`;

const SectionBody = styled.p`
    font-size: 1.4rem;
    color: var(--lg-gray);
    padding-left: 0.8rem;
    display: inline-block;
`;

const TextBody = styled.p`
    font-size: 1.5rem;
    color: #fff;
    padding-left: 3rem;
    padding-top: 1rem;
`;

const Button = styled.button`
    width: 285px;
    height: 60px;
    color: #fff;
    font-size: 1.2rem;
    margin-left: 3rem;
    margin-top: 2.5rem;
    background-color: var(--bg-yellow);
    border: none;
    border-radius: 0.5rem;
    text-align: center;
    text-decoration: none;
`;

const BoxFooter = styled.div`
    width: 400px;
    height: 330px;
    padding: 25px;
    position: absolute;
    display: inline-block;
    background-color: var(--lg-cyan);
    grid-area: boxfooter;

    @media only screen and (max-width: 768px) {
        padding: 0;
    }
`;

const TitleFooter = styled.h1`
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
    margin-top: 2rem;
    padding-left: 3rem;
`;

const SectionFooter = styled.p`
    font-size: 1.5rem;
    color: var(--lg-gray);
    margin-top: 2rem;
    padding-left: 3rem;
    line-height: 2rem;
`;

export const IndexHome = () => {
    return (
    <Homepage>
        <HomepageContainer>
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
                <BoxFooter>
                        <TitleFooter>Why Us</TitleFooter>
                        <SectionFooter>
                            Tutorials by industry experts <br/>
                            Peer &amp; expert code review <br/>
                            Coding exercises <br/>
                            Access to our GitHub repos <br/>
                            Community forum <br/>
                            Flashcard decks <br/>
                            New videos every week    
                        </SectionFooter>
                </BoxFooter>
        </HomepageContainer>
    </Homepage>
    )
}
