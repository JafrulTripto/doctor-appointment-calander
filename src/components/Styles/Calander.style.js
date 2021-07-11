import styled from 'styled-components';


export const CalanderCard = styled.div`
    height: ${(props)=>props.height};
    width: 150px;
    /* border: 0.5px solid blue; */
    padding: 5px;
    margin: 4px;
    border-radius: 5px;
    font-weight: bold;
    color:  ${(props) =>props.selected ? "white" : "black"};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: ${(props) =>!props.selected ? props.backgroundColor : "#1A535C"};
    font-weight:${(props)=>props.fontWeight} ;
    &:hover{
        background-color:${(props) => props.shouldHover ? "#F7FFF7" : ""} ;
    }
`
export const CalanderWrapper = styled.div`
    display: flex;
    flex-direction: ${(props)=> props.flexDirection};
    justify-content: center;
    align-items: center;
`

export const CalanderBody = styled.div`
    padding:10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 804px;
    border-radius: 5px;
    overflow-y: auto;
`
export const CalanderMenu = styled.div`
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 20px 120px;
    border-radius: 5px;
    width: 1127px;
    display: flex;
    justify-content: space-between;
`

export const WeekWrapper = styled.div`
    position: relative;
    top: 6%;
`

export const WeekDayWrapper = styled.div`
    display: flex;
    position: fixed;
    z-index: 1000;
`
export const Appointment = styled.div`
    background-color: #4ECDC4;
    padding: 2px 5px;
    font-size: 12px;
    text-align: center;
    border-radius: 12px;
    color: white;
    margin: 3px 0px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`