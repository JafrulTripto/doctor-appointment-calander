import React, { useState } from 'react'
import { Button, Form, Select, Space } from 'antd';
import { CalanderMenu } from 'components/Styles/Calander.style';
import { useHistory } from 'react-router-dom';
import AppointmentModal from '../Appointment/AppointmentModal';
import CreateAppointment from 'components/Appointment/CreateAppointment';
import { PlusOutlined } from '@ant-design/icons'


function CalanderControls(props) {

    const months = [
        {
            id: 0,
            name: 'January'
        },
        {
            id: 1,
            name: 'February'
        },
        {
            id: 2,
            name: 'March'
        },
        {
            id: 3,
            name: 'April'
        },
        {
            id: 4,
            name: 'May'
        },
        {
            id: 5,
            name: 'June'
        },
        {
            id: 6,
            name: 'July'
        },
        {
            id: 7,
            name: 'August'
        },
        {
            id: 8,
            name: 'September'
        },
        {
            id: 9,
            name: 'October'
        },
        {
            id: 10,
            name: 'November'
        },
        {
            id: 11,
            name: 'December'
        }
    ]

    const [appointmentForm] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModalHandler = () => {
        setIsModalVisible(true);
    }
    const { Option } = Select;
    const history = useHistory();
    function handleValueChange(value, type) {
        if (type === "year") {
            props.setSelectedValue(value, type);
            history.push(`/year/${value}/month/${props.currentMonth}`)
        } else {
            props.setSelectedValue(value, type);
            history.push(`/year/${props.currentYear}/month/${value}`)
        }
    }



    const handleCancel = () => {
        setIsModalVisible(false);
        appointmentForm.resetFields();
    };
    return (
        <CalanderMenu>
            <Space>
                <Select value={props.currentMonth} style={{ width: 120 }} onChange={(e) => handleValueChange(e, 'month')}>
                    {months.map(month => {
                        return <Option key={month.id} value={month.id}>{month.name}</Option>
                    })}
                </Select>
                <Select value={props.currentYear} style={{ width: 120 }} onChange={(e) => handleValueChange(e, 'year')}>
                    <Option value={2019}>2019</Option>
                    <Option value={2020}>2020</Option>
                    <Option value={2021}>2021</Option>
                    <Option value={2022}>2022</Option>
                </Select>
            </Space>

            <AppointmentModal
                title="Create Appointment"
                isModalVisible={isModalVisible}
                modalCancelHandler={handleCancel}
                isFooter={true}
            >
                <CreateAppointment modalCancelHandler={handleCancel} form={appointmentForm} />
            </AppointmentModal>

            <Button type="primary" onClick={showModalHandler} style={{ background: "#ea526f", border: "#ea526f" }} icon={<PlusOutlined />}>Create Appointment</Button>
        </CalanderMenu>
    )
}

export default CalanderControls
