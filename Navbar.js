import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserShield, FaGavel, FaUser, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#1a237e', padding: '10px 20px', display: 'flex', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <img src="/images/268_172442312566c89bd59e1a9_whatsappimage.png" alt="Tamil Nadu Police Logo" style={{ height: '40px', marginRight: '10px' }} />
      <img src="/images/central_bureau_of_investigation_logo.png" alt="CBI Logo" style={{ height: '40px', marginRight: '15px' }} />
      <h1 style={{ color: 'white', fontSize: '1.5rem', marginRight: '40px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
        Crime Record & Investigation Database
      </h1>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, flexGrow: 1 }}>
        {/* Removed Officers link as per user request */}
        {/* <li style={{ marginRight: '20px' }}>
          <Link to="/officers" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>
            <FaUserShield /> Officers
          </Link>
        </li> */}
        <li style={{ marginRight: '20px' }}>
          <Link to="/cases" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>
            <FaGavel /> Cases
          </Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/suspects" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>
            <FaUser /> Suspects
          </Link>
        </li>
        <li>
          <Link to="/evidence" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>
            <FaFileAlt /> Evidence
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
