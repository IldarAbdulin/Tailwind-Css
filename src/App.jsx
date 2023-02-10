import React from 'react';
import styles from './App.module.scss';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.parent}>
      <h1 className={styles.heading}>Hello world!</h1>
      <div>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
          Login
        </button>
        {isOpen && <button className="animate-fade">TEST</button>}
      </div>
    </div>
  );
}

export default App;
