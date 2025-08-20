import { createContext } from 'react';

type SurveyAnswers = Record<string, string | number | boolean>;

type SurveyContextType = {
    answers: SurveyAnswers;
    saveAnswers: (newAnswers: SurveyAnswers) => void;
};

export const SurveyContext = createContext<SurveyContextType | undefined>(undefined);
