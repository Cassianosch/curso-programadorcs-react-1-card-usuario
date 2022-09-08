import React from "react";
import "./estilo.scss";

const Card = () => {
  return (
    <div className="conteudo">
      <article className="card">
        <section className="cabecalho"></section>
        <section className="corpo">
          <img
            src="https://avatars.githubusercontent.com/u/28737079?v=4"
            alt="Imagem programador.cs"
          />
          <h2>Cassiano S</h2>
          <p>Desenvolvedor Front-end</p>
          <section className="redes__sociais">
            <a href="https://instagram.com/programador.cs">
              <img
                src="https://img.icons8.com/3d-fluency/344/instagram-new.png"
                alt="Logo Instagram"
              />
              instagram.com/programador.cs
            </a>
            <a href="https://github.com/Cassianosch">
              <img
                src="https://img.icons8.com/3d-fluency/344/github.png"
                alt="Logo Github"
              />
              github.com/Cassianosch
            </a>
            <a href="https://www.linkedin.com/in/cassianos">
              <img
                src="https://img.icons8.com/3d-fluency/344/linkedin.png"
                alt="Logo Linkedin"
              />
              linkedin.com/in/cassianos
            </a>
          </section>
        </section>
      </article>
    </div>
  );
};

export default Card;
