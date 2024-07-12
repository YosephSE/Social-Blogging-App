import React, { useEffect, useState } from "react";
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde-all.css';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


const CreateBlog = (props) => {
    const navigate = useNavigate()
    const [postData, setPostData] = useState({
        title: "",
        category: "",
        body: ""
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

    function sumbit(){
        navigate('/myposts')
    }
    
    return (
        <>
            <Header />
            <div className="bg-[#cccccc] min-h-screen content-center">
                <div className="max-w-96 m-auto p-2">
                    <h1 className="text-3xl">Create Post</h1>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="block p-2 w-full rounded-md mt-4"
                        onChange={handleChange}
                        name = "title"
                        value={props.data[0].title}
                    />
                    <select name="category" onChange={handleChange} value={props.data[0].category} className="w-full p-2 my-4 rounded-md">
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
                        value={props.data[0].body}
                        minPreviewHeight={20}
                        minEditorHeight={20}
                        heightUnits="vh"
                        disablePreview
                        onChange={markDownChange}
                    />
                    <input className="mt-4 block"type="file" name="" id="" />
                    <button className="text-white bg-black p-2 rounded-md mt-4" onClick={sumbit}>Create</button>
                </div>
            </div>
        </>
    )
}
export default CreateBlog;