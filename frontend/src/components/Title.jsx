import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 text-white'>
      <p className='text-white/70'>{text1} <span className='text-white font-medium'>{text2}</span></p>
      <div className='w-8 sm:w-12 h-[2px] bg-white/50 rounded-full'></div>
    </div>
  )
}

export default Title
