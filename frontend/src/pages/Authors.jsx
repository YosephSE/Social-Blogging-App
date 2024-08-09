import React, { useEffect, useState } from "react";
import Author from "../components/Author";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import api from "../../api/users";
import LoadingPage from "../components/Loading"

const Authors = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const response = await api('/authors')
      const resData = response.data;
      setUsers(resData)
      setSearch(resData)
      setIsloading(false)
    } 

    try{
      getUser()
    } catch(err){
      console.log(err)
    }
  }, [])

  const person = search.map((user) => {
    return (
      <Author
        key={user._id}
        name={user.name}
        img={user.profilePicture}
        post={user.count}
      />
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Chatbot />
      <Header page="Authors" dataChange={setSearch} data={users} />
      { 
        isLoading?
        <LoadingPage />
        :
        <div className="flex-grow mt-9">
          <div className=" grid gap-4 py-4 md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto">
            {person}
          </div>
        </div>
      }
      <Footer />
    </div>
  );
};
export default Authors;
