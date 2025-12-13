import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppDevelopment from './pages/AppDevelopment';
import WebDevelopment from './pages/WebDevelopment';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/web-development" replace />} />
                <Route path="/app-development" element={<AppDevelopment />} />
                <Route path="/web-development" element={<WebDevelopment />} />
            </Routes>
        </Router>
    );
}

export default App;
