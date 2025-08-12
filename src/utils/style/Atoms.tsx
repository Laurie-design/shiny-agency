import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary}; padding-top: 20px;`}
`;
