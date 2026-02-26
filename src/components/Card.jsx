import LanguageFlag from "./LanguageFlag";
import VoteRate from "./VoteRate";
import Loading from "./Loading";

export default function Card({ elements, isLoading }) {
  /* NULL POSTER IMAGE */
  const posterImage = (path) => {
    if (path === null) return "./poster_null.png";
    else return "https://image.tmdb.org/t/p/w342" + path;
  };

  if (isLoading) {
    return <Loading />;
  }
  if (elements.length === 0) {
    return <h5 className="text-light">Nessun risultato trovato...</h5>;
  }

  return (
    <>
      <div className="cardsBox">
        {elements.map((element, index) => (
          <div className="cardElement" key={index}>
            <img
              className="posterImage"
              src={posterImage(element.poster_path)}
              alt={element.title ?? element.name}
            />
            <ul key={element.id}>
              <li>
                <p className="cardTitle">Title:</p>{" "}
                {element.title ?? element.name}
              </li>
              <li>
                <p className="cardTitle">Original Title:</p>{" "}
                {element.original_title ?? element.original_name}
              </li>
              <VoteRate vote={element.vote_average} />
              <LanguageFlag language={element.original_language} />
              <li>
                <p className="cardTitle">Overview:</p>
                {element.overview}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
