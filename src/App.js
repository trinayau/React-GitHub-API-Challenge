import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, NavBar } from './components';
import * as Pages from './pages';


function App() {



    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Pages.HomePage />} />
                    <Route path="/user" element={<Pages.UserPage />}>
                        <Route path="/user-repo" element={<Pages.SingleRepoPage />} />
                    </Route>

                </Routes>
            </main>
            <Footer />
        </div>
    )
}
export default App;
