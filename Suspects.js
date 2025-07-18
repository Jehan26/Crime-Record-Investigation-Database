import React, { useState } from 'react';
import { suspects } from '../data/sampleData';

function Suspects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuspects = suspects.filter(s =>
    s.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Suspects</h2>
      <input
        type="text"
        placeholder="Search suspects..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="table">
        <thead>
          <tr>
            <th title="Unique Suspect Identifier">Suspect ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Case ID</th>
            <th>Arrested</th>
          </tr>
        </thead>
        <tbody>
          {filteredSuspects.map(s => (
            <tr key={s.SuspectID}>
              <td>{s.SuspectID}</td>
              <td>{s.Name}</td>
              <td>{s.Age}</td>
              <td>{s.Gender}</td>
              <td>{s.CaseID}</td>
              <td>{s.Arrested ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Suspects;
