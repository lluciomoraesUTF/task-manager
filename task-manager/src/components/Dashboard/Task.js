import React from 'react';

const Task = ({ task }) => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '5px', marginBottom: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <p>{task.name}</p>
    </div>
  );
};

export default Task;
