import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.todos)

    const handleRemove = (id) => {
        dispatch(removeTodo({ id }))
    }
  return (
    <div className='w-full max-w-md mx-auto mt-6'>
      <div className='space-y-4'>
        {todos.map((todo) => (
          <div key={todo.id} className='flex items-center justify-between bg-white/80 py-4 px-6 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 transition'>
            <p className='text-lg font-medium text-gray-800'>{todo.text}</p>
            <button onClick={() => handleRemove(todo.id)} className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow transition'>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
