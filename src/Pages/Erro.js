 import React from "react";
import "./erro.css";
import { Link } from "react-router-dom";
import erroImg from "../img/erro404.jpg"

export default function index() {
  return (
    <div className="container">
      <img src={erroImg} alt="Erro Página não encontrada"></img>   
      <Link to={"/"} className="waves-effect purple darken-4 btn">Voltar</Link>
    </div>
  );
}