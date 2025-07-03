import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
 
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({ text: input }))
        setInput('')
    }
  return (
    <div className='w-full max-w-md mx-auto mt-8'>
      <form onSubmit={handleSubmit} className='flex items-center gap-2 bg-white/80 p-4 rounded-xl shadow-lg w-full'>
        <input type="text" placeholder="Add a todo" value={input} onChange={(e) => setInput(e.target.value)} className='flex-1 p-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition' />
        <button type="submit" className='bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:from-pink-500 hover:to-blue-500 transition'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
