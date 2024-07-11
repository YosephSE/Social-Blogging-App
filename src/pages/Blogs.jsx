import React from 'react'
import Blog from '../components/Blog'

const Blogs = () => {
  return (
    <div className="blogs grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-300 px-2 md:px-8 md:py-3 py-1">
      <Blog />
    </div>
  )
}

export default Blogs
