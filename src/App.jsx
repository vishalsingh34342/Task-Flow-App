import React, { useState } from 'react'
import Animate from './Animate'
import Notification from './components/Notification'
import Header from './components/Header'
import Statsgrid from './components/Statsgrid'
import Input from './components/Input'
import Todolist from './components/Todolist'
import Clearbutton from './components/Clearbutton'


const playSound = (data) => { }

const App = () => {
  const STORAGE_KEY = "todos"


  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("")
  const [notification, setnotification] = useState(null)
  const [edtingId, setEdtingid] = useState(null)
  const [editText, setEditText] = useState("")
  const [hasLoaded, setHasLoaded] = useState(false);



  //get from loacl storage


  //save to local storage


  //show notification
  const showNotification = (message, type = "success") => {
    setnotification({ message, type })
    setTimeout(() => {
      setnotification(null)
    }, 3000);
  }


  //add todo
  const handleAddTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTodos([newTodo, ...todos]);
    setInput("");
    playSound("add");
    showNotification("⭐ Task added successfully")


  }
  // key press down
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo()

    }

  }




  //update todo



  //delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id))
    playSound("delete")
    showNotification("🗑️ task deleted ", "info")

  }



  return (
    <>
      <div className='min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden'>
        <Animate />
        <Notification notification={notification} onClose={() => setnotification(null)} />


        <div className='max-w-3xl mx-auto relative z-10'>
          <Header />

          <Statsgrid />

          <Input value={input} onChange={(e) => setInput(e.target.value)} onAdd={handleAddTodo} onKeyPress={handleKeyPress} />

          <Todolist todos={todos} onDelete={deleteTodo} />

          <Clearbutton />




        </div>

      </div>
    </>
  )
}

export default App