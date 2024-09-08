import React from 'react'
import Logo from '/src/assets/image/movielogo.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'><img src={Logo} /></div>
        <div className='search'><input></input><button>search</button></div>
    </div>
  )
}

export default Header