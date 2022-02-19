import React from 'react';
import {Breadcrumb} from "antd";
import {HomeOutlined, UserOutlined} from "@ant-design/icons/lib";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

const StyledBreadcrumb = () => {

    const location = useLocation();
    // console.log(location);

    return (
        <BreadcrumbWrapper>
            <Breadcrumb className="breadcrumb">
                <Breadcrumb.Item href="" className="breadcrumb-item">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <UserOutlined />
                    <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
        </BreadcrumbWrapper>
    );
};

export default StyledBreadcrumb;

const BreadcrumbWrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 8px 16px 1px rgb(0 0 0 / 5%);
  transition: var(--main-transition);
  cursor:pointer;
  :hover{
    box-shadow: 0 8px 16px 1px rgb(0 0 0 / 1%);
  }
  .breadcrumb{
    .breadcrumb-item{
    
    }
  }
`;