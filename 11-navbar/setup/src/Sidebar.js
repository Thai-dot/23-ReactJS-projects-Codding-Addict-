import React from 'react'

const Sidebar = () => {
    return (
        <>
        <h4>Sidebar</h4>
      <div className="links-container show-container">
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </div>
      </>
    );
}

export default Sidebar
