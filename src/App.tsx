import React from 'react';
import './App.css';
import SuccessContainer from "./containers/SuccesContainer";
import {Route, Routes, useNavigate} from "react-router-dom";
import ProtectedRoute from './routes/components/ProtectedRoute';
import api from './services/api/api';

const loading = (
    <SuccessContainer/>
);

// components
const Layout = React.lazy(() => import('./components/Layout/Layout'));

// pages
const Login = React.lazy(() => import('./pages/Login/Login'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

function App() {

    const history: any = useNavigate();
    api.subscribe(history);

    return (
        <React.Suspense fallback={loading}>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path='/' element={<ProtectedRoute/>}>
                    <Route path='/' element={<Layout/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </React.Suspense>
    );
}

export default App;
