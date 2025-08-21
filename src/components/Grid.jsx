import Card from "./Card";
function Grid() {
  const cards = ["A", "B", "C", "D", "E"];

  return (
    <>
      <div className="container text-center">
        <dv className="row">
          {cards.map((card) => (
            <div className="col">
              <Card key={card} />
            </div>
          ))}
        </dv>
      </div>

      {/* <Card /> */}
    </>
  );
}

export default Grid;
