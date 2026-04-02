import React from 'react'
import Animate from './Animate'
import Notification from './components/Notification'
import Header from './components/Header'
import Statsgrid from './components/Statsgrid'
import Input from './components/Input'
import Todolist from './components/Todolist'
import Clearbutton from './components/Clearbutton'

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden'>
        <Animate />
        <Notification />


        <div className='max-w-3xl mx-auto relative z-10'>
          <Header />

          <Statsgrid />

          <Input />

          <Todolist />

          <Clearbutton />




        </div>

      </div>
    </>
  )
}

export default App