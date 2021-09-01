import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../Services/api";

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
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  }
  return (
    <div className="container">
      {blog.map((b, i) => {
        return (
          <div className="card" key={"BLOG_" + b.id}>
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={b.capa} alt={b.titulo} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {b.titulo}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <Link
                  to={`/blog/${b.id}`}
                  className="waves-effect waves-light blue accent-3 btn"
                >
                  Ver Blog
                </Link>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {b.categoria}
                <i class="material-icons right">close</i>
              </span>
              <p>
                <span>{b.subtitulo}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
