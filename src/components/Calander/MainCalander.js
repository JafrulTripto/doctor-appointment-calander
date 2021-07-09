import { CalanderBody, CalanderCard, WeekDayWrapper, WeekWrapper } from 'components/Styles/Calander.style'
import React from 'react'
import { useParams } from 'react-router-dom'

function MainCalander(props) {

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const params = useParams();
    console.log(params);
    return (
        <CalanderBody>
            <WeekDayWrapper>{weekDays.map(day => <CalanderCard fontWeight="bold" key={day}>{day}</CalanderCard>)}</WeekDayWrapper>
            <WeekWrapper>{props.showCalanderHandler()}</WeekWrapper>
        </CalanderBody>
    )
}

export default MainCalander
