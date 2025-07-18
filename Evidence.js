import React, { useState } from 'react';
import { evidence } from '../data/sampleData';

function Evidence() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvidence = evidence.filter(e =>
    e.Description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Evidence</h2>
      <input
        type="text"
        placeholder="Search evidence..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="table">
        <thead>
          <tr>
            <th title="Unique Evidence Identifier">Evidence ID</th>
            <th>Description</th>
            <th>Collected Date</th>
            <th>Case ID</th>
            <th>Updated By</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvidence.map(e => (
            <tr key={e.EvidenceID}>
              <td>{e.EvidenceID}</td>
              <td>{e.Description}</td>
              <td>{e.CollectedDate}</td>
              <td>{e.CaseID}</td>
              <td>{e.UpdatedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Evidence;
