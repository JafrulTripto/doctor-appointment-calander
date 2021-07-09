import React, { useState } from 'react';
import moment from 'moment';
import CalanderControls from './CalanderControls';
import { CalanderCard, CalanderWrapper } from 'components/Styles/Calander.style';
import { Route, Switch } from 'react-router-dom';
import MainCalander from './MainCalander';

const Calander = () => {



    const [month, changeMonth] = useState(moment().month());
    const [year, changeYear] = useState(moment().year());


    const selectedValueHandler = (value, type) => {
        if (type === 'month') {
            changeMonth(value);
        } else {
            changeYear(value)
        }
    }



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
                                backgroundColor={dateObj.month() === month ? "#F9F9F9" : "#CDF0EA"}>
                                {dateObj.format("D")}
                            </CalanderCard>
                        )
                    })}
                </CalanderWrapper>
            )
        })
    }

    return (
        <CalanderWrapper flexDirection={"column"}>
            <CalanderControls getSelectedValue={selectedValueHandler} currentMonth={month} currentYear={year} />
            <Switch>
                <Route path="/" exact>
                    <MainCalander showCalanderHandler={showCalander} />
                </Route>
                <Route path="/year/:year/month/:month" exact>
                    <MainCalander showCalanderHandler={showCalander} />
                </Route>
            </Switch>

        </CalanderWrapper>
    )
}

export default Calander;