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
      <div>
        <Animate />
        <Notification />


        <div>
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