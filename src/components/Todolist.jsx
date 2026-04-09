import React from 'react'
import Todoitem from './Todoitem'
import { Brain } from 'lucide-react';

const Todolist = ({ todos, onDelete, onStartEdit, onSaveEdit, onCancelEdit, editingId, editText, onEditTextChange, onEditKeyPress, onToggle }) => {
  // let todos = [];
  // let editingId;
  // let editText;
  // let onToggle;
  // let onStartEdit;
  // let onSaveEdit;
  // let onCancelEdit;
  // let onDelete;
  // let onEditTextChange;
  // let onEditKeyPress;

  if (todos.length === 0) {
    return (
      <div className='text-center py-16 backdrop-blur-2xl bg-white/5 rounded-2xl border-white/10 '>
        <div className='w-16
         h-16 bg-linear-to-br from-violet-500/20  to-fuchsia-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3'>
          <Brain size={32} className='text-violet-300' />
        </div>

        <p className='text-white/90 text-base font-semibold mb-1'>No Task yet</p>
        <p className='text-white/50 text-sm'>Create your first task to get started</p>


      </div>
    )
  }

  return (
    <>
      <div className='space-y-2'>
        {todos.map((todo, index) => (
          <Todoitem key={index} todo={todo} index={index}
            editingId={editingId}
            editText={editText}
            onToggle={onToggle}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            onDelete={onDelete}
            onStartEdit={onStartEdit}
            onEditTextChange={onEditTextChange}
            onEditKeyPress={onEditKeyPress} />
        ))}
      </div>


    </>
  )
}

export default Todolist