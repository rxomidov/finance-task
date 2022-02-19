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
import MessageContainer from "../../../containers/MessageContainer";

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
    const success = useSelector((state: any) => state.bankList?.bankListSuccess);
    const bankListFailData = useSelector((state: any) => state.bankList?.bankListFailData);

    const [direction, setDirection] = useState<any>(null);

    const Status = ({status}: any) => {
        return (
            <div className={`name status`}>
                <div className={`status-inner ${status}`}>
                    {status}
                </div>
            </div>
        )
    };

    const SortArrow = () => {
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

    const switchDirection = () => {
        if (!direction) {
            setDirection("desc");
        } else if (direction === "desc") {
            setDirection("asc")
        } else {
            setDirection(null)
        }

        console.log(direction)

        // dispatch(setFilterParams({Sort_Direction: direction}));
    };

    const toggleInfo = (id: number, result?: number) => {
        // dispatch(getArticlesInfoStartAct({id, result}));
        history.push({
            pathname:`/bank/${id}`,
            state: "Bank information",
        })
    };

    return (
        <ListWrapper>
            <div className="datatable">
                <div className="heading sm-hidden">
                    <div className="heading_listIcon" onClick={switchDirection}>
                        <div>#</div>
                        <SortArrow/>
                    </div>
                    <div className="heading_listIcon  d-none d-md-flex" onClick={switchDirection}>
                        <div>code</div>
                        <SortArrow/>
                    </div>
                    <div className="heading_population"
                        // onClick={setValueAndDirection("first_name")}
                    >
                        <div>name</div>
                        <SortArrow/>
                    </div>
                    <div className="heading_name">
                        <div>status</div>
                    </div>
                    <div className="heading_name d-none d-md-flex justify-content-end" onClick={switchDirection}>
                        <div>actions</div>
                        <SortArrow/>
                    </div>
                </div>
                <div style={{minHeight: "15rem"}}>
                    {count === 0 ? (
                        <EmptyList name="Banks"/>
                    ) : (
                        <>
                            {loading ? (
                                <SuccessContainer/>
                            ) : (
                                <>
                                    {listBanks?.map((list: any, idx: number) => {
                                        return (
                                            <div key={idx} className="row-parent">
                                                <div className="row gx-0" onClick={() => toggleInfo(list.id)}>
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
                                                            <Button
                                                                className="danger"
                                                                icon={<TrashIcon fill={"rgba(255,0,0,0.6)"}/>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {/*{!success && (*/}
                                    {/*    <MessageContainer*/}
                                    {/*        open={true}*/}
                                    {/*        message={bankListFailData?.statusText + " " + bankListFailData?.status + "!"}*/}
                                    {/*        messageText={bankListFailData?.data}*/}
                                    {/*        status={bankListFailData?.status}*/}
                                    {/*        errorType="bankList"*/}
                                    {/*        type="error"*/}
                                    {/*    />*/}
                                    {/*)}*/}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </ListWrapper>
    );
};

export default React.memo(ListBanks);