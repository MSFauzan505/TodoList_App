import React from 'react';
import Calendar from '../components/Calendar';
import todos from '../data/todos.json';

const CalendarPage = () => {

  return (
    <div className='flex flex-col gap-8'>
      <Calendar todos={todos} />
    </div>
  );
};

export default CalendarPage;
