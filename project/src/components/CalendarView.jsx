import React, { useState } from 'react';
import { calendarAppointments } from '../data/mockData';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// Helper to get all weeks in a month as arrays of dates
function getWeeksInMonth(year, month) {
  const weeks = [];
  const firstDay = new Date(year, month, 1);
  let current = new Date(firstDay);
  // Move to Sunday of the first week
  current.setDate(current.getDate() - current.getDay());
  while (true) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
    // Stop if we've passed the last day of the month and it's Saturday
    if (
      (week[6].getMonth() > month && week[0].getMonth() !== month) ||
      (week[0].getMonth() > month)
    ) {
      break;
    }
  }
  return weeks;
}

const times = [
  '10:00', '11:00', '12:00','14:00', 
];

const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

// Helper to parse '5 Oct 2021' to Date
function parseDateString(dateStr) {
  // Accepts '5 Oct 2021'
  const [day, monthStr, year] = dateStr.split(' ');
  const month = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ].indexOf(monthStr);
  return new Date(Number(year), month, Number(day));
}

const CalendarView = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [weekIndex, setWeekIndex] = useState(0);

  const weeks = getWeeksInMonth(currentYear, currentMonth);
  const weekDays = weeks[weekIndex] || [];

  // Helper to get appointment for a specific day and time
  const getAppointment = (date, time) => {
    return calendarAppointments.find(app => {
      const appDate = parseDateString(app.date);
      return (
        appDate.getFullYear() === date.getFullYear() &&
        appDate.getMonth() === date.getMonth() &&
        appDate.getDate() === date.getDate() &&
        app.time === time
      );
    });
  };

  const handlePrevWeek = () => {
    if (weekIndex === 0) {
      // Go to previous month
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const prevWeeks = getWeeksInMonth(prevYear, prevMonth);
      setCurrentMonth(prevMonth);
      setCurrentYear(prevYear);
      setWeekIndex(prevWeeks.length - 1);
    } else {
      setWeekIndex(weekIndex - 1);
    }
  };

  const handleNextWeek = () => {
    if (weekIndex === weeks.length - 1) {
      // Go to next month
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      setCurrentMonth(nextMonth);
      setCurrentYear(nextYear);
      setWeekIndex(0);
    } else {
      setWeekIndex(weekIndex + 1);
    }
  };

  // Filter appointments for the current week
  const appointmentsForWeek = calendarAppointments.filter(app => {
    const appDate = parseDateString(app.date);
    return weekDays.some(day =>
      day.getFullYear() === appDate.getFullYear() &&
      day.getMonth() === appDate.getMonth() &&
      day.getDate() === appDate.getDate()
    );
  });

  return (
    <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 1px 4px #eee', padding: 16 }}>
      {/* Header with month left, arrows right */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 16 }}>
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <div>
          <button onClick={handlePrevWeek} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 8 }}>
            <ChevronLeft />
          </button>
          <button onClick={handleNextWeek} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <ChevronRight />
          </button>
        </div>
      </div>
      {/* Week Days */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        {weekDays.map((date, idx) => (
          <div key={idx} style={{ flex: 1, textAlign: 'center', fontWeight: 500, color: '#555' }}>
            <div style={{ fontSize: 12}}>{daysOfWeek[date.getDay()]}</div>
            <div style={{ fontSize: 10, color: '#888' }}>{date.getDate()}</div>
          </div>
        ))}
      </div>
      {/* Timings grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {times.map(time => (
          <div key={time} style={{ display: 'flex', gap: 2 }}>
            {weekDays.map((date, idx) => {
              const appointment = getAppointment(date, time);
              return (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    minHeight: 30,
                    margin: 2,
                    borderRadius: 6,
                    borderWidth: 0,
                    border: '1px solid #eee',
                    background: appointment ? '#e0e7ff' : '#fafaff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: appointment ? 600 : 400,
                    color: appointment ? '#3730a3' : '#888',
                    cursor: appointment ? 'pointer' : 'default',
                    transition: 'background 0.2s'
                  }}
                  title={appointment ? `${appointment.title} (${appointment.doctor})` : ''}
                >
                  {appointment ? (
                    <>
                      <Clock style={{ height: 12, width: 12, marginRight: 4 }} />
                      {time}
                    </>
                  ) : (
                    time
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* Appointments for this week */}
      <div style={{ marginTop: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 14 }}>Appointments This Week</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {appointmentsForWeek.length === 0 ? (
            <div style={{ color: '#888', fontSize: 12 }}>No appointments this week.</div>
          ) : (
            appointmentsForWeek.map(app => {
              const appDate = parseDateString(app.date);
              return (
                <div
                  key={app.id}
                  style={{
                    border: '1px solid #e0e7ff',
                    borderRadius: 8,
                    background: '#f5f7ff',
                    padding: '10px 16px',
                    minWidth: 180,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                  }}
                >
                  <div style={{ fontWeight: 500, fontSize: 14 }}>{app.title}</div>
                  <div style={{ color: '#6366f1', fontWeight: 500, fontSize: 12 }}>
                    <Clock style={{ height: 14, width: 14, marginRight: 4, verticalAlign: 'middle' }} />
                    {app.time}
                  </div>
                  <div style={{ color: '#888', fontSize: 10 }}>{app.doctor}</div>
                  <div style={{ color: '#888', fontSize: 10 }}>
                    {daysOfWeek[appDate.getDay()]}, {appDate.getDate()} {appDate.toLocaleString('default', { month: 'short' })} {appDate.getFullYear()}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;