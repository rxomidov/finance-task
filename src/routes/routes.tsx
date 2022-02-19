import React from 'react';

const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));

const Bank = React.lazy(() => import('../pages/Bank/Bank'));
const BankInfo = React.lazy(() => import('../pages/Bank/BankInfo'));


const routes = [
    {path: '/', exact: true, name: "Home"},
    {path: '/dashboard', exact: true, name: "Dashboard", component: Dashboard},

    {path: '/bank', exact: true, name: "Banks", component: Bank},
    {path: '/bank/:id', exact: true, name: "Bank info", component: BankInfo},
];

export default routes;