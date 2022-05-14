import React from 'react';
import { Link } from 'react-router-dom';


const Wine = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/wine/19_crimes.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wine</h3>
            <h2 className="text-white title-font text-lg font-medium">19 Crimes</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/wine/apothic_pinot.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wine</h3>
            <h2 className="text-white title-font text-lg font-medium">Apothic Pinot</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/wine/frank_family.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wine</h3>
            <h2 className="text-white title-font text-lg font-medium">Frank Family</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/wine/josh_cellars.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wine</h3>
            <h2 className="text-white title-font text-lg font-medium">Josh Cellars</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link  to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/wine/meiomi.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wine</h3>
            <h2 className="text-white title-font text-lg font-medium">Meiomi</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/wine/stella_rosa.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wine</h3>
            <h2 className="text-white title-font text-lg font-medium">Stella Rosa</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/wine/vampire_cabernet.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wine</h3>
            <h2 className="text-white title-font text-lg font-medium">Vampire Cabernet</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to='/detail' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="images/wine/vampire_red_wine.jpg"/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wine</h3>
            <h2 className="text-white title-font text-lg font-medium">Vampire Red Wine</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Wine