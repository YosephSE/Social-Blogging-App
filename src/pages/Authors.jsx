import React from 'react'
import Author from '../components/Author'
import personData from '../../data'
import Header from '../components/Header'

const Authors = () => {
  const person = personData.users.map(data => (
    <Author
        key = {data.name}
        name = {data.name}
        img={data.profilePicture} 
        post= {data.posts.length}
    />
  ))

  console.log(person)
  return(
    <>
      <Header />
      <div className="bg-[#cccccc] min-h-screen">
          <div className=" grid gap-4 py-4 md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto">
              {person}
          </div>
      </div>
    </>
  )
}

export default Authors
