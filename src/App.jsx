import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 font-sans'>
      <h1 className='text-8xl text-amber-50 font-bold'>Redux To Do App</h1>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App
