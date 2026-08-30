const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/events`

const create = async (eventId, taskFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskFormData),
        })
        return res.json()
    } catch (error) {
        console.logO(error)
    }
}

export {
    create,
}
