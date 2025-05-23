import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import DinerMatch from './pages/dinermatch/DinerMatch.jsx';
import Search from './pages/search/Search.jsx';
import MyRecipes from './pages/myrecipes/MyRecipes.jsx';
import TermsOfUse from './pages/legal/TermsOfUse.jsx';
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx';

function App() {
    const [isLoggedIn, toggleIsLoggedIn] = useState(true);

    return (
        <>



            <main>
                <Routes>
                    {/* Openbare routes */}
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/HomePage" element={<HomePage/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Login" element={<Login toggleIsLoggedIn={toggleIsLoggedIn}/>}/>

                    {/* Beschermde routes */}
                    {isLoggedIn ? (
                        <>
                            <Route path="/app/DinerMatch" element={<DinerMatch/>}/>
                            <Route path="/app/Search" element={<Search/>}/>
                            <Route path="/app/MyRecipes" element={<MyRecipes/>}/>
                        </>
                    ) : (
                        <Route path="/app/*" element={<Navigate to="/Login"/>}/>
                    )}

                    {/* Juridische pagina's */}
                    <Route path="/terms" element={<TermsOfUse />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </main>
        </>
    );
}

export default App;