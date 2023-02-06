import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultsContainer = ({ suggestedNamesProp }) => {
    const suggestedNamesJsx = suggestedNamesProp.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });
    return <div className="results-container">{suggestedNamesJsx}</div>;
};

export default ResultsContainer;
