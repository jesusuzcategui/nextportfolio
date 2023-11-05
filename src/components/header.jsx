import React from 'react';
import { Link } from 'react-router-dom';
import { CgSearch, CgMenuRight } from 'react-icons/cg';

export const Header = () => {
  return (
    <>
      <header className="w-100 bg-gray-900 text-white">
        <main className='md:container mx-auto px-10'>
          <div className="flex justify-between items-center">
            <p>Jesus Uzcategui</p>
            <nav className="">
              <ul className='grid grid-cols-5 gap-2'>
                <li>
                  <Link className='py-5 px-3 block bg-gray-700 hover:bg-gary-800' to="/">Inicio</Link>
                </li>
                <li>
                  <button className='py-5 px-3 block'>
                    <CgSearch size={24} />
                  </button>
                </li>
                <li>
                  <button className='py-5 px-3 block'>
                    <CgMenuRight size={24} />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </header>
    </>
  )
};