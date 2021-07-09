import styled from 'styled-components';


export const CalanderCard = styled.div`
    height: ${(props)=>props.height};
    width: 150px;
    /* border: 0.5px solid blue; */
    padding: 5px;
    margin: 4px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: ${(props) =>!props.selected ? props.backgroundColor : "#BEAEE2"};
    font-weight:${(props)=>props.fontWeight} ;
    &:hover{
        background-color:${(props) => props.shouldHover ? "#F7DBF0" : ""} ;
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