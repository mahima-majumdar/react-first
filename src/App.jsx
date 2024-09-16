import React from 'react'

let a = "5";

const App = () => {
  return (
    <>
      <div className='flex justify-center rounded-xl items-center bg-slate-800 h-[80vh] text-red-600  flex-col leading-none tracking-tight'>
        <h1 className='text-7xl font-bold uppercase'>first React project</h1>
        <br />
        <h2 className='text-3xl text-red-400'> {import.meta.env.VITE_API_KEY}</h2>
        
      </div>
    </>
  )
}

export default App
