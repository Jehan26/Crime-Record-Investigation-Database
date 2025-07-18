import React, { useState } from 'react';
import { cases } from '../data/sampleData';

function Cases() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCases = cases.filter(c =>
    c.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Cases</h2>
      <input
        type="text"
        placeholder="Search cases..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="table">
        <thead>
          <tr>
            <th title="Unique Case Identifier">Case ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Lead Officer ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredCases.map(c => (
            <tr key={c.CaseID}>
              <td>{c.CaseID}</td>
              <td>{c.Title}</td>
              <td>{c.Status}</td>
              <td>{c.StartDate}</td>
              <td>{c.EndDate || '-'}</td>
              <td>{c.LeadOfficerID || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cases;
 