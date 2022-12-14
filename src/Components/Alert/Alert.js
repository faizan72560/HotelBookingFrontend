import React from 'react'

const Alert = (props) => {
  return (
    <div>
        <div className="bg-green-50 border border-green-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Success</strong>
  <span className="block sm:inline text-blue">{props.message}</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    
  </span>
</div>
    </div>
  )
}

export default Alert