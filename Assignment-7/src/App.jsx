import React, { useEffect, useState } from 'react';

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then(res => res.json())
      .then(data => {
        const sortedData = data.sort((a, b) => a.nrr - b.nrr);
        setTeams(sortedData);
      })
      .catch(err => console.error("API fetch error:", err));
  }, []);

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh',
    },
    title: {
      color: '#2c3e50',
      fontSize: '36px',
      marginBottom: '20px',
    },
    table: {
      margin: 'auto',
      borderCollapse: 'collapse',
      width: '80%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    th: {
      backgroundColor: '#2980b9',
      color: 'white',
      padding: '12px',
    },
    td: {
      padding: '10px',
      textAlign: 'center',
      border: '1px solid #ddd',
    },
    rowEven: {
      backgroundColor: '#f2f2f2',
    },
    rowOdd: {
      backgroundColor: '#ffffff',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏏 IPL 2022 Points Table</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Team</th>
            <th style={styles.th}>Matches</th>
            <th style={styles.th}>Wins</th>
            <th style={styles.th}>Losses</th>
            <th style={styles.th}>Points</th>
            <th style={styles.th}>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
              <td style={styles.td}>{team.team}</td>
              <td style={styles.td}>{team.matches}</td>
              <td style={styles.td}>{team.won}</td>
              <td style={styles.td}>{team.lost}</td>
              <td style={styles.td}>{team.points}</td>
              <td style={styles.td}>{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
