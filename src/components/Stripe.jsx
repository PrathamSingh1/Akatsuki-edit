import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[25vw] px-4 py-5 h-15 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe