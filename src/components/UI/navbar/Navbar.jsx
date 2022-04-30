import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context"
import { MyButton } from "../button/MyButton"

export const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className='nav-bar'>
      <MyButton onClick={logout} style={{margin: '10px'}}>
        Log out
      </MyButton>
      <div className='nav-bar-links'>
        <Link to='/about' style={{margin: '10px'}}>About</Link>
        <Link to='/posts' style={{margin: '10px'}}>Posts</Link>
      </div>
    </div>
  )
}