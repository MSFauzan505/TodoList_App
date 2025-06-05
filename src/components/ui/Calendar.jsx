import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import useDrawer from '../../hooks/useDrawer';
import DrawerTask from './DrawerTask';

export default function Calendar({ todos }) {
  const { open, onClose, showDrawer, data } = useDrawer();

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        height="auto"
        eventClassNames={() => 'bg-blue-200'} // styling warna per task nya
        eventClick={(info) => showDrawer(info.event)}
        eventMouseLeave={() => onClose()}
        events={todos.map(todo => ({
          title: todo.title,
          start: todo.start,
          end: todo.end,
        }))}
        headerToolbar={{
          left: 'title',
          right: 'prev,next today',
          center: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
      />
      {open && 
        <DrawerTask open={open} onClose={onClose} showDrawer={showDrawer} data={data} />
      }
    </>
  );
}
