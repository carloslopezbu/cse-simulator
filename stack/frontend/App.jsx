import { useState } from 'react'
import './App.css'
import user from '../backend/User'
function App() {
  const [count, setCount] = useState(0)
  const [dale, setDale] = useState('')
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      
        <h1 className='text-4xl font-bold mb-4'>{dale}</h1>
        <h1 className='text-4xl font-bold mb-4'>{count}</h1>
        <h1 className='text-4xl font-bold mb-4'>{user.name}</h1>

        <div className='bg-gradient-to-l from-blue-500 to-purple-500 rounded-lg shadow-lg p-6 text-3xl text-white font-bold'>
          Hola Mundo
        </div>

        <button 
        className='w-56 bg-blue-300 hover:bg-blue-400 text-white font-bold p-6 rounded-xl mt-4 transition-transform transform hover:scale-105 ease-in-out duration-300'
        onClick={() => {setDale(dale + (count % 2 == 0 ? 'Dale ' : 'Don ')); setCount(count + 1)}}>
          Pulsame
        </button>
      </div>
    </>
  )
}

export default App
