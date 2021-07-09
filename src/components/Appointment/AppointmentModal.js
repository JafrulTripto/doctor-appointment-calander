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

  console.log(props);

  return (
    <>
      <Modal title="Basic Modal" visible={props.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {props.children}
      </Modal>
    </>
  );
};

export default AppointmentModal;