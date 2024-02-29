import React from 'react'

const Btn = ( props ) => {
  const {isOutLine , text ,icon } = props
  return (
    <button className={ isOutLine  ?  'py-4 px-3 border-2 border-black rounded-md flex items-center gap-2.5 min-w-32 w-full text-xs justify-center cursor-pointer' : 'py-4 px-3 bg-black text-white rounded-md flex items-center gap-2.5 min-w-32 text-xs justify-center cursor-pointer'}>
      {icon}
      {text}
    </button>
  )
}

export default Btn                          