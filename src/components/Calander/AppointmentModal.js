import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AppointmentModal = (props) => {
    
  //const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

  const handleOk = () => {
    props.setModalVisibleHandler(false);
  };

  const handleCancel = () => {
    props.setModalVisibleHandler(false);
  };

  return (
    <>
      <Modal title="Basic Modal" visible={props.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AppointmentModal;