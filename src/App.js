import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import * as Pages from './pages';


function App() {

    const dispatch = useDispatch();
    const error = useSelector(state => state.error);

    return (
        <div id="app">
            
        </div>
    )
}

export default App;
