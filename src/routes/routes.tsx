import React from 'react';

const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));

const Bank = React.lazy(() => import('../pages/Bank/Bank'));


const routes = [
    {path: '/', exact: true, name: "Home"},
    {path: '/dashboard', exact: true, name: "Dashboard", component: Dashboard},

    {path: '/banks', exact: true, name: "Articles", component: Bank},
];

export default routes;