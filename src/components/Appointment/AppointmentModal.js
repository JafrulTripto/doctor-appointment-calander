import React from 'react';
import { Button, Modal } from 'antd';

const AppointmentModal = (props) => {

  const footer = [
      <Button key="cancel" onClick={props.modalCancelHandler}>
        Cancel
      </Button>,
      <Button form="appointmentForm" key="submit" htmlType="submit" type={'primary'}>
        Submit
      </Button>
  ]
  return (
    <Modal
      title={props.title}
      onCancel={props.modalCancelHandler}
      footer={props.isFooter? footer : null}
      visible={props.isModalVisible}
    >
      {props.children}
    </Modal>
  );
};

export default AppointmentModal;