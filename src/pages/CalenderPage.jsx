import React from 'react';
import Calendar from '../components/ui/Calendar';
import todos from '../data/todos.json';

const CalendarPage = () => {

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-10'>
        <h1 className='text-5xl font-bold'>Calendar</h1>
      </div>
      <Calendar todos={todos} />
    </div>
  );
};

export default CalendarPage;
