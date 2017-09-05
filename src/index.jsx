// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Styles
import './index.scss';

// Components
import App from './components/app/App.jsx';

function renderApp(){
    ReactDOM.render(
        <AppContainer>
            <App author="JCLG" />
        </AppContainer>,
        document.getElementById('main')
    );
}

renderApp();

if (module.hot) {
    // Renders App every time a change in code happens.
    module.hot.accept('./components/app/App.jsx', renderApp);
}