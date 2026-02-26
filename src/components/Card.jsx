import axios from "axios";
import LanguageFlag from "./LanguageFlag";
import VoteRate from "./VoteRate";
import { useState } from "react";

const baseURL = new URL("https://api.themoviedb.org/3/");
const APIKey = "e1bf65829171b3ed59447bd3240e2bcf";

export default function Card({ element, type }) {
  const [castList, setCastList] = useState([]);
  const [isLoadingCast, setIsLoadingCast] = useState(true);

  /* POSTER NULL IMAGE  */
  const posterImage = (path) => {
    if (path === null) return "./poster_null.png";
    else return "https://image.tmdb.org/t/p/w342" + path;
  };

  /* CARD ACTOR/ACTRESS CALL */
  function cardCredits(movieID) {
    setIsLoadingCast(true);
    /* URL COMPOSITION */
    const creditsURL = new URL(type + "/" + movieID + "/credits", baseURL);
    creditsURL.searchParams.set("api_key", APIKey);
    creditsURL.searchParams.set("language", "it-IT");

    /* AXIOS CALL */
    axios.get(creditsURL.href).then((res) => {
      const cast = res.data.cast;
      setCastList(cast.slice(0, 6));
      setIsLoadingCast(false);
    });
  }

  return (
    <>
      <div
        className="cardElement"
        onMouseEnter={(e) => {
          cardCredits(element.id);
        }}
      >
        <img
          className="posterImage"
          src={posterImage(element.poster_path)}
          alt={element.title ?? element.name}
        />
        <ul>
          <li>
            <p className="cardTitle">Title:</p> {element.title ?? element.name}
          </li>
          <li>
            <p className="cardTitle">Original Title:</p>
            {element.original_title ?? element.original_name}
          </li>
          <li>
            <p className="cardTitle">Cast:</p>
            {isLoadingCast === true
              ? "Loading..."
              : castList.map((actor, index) =>
                  index < castList.length - 1 ? actor.name + ", " : actor.name,
                )}
          </li>
          <li>
            <p className="cardTitle">Genre:</p>
          </li>
          <VoteRate vote={element.vote_average} />
          <LanguageFlag language={element.original_language} />
          <li>
            <p className="cardTitle">Overview:</p>
            {element.overview}
          </li>
        </ul>
      </div>
    </>
  );
}
