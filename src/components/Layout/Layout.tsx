import React, {useState} from 'react';
import {Layout, Breadcrumb} from 'antd';
import TheSidebar from "./components/Sidebar/TheSidebar";
import TheFooter from "./components/Footer/TheFooter";
import styled from "styled-components";

const {Header, Content} = Layout;

const TheLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed)
    };

    return (
        <LayoutWrapper>
            <Layout style={{minHeight: '100vh'}}>
                <TheSidebar collapsed={collapsed} onCollapse={onCollapse}/>
                <Layout className="site-layout">
                    <Header className="" style={{padding: 0, backgroundColor: "white"}}>
                        <div className="">La havla vala quvvata illa billah</div>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <TheFooter/>
                </Layout>
            </Layout>
        </LayoutWrapper>
    );
};

export default TheLayout;

const LayoutWrapper = styled.div`
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;