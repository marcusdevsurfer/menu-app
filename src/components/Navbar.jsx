import '../styles/Navbar.css'
import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <img className='navbar-logo' src={logo} alt="" />
    </div>
  )
}
