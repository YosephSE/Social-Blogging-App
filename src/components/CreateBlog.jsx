import React, { useEffect, useState } from "react";
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde-all.css';
import Showdown from "showdown"

export default function CreateBlog(){
    const [postData, setPostData] = useState({
        title: "",
        category: "",
        body: ""
    })
    const [trigger, setTrigger] = useState(false)

    useEffect(() => (
        localStorage.setItem("post", JSON.stringify(postData))
    ),[trigger])

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
        setTrigger(true)
    }
    
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <div className="bg-[#cccccc] p-2 min-h-screen content-center">
            <h1 className="text-3xl">Create Post</h1>
            <input 
                type="text" 
                placeholder="Title" 
                className="block p-2 w-full rounded-md mt-4"
                onChange={handleChange}
                name = "title"
                value={postData.title}
            />
            <select name="category" onChange={handleChange} value={postData.category} className="w-full p-2 my-4 rounded-md">
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
            <input className="mt-4"type="file" name="" id="" />
            <button className="text-white bg-black p-2 rounded-md mt-4" onClick={sumbit}>Create</button>
        </div>
    )
}