import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {CancelIcon, RefreshIcon} from "../utils/svgIcons";
import errorSvg from "../assets/error.png";
import sucessSvg from "../assets/success.png";
import {useDispatch, useSelector} from "react-redux";
import SuccessContainer from "./SuccesContainer";
import {setFilterParams as setBankLIstFilterParams} from "../services/actions/bankListActions";
import {Modal} from "antd";

export interface AlertInterface {
    open: boolean
    size?: any
    header?: string
    message: string
    messageText?: string
    loading?: boolean
    errorType?: string
    type: string,
    setState?: React.Dispatch<React.SetStateAction<AlertInterface>>,
    state?: any,
    refreshFunction?: () => void,
    hideRefresh?: boolean,
    status?: any,
    setMessageModal?: any,
    callback?: any,
    setCallback?: any,
}

const MessageContainer: React.FC<AlertInterface> =
    ({
         open, size, header, message, messageText, loading, errorType, type, setState,
         state, refreshFunction, hideRefresh, status, setMessageModal, setCallback, callback
     }) => {
        const dispatch = useDispatch();
        console.log(errorType)

        const [dialogOpen, setDialogOpen] = useState<boolean>(open);

        let paramsBankList = useSelector((state: any) => state.bankList.paramsData);

        const handleOpen = () => {
            setDialogOpen(false);
            if (setMessageModal) setMessageModal(false);
            if (setState) {
                setState({...state, open: false})
            }
            if (setCallback) setCallback(!callback);
        };

        useEffect(() => {
            if (errorType === "bankList" && status === undefined) {
                dispatch(setBankLIstFilterParams(paramsBankList));
            }
        }, [open]);

        const handleRefresh = () => {
            if (errorType === "bankList") {
                dispatch(setBankLIstFilterParams(paramsBankList));
            }
            if (refreshFunction) {
                refreshFunction()
                if (setState) {
                    setState({...state, open: false})
                }
            }
        };

        return (
            <Wrapper>
                <Modal title={header} visible={dialogOpen} onOk={handleOpen} onCancel={handleOpen}>
                    {loading ? (
                        <div style={{height: "12rem"}}>
                            <SuccessContainer/>
                        </div>
                    ) : (
                        <div className="text-center">
                            {type === "error" && (
                                <div className="mb-4">
                                    <img src={errorSvg} width={64} alt="error"/>
                                </div>
                            )}
                            {type === "success" && (
                                <div className="mb-4">
                                    <img src={sucessSvg} width={64} alt="success"/>
                                </div>
                            )}
                            <h5>
                                {message !== "undefined undefined!" ? message : "Something went wrong!"}
                            </h5>
                            <div className="message-text">
                                {messageText ? <>
                                    {type === "success" ? "Success!" : messageText}
                                </> : <>
                                    {"Please pres refresh button or close it."}
                                </>}
                            </div>
                        </div>
                    )}
                </Modal>
            </Wrapper>
        );
    };

export default MessageContainer;

const Wrapper = styled.div`
  //background: rgba(30,144,255,0.1);
`;
const ModalWrapper = styled.div`
  //background: rgba(30,144,255,0.1);
  .message-text{
    font-size: 1rem;
    margin-top: 1rem;
    word-break: break-word;
    overflow-y: scroll;
    max-height: 300px;
    ::-webkit-scrollbar {
      display: block;
      width: 16px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: lightgray;
      border-radius: 20px;
      border: 4px solid transparent;
      background-clip: content-box;
    }
  }
`;