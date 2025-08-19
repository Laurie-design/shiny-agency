import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink } from '../../utils/style/Atoms';
import HomeIllustration from '../../assets/home-illustration.svg';

// import { useState } from 'react';
const HomerContainer = styled.div`
    background-color: ${colors.backgroundLight};
    margin: 30px;
    padding: 60px 90px;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
`;

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    ${StyledLink} {
        max-width: 250px;
    }
`;
const HomeWrapper = styled.div`
    display: flex;
`;

const StyledTitle = styled.h2`
    padding-bottom: 30px;
    max-width: 280px;
    line-height: 50px;
`;
const Illustration = styled.img`
    flex: 1;
`;

// interface BallonProps {
//     size: number;
// }
// const Ballon = styled.div<BallonProps>`
//     width: 100px;
//     height: 100px;
//     background-color: #ee0101ff;
//     border-radius: 50%;
//     transform: scale(${({ size }) => size});
//     transition: transform 0.3s ease-in-out;
// `;
function Home() {
    return (
        <HomeWrapper>
            <HomerContainer>
                <LeftCol>
                    <StyledTitle>
                        Repérez vos besoins, on s’occupe du reste, avec les
                        meilleurs talents
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} />
            </HomerContainer>
        </HomeWrapper>
    );
}

export default Home;
