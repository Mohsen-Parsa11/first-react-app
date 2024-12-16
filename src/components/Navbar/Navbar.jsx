import styled from './navbar.module.css'

// navbar component
function Navbar (props) {
  return (
      
    <div className={styled.headerWrapper}>
      <div className="container">
      <div className={styled.header}>
        <h3>{props.title}</h3>
        <ul>
          <li>لیست مقالات</li>
          <li>مقاله جدید</li>
          <li>درباره</li>
        </ul>
      </div>
      </div>
    </div>
    );
  }

export default Navbar;