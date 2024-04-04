import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ path }) => {
  // We assume 'path' is something like '/home/profile/details'
  
  // Path is split into its components
  let pathParts = path.split("/").filter(part => part !== '');

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {
        pathParts.map((part, idx) => {
          // Construct the path for the Link
          let path = `/${pathParts.slice(0, idx+1).join('/')}`;
          
          return (
            <span key={idx}>
              {" > "} <Link to={path}>{part}</Link>
            </span>
          );
        })
      }
    </div>
  );
};

export default Breadcrumb;