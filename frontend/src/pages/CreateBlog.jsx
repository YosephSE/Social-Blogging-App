import React, { useEffect, useState} from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
import api from "../../api/posts"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };
  
const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
];

const CreateBlog = () => {
    const navigate = useNavigate()
    const [postData, setPostData] = useState({
        authorId:"",
        title: "",
        category: "",
        image:"",
        content: "",
    })

    function handleChange(event){
        const {name, value} = event.target
        setPostData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
  
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
        setPostData(prevData => ({
            ...prevData,
            image: preview
        }))
    }, [preview])

    function markDownChange(text){
        setPostData(prevData => ({
            ...prevData,
            content: text
        }))
    }
    
    const sumbit = async (event) => {
        event.preventDefault();
        try{
            await api.post("/", postData)
            navigate('/myposts')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Chatbot />
            <div className="content-center flex-grow">
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
                        <ReactQuill
                            modules={modules}
                            formats={formats}
                            value={postData.content}
                            onChange={markDownChange}
                            className="bg-white"
                            required
                        />
                        {postData.image && <img src={postData.image} alt="Post Image" className="w-full my-5"/>}
                        <input className="mt-4 block"type="file" accept="image/*" id = "Image-input" onChange={handleImageChange}/>
                        <button className="text-white bg-black p-2 rounded-md mt-4" type="submit">Create</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default CreateBlog;