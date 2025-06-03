import React from 'react';
import Calendar from '../components/Calendar';

const CalendarPage = () => {
  const todos = [
    { title: 'Belajar React', start: '2025-06-10T10:00:00', end: '2025-06-10T12:00:00' },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <Calendar todos={todos} />
    </div>
  );
};

export default CalendarPage;
