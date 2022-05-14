import React from 'react';
import { Link } from 'react-router-dom';

const Vodka = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Vodka/Abson vodka.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vodka</h3>
            <h2 className="text-white title-font text-lg font-medium">Abson Vodka</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Vodka/Chlebny Dar Original Vodka.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vodka</h3>
            <h2 className="text-white title-font text-lg font-medium">Chlebny Dar Original Vodka</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Vodka/Chopin_Vodka.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vodka</h3>
            <h2 className="text-white title-font text-lg font-medium">Chopin Vodka</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Vodka/Ketel One Vodka.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vodka</h3>
            <h2 className="text-white title-font text-lg font-medium">Ketel One Vodka</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link  to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Vodka/Krakus_Premium_Vodka.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vodka</h3>
            <h2 className="text-white title-font text-lg font-medium">Krakus Premium Vodka</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Vodka/pinnacle vodka on Tumblr.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vodka</h3>
            <h2 className="text-white title-font text-lg font-medium">Pinnacle Vodka</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Vodka/Vintage Vodka.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vodka</h3>
            <h2 className="text-white title-font text-lg font-medium">Vintage Vodka</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/Vodka/Zyr Russian Vodka.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Vodka</h3>
            <h2 className="text-white title-font text-lg font-medium">Zyr Russian Vodka</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Vodka