 import React from "react";
import "./erro.css";
import { Link } from "react-router-dom";
import erroImg from "../img/erro404.jpg"

export default function index() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada.</h2>
      <img src={erroImg} alt="Erro Página não encontrada"></img>   
      <Link to={"/"}>Voltar</Link>
    </div>
  );
}