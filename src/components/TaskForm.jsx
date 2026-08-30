import { useState  } from "react";

const TaskForm = (props) => {
    const initialState = {
        title: '',
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.handleAddTask(formData)
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Your task:</label>
            <input
            required
            type='text'
            name='title'
            id='title-input'
            value={formData.title}
            onChange={handleChange}
            />
            <button type='submit'>SUBMIT TASK</button>
        </form>
    )
}

export default TaskForm