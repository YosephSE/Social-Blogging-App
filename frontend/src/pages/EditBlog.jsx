import React, { useEffect, useRef, useState } from "react";
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde-all.css';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";



const EditBlog = ({data, dataChange}) => {
    const navigate = useNavigate()
    const userPost = data.posts.filter(post => (post.name === data.session.name && post.id === data.session.postId))
    const [postData, setPostData] = useState(userPost[0])
    const handlePageRender = useRef(false)

    function handleChange(event){
        const {name, value} = event.target
        setPostData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(userPost[0].img);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file);
          const reader = new FileReader();
          reader.onloadend = () => {
              setPreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
  
    useEffect( () => {
        if(handlePageRender){
            setPostData(prevData => ({
                ...prevData,
                img: preview
            }))
        }

        handlePageRender.current = true
    }, [preview])


    function markDownChange(text){
        setPostData(prevData => ({
            ...prevData,
            body: text
        }))
    }

    function sumbit(){
        const updatedData = data.posts.map((post) => {
            if (post.name === data.session.name && post.id === data.session.postId){
                return postData
            } else{
                return post
            }
        })

        dataChange(prevState =>(
            {
                ...prevState,
                posts: updatedData
            }
        ))
        navigate('/myposts')
    }

    return (
        <div className="min-h-screen">
            <Header />
            <div className="bg-[#cccccc] content-center">
                <div className="max-w-96 m-auto p-2">
                    <h1 className="text-3xl">Edit Post</h1>
                    <form onSubmit={sumbit}>
                        <input 
                            type="text" 
                            placeholder="Title" 
                            className="block p-2 w-full rounded-md mt-4"
                            onChange={handleChange}
                            name = "title"
                            value={postData.title}
                            required
                        />
                        <select name="category" onChange={handleChange} value={postData.category} className="w-full p-2 my-4 rounded-md">
                            <option value="" disabled>Choose Category</option>
                            <option value="technology">Technology</option>
                            <option value="Art">Art</option>
                            <option value="Education">Education</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Music">Music</option>
                            <option value="Mindfulness">Mindfulness</option>
                            <option value="uncatagorized">Uncatagorized</option>
                        </select>
                        <ReactMde
                            value={postData.body}
                            minPreviewHeight={20}
                            minEditorHeight={20}
                            heightUnits="vh"
                            disablePreview
                            onChange={markDownChange}
                        />
                        <img src={postData.img} alt="Post Image" className="w-full my-5"/>
                        <input className="mt-4 block"type="file" accept="image/*" onChange={handleImageChange} />
                        <button className="text-white bg-black p-2 rounded-md mt-4" type="submit">Update</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default EditBlog;