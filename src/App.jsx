import TaskList from './components/TaskList'

import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'

function App() {

  return (
    <div className='bg-zinc-900 h-screen'>
      <div className='container p-10'>
      <TaskForm/>
      <TaskList />

      </div>
    </div>
  )
}

export default App