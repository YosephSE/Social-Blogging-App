import React, { useEffect, useState} from "react";
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde-all.css';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const CreateBlog = (props) => {
    const navigate = useNavigate()
    const [postData, setPostData] = useState({
        name:props.data,
        id: nanoid(),
        title: "",
        category: "",
        img:"",
        body: "",
        date: 0,
    })

    function handleChange(event){
        const {name, value} = event.target
        setPostData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    function markDownChange(text){
        setPostData(prevData => ({
            ...prevData,
            body: text
        }))
    }

    useEffect(() => {
        const time = new Date().getTime()
        setPostData(prevData => ({
            ...prevData,
            date: time
        }))
    },[])
    
    function sumbit(event){
        event.preventDefault();
        props.dataChange(prevState =>(
            {
                ...prevState,
                posts:[...prevState.posts, postData]
            }
        ))
        navigate('/myposts')
    }

    return (
        <>
            <Header />
            <div className="bg-[#cccccc] min-h-screen content-center">
                <div className="max-w-96 m-auto p-2">
                    <h1 className="text-3xl">Create Post</h1>
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
                        <select name="category" onChange={handleChange} value={postData.category} className="w-full p-2 my-4 rounded-md" required>
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
                        <input className="mt-4 block" type="file" name="" id="" />
                        <button className="text-white bg-black p-2 rounded-md mt-4" type="submit">Create</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CreateBlog;