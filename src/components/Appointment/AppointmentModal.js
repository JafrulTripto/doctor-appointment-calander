import React from 'react';
import { Button, Modal } from 'antd';

const AppointmentModal = (props) => {

  //const [isModalVisible, setIsModalVisible] = useState(false);

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };






  return (
    <Modal
      title={props.title}
      onCancel={props.modalCancelHandler}
      footer={[
        <Button key="cancel" onClick={props.modalCancelHandler}>
          Cancel
        </Button>,
        <Button form="appointmentForm" key="submit" htmlType="submit" type={'primary'}>
          Submit
        </Button>
      ]}
      visible={props.isModalVisible}
    >
      {props.children}
    </Modal>
  );
};

export default AppointmentModal;