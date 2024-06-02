import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ravi0529')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])


    return (
        <div className='text-center m-5 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <div className="container w-72 mt-5 m-auto">
                <img src={data.avatar_url} alt="github profile picture" />
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/Ravi0529')
  return res.json()
}
