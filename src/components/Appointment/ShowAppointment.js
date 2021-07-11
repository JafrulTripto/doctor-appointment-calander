import { Descriptions } from 'antd'
import React from 'react'

function ShowAppointment(props) {
    return (
        <Descriptions title={props.appointment.name} bordered column={1}>
            <Descriptions.Item label="Gender">{props.appointment.gender === 1 ? "Male" : "Female"}</Descriptions.Item>
            <Descriptions.Item label="Age">{props.appointment.age} years</Descriptions.Item>
            <Descriptions.Item label="Date">{props.appointment.date}</Descriptions.Item>
            <Descriptions.Item label="Time">{props.appointment.time}</Descriptions.Item>
        </Descriptions>
    )
}

export default ShowAppointment
