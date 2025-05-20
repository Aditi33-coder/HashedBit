import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    const updatedTasks = [...tasks, task.trim()].sort();
    setTasks(updatedTasks);
    setTask('');
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '10px',
      background: '#f0f8ff',
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    },
    title: {
      textAlign: 'center',
      color: '#2c3e50',
      fontSize: '28px',
      marginBottom: '20px',
    },
    inputSection: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      flexGrow: 1,
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    addButton: {
      padding: '10px 16px',
      fontSize: '16px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    addButtonHover: {
      backgroundColor: '#2980b9',
    },
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '5px',
      padding: '10px 15px',
      marginBottom: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    },
    deleteButton: {
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '5px 10px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 React - To Do App</h2>
      <div style={styles.inputSection}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button
          style={styles.addButton}
          onClick={handleAdd}
        >
          ➕ Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((t, i) => (
          <li key={i} style={styles.listItem}>
            {t}
            <button
              style={styles.deleteButton}
              onClick={() => handleDelete(i)}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
