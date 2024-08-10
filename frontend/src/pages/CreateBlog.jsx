import React, { useEffect, useState} from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
import api from "../../api/posts"
import LoadingPage from "../components/Loading"
import post from "../assets/post.png"
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
    const [imageUploaded, setImageUploaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
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
    const [preview, setPreview] = useState(post);
  
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
        setIsLoading(true)
        event.preventDefault();
        try{
            await api.post("/", postData)
            setIsLoading(false)
            setImageUploaded(true)
            navigate('/myposts')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Chatbot />
            {
                isLoading?
                <LoadingPage />
                :
                <div className="content-center flex-grow">
                <div className="max-w-96 mx-auto my-10 p-2">
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
                        <select name="category" onChange={handleChange} value={postData.category} className="w-full p-2 my-4 rounded-md">
                            <option value="" disabled>Choose Category</option>
                            <option value="Technology">Technology</option>
                            <option value="Art">Art</option>
                            <option value="Education">Education</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Music">Music</option>
                            <option value="Mindfulness">Mindfulness</option>
                            <option value="Uncategorized">Uncatagorized</option>
                        </select>
                        <ReactQuill
                            modules={modules}
                            formats={formats}
                            value={postData.content}
                            onChange={markDownChange}
                            className="bg-white h-64"
                            required
                        />
                        <img src={preview} alt="Post Image" className="w-full max-h-64 my-5"/>
                        {!imageUploaded && (
                        <label className="block my-5">
                            <input
                            type="file"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-slate-500
                                file:py-2 file:px-4
                                file:rounded-xl file:border-0
                                file:text-base file:font-semibold
                                file:bg-slate-50 file:text-black"
                            required
                            />
                        </label>
                )}
                            <button className="text-white bg-black p-2 rounded-md mt-4" type="submit">Create Post</button>
                        </form>
                    </div>
                </div>
            }
            <Footer />
        </div>
    )
}
export default CreateBlog;