import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div className='text-center bg-gray-500 p-5 text-white font-semibold text-xl'>
      User: {id}
    </div>
  )
}

export default User
