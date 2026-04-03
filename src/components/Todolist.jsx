import React from 'react'
import Todoitem from './Todoitem'

const Todolist = () => {
  let todos = [];
  let editingId;
  let editText;
  let onToggle;
  let onStartEdit;
  let onSaveEdit;
  let onCancelEdit;
  let onDelete;
  let onEditTextChange;
  let onEditKeyPress;

  return (
    <>
      <div className='space-y-2'>
        {todos.map((todo, index) => (
          <Todoitem key={index} todo={todo} index={index}
            editingId={editingId}
            editText={editText}
            onToggle={ontoggle}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            onDelete={onDelete}
            onEditTextChange={onEditTextChange}
            onEditKeyPress={onEditKeyPress} />
        ))}
      </div>


    </>
  )
}

export default Todolist