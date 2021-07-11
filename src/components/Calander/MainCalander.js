import { CalanderBody, CalanderCard, WeekDayWrapper, WeekWrapper } from 'components/Styles/Calander.style'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function MainCalander(props) {

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const params = useParams();

    
    useEffect(() => {
        if (Object.keys(params).length !== 0 && !props.isDateFromLink) {
            props.setDateFromLinkHandler(params)
        }
    }, [params, props])
    return (
        <CalanderBody>
            <WeekDayWrapper>{weekDays.map(day => <CalanderCard fontWeight="bold" key={day}>{day}</CalanderCard>)}</WeekDayWrapper>
            <WeekWrapper>{props.showCalanderHandler()}</WeekWrapper>
        </CalanderBody>
    )
}

export default MainCalander
