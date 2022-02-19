import React, {useEffect} from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";
import {motion} from "framer-motion";
import {variants} from "../../utils/motions";
import {PageWrapper} from "../../containers/StyledContainers";
import ListBanks from "./Components/ListBanks";
import {useDispatch, useSelector} from "react-redux";
import {getBankListStartAct, setFilterParams} from "../../services/actions/bankListActions";
import {Input, Pagination} from 'antd';

const {Search} = Input;

const Bank = () => {

    const dispatch = useDispatch();

    let bankListParams = useSelector((state: any) => state.bankList.paramsData);
    let bankListFromApi = useSelector((state: any) => state.bankList.bankListSuccessData);

    let listBanks = bankListFromApi?.rows;
    let count: number = bankListFromApi?.total || 10;

    useEffect(() => {
        dispatch(getBankListStartAct(bankListParams));
    }, [dispatch, bankListParams]);

    const onSearch = (value: string) => {
        // console.log(value)
        dispatch(setFilterParams({
            Search: value,
            PageNumber: 1,
            PageLimit: 10,
        }))
    };

    const handlePagination = (page: number, pageSize: number) => {
        // console.log(page, pageSize)
        dispatch(setFilterParams({
            PageNumber: page,
            PageLimit: pageSize,
        }))
    };

    return (
        <PageWrapper>
            <div className="page-header">
                <PageHeader
                    header="Banks list"
                    subheader="Sorting & pagination remote datasource"
                />
                <div className="page-buttons">
                    <div className="d-flex">
                        <div className="d-none d-sm-flex">
                            <Search
                                onSearch={onSearch}
                                placeholder="Search bank..."
                                loading={false}
                                enterButton
                            />
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                animate={"visible"}
                variants={variants}
                initial="hidden"
            >
                <ListBanks listBanks={listBanks} count={count}/>
            </motion.div>

            <Pagination
                total={count}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                defaultPageSize={10}
                defaultCurrent={1}
                onChange={(page, pageSize) => handlePagination(page, pageSize)}
            />

        </PageWrapper>
    );
};

export default React.memo(Bank);