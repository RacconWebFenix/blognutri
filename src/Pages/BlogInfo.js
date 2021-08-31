import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./blogInfo.css";
import api from "../Services/api";
import { toast } from "react-toastify";

export default function BlogInfo() {
  const { id } = useParams();
  const [blog, setBlog] = useState(undefined);
  const history = useHistory();

  async function loadBlogs() {
    const res = await api.get();
    const data = res.data;
    console.log(data);
    const filterBlog = data.find((b) => b.id === parseInt(id));
    if (!filterBlog) {
      history.replace("/notfound");
      return;
    }
    setBlog(filterBlog);
  }

  useEffect(() => {
    if (!blog) {
      loadBlogs();
    }
  });

  if (!blog) {
    return <div>Carregando...</div>;
  }

  function handleClick() {
    const data = blog;
    const fav = localStorage.getItem("blogs");
    let savedBlogs = JSON.parse(fav) || [];

    if (savedBlogs.find((b) => b.id === data.id)) {
      toast.info("Este blog já esta cadastrado.");
      return;
    } else {
      toast.success('Blog cadastrado com sucesso!')
      savedBlogs.push(data);
      localStorage.setItem("blogs", JSON.stringify(savedBlogs));
    }
  }

  return (
    <div className="blog-info">
      <img src={blog.capa} alt={blog.titulo} />
      <h3>{blog.titulo}</h3>
      {blog.subtitulo}
      <div className="botoes">
        <button onClick={(e) => handleClick(e)}> Salvar </button>
      </div>
    </div>
  );
}
