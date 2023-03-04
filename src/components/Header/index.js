// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="navbar-logo"
    />
    <ul className="list-container">
      <li className="list-item">Home</li>
      <li className="list-item">Products</li>
      <li className="list-item">Cart</li>
      <li className="list-item">
        <button type="button" className="logout-btn">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
