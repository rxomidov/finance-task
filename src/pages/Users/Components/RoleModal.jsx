import React, {useState} from 'react'
import { Button, Modal } from "antd";
import { CarryOutTwoTone } from '@ant-design/icons';

function RoleModal() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [deleteLoading, setDeleteLoading] = useState(false);
  let token = localStorage.getItem("token");

  const handleOk = () => {
    setDeleteLoading(true);
    console.log("Role modal")
};

const handleCancel = () => {
    setIsModalVisible(false);
};

  return (
    <div>
      <Button
        className="me-2"
        onClick={showModal}
        icon={<CarryOutTwoTone />}
      />
      <Modal
        title="Role Modal" visible={isModalVisible}
        onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={deleteLoading} onClick={handleOk}>
            Yes
          </Button>,
        ]}
      >
        <p>Do you really want to delete this file?</p>
      </Modal>
    </div>
  )
}

export default RoleModal