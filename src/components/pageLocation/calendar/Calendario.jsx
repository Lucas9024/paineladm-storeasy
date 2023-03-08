import React, { useState, useEffect } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import PropTypes from 'prop-types'; // ES6
import './Calendario.scss';

const Calendario = ({ timeStart, timeEnd }) => {
    let data = new Date();
    let dayData = data.getDate();
    let monthData = data.getMonth() + 1;
    let yearData = data.getFullYear();
    const disabledDays = [
        {
            year: 2022,
            month: 3,
            day: 6,
        },
    ];

    const defaultFrom = {
        year: yearData,
        month: monthData,
        day: dayData,
    };
    const defaultTo = {
        year: yearData,
        month: monthData,
        day: dayData,
    };

    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };
    PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    });
    const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);
    const [selectDay, setSelectDay] = useState(0);
    const [selectMonth, setSelectMonth] = useState(0);
    const [selectYear, setSelectYear] = useState(0);
    const handleDisabledSelect = (disabledDay) => {
        alert(
            'Está data já se encontra alugada. Faça a escolha de outra data!',
            disabledDay,
        );
    };
    useEffect(() => {
        try {
            setSelectDay(selectedDayRange.to.day);
            setSelectMonth(selectedDayRange.to.month);
            setSelectYear(selectedDayRange.to.year);
        } catch (err) {}
    }, [selectedDayRange]);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Calendar
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                colorPrimary="#DD0AC8"
                colorPrimaryLight="rgba(221,10,200,0.3)"
                disabledDays={disabledDays}
                inputPlaceholder="Selecione um intervalo de dias"
                onDisabledDayError={handleDisabledSelect}
                calendarClassName="custom-calendar" // and this
                calendarTodayClassName="custom-today-day"
                shouldHighlightWeekends
            />
            <p className="infos-calendar" style={{ marginTop: '10px' }}>
                Das {timeStart}h de {selectedDayRange.from.day}/
                {selectedDayRange.from.month}/{selectedDayRange.from.year} até
                as {timeEnd}h de {selectDay}/{selectMonth}/{selectYear}
            </p>
        </div>
    );
};

export default Calendario;
