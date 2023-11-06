import React from 'react';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export const DrawerMenu = ({ items, setShow, show }) => {
  return (
    <>
      <sidebar className={`w-full h-screen bg-secondary fixed z-10 transition-all ease-in-out delay-100 ${(show) ? `left-0` : `left-[-200%]`}`}>
        <div className="flex justify-end px-5 py-3">
          <button onClick={() => setShow(false)}>
            <CgClose color="#000" size={24} />
          </button>
        </div>
        <nav>
          <ul>
          {items?.map(item => (
            <li className="border-b border-black last:border-b-0" key={item?.sys.id}>
              <Link className='py-3 px-3 block text-left text-lg text-black' to={item?.href}>{item?.text}</Link>
            </li>
          ))}
          </ul>
        </nav>
      </sidebar>
    </>
  );
};