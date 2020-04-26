import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import { Layout } from '../../Components/Layout/Layout'
import { ModalContainer } from '../../Components/Modal/Modal.container'
import { InputComponent } from '../../Components/Input/InputComponent'
import { CalendarEvent } from "./Calendar.container"

interface CalendarProps {
    calendarComponentRef: React.RefObject<FullCalendar>;
    calendarEvent: CalendarEvent[]
    handleDateClick: (arg: any) => void;
    modalOpen:  boolean;
    toggleModal: () => void;
    dateStart: string;
    dateEnd: string;
    setDateStart: (event: any) => void;
    setDateEnd: (event: any) => void;
    setTitle: (event: any) => void;
    addEvent: () => void;
}

const CalendarComponent = (props: CalendarProps) => (
    <Layout marginTop={false} overflow={true}>
        <div className='flex bg-white'>
            <div className="flex z-20 py-4 px-4">
                <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    ref={props.calendarComponentRef}
                    events={props.calendarEvent}
                    dateClick={props.handleDateClick}
                />
            </div>
            <ModalContainer title="Add an event" modalOpen={props.modalOpen} toggleModal={props.toggleModal}>
                <div className="flex flex-col mt-4">
                    <label>Date de début</label>
                    <InputComponent
                        type="datetime-local"
                        placeholder="Date début"
                        border={true}
                        value={props.dateStart}
                        onChange={(event: any) => props.setDateStart(event.target.value)} />
                </div>
                <div className="flex flex-col mt-4">
                    <label>Date de fin</label>
                    <InputComponent
                        type="datetime-local"
                        placeholder="Date fin"
                        border={true}
                        value={props.dateEnd}
                        onChange={(event: any) => props.setDateEnd(event.target.value)} />
                </div>
                <div className="flex flex-col mt-4">
                    <label>Title</label>
                    <InputComponent
                        placeholder="Title"
                        type="text"
                        border={true}
                        onChange={(event: any) => props.setTitle(event.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold 
                  py-2 px-4 rounded inline-flex justify-center items-center mt-4"
                    onClick={props.addEvent}
                >
                    Add an event
                </button>
            </ModalContainer>
        </div>
    </Layout>
)

export { CalendarComponent }