import LanguageFlag from "./LanguageFlag";
import VoteRate from "./VoteRate";

export default function Card({ elements, loading }) {
  /* NULL POSTER IMAGE */
  const posterImage = (path) => {
    if (path === null) return "./poster_null.png";
    else return "https://image.tmdb.org/t/p/w342" + path;
  };

  return (
    <>
      <div className="cardsBox">
        {elements.map((element) => (
          <div className="cardElement">
            <img
              className="posterImage"
              src={posterImage(element.poster_path)}
              alt={element.title || element.name}
            />
            <ul key={element.id}>
              <li>
                <p className="cardTitle">Title:</p>{" "}
                {element.title || element.name}
              </li>
              <li>
                <p className="cardTitle">Original Title:</p>{" "}
                {element.original_title || element.original_name}
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
