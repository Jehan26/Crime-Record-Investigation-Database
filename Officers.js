import React, { useState } from 'react';
import { officers } from '../data/sampleData';
import { FaSearch } from 'react-icons/fa';

function Officers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOfficers = officers.filter(officer =>
    officer.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Officers</h2>
      <div style={{ position: 'relative', width: '320px', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search officers..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
          style={{ width: '100%', paddingRight: '30px' }}
        />
        <FaSearch
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'red',
            pointerEvents: 'none'
          }}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th title="Unique Officer Identifier">Officer ID</th>
            <th>Name</th>
            <th>Rank</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredOfficers.map(officer => (
            <tr key={officer.OfficerID}>
              <td>{officer.OfficerID}</td>
              <td>{officer.Name}</td>
              <td>{officer.Rank}</td>
              <td>{officer.Department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Officers;
