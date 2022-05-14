import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <div className="relative z-10">
      <header className="text-gray-600 body-font bg-stone-900 fixed top-0 left-0 right-0 sm:py-4">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-indigo-50 hover:text-fuchsia-300">D-Drinks</span>
        </NavLink>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" className="mr-5 hover:text-fuchsia-300 text-indigo-50  ">Home</NavLink>
          <NavLink to="/beer" className="mr-5 hover:text-fuchsia-300 text-indigo-50 ">Beer</NavLink>
          <NavLink to="/champagne" className="mr-5 hover:text-fuchsia-300 text-indigo-50 ">Champagne</NavLink>
          <NavLink to="/vodka" className="mr-5 hover:text-fuchsia-300 text-indigo-50 ">Vodka</NavLink>
          <NavLink to="/wine" className="mr-5 hover:text-fuchsia-300 text-indigo-50 ">Wine</NavLink>
        </nav>
      </div>
    </header>
    </div>

  )
}

export default Nav