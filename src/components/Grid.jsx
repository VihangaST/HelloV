import Card from "./Card";
function Grid(props) {
  console.log(props);
  const cardsList = props.cards || [];

  return (
    <>
      <h1>{props.title}</h1>
      <div className="container text-center">
        <div className="row">
          {cardsList.map((card, idx) => (
            <div className="col p-2" key={`${props.name}-${idx}`}>
              <Card carouselId={`carousel-${props.name}-${idx}`} card={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid;
