import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import { CalendarComponent } from "./CalendarComponent"
import { jsonData, jsonWrite} from "./Calendar.service"

export interface CalendarEvent {
    title?: string;
    start?: Date;
    end?: Date;
    id?: number;
}
const CalendarContainer = () => {
    const calendarComponentRef = React.createRef<FullCalendar>()
    const [calendarEvent, setCalendarEvent] = useState<CalendarEvent[]>([]);
    const [title, setTitle] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        if (modalOpen) {
            setModalOpen(false);
        } else {
            setModalOpen(true);
        }
    };

    const handleDateClick = (arg: any) => {
        const date = new Date(arg.date).toISOString().slice(0, -1)
        setDateStart(date);
        setDateEnd(date);
        toggleModal();
    }

    const addEvent = () => {
        const datas = jsonData();
        setCalendarEvent(
            datas.push({
                title: title,
                start: new Date(dateStart),
                end: new Date(dateEnd),
                id: calendarEvent.length + 1
            })
        )
        console.log(datas);
        jsonWrite(JSON.stringify(datas));
        setCalendarEvent(datas);
        toggleModal();
    }

    useEffect(() => {
            let datas = jsonData();
            if (datas === undefined) {
              datas = jsonData();
            }
            setCalendarEvent(datas);
    }, []);
    const propsToSend = {
        addEvent,
        handleDateClick,
        toggleModal,
        calendarComponentRef,
        setTitle,
        setDateStart,
        setDateEnd,
        modalOpen,
        calendarEvent,
        dateStart,
        dateEnd
    }
    return (
        <CalendarComponent {...propsToSend} />
    )
}

export { CalendarContainer }