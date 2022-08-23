import "./Form.css";
import { Link } from "react-router-dom";

function Form({ handleChange, handleSubmit, defaultValue }) {
  return (
    <>
      <div id="form">
        <form className="form_container" onSubmit={(e) => handleSubmit(e)}>
          <label className="form_label" htmlFor="name">Nome</label>
          <input
            type="text"
            className="form_input"
            id="name"
            name="name"
            required
            onChange={(e) => handleChange(e)}
            defaultValue={defaultValue?.name}
          />

          <label className="form_label" htmlFor="imageUrl">Url da imagem</label>
          <input
            type="text"
            className="form_input"
            id="imageUrl"
            name="imageUrl"
            required
            onChange={(e) => handleChange(e)}
            defaultValue={defaultValue?.imageUrl}
          />

          <label className="form_label" htmlFor="status">Status</label>
          <input
            type="text"
            className="form_input"
            id="status"
            name="status"
            required
            onChange={(e) => handleChange(e)}
            defaultValue={defaultValue?.status}
          />

          <label className="form_label" htmlFor="origem">Origem</label>
          <input
            type="text"
            className="form_input"
            id="origem"
            name="origem"
            required
            onChange={(e) => handleChange(e)}
            defaultValue={defaultValue?.origem}
          />

          <div className="form_buttons_container">
            <button className="form_button_create" type="submit">Cadastrar</button>
            <Link to="/">
              <button className="form_button_create" type="button">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
