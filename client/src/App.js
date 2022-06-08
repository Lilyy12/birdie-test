import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import DisplayChart from './pages/DisplayChart';
import Navbar from './components/Navbar';
import Helmet from 'react-helmet';
import Payload from './pages/Payload';

function App() {

    return (
    <div>
        <Helmet>
            <title>Birdie Application</title>
        </Helmet>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/chart" element={<DisplayChart />}/>
                <Route path="/payload" element={<Payload />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </Router>
    </div>);
}

export default App;
