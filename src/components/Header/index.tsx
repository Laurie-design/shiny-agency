import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

// Ajoutez cette interface pour typer la prop personnalisée
interface StyledLinkProps {
    $isFullLink?: boolean;
}

// Styliser les bibliothèques
const StyledLink = styled(Link)<StyledLinkProps>`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary}; padding-top: 20px;`}
`;

function Header() {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/42">Questionnaire</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>
                Faire le test
            </StyledLink>
        </nav>
    );
}

export default Header;
