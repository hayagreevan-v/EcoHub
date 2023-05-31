import React, { useState } from "react";
//import avatar from '../../assets/images/profile.png'
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
//const axios= require('axios')
const url=" http://localhost:3001/feedback"



function Feedback() {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [price, setPrice] = useState('');
    const [postImage, setPostImage]=useState({myfile:""})
    const navigate = useNavigate();
    const createPost=async(postData)=>{
        try{
            //await axios.post(url,newImage)
            await axios.post(url, postData);
            
        }catch(error){
            console.log(error)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const postData = {
            name,
            review,
            price,
            myfile: postImage.myfile,
          };
        createPost(postData);
        console.log("Uploaded");
        alert("Submitted");
        navigate('/');
    }

    const handleFileUpload= async(e)=>{
        const file=e.target.files[0];
        const base64=await convertToBase64(file);
        //console.log(base64)
        setPostImage({...postImage,myfile:base64})

    }

    return (
        <div className="bg-gray-800 py-8">
  <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={postImage.myfile} alt="Image"/>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Upload an image</div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mt-4">
            <input
              type="file"
              label="Image"
              name="myFile"
              id='file-upload'
              accept='.jpeg,.png,.jpg'
              onChange={(e)=>handleFileUpload(e)}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700">Product Description</label>
            <div className="mt-1">
              <textarea
                id="review"
                name="review"
                rows="3"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
          
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
            <div className="mt-1">
              <input
                type="number"
                min="1"
                max="4000000"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}


function convertToBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader= new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        };
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}

export default Feedback;