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
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  }

  function handleDelete(id) {
    toast.error("Blog Excluido com sucesso");
    const filtredBlogs = blogF.filter((b) => b.id !== id);
    setBlogF(filtredBlogs);
    localStorage.setItem("blogs", JSON.stringify(filtredBlogs));
  }

  console.log(blogF);
  return (
    <>
      <table className=" centered">
        <thead>
          <tr>
            <th colSpan="3">Blogs Favoritos</th>
          </tr>
        </thead>
        {blogF.map((b) => {
          return (
            <tbody>
              <tr key={b.id}>
                <td>{b.titulo}</td>
                <td>
                  <Link
                    to={`/blog/${b.id}`}
                    className="waves-effect waves-light btn"
                  >
                    Ver Blog
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(b.id)}
                    className="waves-effect red darken-2
 btn"
                  >
                    Excluir Blog
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
