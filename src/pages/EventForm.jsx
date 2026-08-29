import { useState } from "react";

const EventForm = (props) => {
    const initialState = {
        eventName: '',
        package: 'Bronze',
        time: '',
        date: '',
    }

    const [formDate, setFormData] = useState(initialState)

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.handleAddEvent(formData)
    }
    return (
        <main className="card">
            <form onSubmit={handleSubmit}>
                <label htmlFor="eventName-input">Event Name</label>
                <input
                required
                type='text'
                name='eventName'
                id='eventName-input'
                value={formData.eventName}
                onChange={handleChange}
                />
                <label htmlFor='package-input'>Package</label>
                <select
                required
                name='package'
                id='package-input'
                value={formData.package}
                onChange={handleChange}
                >
                    <option value='Bronze'>Bronze</option>
                    <option value='Gold'>Gold</option>
                    <option value='Silver'>Silver</option>
                </select>
                <label htmlFor='time-input'>Time</label>
                <input
                required
                type='text'
                name='time'
                id='time-input'
                placeholder='e.g. 18:00 or 6:00 PM'
                value={formData.time}
                onChange={handleChange}
                />
                <label htmlFor="date-input">Date</label>
                <input 
                required
                type="date"
                name="date"
                id='date-input'
                value={formDate.date}
                onChange={handleChange}
                />
                <button type='submit'>SUBMIT</button>
            </form>
        </main>
    )
}

export default EventForm