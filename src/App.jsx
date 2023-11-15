import React, {useState} from "react";

export default function App() {

  const [tasks, setTasks] = useState([
    {id:1, title:'Learn React 1', completed: false},
    {id:2, title:'Learn React 2', completed: false},
    {id:3, title:'Learn React 3', completed: false},
  ]);

  const [input, setInput] = useState('');

  function todoCompleted(id) {
    setTasks(tasks.filter(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task
    }))
  };

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  };
  function addTask(e) {
    if (e.code === 'Enter' && input.trim() !== '') {
      setTasks(tasks.concat([{ id: Date.now(), title: input }]));
      setInput('');
    }
  }
  return (
    <div>
      <h1>ToDo APP</h1>
      <input
        value={input}
        type="text"
        onKeyDownCapture={(e) => addTask(e)}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        {tasks && tasks.map(task => {
          return (
            <div className="TaskWrapper" key={task.id}>
              <input type="checkbox" onClick={() => todoCompleted(task.id)}/>
              <div
                className="taskTitle"
                style={{ textDecoration: task.completed ? 'line-through' : null}}
              >
                {task.title}
              </div>
              <div
                onClick={() => removeTask(task.id)}
                className="close">&times;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

