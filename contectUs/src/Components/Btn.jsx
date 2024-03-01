import React from 'react'

const Btn = ( props ) => {
  const {isOutLine , text ,icon , ...rest } = props
  return (
    <button {...rest} className={ isOutLine  ?  ' py-4 px-3 border-2 border-black rounded-md flex items-center gap-2.5 min-w-3 2 max-w-xl text-xs justify-center cursor-pointer' : 'hover:bg-yellow-300  py-4 px-3 bg-black text-white rounded-md flex items-center gap-6 max-w-xl text-xs justify-center cursor-pointer sm:w-full'} >
      {icon}
      {text}
    </button>
  )
}

export default Btn                          