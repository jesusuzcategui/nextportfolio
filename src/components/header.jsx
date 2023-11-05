import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgSearch, CgMenuLeft, CgClose } from 'react-icons/cg';

import { useFetchData } from '../service';
import { HEADER_LAYOUT } from '../query';
import { useEffect } from 'react';
import { DrawerMenu } from './drawer-menu';

export const Header = () => {

  const [layoutHeader, setLayoutHeader] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const getHeaderFromContentfull = async () => {
    const [status, data] = await useFetchData(HEADER_LAYOUT);
    if (status != 200) return;
    const { data: { layoutHeaderCollection: { items } } } = data;
    setLayoutHeader(items[0] || null);
  };

  useEffect(() => {
    getHeaderFromContentfull();
  }, []);

  return (
    <>
      <DrawerMenu items={layoutHeader?.menuItemsCollection?.items} show={showDrawer} setShow={setShowDrawer} />
      <header className="w-full bg-gray-900 text-white">
        <main className='md:container mx-auto px-2 md:px-10'>
          <div className="flex justify-between items-center">
            <button className='block md:hidden py-5 px-3' onClick={() => setShowDrawer(true)}>
              <CgMenuLeft size={24} />
            </button>
            <p>Jesus Uzcategui</p>
            <nav className="hidden md:block">
              {(null != layoutHeader) && (
                <ul className='grid grid-cols-5 gap-2 justify-end'>
                  {layoutHeader?.menuItemsCollection?.items?.map(item => (
                    <li key={item?.sys.id}>
                      <Link className='py-5 px-3 block text-center' to={item?.href}>{item?.text}</Link>
                    </li>
                  ))}
                  <li>

                  </li>
                </ul>
              )}
            </nav>
            <button onClick={() => setShowSearch(!showSearch)} className='py-5 px-3 block'>
              {(!showSearch) ? (<CgSearch size={24} />) : (<CgClose size={24} />)}
            </button>
          </div>
        </main>
      </header>
      <div className={`w-full bg-gray-900 transition-all ease-in-out delay-500 overflow-hidden h-full ${(showSearch) ? `max-h-screen` : `max-h-0`}`}>
        <form className="md:container max-auto px-10 py-5">
          <div className='flex gap-3 w-full'>
            <input className='w-full bg-white rounded-sm p-4 text-lg block' type="search" name="q" placeholder='Search' />
          </div>
        </form>
      </div>
    </>
  )
};