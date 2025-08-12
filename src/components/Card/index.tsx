import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

//Styler les composants
const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`;
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`;
const CardTitle = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #0e60b3ff;
`;
// Noir : #000000
// Gris foncé : #333333
// Bleu foncé : #2c3e50
// Violet : #5843e4
// Orange : #ff9900

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

function Card({ label = '', title = '', picture = 'DefaultPicture' }) {
    return (
        <CardWrapper
            style={{ display: 'flex', flexDirection: 'column', padding: 15 }}
        >
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" height={80} width={80} />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

export default Card;
