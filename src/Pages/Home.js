import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../Services/api";
import "./home.css";

export default function Home() {
  const [blog, setBlog] = useState(undefined);

  async function loadBlogs() {
    const res = await api.get();
    const data = res.data;
    setBlog(data);
  }
  useEffect(() => {
    if (!blog) {
      loadBlogs();
    }
  });

  if (!blog) {
    return <div>Carregando...</div>;
  }
  return (
    <div className="container" >
      {blog.map((b, i) => {
        return (
          <div className="listaBlogs" key={"BLOG_" + b.id}>
            <article>
              <strong>{b.titulo}</strong>
              <div>
                <h4>Categoria: {b.categoria}</h4>
              </div>
              <img src={b.capa} alt={b.titulo} />
              <span>{b.subtitulo}</span>
              <Link to={`/blog/${b.id}`}>Ver Blog</Link>
            </article>
          </div>
        );
      })}
    </div>
  );
}
