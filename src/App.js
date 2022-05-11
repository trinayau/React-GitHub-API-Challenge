import React from 'react';
import { Routes, Route } from 'react-router-dom';

import * as Pages from './pages';
import {default as Layout} from './layouts';

function App() {
    return (
        <div id="app">
            <main>
                <Routes>
                    <Route path='/' element={<Layout />}>
                    <Route path="/" element={<Pages.HomePage />} />
                        <Route path="/user">
                        <Route path=":username" element={<Pages.UserPage />}/>
                        <Route path=":username/:repo" element={<Pages.SingleRepoPage />}/>
                        </Route>
                        <Route path="*" element={<Pages.NotFoundPage />} />
                    </Route>
                </Routes>
            </main>
        </div>
    )
}
export default App;
