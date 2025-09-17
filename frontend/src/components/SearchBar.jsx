import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    },[location])
    
  return showSearch && visible ? (
    <div className='border-t border-b border-neutral-900 bg-neutral-950 text-center'>
      <div className='inline-flex items-center justify-center border border-neutral-800 focus-within:border-white/60 focus-within:shadow-[0_0_0_3px_rgba(255,255,255,0.12)] px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-neutral-900 text-white transition'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm placeholder-white/40' type="text" placeholder='Search products, brands, categories...'/>
        <img className='w-4 opacity-90' src={assets.search_icon} alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer opacity-90 hover:opacity-100' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar
