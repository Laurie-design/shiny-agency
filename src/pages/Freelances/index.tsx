import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;
function Freelances() {
    const freelanceProfiles = [
        {
            name: 'Aimee Mardja',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse backend',
            picture: DefaultPicture,
        },
    ];
    return (
        <div style={{ padding: 20 }}>
            <h1>Nos Freelances</h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={index}
                        label={profile.jobTitle}
                        title={profile.name}
                        picture={profile.picture}
                    />
                ))}
            </CardsContainer>
        </div>
    );
}

export default Freelances;
