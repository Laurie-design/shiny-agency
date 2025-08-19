import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from './colors';

interface StyledLinkProps {
    $isFullLink?: boolean;
}
export const StyledLink = styled(Link)<StyledLinkProps>`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary}; padding-top: 20px;`}
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
    border: 6px solid #f3f3f3;
    border-top: 6px solid #2c3e50;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${rotate} 1s linear infinite;
    margin: 30px auto;
`;
