import Nav from "./components/Nav"
import SignUpForm from "./pages/SignUpForm"
import './App.css'
import { Routes, Route, useNavigate } from "react-router"
import SignInForm from "./pages/SignInForm"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import { useState, useEffect } from "react"
import EventList from "./pages/EventList"
import * as eventService from './services/eventService'
import EventDetails from "./pages/EventDetails"
import EventForm from "./pages/EventForm"

const getUserFromToken = () => {
  const token = localStorage.getItem('token')

  if (!token) return null

  return JSON.parse(atob(token.split('.')[1])).payload
}

const App = () => {
  const [user, setUser] = useState(getUserFromToken())
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllEvents =  async () => {
      const eventData = await eventService.index()
      setEvents(eventData)
    }
    if (user) fetchAllEvents()
  }, [user])

  const handleAddEvent = async (formData) => {
    const newEvent = await eventService.create(formData)
    setEvents([newEvent, ...events])
    navigate('/events')
  }

  const handleDeleteEvent = async (eventId) => {
    const deletedEvent = await eventService.deleteEvent(eventId)
    setEvents(events.filter((event) => event._id !== eventId))
    navigate('/events')
  }

  const handleUpdateEvent = async (eventId, formData) => {
    const updatedEvent = await eventService.update(eventId, formData)
    const updatedEventList = events.map((event) => {
      return eventId === event._id ? updatedEvent : event
    })
    setEvents(updatedEventList)
    navigate(`/events/${eventId}`)
  }
  return (
    <div>
      <Nav user={user} setUser={setUser} />
      <main className="app-main">
        <Routes>
          <Route path='/' element={<Landing />} />
          {user ? (
            <>
            <Route path='/events' element={<EventList events={events} />} />
            <Route path='/events/new' element={<EventForm handleAddEvent={handleAddEvent} />} />
            <Route path='/events/:eventId' element={<EventDetails user={user} handleDeleteEvent={handleDeleteEvent}/>} />
            <Route path='/events/:eventId/edit' element={<EventForm  handleUpdateEvent={handleUpdateEvent}/>} />
            </>
          ):(
            <>
            <Route path='/sign-up' element={<SignUpForm setUser={setUser} />} />
            <Route path='/sign-in' element={<SignInForm setUser={setUser} />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  )
}

export default App