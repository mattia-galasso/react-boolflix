import Card from "./Card";
import Loading from "./Loading";

export default function Cards({ elements, isLoading, type }) {
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
          <Card element={element} key={element.id} type={type} />
        ))}
      </div>
    </>
  );
}
