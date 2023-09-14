import {CalendarEvent, CalendarModal, Navbar} from "../";
import { Calendar, dateFnsLocalizer} from 'react-big-calendar';
import {addHours} from "date-fns";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {localizer, getMessagesEs} from "../../helpers";
import {useState} from "react";

const events = [
    {
        title: 'Cumple',
        notes: 'Hay que comprar paster',
        start: new Date(),
        end: addHours( new Date(), 2 ),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'Sebastian',
        }
    },
]

export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#0a2a61',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }
        return {
            style
        };
    };

    const onDoubleClick = ( event ) => {
      console.log({doubleClick: event});
    };

    const onSelect = ( event ) => {
      console.log({click: event});
    };

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
        setLastView( event );
    };

    return (
        <>
            <Navbar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={ events }
                defaultView={ lastView }
                startAccessor='start'
                endAccessor='end'
                style={{ height: 'calc(100vh - 80px)' }}
                messages={ getMessagesEs() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
            />
            <CalendarModal />
        </>
    )
};