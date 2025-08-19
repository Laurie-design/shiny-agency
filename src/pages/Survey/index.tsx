import { Link, useParams } from 'react-router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Loader } from '../../utils/style/Atoms';
import colors from '../../utils/style/colors';

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
    margin: 30px;
`;

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`;
function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber ?? '1', 10);
    const prevQuestionNumber =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    const [surveyData, setSurveyData] = useState<{ [key: number]: string }>({});
    const [isDataLoading, setDataLoading] = useState(false);

    // async function fetchData() {
    //   try {
    //     const response = await fetch(`http://localhost:8000/survey`)
    //     const { surveyData } = await response.json()
    //     setSurveyData(surveyData)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    useEffect(() => {
        // fetchData()
        setDataLoading(true);
        fetch(`http://localhost:8000/survey`).then((response) =>
            response.json().then(({ surveyData }) => {
                setSurveyData(surveyData);
                setDataLoading(false);
            })
        );
    }, []);

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionContent>{surveyData[questionNumberInt]}</QuestionContent>
            )}
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    );
}

export default Survey;
