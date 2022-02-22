import React from "react";
import { Button, Input } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FileAddOutlined } from "@ant-design/icons/lib";

import PageHeader from "../../components/PageHeader/PageHeader";
import { PageWrapper } from "../../containers/StyledContainers";
import { setFilterParams } from "../../services/actions/bankListActions";
import { AppDispatch, RootState } from "../../services/store";
import { motion } from "framer-motion";
import { variants } from "./../../utils/motions";
import AntDLIstUsers from "./Components/AntDLIstUsers";

const { Search } = Input;

const Users = () => {

    const dispatch = useDispatch<AppDispatch>();
    const history = useHistory();

    let userListParams = useSelector((state: RootState) => state.userList.paramsData);
    let bankListFromApi = useSelector((state: RootState) => state.userList.userListSuccessData);

    let listUsers = bankListFromApi?.rows;
    let count: number = bankListFromApi?.total || 10;

    const onSearch = (Search: string) => {
        // console.log(value)
        dispatch(setFilterParams({
            Search: Search,
        }))
    };

  return (
    <PageWrapper>
      <div className="page-header">
        <PageHeader
          header="Users list"
          subheader="Sorting & pagination remote datasource"
        />
        <div className="page-buttons">
          <div className="d-flex">
            <div className="d-none d-sm-flex">
              <Search
                onSearch={onSearch}
                placeholder="Search user..."
                loading={false}
                enterButton
                className="me-2"
                // defaultValue={bankListParams?.Search}
              />
              <Button
                onClick={() => history.push("bank/add")}
                type="primary"
                htmlType="submit"
                loading={false}
                className="text-uppercase"
                icon={<FileAddOutlined />}
              >
                Add new
              </Button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
                animate={"visible"}
                variants={variants}
                initial="hidden"
            >
                <AntDLIstUsers listUsers={listUsers} count={count}/>
            </motion.div>

    </PageWrapper>
  );
};

export default React.memo(Users);
