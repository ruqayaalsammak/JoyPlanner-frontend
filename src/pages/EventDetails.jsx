import { useState, useEffect } from "react";
import { useParams  } from "react-router";
import * as eventService from '../services/eventService'
import * as taskService from '../services/taskService'
import TaskForm from "../components/TaskForm";


const EventDetails = () => {
    const { eventId } = useParams()
    const [event, setEvent] = useState(null)

    useEffect (() => {
        const fetchEvent = async () => {
            const eventData = await eventService.show(eventId)
        }
        fetchEvent()
    }, [eventId])

    const handleAddTask = async (formData) => {
        const newTask = await taskService.create(eventId, formData)
        setEvent({ ...event, tasks: [...event.tasks, newTask] })
    }

    if (!event) return <main>Loading...</main>

    return (
        <article className="card event-card">
            <header className="event-header">
                <span className="event-category">
                    {(event.package || 'Bronze').toUpperCase()}
                </span>
                <h2>{event.eventName}</h2>
                <p className="event-author">
                Planned by {typeof event.user === 'object' ? event.user.username: 'Unknown user'} on{' '}
                <span>{new Date(event.date).toLocaleDateString()}</span>
             </p>
            </header>
            <p className="event-text">
                <strong>Scheduled Time:</strong> {event.time}
            </p>
            <footer className="event-footer">
                <section>
                    <h2>Tasks</h2>

                    {(!event.tasks || !event.tasks.length) && <p>There are no tasks assigned.</p>}
                    {event.tasks?.map((task) => (
                        <article key={task._id}>
                            <header>
                                <p>Status: {task.status || 'pending'}</p>
                            </header>
                            <p>{task.title}</p>
                        </article>
                    ))}
                </section>
            </footer>
        </article>
    )
}

export default EventDetails