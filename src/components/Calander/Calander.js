import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';
import CalanderControls from './CalanderControls';
import { Appointment, CalanderCard, CalanderWrapper } from 'components/Styles/Calander.style';
import { Route, Switch } from 'react-router-dom';
import MainCalander from './MainCalander';
import { useDispatch, useSelector } from 'react-redux';
import { appointmentActions } from 'components/store';
import AppointmentModal from 'components/Appointment/AppointmentModal';
import ShowAppointment from 'components/Appointment/ShowAppointment';

const Calander = () => {

    const [month, changeMonth] = useState(moment().month());
    const [year, changeYear] = useState(moment().year());
    const [appointments, setAppointments] = useState([])
    const [isDateFromLink, setIsDateFromLink] = useState(false)
    const isAppointmentAdded = useSelector(state => state.newAppointmentAdded)
    const dispatch = useDispatch()

    const selectedValueHandler = (value, type) => {
        if (type === 'month') {
            changeMonth(value);
        } else {
            changeYear(value)
        }
    }
    const setDateFromLinkHandler = (date) => {
        changeMonth(parseInt(date.month))
        changeYear(parseInt(date.year))
        setIsDateFromLink(true)
        //changeMonth(date.month)
    }
    useEffect(() => {
        const appointments = JSON.parse(localStorage.getItem('appointments'));
        if (appointments) {
            setAppointments(appointments);
            dispatch(appointmentActions.setNewAppointmentAdded(false))
        }
    }, [dispatch, isAppointmentAdded])



    const generateCalandarDays = () => {
        const value = moment({ month: month, year: year });
        const startDay = value.clone().startOf("month").startOf("week");
        const endDay = value.clone().endOf("month").endOf("week");
        const day = startDay.clone().subtract(1, "day");
        const calander = [];
        while (day.isBefore(endDay, 'day')) {
            calander.push(Array(7).fill(0).map(() => day.add(1, "day").clone()));
        }

        return calander;
    }
    const [showAppointmentDetail, setShowAppointmentDetail] = useState(false);
    const [appointmentData, setAppointmentData] = useState({})

    const showAppointmentDetailHandler = (appointment) => {
        setShowAppointmentDetail(true);
        setAppointmentData(appointment);
    }

    const closeAppointmentDetailHandler = () => {
        setShowAppointmentDetail(false);
    }



    const showAppointments = (date) => {
        let sortedAppointments = []
        appointments.forEach(element => {
            if (moment(date).format("YYYY-MM-DD") === element.date) {
                sortedAppointments.push(element)
            }
        });
        if (sortedAppointments) {
            sortedAppointments.sort((a, b) => a.time.localeCompare(b.time))
            return sortedAppointments.map(appointment => {
                return (
                    <Appointment
                        key={appointment.date + appointment.time}
                        onClick={() => showAppointmentDetailHandler(appointment)}>{appointment.name}
                    </Appointment>
                );
            })
        } else {
            return null;
        }
    }

    const showCalander = () => {
        return generateCalandarDays().map((week, index) => {
            return (
                <CalanderWrapper id="content-wrapper" flexDirection={"row"} key={index}>
                    {week.map((dateObj, index) => {
                        return (
                            <CalanderCard
                                key={index}
                                height="140px"
                                selected={moment().format("YYYY-MM-DD") === dateObj.format("YYYY-MM-DD") ? true : false}
                                shouldHover={dateObj.month() === month && moment().format("YYYY-MM-DD") !== dateObj.format("YYYY-MM-DD") ? true : false}
                                backgroundColor={dateObj.month() === month ? "#F9F9F9" : "#DDDDDD"}>
                                {dateObj.format("D")}
                                <div style={{ overflowY: "auto", height: "110px", padding: "5px 5px 5px 20px" }}>{showAppointments(dateObj)}</div>

                            </CalanderCard>
                        )
                    })}
                </CalanderWrapper>
            )
        })
    }


    return (
        <Fragment>
            {appointmentData ?
                <AppointmentModal
                    title={`Appointment (${moment(appointmentData.date).format("Do MMMM YYYY")})`}
                    isModalVisible={showAppointmentDetail}
                    isFooter={false}
                    modalCancelHandler={closeAppointmentDetailHandler}
                >
                    <ShowAppointment appointment={appointmentData} />
                </AppointmentModal> : null}


            <CalanderWrapper flexDirection={"column"}>
                {month && year ? <CalanderControls setSelectedValue={selectedValueHandler} currentMonth={month} currentYear={year} /> : null}
                <Switch>
                    <Route path="/" exact>
                        <MainCalander showCalanderHandler={showCalander} />
                    </Route>
                    <Route path="/year/:year/month/:month" exact>
                        <MainCalander showCalanderHandler={showCalander} setDateFromLinkHandler={setDateFromLinkHandler} isDateFromLink={isDateFromLink} />
                    </Route>
                </Switch>

            </CalanderWrapper>
        </Fragment>

    )
}

export default Calander;