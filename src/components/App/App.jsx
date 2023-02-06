import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: 'Naming Ideas!',
        headerExpanded: true,
        searchBoxExpanded: true,
        suggestedNames: [],
    };

    //CallBack Method- from Child Componenet and executing in Parent Componenet
    handelInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headProp={this.state.headerText}
                    headerExpandProp={this.state.headerExpanded}
                />
                <SearchBox
                    onInputChange={this.handelInputChange}
                    searchBoxExpandProp={this.state.headerExpanded}
                />
                <ResultsContainer
                    suggestedNamesProp={this.state.suggestedNames}
                />
            </div>
        );
    }
}

export default App;
