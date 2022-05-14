import React from 'react';
import { Link } from 'react-router-dom';

const Champagne = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/champagne/chandon.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Champagne</h3>
            <h2 className="text-white title-font text-lg font-medium">Chandon</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/champagne/Charles.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Champagne</h3>
            <h2 className="text-white title-font text-lg font-medium">Charles</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/champagne/chronic_spritz.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Champagne</h3>
            <h2 className="text-white title-font text-lg font-medium">Chronic Spritz</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/champagne/la_marca.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Champagne</h3>
            <h2 className="text-white title-font text-lg font-medium">LA Marca</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link  to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/champagne/lanson_black.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Champagne</h3>
            <h2 className="text-white title-font text-lg font-medium">Lanson Black</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/champagne/risata.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Champagne</h3>
            <h2 className="text-white title-font text-lg font-medium">Risata</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/champagne/stella.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Champagne</h3>
            <h2 className="text-white title-font text-lg font-medium">Stella</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/champagne/wilson.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Champagne</h3>
            <h2 className="text-white title-font text-lg font-medium">Wilson</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Champagne