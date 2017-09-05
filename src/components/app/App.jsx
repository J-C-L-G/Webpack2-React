// Dependencies
import React from 'react';

//Styles
import './App.scss';

//Components
import Info from '../Info/Info.jsx';

const App = (props) => {
    return (
        <div className="container">
            <div className="inApp text-center well">
                <h1>{props.author}</h1>
                <i className="fa fa-rebel"/>
            </div>
            <div className="row text-center">
                <Info />
                <Info />
                <Info />
            </div>
        </div>
    );
};

export default App;
