import React, { useState } from "react";
import { usegetUserId } from "./customHook";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const CreateBlogs = () => {
  const userID = usegetUserId();

  const [cookie, setcookie] = useCookies(["access_token"]);


const [title, settitle] = useState("")
const [imageUrl, setimageUrl] = useState("")
const [desc, setdesc] = useState("")
const [userOwner, setuserOwner] = useState(userID)

  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://blogapi-ulcq.onrender.com/postblog",
        { title,imageUrl,desc,userOwner },
        { headers: { authorization: cookie.access_token } }
      );
      console.log(resp);
      alert("post created successfully");
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Create your Post :</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={title}
          type="text"
          onChange={(e)=>settitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="imageUrl">Add Image in URL</label>
        <input
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          type="text"
          onChange={(e)=>setimageUrl(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="desc">Description</label>
        <input
          id="desc"
          name="desc"
          value={desc}
          type="text"
          onChange={(e)=>setdesc(e.target.value)}
        />
        <br />
        <br />
        <button>Create</button>
      </form>
    </>
  );
};

export default CreateBlogs;
