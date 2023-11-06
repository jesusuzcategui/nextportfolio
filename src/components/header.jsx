import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgSearch, CgMenuLeft, CgClose } from 'react-icons/cg';

import { useFetchData } from '../service';
import { HEADER_LAYOUT } from '../query';
import { useEffect } from 'react';
import { DrawerMenu } from './drawer-menu';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {

  const [layoutHeader, setLayoutHeader] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const getHeaderFromContentfull = async () => {
    const [status, data] = await useFetchData(HEADER_LAYOUT);
    if (status != 200) return;
    const { data: { layoutHeaderCollection: { items } } } = data;
    setLayoutHeader(items[0] || null);
    setLoading(true);
  };

  const systemDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  useEffect(() => {
    getHeaderFromContentfull();
  }, []);

  useEffect(() => {
    if( isDark ){
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <DrawerMenu items={layoutHeader?.menuItemsCollection?.items} show={showDrawer} setShow={setShowDrawer} />
      <header className="w-full bg-primary text-white">
        <main className='md:container mx-auto px-2 md:px-10'>
          <div className="flex justify-between items-center">
            <button className='block md:hidden py-5 px-3' onClick={() => setShowDrawer(true)}>
              <CgMenuLeft size={24} />
            </button>
            <p>Jesus Uzcategui</p>
            {(loading) && (
              <nav className="hidden md:block">
                {(null != layoutHeader) && (
                  <ul className='grid grid-cols-5 gap-2 justify-end'>
                    {layoutHeader?.menuItemsCollection?.items?.map(item => (
                      <li key={item?.sys.id}>
                        <Link className='py-5 px-3 block text-center' to={item?.href}>{item?.text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </nav>
            ) || (
              <nav className="hidden md:block">
                <ul className='animate-pulse grid grid-cols-5 gap-2 justify-end'>
                  <li className="h-2 bg-slate-200 rounded col-span-1"></li>
                  <li className="h-2 bg-slate-200 rounded col-span-1"></li>
                  <li className="h-2 bg-slate-200 rounded col-span-1"></li>
                  <li className="h-2 bg-slate-200 rounded col-span-1"></li>
                </ul>
              </nav>
            )}
            <button onClick={() => setShowSearch(!showSearch)} className='py-5 px-3 block'>
              {(!showSearch) ? (<CgSearch size={24} />) : (<CgClose size={24} />)}
            </button>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value={isDark} onChange={({ target }) => setIsDark(target.checked)} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Schema</span>
            </label>

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