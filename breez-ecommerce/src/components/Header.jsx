import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='p-6 border-b border-gray-300 text-black'>
      <nav className='flex justify-between items-center'>
        <div className='flex gap-8 text-md'>
            <img src='/logo.svg' alt='logo'></img>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''} hover:font-bold`
          }
        >
          Collections
        </NavLink>
        <NavLink
          to="/men"
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''} hover:font-bold`
          }
        >
          Men
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''} hover:font-bold`
          }
        >
          Women
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''} hover:font-bold`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? 'font-bold' : ''} hover:font-bold`
          }
        >
          Contact
        </NavLink>
        </div>
        <div className='flex items-center text-blue-300 gap-8'>
            <span className='h-[20px] w-[20px]'><img src="/icon-cart.svg" alt="cart" /></span>
            <span className='h-[30px] w-[30px]'><img src='/image-avatar.png' alt='profile' /></span>
      </div>
      </nav>
      
    </header>
  )
}

export default Header
