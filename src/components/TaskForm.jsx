import { useState, useContext } from 'react'
import {TaskContext} from '../context/TaskContext'



function TaskForm() {


    const [title, setTitle] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            descripcion
        })
        setTitle('')
        setDescripcion('')
    }
    return (
        <div className='max-w-md mx-auto'>

        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
            <h1 className='text-2xl font-bold text-white'>Crea tu tarea</h1>

            <input type="text" className='bg-slate-300 p-3 w-full mb-2' placeholder="Escrtibe tu tarea" value={title} autoFocus onChange={(e) => { setTitle(e.target.value) }} />

            <textarea className='bg-slate-300 p-3 w-full mb-2' name="" id="" cols="30" rows="10" placeholder='Escribe la descripcion de la tarea'  value={descripcion} onChange={e => setDescripcion(e.target.value)}>
            </textarea>

            <button className='bg-indigo-500 px-3 py-1 text-white'>
                Guardar
            </button>
        </form>
        </div>

    )
}

export default TaskForm