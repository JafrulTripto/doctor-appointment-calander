import React, { useState } from 'react';
import moment from 'moment';
import { Input, Space, Row, Col, Radio, DatePicker, TimePicker, Form } from 'antd';

function CreateAppointment(props) {

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
        },
    };

    const [appointmentForm] = Form.useForm();

    const onFinish = (appointment) =>{

        for (const key in appointment) {
            if (key === 'date') {
                appointment.date = moment(appointment.date).format("DD-MM-YYYY")
            } else if (key === 'time') {
                appointment.time = moment(appointment.time).format("HH-mm")
            }
        }
        let appointments = JSON.parse(localStorage.getItem("appointments"));
        if (appointments) {
            appointments = [...appointments, appointment]
        } else {
            appointments = [];
            appointments.push(appointment);
        }
        localStorage.setItem("appointments",JSON.stringify(appointments));
        console.log(appointments);
        appointmentForm.resetFields();
       // props.modalCancelHandler();
    }

    return (

        <Form {...formItemLayout} form={appointmentForm} onFinish={onFinish} id="appointmentForm">
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                <Form.Item
                    name="name"
                    rules={[{required: true,  message: 'Name is required'}]}
                >
                    <Input placeholder="Enter Name" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                     name="age"
                     rules={[{required: true, message: 'Age is required'}]}
                >
                    <Input placeholder="Enter age" />
                </Form.Item>
                <Form.Item
                     name="gender"
                     rules={[{required: true,  message: 'Gender is required'}]}
                >
                    <Radio.Group>
                        <Radio defaultChecked value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                     name="date"
                     rules={[{required: true,  message: 'Date is required'}]}
                >
                    <DatePicker style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    name="time"
                    rules={[{required: true,  message: 'Time is required'}]}
                >
                    <TimePicker format="HH-mm" style={{ width: '100%' }} />
                </Form.Item>
            </Space>
        </Form>

    )
}

export default CreateAppointment;
