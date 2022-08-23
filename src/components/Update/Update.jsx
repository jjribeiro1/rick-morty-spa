import "./Update.css";
import Form from "components/Form/Form";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Api } from "Api/Api";

function Update() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [updatedCharacter, setUpdatedCharacter] = useState({
    name: "",
    imageUrl: "",
    status: "",
    origem: "",
  });

  async function getCharacterById() {
    const response = await Api.GetRequest(Api.readByIdUrl(id));
    const character = response.data.character;
    setUpdatedCharacter(character);
  }

  function handleSubmit(e) {
    e.preventDefault();
    Api.PutRequest(Api.updateUrl(id), updatedCharacter);
    navigate(`/find/${id}`);
  }

  function handleChange(e) {
    e.preventDefault();
    setUpdatedCharacter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  useEffect(() => {
    getCharacterById();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="page_form">
      <h1 className="form_title">Atualizar Personagem</h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        defaultValue={updatedCharacter}
      />
    </section>
  );
}

export default Update;
