import { Input, Space, Row, Col, Radio, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import React from 'react'

function CreateAppointment() {
    return (
        <Row>
            <Col span={24}>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <Input placeholder="Enter Name" />
                    <Input placeholder="Enter age" />
                    <Radio.Group >
                        <Radio value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                    </Radio.Group>
                    <DatePicker style={{width:"100%"}}/>
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{ width: '100%' }} />
                </Space>
            </Col>
        </Row>

    )
}

export default CreateAppointment;
