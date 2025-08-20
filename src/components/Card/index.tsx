import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import DefaultPicture from '../../assets/profile.png';

//Styler les composants
const CardLabel = styled.span`
    color: #5843e4;
    padding-left: 15px;
    font-size: 22px;
    font-weight: normal;
`;
const CardImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    align-self: center;
`;
const CardTitle = styled.span`
    font-size: 22px;
    font-weight: normal;
    color: black;
    align-self: center;
`;
// Noir : #000000
// Gris foncé : #333333
// Bleu foncé : #2c3e50
// Violet : #5843e4
// Orange : #ff9900

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

function Card({ label = '', title = '', picture = DefaultPicture }) {
    return (
        <CardWrapper>
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

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
};
export default Card;
