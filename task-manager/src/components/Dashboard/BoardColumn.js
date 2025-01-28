import React from 'react';
import Task from './Task';

const BoardColumn = ({ column, onAddTask, newTaskName, setNewTaskName }) => {
  return (
    <div className="column" style={{ margin: '10px', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px', width: '250px' }}>
      <h3>{column.name}</h3>
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Nova Tarefa"
        />
        <button onClick={() => onAddTask(column.id)}>Adicionar Tarefa</button>
      </div>
      
      <div>
        {column.tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
