import styled from './navbar.module.css'
import { Link } from 'react-router-dom';
// navbar component
function Navbar (props) {
  return (
      
    <div className={styled.headerWrapper}>
      <div className="container">
      <div className={styled.header}>
        <h3>{props.title}</h3>
        <ul>
          <li>
            <Link to="/">لیست مقالات</Link>    
          </li>
          <li>مقاله جدید</li>
          <li>
            <Link to="/about">درباره</Link>    
          </li>
        </ul>
      </div>
      </div>
    </div>
    );
  }

export default Navbar;