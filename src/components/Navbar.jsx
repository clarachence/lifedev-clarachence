import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.link_list}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? `${styles.brand} ${styles.active}` : styles.brand } >
              <span>Life</span>Dev
          </NavLink>
          </li>

          <li>
            <NavLink to="/login" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link } >
              Login
          </NavLink>
          </li>

          <li>
            <NavLink to="/register" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link } >
              Register
          </NavLink>
          </li>


          <button className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar