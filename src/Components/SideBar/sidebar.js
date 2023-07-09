import React, { useState } from 'react';
import './sidebar.css'; // Import your CSS styles for the sidebar

const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className='sidebar.open'>
      <button className="sidebar-toggle">
        Toggle Sidebar
      </button>
      <ul className="sidebar-menu">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
