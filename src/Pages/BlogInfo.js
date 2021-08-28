import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./blogInfo.css";
import api from "../Services/api";


export default function BlogInfo() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  const loadBlogs = async () => {
    const res = await api.get("/rn-api/?api=posts/");
    const data = res.data
    const fillte = data.filter(b => b.id === id)
    console.log(fillte)
    return data
  };
  useEffect(() => {
    
    loadBlogs()
  }, []);

  
  return (
    <div className="blog-info">
      <h1>{blog.titulo}</h1>
      <img src={blog.capa} alt={blog.titulo} />
      <h3>Teste</h3>
      {blog.subtitulo}
      <div className="botoes">
        <button> Salvar </button>
      </div>
    </div>
  );
}