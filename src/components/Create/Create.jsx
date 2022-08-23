import "./Create.css";
import Form from "components/Form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "Api/Api";

function Create() {
  let navigate = useNavigate();
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    imageUrl: "",
    status: "",
    origem: "",
  });

  function handleChange(e) {
    setNewCharacter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    Api.PostRequest(Api.createUrl(), newCharacter);
    navigate("/");
  }

  return (
    <section className="page_form">
      <h1 className="form_title">Novo Personagem</h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </section>
  );
}

export default Create;
