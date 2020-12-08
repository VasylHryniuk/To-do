import React, {useState} from 'react';

import TodoForm from '../todo-form/TodoForm';
import Todo from '../todo/Todo';
import Header from '../header/Header';

const TodoList = () => {

   const [items, setItems] = useState([]);

   const addItem = item => {
       if(!item.text || /^\s*$/.test(item.text)) {
           return
       }

    const newItem = [item, ...items];

    setItems(newItem);

    console.log(...items)
   }

const removeItem = id => {
    const removeArr = [...items].filter(todo => todo.id !== id);

    setItems(removeArr)
}

const toggleImportant = id => {
    let updatesTodos = items.map(item => {
        if (item.id === id) {
            item.isComplete = !item.isComplete;
        }
        return item;
    });
    setItems(updatesTodos);
}

const allPosts = items.length;
const importantPosts = items.filter(item => item.isComplete).length;
    
    return (
        <>
        <Header allPosts={allPosts} importantPosts={importantPosts}/>
        <div>
            <h1 style={{textAlign:'center'}}>Index</h1>
           <Todo items={items} removeItem={removeItem} toggleImportant={toggleImportant}/>
            <TodoForm onSubmit={addItem} />
        </div>
        </>
    )
}

export default TodoList;
