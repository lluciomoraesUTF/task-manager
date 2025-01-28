import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase/firebaseConfig';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import BoardColumn from './BoardColumn'; 

const TaskManager = () => {
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchColumns = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) return;

    const q = query(collection(db, "columns"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const columnsData = [];
    
    querySnapshot.forEach((doc) => {
      columnsData.push({ ...doc.data(), id: doc.id });
    });
    
    setColumns(columnsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchColumns();
  }, []); 

  return (
    <div className="container">
      <div className="card">
        <h2>Gerenciamento de Tarefas</h2>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div style={{ display: 'flex', marginTop: '20px' }}>
            {columns.map((column) => (
              <BoardColumn key={column.id} column={column} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
