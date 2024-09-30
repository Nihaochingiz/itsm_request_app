import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ITSMRequestForm from './components/ITSMRequestForm';
import RequestsTable from './components/RequestsTable';

function App() {
  const [requests, setRequests] = useState([]);

  const addRequest = (request) => {
    setRequests((prevRequests) => [...prevRequests, request]);
  };

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Request</Link>
            </li>
            <li>
              <Link to="/requests">Requests</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ITSMRequestForm addRequest={addRequest} />} />
          <Route path="/requests" element={<RequestsTable requests={requests} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;