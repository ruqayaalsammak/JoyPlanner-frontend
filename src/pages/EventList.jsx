import { Link } from 'react-router'

const EventList = (props) => {
    return (
        <main className="event-list">
            {props.events.map((event) => (
                <Link key={event._id} to={`/events/${event._id}`}>
                    <article className='card event-card'>
                        <header className='event-header'>
                            <span className='event-category'>
                                {(event.package || 'Bronze').toUpperCase()}
                            </span>
                            <h2>{event.eventName}</h2>
                            <p className='event-author'>
                                Planner: {typeof event.user === 'object' ? event.user.username : 'Unknown User'}
                            </p>
                        </header>

                        <p className='event-text'>
                            <strong>Time:</strong> {event.time}
                        </p>

                        <footer className='event-footer'>
                            <span>
                                {new Date(event.date).toLocaleDateString()}
                            </span>
                            <span>
                                {event.tasks?.length || 0} tasks
                            </span>
                        </footer>
                    </article>
                </Link>
            ))}
        </main>
    )
}

export default EventList