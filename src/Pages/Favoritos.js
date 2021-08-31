import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [blogF, setBlogF] = useState([]);

  useEffect(() => {
    const localBlogs = localStorage.getItem("blogs");
    setBlogF(JSON.parse(localBlogs));
  }, []);

  if (!blogF) {
    return <div>Carregando...</div>;
  }

  function handleDelete(id) {
    toast.error("Blog Excluido com sucesso");
    const filtredBlogs = blogF.filter((b) => b.id !== id);
    setBlogF(filtredBlogs);
    localStorage.setItem("blogs", JSON.stringify(filtredBlogs));
  }

  console.log(blogF);
  return (
    <div>
      <h1>Favoritos</h1>
      {blogF.map((b) => {
        return (
          <div key={b.id}>
            <ul>
              <li>{b.titulo}</li>
              <div>
                <button>
                  <Link to={`/blog/${b.id}`}>Ver Blog</Link>
                </button>
                <button onClick={() => handleDelete(b.id)}>Excluir Blog</button>
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
