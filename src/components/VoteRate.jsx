/* BOOTSTRAP ICONS */
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function VoteRate({ vote }) {
  /* VOTE STARS */
  const voteStars = (vote) => {
    const stars = [];

    const isVote = Math.ceil(vote / 2);
    for (let i = 1; i <= 5; i++) {
      i <= isVote
        ? stars.push(<i key={i} className="bi bi-star-fill"></i>)
        : stars.push(<i key={i} className="bi bi-star"></i>);
    }
    return stars;
  };
  return (
    <li>
      <p className="cardTitle">Vote:</p>{" "}
      <span className="starsColor">{voteStars(vote)}</span>
    </li>
  );
}
