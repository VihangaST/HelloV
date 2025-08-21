import Card from "./Card";
function Grid() {
  const cards = ["A", "B", "C", "D", "E"];

  return (
    <>
      <div className="container text-center">
        <dv className="row">
          {cards.map((card, idx) => (
            <div className="col" key={card}>
              <Card carouselId={`carousel-${idx}`} />
            </div>
          ))}
        </dv>
      </div>
    </>
  );
}

export default Grid;
