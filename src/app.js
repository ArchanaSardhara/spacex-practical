import React from 'react';
import { Provider } from 'react-redux';

import LaunchComponent from './components/launches/launches-page';
import store from './configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Provider store={store}>
        <LaunchComponent />
    </Provider>
);

export default App;