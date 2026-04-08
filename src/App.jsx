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
  const [editingId, setEditingId] = useState(null)
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

  //on toggel
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    const todo = todos.find((t) => t.id === id)
    if (!todo.completed) {
      playSound("completed")
      showNotification("🎉 Great job! task completed")
    }
  }
  // key press down
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo()

    }

  }

  //edit key press
  const handleEditKeyPress = (e, id) => {
    if (e.key === "Enter") {
      saveEdit(id)
    }
    else if (e.key === "Escape") {
      cancelEdit()
    }
  }

  //start edit
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text)
  }





  //update todo
  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo)))
    setEditText(null)
    setEditingId(null)
    playSound("update")
    showNotification("task updated successfully")
  }
  //cancel edit
  const cancelEdit = () => {
    setEditText("")
    setEditingId(null)
  }



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

          <Todolist todos={todos} onDelete={deleteTodo} onStartEdit={startEditing} onSaveEdit={saveEdit} onCancelEdit={cancelEdit} editingId={editingId} editText={editText} onEditTextChange={(e) => setEditText(e.target.value)} onEditKeyPress={handleEditKeyPress} onToggle={toggleTodo} />

          <Clearbutton />




        </div>

      </div>
    </>
  )
}

export default App