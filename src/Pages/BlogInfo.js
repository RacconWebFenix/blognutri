import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
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
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  }

  function handleClick() {
    const data = blog;
    const fav = localStorage.getItem("blogs");
    let savedBlogs = JSON.parse(fav) || [];

    if (savedBlogs.find((b) => b.id === data.id)) {
      toast.info("Este blog já esta cadastrado.");
      return;
    } else {
      toast.success("Blog cadastrado com sucesso!");
      savedBlogs.push(data);
      localStorage.setItem("blogs", JSON.stringify(savedBlogs));
    }
  }

  return (
    <div className="container">
      <div className="col-1 center">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={blog.capa} alt={blog.titulo} />
              <span className="card-title blue darken-4">{blog.titulo}</span>
            </div>
            <div className="card-content">
              <h5>Categoria: {blog.categoria}</h5>
              <p>{blog.subtitulo}</p>
            </div>
            <div className="card-action">
              <div className="botoes">
                <button
                  className="waves-effect waves-light blue accent-3 btn"
                  onClick={(e) => handleClick(e)}
                >
                  {" "}
                  Salvar{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
