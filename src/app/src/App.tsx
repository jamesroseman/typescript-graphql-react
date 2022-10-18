import React from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import HomeRoute from './routes/HomeRoute';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          {/* Redirect everything else to the home route. */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
