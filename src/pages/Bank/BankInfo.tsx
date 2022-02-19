import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router";
import {PageWrapper} from "../../containers/StyledContainers";
import {getBankInfoStartAct} from "../../services/actions/bankInfoActions";
import PageHeader from "../../components/PageHeader/PageHeader";
import {Button} from "antd";
import {SaveOutlined} from "@ant-design/icons/lib";

const BankInfo: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const {id} = useParams<any>();

    useEffect(() => {
        dispatch(getBankInfoStartAct({id}));
    }, []);

    let currentBank = useSelector((state: any) => state.bankInfo.bankInfoInfoSuccessData);
    console.log(currentBank)

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
                            <Button
                                type="primary" htmlType="submit" loading={false}
                                className="text-uppercase" icon={<SaveOutlined />}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {id}
        </PageWrapper>
    );
};

export default React.memo(BankInfo);