import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const [headerText, setHeaderText] = useState('Naming Ideas!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    //CallBack Method- from Child Componenet and executing in Parent Componenet
    const handelInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
    };

    return (
        <div>
            <Header headProp={headerText} headerExpandProp={headerExpanded} />
            <SearchBox
                onInputChange={handelInputChange}
                searchBoxExpandProp={headerExpanded}
            />
            <ResultsContainer suggestedNamesProp={suggestedNames} />
        </div>
    );
};

export default App;
