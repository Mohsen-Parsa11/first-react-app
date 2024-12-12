import styled from './navbar.module.css'

// navbar component
function Navbar () {
    return (
      <div className={styled.header}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }

export default Navbar;