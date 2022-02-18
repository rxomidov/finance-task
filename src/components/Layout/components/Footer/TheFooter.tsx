import React from 'react';
import {Layout} from "antd";

const {Footer} = Layout;

const TheFooter = () => {
    return (
        <div>
            <Footer style={{textAlign: 'center'}}>Ant Design UI kit {new Date().getFullYear()} Created by RXZ</Footer>
        </div>
    );
};

export default TheFooter;