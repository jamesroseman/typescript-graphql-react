import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import styles from './App.module.css';
import HomeRoute from './routes/HomeRoute';

function App() {
  return (
    <div className={styles['container']}>
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
