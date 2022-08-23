import "./ReadAll.css";
import { useState, useEffect, useRef } from "react";
import { Api } from "Api/Api";
import ItemCard from "components/ItemCard/ItemCard";
import Header from "components/Header/Header";

function ReadAll() {
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageEnd = useRef();

  async function getCharacters() {
    const response = await Api.GetRequest(Api.readAllUrl(offset));
    setCharacters(() => [...characters, ...response.data.characters]);
    setLoading(true);
  }

  useEffect(() => {
    getCharacters();

    // eslint-disable-next-line
  }, [offset]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setOffset((prevOffset) => prevOffset + 1);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <>
      <Header />
      <section className="page">
        {characters?.map((character) => (
          <ItemCard key={character._id} character={character} />
        ))}
      </section>
      {loading && (
        <div className="loading" ref={pageEnd}>
          LOADING
        </div>
      )}
    </>
  );
}

export default ReadAll;
