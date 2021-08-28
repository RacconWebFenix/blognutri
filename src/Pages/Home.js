import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../Services/api";
import "./home.css";

export default function Home() {
  const [blog, setBlog] = useState([{}]);
  
 
 
  // const filterBlogs = (id) => {
  //   const teste = blog
  //   const blogId = teste.filter(b => b.id === id)
  //   console.log(blogId)
  // }
 
  useEffect(() => {
    async function loadBlogs() {
      const res = await api.get("/rn-api/?api=posts/")
      setBlog(res.data)
    }
    loadBlogs()
  }, [blog])

  return (
    <div className="container">
      {blog.map((b) => {
        return (
          <div className="listaBlogs"  key={b.id}>
            <article>
              <strong>{b.titulo}</strong>
              <div>
                <h4>Categoria: {b.categoria}</h4>
              </div>
              <img src={b.capa} alt={b.titulo} />
              <span>{b.subtitulo}</span>
              <Link to={`/blog/${b.id}`}>Teste</Link>
              {/* <button onClick={() => filterBlogs(b.id)}>teste </button> */}
            </article>
          </div>
        );
      })}
    </div>
  );
}
