import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import PropTypes from "prop-types";
import { formatDate } from "@fullcalendar/core"; // ✅ Corrected import
import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import "./Calendar.css";

const Calendar = () => {
  // eslint-disable-next-line no-unused-vars
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

 

  let eventGuid = 0;
  function createEventId() {
    return String(eventGuid++);
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  return (
    <Stack direction={"row"} className="demo-app">
      <Sidebar
        currentEvents={currentEvents}
      />
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>
    </Stack>
  );
};

function renderEventContent(eventInfo) {
  return (
    <div>
      <b>{eventInfo.timeText}</b> <br />
      <i>{eventInfo.event.title}</i>
    </div>
  );
}

function Sidebar({ currentEvents }) {
  return (
    <Paper className="demo-app-sidebar">
      <div className="demo-app-sidebar-section">
        <h2 style={{textAlign:"center"}}>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </Paper>
  );
}

Sidebar.propTypes = {
  currentEvents: PropTypes.array.isRequired,
};

function SidebarEvent({ event }) {
  return (
    <li>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

SidebarEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired, // ✅ Ensure `start` is a string
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Calendar;
