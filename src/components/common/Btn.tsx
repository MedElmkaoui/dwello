import React from 'react'

function Btn({label, className}: {label : string, className?: string}) {
  return (
    <button className={'bg-primary text-white py-1.5 px-3.5 rounded-md text-sm text-nowrap ' + className}>
        {label}
    </button>
  )
}

export default Btn
