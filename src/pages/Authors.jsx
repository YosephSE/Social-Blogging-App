import React from 'react'
import Author from '../components/Author'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Authors = ({data}) => {
  const person = data.users.map(user => {
    let count = 0
    data.posts.forEach((post) => post.name === user.name && count++)
    return( 
      <Author
        key = {user.name}
        name = {user.name}
        img={user.profilePicture} 
        post= {count}
      />
    )
    }
  )

  return(
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className="bg-[#cccccc] flex-grow">
          <div className=" grid gap-4 py-4 md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto">
              {person}
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Authors
