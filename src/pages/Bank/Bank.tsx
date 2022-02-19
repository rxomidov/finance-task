import React from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";
import {motion} from "framer-motion";
import {variants} from "../../utils/motions";
import {PageWrapper} from "../../containers/StyledContainers";

const Bank = () => {
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
                            search
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                animate={"visible"}
                variants={variants}
                initial="hidden"
            >
                list banks
                {/*<ListArticles listArticles={listArticles} count={count}/>*/}
            </motion.div>
        </PageWrapper>
    );
};

export default Bank;