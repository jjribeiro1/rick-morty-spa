import "./ReadById.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Api } from "Api/Api";

function ReadById() {
  const { id } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    imageUrl: "",
    status: "",
    origem: "",
  });

  async function getCharacterById() {
    const response = await Api.GetRequest(Api.readByIdUrl(id));
    setCharacter(response.data.character);
  }

  useEffect(() => {
    getCharacterById();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="page">
      <div className="card_id_container">
        <h2 className="card_id_title">{character?.name}</h2>
        <img className="card_id_img" src={character?.imageUrl} alt="" />
        <p className="card_id_details">Status: {character?.status}</p>
        <p className="card_id_details">Origem: {character?.origem}</p>
        <div className="card_id_buttons_container">
          <Link to={"/"}>
            <button className="card_id_button">Voltar</button>
          </Link>
          <Link to={`/update/${id}`}>
            <button className="card_id_button">Editar</button>
          </Link>
          <Link to={`/delete/${id}`}>
            <button className="card_id_button">Deletar</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReadById;
