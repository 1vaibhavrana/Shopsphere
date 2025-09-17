import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
    <Link onClick={()=>scrollTo(0,0)} className='text-white cursor-pointer group' to={`/product/${id}`}>
      <div className=' overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-white/40 transition shadow-sm group-hover:shadow-black/30'>
        <img className='hover:scale-110 transition ease-in-out duration-300' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm text-white group-hover:text-white transition'>{name}</p>
      <p className=' text-sm font-medium text-white/80'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
