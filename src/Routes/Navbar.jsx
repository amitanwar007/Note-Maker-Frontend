import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (

       <navbar>
        <ul>
            <li><i class="fa-solid fa-house"></i>Home</li>
            <li><i class="fa-solid fa-plus"></i>Add Note</li>
            <li><i class="fa-solid fa-xmark"></i>Delete All</li>
            <li><i class="fa-solid fa-file-export"></i>Export</li>
        </ul>
       </navbar>

  )
}

export default Navbar;