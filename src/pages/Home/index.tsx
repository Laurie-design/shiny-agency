import styled from 'styled-components';
import { useState } from 'react';
const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;
interface BallonProps {
    size: number;
}
const Ballon = styled.div<BallonProps>`
    width: 100px;
    height: 100px;
    background-color: #ee0101ff;
    border-radius: 50%;
    transform: scale(${({ size }) => size});
    transition: transform 0.3s ease-in-out;
`;
function Home() {
    const [size, setSize] = useState(1);

    return (
        <HomeContainer>
            <h1 onClick={() => setSize(size + 0.1)}>Page d'Accueil</h1>
            <Ballon size={size} />
        </HomeContainer>
    );
}

export default Home;
