import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {ListWrapper} from "../../../containers/StyledContainers";
import {
    EditIcon,
    FilterDownIcon,
    FilterIcon,
    FilterUpIcon, TrashIcon,
} from "../../../utils/svgIcons";
import {useDispatch, useSelector} from "react-redux";
import EmptyList from "../../../containers/EmptyList";
import SuccessContainer from "../../../containers/SuccesContainer";
import {Button} from "antd";
import ErrorContainer from "../../../containers/ErrorContainer";
import {ReloadOutlined} from '@ant-design/icons';
import DeleteModal from "./DeleteModal";
import {setFilterParams} from "../../../services/actions/bankListActions";

interface ListBanks {
    listBanks: {
        id: string,
        sender_name: string,
    }[],
    count: number,
}

const ListBanks: React.FC<ListBanks> = ({listBanks, count}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const loading = useSelector((state: any) => state.bankList?.bankListBegin);
    let fail = useSelector((state: any) => state.bankList.bankListFail);
    const bankListFailData = useSelector((state: any) => state.bankList?.bankListFailData);

    const [directionId, setDirectionId] = useState<any>(null);
    const [directionCode, setDirectionCode] = useState<any>(null);
    const [directionName, setDirectionName] = useState<any>(null);

    const Status = ({status}: any) => {
        return (
            <div className={`name status`}>
                <div className={`status-inner ${status}`}>
                    {status}
                </div>
            </div>
        )
    };

    const SortArrow = ({direction}: any) => {
        if (!direction) {
            return <span className="heading_arrow">
                    <FilterIcon fill="#3699ff"/>
                </span>;
        }
        if (direction === "desc") {
            return (

                <span className="heading_arrow">
                    <FilterUpIcon fill="#3699ff"/>
                </span>
            )
        }
        if (direction === "asc") {
            return (
                <span className="heading_arrow">
                    <FilterDownIcon fill="#3699ff"/>
                </span>
            )
        }
        return null;
    };

    const switchDirectionId = () => {
        if (!directionId) {
            setDirectionId("desc");
        } else if (directionId === "desc") {
            setDirectionId("asc")
        } else {
            setDirectionId(null)
        }
    };
    const switchDirectionCode = () => {
        if (!directionCode) {
            setDirectionCode("desc");
        } else if (directionCode === "desc") {
            setDirectionCode("asc")
        } else {
            setDirectionCode(null)
        }
    };
    const switchDirectionName = () => {
        if (!directionName) {
            setDirectionName("desc");
        } else if (directionName === "desc") {
            setDirectionName("asc")
        } else {
            setDirectionName(null)
        }
    };

    const setValueAndDirection = (value: any) => {
        if (value === "id") {
            switchDirectionId();
            dispatch(setFilterParams({
                OrderType: directionId,
                SortColumn: value,
            }));
        }
        else if (value === "code") {
            switchDirectionCode();
            dispatch(setFilterParams({
                OrderType: directionCode,
                SortColumn: value,
            }));
        }
        else if (value === "bankname") {
            switchDirectionName();
            dispatch(setFilterParams({
                OrderType: directionName,
                SortColumn: value,
            }));
        }
    };

    const toggleInfo = (id: number, result?: number) => {
        // dispatch(getArticlesInfoStartAct({id, result}));
        history.push({
            pathname: `/bank/${id}`,
            state: "Bank information",
        })
    };

    return (
        <ListWrapper>
            <div className="datatable">
                <div className="heading sm-hidden">
                    <div
                        className="heading_listIcon"
                        onClick={() => setValueAndDirection("id")}
                    >
                        <div>#</div>
                        <SortArrow direction={directionId}/>
                    </div>
                    <div
                        className="heading_listIcon d-none d-md-flex"
                        onClick={() => setValueAndDirection("code")}
                    >
                        <div>code</div>
                        <SortArrow direction={directionCode}/>
                    </div>
                    <div
                        className="heading_population"
                        onClick={() => setValueAndDirection("bankname")}
                    >
                        <div>name</div>
                        <SortArrow direction={directionName}/>
                    </div>
                    <div className="heading_name">
                        <div>status</div>
                    </div>
                    <div className="heading_name d-none d-md-flex justify-content-end">
                        <div>actions</div>
                    </div>
                </div>
                <div style={{minHeight: "15rem"}}>
                    {count === 0 && (
                        <EmptyList name="Banks"/>
                    )}
                    {loading ? (
                        <SuccessContainer/>
                    ) : (
                        <>
                            {listBanks?.map((list: any, idx: number) => {
                                return (
                                    <div key={idx} className="row-parent">
                                        <div className="row gx-0">
                                            <div className="listIcon" onClick={() => toggleInfo(list.id)}>
                                                <div className="list-rn">{list.id}</div>
                                            </div>
                                            <div className="listIcon" onClick={() => toggleInfo(list.id)}>
                                                <div className="list-id">{list.code}</div>
                                            </div>
                                            <div className="population">
                                                <Link to="/" className="link-user">
                                                    {list.bankname}
                                                </Link>
                                            </div>
                                            <Status status={list?.status}/>
                                            <div className="name d-none d-md-block">
                                                <div className="d-flex justify-content-end">
                                                    <Button
                                                        className="me-2"
                                                        icon={<EditIcon fill={"dodgerblue"}/>}
                                                        onClick={() => toggleInfo(list.id)}
                                                    />
                                                    <DeleteModal id={list.id}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )}
                    {fail && (
                        <ErrorContainer
                            message={bankListFailData?.statusText + " " + bankListFailData?.status + "!"}
                            messageText={bankListFailData?.data.toString()}
                        >
                            <Button
                                type="default" icon={<ReloadOutlined/>}
                            >
                                Refresh
                            </Button>
                        </ErrorContainer>
                    )}
                </div>
            </div>
        </ListWrapper>
    );
};

export default React.memo(ListBanks);