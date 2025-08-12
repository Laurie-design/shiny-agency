import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/';
import Survey from './pages/Survey';
import Error from './components/Error';
import Header from './components/Header';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`;
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
