
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Örnek Etkinlik 1",
    start: new Date(2023, 5, 25, 10, 0),
    end: new Date(2023, 5, 25, 12, 0),
  },
  {
    title: "Örnek Etkinlik 2",
    start: new Date(2023, 5, 27, 14, 0),
    end: new Date(2023, 5, 27, 16, 0),
  },
];

const MyCalendar = () => {
  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "50px" }}
      />
    </div>
  );
};

export default MyCalendar;
