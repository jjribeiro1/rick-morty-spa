import "./Delete.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Api } from "Api/Api";
import ItemCard from "components/ItemCard/ItemCard";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  async function deleteCharacter() {
    Api.DeleteRequest(Api.deleteUrl(id));
    navigate("/");
  }

  useEffect(() => {
    getCharacterById();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="page_delete">
      <h2 className="delete_title">Tem certeza que deseja excluir?</h2>
      <ItemCard character={character} />
      <div className="delete_buttons">
        <button
          type="button"
          className="button_delete"
          onClick={deleteCharacter}
        >
          Deletar
        </button>
        <button className="button_delete" onClick={() => navigate(`/find/${id}`)}>
          Cancelar
        </button>
      </div>
    </section>
  );
}

export default Delete;
