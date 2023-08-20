import "./navbar.scss"
import { FaBell, FaHome, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="app-name">
        OracleARIOS
      </div>
      <div className="icons">
      <FaHome />
        <div className="notification">
          <FaBell/>
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://lh3.googleusercontent.com/a/AAcHTtdwRC7Z527UkiGdHFYuzTKdYMXutnW60dUl2GQV8x9hMqw=s432-c-no" alt="" />

        </div>
        <span>Sakthi</span>
        <FaSignOutAlt onClick={() => { navigate("/login") }} style={{cursor: 'pointer'}} />
      </div>
      
    </div>
  )
}

export default Navbar