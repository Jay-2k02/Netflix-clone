import React, { useContext } from 'react'
import './Navbar.css'
import { navigateContext } from '../../Constants/constants'
function Navbar() {
  const navigate = useContext(navigateContext)
  return (
    <div className='navbar'>

        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt='logo'/>
        <img onClick={()=>{navigate('/login')}} className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt='avatar'/>
      
    </div>
  )
}

export default Navbar
